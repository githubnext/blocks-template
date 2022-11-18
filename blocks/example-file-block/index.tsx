import {
  Block,
  BlocksRepo,
  FileBlockProps,
  FileData,
  FolderData,
  getLanguageFromFilename,
} from "@githubnext/blocks";
import { Box, Button } from "@primer/react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BlockComponent(props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          File: {context.path} {language}
        </Box>
        <Box p={4}>
          <p>Metadata example: this button has been clicked:</p>
          <Button
            onClick={() =>
              onUpdateMetadata({ number: (metadata.number || 0) + 1 })
            }
          >
            {metadata.number || 0} times
          </Button>
          <pre className="mt-3 p-3">{content}</pre>
        </Box>
      </Box>
    </Box>
  );
}

type BlocksAPI = {
  onUpdateMetadata: (_: any) => void;
  onNavigateToPath: (_: string) => void;
  onRequestUpdateContent: (_: string) => void;
  onUpdateContent: (_: string) => void;
  onRequestGitHubData: (
    path: string,
    params?: Record<string, any>
  ) => Promise<any>;
  onRequestBlocksRepos: (params?: {
    path?: string;
    searchTerm?: string;
    repoUrl?: string;
    type?: "file" | "folder";
  }) => Promise<BlocksRepo[]>;
  onStoreGet: (key: string) => Promise<any>;
  onStoreSet: (key: string, value: any) => Promise<void>;
};

type Props = {
  block: Block;
  metadata: any;
} & (FileData | FolderData);

function setProps(props: Props, blocksAPI: BlocksAPI) {
  let root: ReactDOM.Root | undefined;
  let component = <BlockComponent {...props} {...blocksAPI} />;
  if (root) {
    root.render(component);
  } else {
    root = ReactDOM.createRoot(document.getElementById("root")!);
    root.render(component);
  }
}

export default setProps;
