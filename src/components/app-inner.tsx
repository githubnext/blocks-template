import gitUrlParse from "git-url-parse";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FileBlock } from "./file-block";
import { FolderBlock } from "./folder-block";

interface Block {
  id: string;
  type: string;
  title: string;
  description: string;
  entry: string;
  extensions?: string[];
}
export interface AppInnerProps {
  metadata: any;
  doMimicProductionEnvironment: boolean;
  onUpdateMetadata: (metadata: any) => Promise<void>;
  block: Block;
  dependencies: Record<string, string>;
  urlParts: gitUrlParse.GitUrl;
  onReset: () => void;
}

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="p-4" role="alert">
      <div className="bg-red-100 border border-red-600 text-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-red-600">Something went wrong!</p>
            <div className="my-2 overflow-hidden">
              <p className="overflow-auto text-xs text-red-600 font-mono leading-5">
                {error.message}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppInner(props: AppInnerProps) {
  const { onReset, block, ...rest } = props;
  const blockType = block?.type;

  return (
    <ErrorBoundary
      resetKeys={[blockType]}
      onReset={onReset}
      FallbackComponent={ErrorFallback}
    >
      <React.Fragment>
        {blockType === "file" && <FileBlock {...rest} block={block} />}
        {blockType === "folder" && <FolderBlock {...rest} block={block} />}
      </React.Fragment>
    </ErrorBoundary>
  );
}
