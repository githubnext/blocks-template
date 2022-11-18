import { useEffect, useState } from "react";
import type {
  BlocksRepo,
  CommonBlockProps,
  FileBlockProps,
  FolderBlockProps,
} from "@utils";

export const callbackFunctions: Pick<
  CommonBlockProps,
  | "onUpdateMetadata"
  | "onNavigateToPath"
  | "onUpdateContent"
  | "onRequestGitHubData"
  | "onStoreGet"
  | "onStoreSet"
  | "onRequestBlocksRepos"
> = {
  onUpdateMetadata: (metadata) => makeRequest("onUpdateMetadata", { metadata }),
  onNavigateToPath: (path) => makeRequest("onNavigateToPath", { path }),
  onUpdateContent: (content) => makeRequest("onUpdateContent", { content }),
  onRequestGitHubData: (path, params) =>
    makeRequest("onRequestGitHubData", { path, params }),
  onStoreGet: (key) => makeRequest("onStoreGet", { key }),
  onStoreSet: (key, value) =>
    makeRequest("onStoreSet", { key, value }) as Promise<void>,
  onRequestBlocksRepos: (params) =>
    makeRequest("onRequestBlocksRepos", { params }) as Promise<BlocksRepo[]>,
};

export const callbackFunctionsInternal = {
  ...callbackFunctions,
  private__onFetchInternalEndpoint: (path: string, params: any) =>
    makeRequest("private__onFetchInternalEndpoint", { path, params }),
};

export const useHandleCallbacks = (origin: string) => {
  useEvent("message", (event: MessageEvent) => {
    const { data } = event;
    if (origin !== "*" && event.origin !== origin) return;
    const request = pendingRequests[data.requestId];
    if (!request) return;

    delete pendingRequests[data.requestId];

    if (data.error) {
      request.reject(data.error);
    } else {
      request.resolve(data.response);
    }
  });
};

export const useEvent = <K extends keyof WindowEventMap>(
  type: K,
  onEvent: (event: WindowEventMap[K]) => void
) => {
  useEffect(() => {
    const onEventInstance = (event: WindowEventMap[K]) => {
      onEvent(event);
    };
    addEventListener(type, onEventInstance);
    return () => removeEventListener(type, onEventInstance);
  }, [type, onEvent]);
};

let uniqueId = 0;
const getUniqueId = () => {
  uniqueId++;
  return uniqueId;
};

export const pendingRequests: Record<
  string,
  { resolve: (value: unknown) => void; reject: (reason?: any) => void }
> = {};
export const makeRequest = (type: string, args: any) => {
  // for responses to this specific request
  const requestId = type + "--" + getUniqueId();

  postMessage(type, args, { requestId });

  // wait for a responding message to return
  return new Promise((resolve, reject) => {
    pendingRequests[requestId] = { resolve, reject };
    const maxDelay = 1000 * 5;
    window.setTimeout(() => {
      delete pendingRequests[requestId];
      reject(new Error("Timeout"));
    }, maxDelay);
  });
};

export const postMessage = (type: string, payload: any, otherArgs = {}) => {
  window.top?.postMessage(
    {
      type,
      payload,
      ...otherArgs,
    },
    "*"
  );
};

export const useIframeParentInterface = (
  origin: string
): [Record<string, any>, (_: FileBlockProps | FolderBlockProps) => void] => {
  const [bundleProps, setBundleProps] = useState<Record<string, any>>({});

  useEvent("message", (event: MessageEvent) => {
    const { data } = event;
    if (origin != "*" && event.origin !== origin) return;
    if (data.type === "setProps") {
      // extend existing props so we can update partial props
      setBundleProps((props) => ({
        ...props,
        ...data.props,
      }));
    }
  });

  const onLoad = () =>
    postMessage("loaded", {}, { hash: window.location.hash });
  useEffect(() => {
    onLoad();
  }, []);
  useEvent("hashchange", () => {
    onLoad();
  });

  return [
    bundleProps,
    (props: FileBlockProps | FolderBlockProps) =>
      setBundleProps((prevProps) => ({ ...prevProps, ...{ props } })),
  ];
};
