import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import {
  FileContext,
  FolderContext,
  RepoFiles,
  bundleCodesandboxFiles,
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
          files: files,
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
