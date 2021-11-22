import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { FileContext, FolderContext, RepoFiles } from "@githubnext/utils";

interface ProductionBlockProps {
  block: {
    id: string;
    type: string;
    title: string;
    description: string;
    entry: string;
    extensions?: string[];
  };
  contents?: string;
  tree?: RepoFiles;
  metadata?: any;
  context: FileContext | FolderContext
}
interface BundleCode {
  name: string;
  content: string;
}
export const ProductionBlock = (props: ProductionBlockProps) => {
  const {
    block,
    contents,
    tree,
    metadata = {},
    context,
  } = props;

  const [bundleCode, setBundleCode] = useState<BundleCode[]>([]);
  const [iframeIsLoaded, setIframeIsLoaded] = useState(false);
  const iframeElement = useRef<HTMLIFrameElement>(null);

  const getContents = async () => {
    const allContent = await import.meta.glob(
      `./../../dist/**`
    )
    const relevantPaths = Object.keys(allContent).filter((d: string) => (
      d.startsWith(`./../../dist/${block.id}`)
    ))
    let relevantContent = []
    for (const path of relevantPaths) {
      const importType = path.endsWith(".css") ? "inline" : "raw"
      const content = await import(
        `${path}?${importType}`
      ).then((d) => d.default)
      relevantContent.push({
        name: path.slice(13),
        content,
      })
    }
    setBundleCode(relevantContent)
  }
  useEffect(() => { getContents() }, [block.entry])

  useEffect(() => {
    if (!bundleCode || !iframeIsLoaded) return
    const iframeWindow = iframeElement.current?.contentWindow
    if (!iframeWindow) return

    iframeWindow.postMessage({
      type: "block-props",
      block, contents, tree, metadata, context, bundleCode
    }, "*")
  }, [bundleCode, contents, tree, metadata, context, iframeIsLoaded])

  if (!bundleCode) return null
  const url = "http://localhost:3000/block-testing"

  return (
    <iframe className="w-full h-full border-none" src={url} title="Block testing" onLoad={() => setIframeIsLoaded(true)} ref={iframeElement}

    />
  )

}