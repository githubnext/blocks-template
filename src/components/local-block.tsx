import { useCallback, useEffect, useState } from "react";
// @ts-ignore
import loadable from "@loadable/component";
import { FileContext, FolderContext, RepoFiles } from "@githubnext/utils";
import { getFileContent, getRepoInfo } from "../hooks";

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
  contents?: string;
  tree?: RepoFiles;
  metadata?: any;
  context: FileContext | FolderContext;
}
export const LocalBlock = (props: LocalBlockProps) => {
  const { block, contents, tree, metadata = {}, context } = props;

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
  const onRequestUpdateContent = useCallback((content) => {
    console.log(`Triggered a request to update the file contents`);
    console.log("From:", contents);
    console.log("To:", content);
    window.postMessage(
      {
        type: "update-file",
        content,
      },
      "*"
    );
  }, []);
  const onRequestGitHubData = async (
    type: string,
    config: FileContext | FolderContext,
    id: string
  ) => {
    console.log(`Triggered a request to fetch data from GitHub: ${type}`);
    window.postMessage(
      {
        type: "github-data--request",
        id,
        config,
        requestType: type,
      },
      "*"
    );
    const data = await fetchGitHubData(type, config);
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
    <Block
      context={context}
      content={contents}
      tree={tree}
      metadata={metadata}
      onUpdateMetadata={onUpdateMetadata}
      onNavigateToPath={onNavigateToPath}
      onRequestUpdateContent={onRequestUpdateContent}
      onRequestGitHubData={onRequestGitHubData}
    />
  );
};

const getBlockKey = (block: Block) =>
  `${block?.owner}/${block?.repo}__${block?.id}`.replace(/\//g, "__");
const getMetadataPath = (block: Block, path: string) =>
  `.github/blocks/${block?.type}/${getBlockKey(block)}/${encodeURIComponent(
    path
  )}.json`;
const fetchGitHubData = async (
  type: string,
  config: FileContext | FolderContext
) => {
  if (type === "file-content") {
    const data = await getFileContent({
      owner: config.owner,
      repo: config.repo,
      path: config.path,
      fileRef: "HEAD",
    });
    return data;
  } else if (type === "repo-info") {
    try {
      const res = await getRepoInfo({
        owner: config.owner,
        repo: config.repo,
      });
      return res;
    } catch (e) {
      return {};
    }
  }
};
