import gitUrlParse from "git-url-parse";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CallbackNotifications } from "./callback-notifications";
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
    <div style={{
      padding: '10vh 1rem',
      textAlign: 'center',
      backgroundColor: '#FEF2F2',
      color: '#DB2725',
      height: '100%',
      fontSize: '1.2em',
    }} role="alert">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          flex: 1
        }}>
          <p>Something went wrong!</p>
          <div style={{
            margin: '1rem 0',
            background: '#fff',
            maxHeight: '20rem',
            overflow: 'auto',
            maxWidth: '90vw',
          }}>
            <p style={{
              fontFamily: 'monospace',
              fontSize: '1em',
              lineHeight: '1.5em',
            }}>
              {error.message}
            </p>
          </div>
        </div>
        <div style={{
          flex: "none"
        }}>
          <button
            style={{
              appearance: 'none',
              backgroundColor: '#DB2725',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.9rem 1.6rem',
              fontSize: '0.8em',
              lineHeight: '1em',
              borderRadius: '2em',
              fontWeight: 500,
              border: `none`,
              color: '#fff',
              cursor: 'pointer',
            }}
            onClick={resetErrorBoundary}
          >
            Try again
          </button>
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
        <CallbackNotifications />
      </React.Fragment>
    </ErrorBoundary>
  );
}
