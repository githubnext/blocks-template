import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import { useEffect, useRef, useState } from "react";
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
  contents?: string;
  tree?: RepoFiles;
  metadata?: any;
  context: FileContext | FolderContext;
}
interface BundleCode {
  name: string;
  content: string;
}
export const ProductionBlock = (props: ProductionBlockProps) => {
  const { block, contents, tree, metadata = {}, context } = props;

  const [bundleCode, setBundleCode] = useState<BundleCode[]>([]);
  const id = useRef(uniqueId("sandboxed-block-"));

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
      if (event.data.id === id.current) {
        const { data, origin, source } = event;

        // handle messages from the sandboxed block
        const originRegex = new RegExp(
          /^https:\/\/\d{1,4}-\d{1,4}-\d{1,4}-sandpack\.codesandbox\.io$/
        );
        if (!source || !originRegex.test(origin)) return;
        const window = source as Window;
        if (data.type === "github-data--request") {
          onRequestGitHubData(data.path, data.params)
            .then((res) => {
              window.postMessage(
                {
                  type: "github-data--response",
                  id: id.current,
                  data: res,
                },
                origin
              );
            })
            .catch((e) => {
              window.postMessage(
                {
                  type: "github-data--response",
                  id: id.current,
                  // Error is not always serializable
                  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#things_that_dont_work_with_structured_clone
                  error: e instanceof Error ? e.message : e,
                },
                origin
              );
            });
        }
      }
    };
    addEventListener("message", onMessage);
    return () => removeEventListener("message", onMessage);
  }, []);

  if (!bundleCode.length) {
    return <div>No bundle found</div>;
  }

  const files = bundleCodesandboxFiles({
    block,
    bundleCode,
    context,
    id: id.current,
    contents,
    tree,
    metadata,
  });

  if (!bundleCode) return null;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <SandpackProvider
        externalResources={["https://cdn.tailwindcss.com"]}
        template="react"
        customSetup={{
          dependencies: {},
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
