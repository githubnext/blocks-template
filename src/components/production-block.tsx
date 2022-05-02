import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import { useEffect, useMemo, useState } from "react";
// @ts-ignore
import {
  FileContext,
  FolderContext,
  RepoFiles,
  bundleCodesandboxFiles,
  onRequestGitHubData,
} from "@githubnext/utils";
import uniqueId from "lodash.uniqueid";

type Block = {
  id: string;
  type: string;
  title: string;
  description: string;
  entry: string;
  extensions?: string[];
};
interface ProductionBlockProps {
  block: Block;
  content?: string;
  tree?: RepoFiles;
  metadata?: any;
  context: FileContext | FolderContext;
}
interface BundleCode {
  name: string;
  content: string;
}
export const ProductionBlock = (props: ProductionBlockProps) => {
  const {
    block,
    content: originalContent,
    tree,
    metadata = {},
    context,
  } = props;
  const [content, setContent] = useState<string>(originalContent || "");

  const [bundleCode, setBundleCode] = useState<BundleCode[]>([]);
  const id = useMemo(() => uniqueId("sandboxed-block-"), []);

  const [sandbox, setSandbox] = useState<Window | null>(null);

  const getContents = async () => {
    const allContent = await import.meta.glob(`./../../dist/**`);
    const relevantPaths = Object.keys(allContent).filter((d: string) =>
      d.startsWith(`./../../dist/${block.id}`)
    );
    let relevantContent = [];
    for (const path of relevantPaths) {
      const importType = path.endsWith(".css") ? "inline" : "raw";
      const content = await import(
        /* @vite-ignore */ `${path}?${importType}`
      ).then((d) => d.default);
      relevantContent.push({
        name: path.slice(13),
        content,
      });
    }
    setBundleCode(relevantContent);
  };
  useEffect(() => {
    getContents();
  }, [block.entry]);

  useEffect(() => {
    const onMessage = async (event: MessageEvent) => {
      if (event.data.id === id) {
        const { data, origin, source } = event;

        // handle messages from the sandboxed block
        const originRegex = new RegExp(
          /^https:\/\/\d{1,4}-\d{1,4}-\d{1,4}-sandpack\.codesandbox\.io$/
        );
        if (!source || !originRegex.test(origin)) return;
        const window = source as Window;

        switch (data.type) {
          case "sandbox-ready":
            setSandbox(window);
            break;

          case "update-file":
            setContent(data.content);
            break;

          case "github-data--request":
            onRequestGitHubData(data.path, data.params)
              .then((res) => {
                window.postMessage(
                  {
                    type: "github-data--response",
                    id,
                    requestId: data.requestId,
                    data: res,
                  },
                  origin
                );
              })
              .catch((e) => {
                window.postMessage(
                  {
                    type: "github-data--response",
                    id,
                    requestId: data.requestId,
                    // Error is not always serializable
                    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#things_that_dont_work_with_structured_clone
                    error: e instanceof Error ? e.message : e,
                  },
                  origin
                );
              });
            break;
        }
      }
    };
    addEventListener("message", onMessage);
    return () => removeEventListener("message", onMessage);
  }, []);

  const files = useMemo(() => {
    if (!bundleCode) return null;
    return bundleCodesandboxFiles({
      block,
      bundleCode,
      id,
    });
  }, [bundleCode, block, id]);

  useEffect(() => {
    if (!sandbox) return;

    // the file / folder contents may still be loading
    if (
      (block.type === "file" && !content) ||
      (block.type === "folder" && !tree)
    )
      return;

    const props = {
      block,
      content,
      originalContent,
      isEditable: true,
      tree,
      metadata,
      context,
    };
    sandbox.postMessage({ type: "set-props", id, props }, "*");
  }, [sandbox, block, content, originalContent, tree, metadata, context, id]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <SandpackProvider
        template="react"
        customSetup={{
          dependencies: {
            "styled-components": "^5.3.3",
            "@primer/react": "^35.2.0",
          },
          files,
        }}
        autorun
      >
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </SandpackProvider>
    </div>
  );
};
