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
export const ProductionBlock = (props: ProductionBlockProps) => {
  const {
    block,
    contents,
    tree,
    metadata = {},
    context,
  } = props;

  const [bundleCode, setBundleCode] = useState("");
  const [iframeIsLoaded, setIframeIsLoaded] = useState(false);
  const iframeElement = useRef<HTMLIFrameElement>(null);

  const getContents = async () => {
    const content = await import(
      `../../../dist/${block.id}/index.js?raw`
    ).then((m) => m.default);
    setBundleCode(content)
  }
  useEffect(() => { getContents() }, [block.entry])

  const onUpdateMetadata = (newMetadata: any) => {
    window.postMessage({
      type: "update-metadata",
      context,
      metadata: newMetadata,
    }, "*")
  }

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