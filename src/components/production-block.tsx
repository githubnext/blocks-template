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
  const sandpackWrapper = useRef<HTMLDivElement>(null);
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
        const { data, origin } = event;

        // handle messages from the sandboxed block
        const originRegex = new RegExp(
          /^https:\/\/\d{1,4}-\d{1,4}-\d{1,4}-sandpack\.codesandbox\.io$/
        );
        if (!originRegex.test(origin)) return;
        if (data.type === "github-data--request") {
          const res = await onRequestGitHubData(
            data.path,
            data.params,
            data.id
          );
          const iframe = sandpackWrapper.current?.querySelector("iframe");
          if (!iframe) return;
          iframe.contentWindow?.postMessage(
            {
              type: "github-data--response",
              id: id.current,
              data: res,
            },
            "*"
          );
        }
        return data;
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

  const filesWithConfig = {
    ...files,
    "/sandbox.config.json": JSON.stringify({ infiniteLoopProtection: false }),
  };

  return (
    <div
      ref={sandpackWrapper}
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
          files: filesWithConfig,
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
