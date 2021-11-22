import { useEffect, useState } from "react";
// @ts-ignore
import loadable from "@loadable/component";
import { FileContext, FolderContext, RepoFiles } from "@githubnext/utils";

interface LocalBlockProps {
  block: {
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
export const LocalBlock = (props: LocalBlockProps) => {
  const {
    block,
    contents,
    tree,
    metadata = {},
    context,
  } = props;

  const [Block, setBlock] = useState<React.ComponentType<any> | null>(null);

  const getContents = async () => {
    const content = await loadable(() => import(
      `../../..${block.entry}`
    ))
    setBlock(content)
  }
  useEffect(() => { getContents() }, [block.entry])

  const onUpdateMetadata = (newMetadata: any) => {
    window.postMessage({
      type: "update-metadata",
      context,
      metadata: newMetadata,
    }, "*")
  }

  if (!Block) return null
  return (
    <Block
      context={context}
      content={contents}
      tree={tree}
      metadata={metadata}
      onUpdateMetadata={onUpdateMetadata}
    />
  )

}