import { useEffect, useState } from "react";
// @ts-ignore
import loadable from "@loadable/component";
import { FileContext, FolderContext, RepoFiles } from "@githubnext/utils";

interface LocalViewerProps {
  viewer: {
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
export const LocalViewer = (props: LocalViewerProps) => {
  const {
    viewer,
    contents,
    tree,
    metadata = {},
    context,
  } = props;

  const [Viewer, setViewer] = useState<React.ComponentType<any> | null>(null);

  const getContents = async () => {
    const content = await loadable(() => import(
      `../../..${viewer.entry}`
    ).then(module => module.Viewer))
    setViewer(content)
  }
  useEffect(() => { getContents() }, [viewer.entry])

  const onUpdateMetadata = (newMetadata: any) => {
    window.dispatchEvent(new CustomEvent("update-metadata", { detail: newMetadata }))
  }

  if (!Viewer) return null
  return (
    <Viewer
      context={context}
      content={contents}
      tree={tree}
      metadata={metadata}
      onUpdateMetadata={onUpdateMetadata}
    />
  )

}