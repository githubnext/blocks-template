import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import loadable from "@loadable/component";
import {
  FileContext,
  FolderContext,
  RepoFiles,
  onRequestGitHubData as onRequestGitHubDataFetch,
} from "@githubnext/utils";
import { BaseStyles, ThemeProvider } from "@primer/react";

interface Block {
  id: string;
  type: string;
  title: string;
  description: string;
  entry: string;
  extensions?: string[];
  owner?: string;
  repo?: string;
}
interface LocalBlockProps {
  block: Block;
  content?: string;
  tree?: RepoFiles;
  metadata?: any;
  context: FileContext | FolderContext;
}
export const LocalBlock = (props: LocalBlockProps) => {
  const {
    block,
    content: originalContent,
    tree,
    metadata = {},
    context,
  } = props;
  const [content, setContent] = useState<string>(originalContent || "");

  const [Block, setBlock] = useState<React.ComponentType<any> | null>(null);

  const getContents = async () => {
    const content = await loadable(() => import(`../../..${block.entry}`));
    setBlock(content);
  };
  useEffect(() => {
    getContents();
  }, [block.entry]);

  const onUpdateMetadata = (newMetadata: any) => {
    console.log(`Triggered a request to update the file metadata`);
    console.log("From:", metadata);
    console.log("To:", newMetadata);
    window.postMessage(
      {
        type: "update-metadata",
        metadata: newMetadata,
      },
      "*"
    );
  };
  const onNavigateToPath = useCallback((path) => {
    console.log(`Triggered a navigation to the file/folder: ${path}`);
    window.postMessage(
      {
        type: "navigate-to-path",
        path,
      },
      "*"
    );
  }, []);
  const onRequestGitHubData = async (
    path: string,
    params: Record<string, any> = {},
    id: string = ""
  ) => {
    console.log(`Triggered a request to fetch data from GitHub: ${path}`);
    window.postMessage(
      {
        type: "github-data--request",
        id,
        path,
        params,
      },
      "*"
    );
    const data = await onRequestGitHubDataFetch(path, params);
    window.postMessage(
      {
        type: "github-data--response",
        id,
        data,
      },
      "*"
    );
    return data;
  };

  if (!Block) return null;
  return (
    <ThemeProvider>
      <BaseStyles>
        <Block
          context={context}
          content={content}
          originalContent={originalContent}
          isEditable={true}
          tree={tree}
          metadata={metadata}
          onUpdateMetadata={onUpdateMetadata}
          onNavigateToPath={onNavigateToPath}
          onUpdateContent={setContent}
          onRequestGitHubData={onRequestGitHubData}
        />
      </BaseStyles>
    </ThemeProvider>
  );
};
