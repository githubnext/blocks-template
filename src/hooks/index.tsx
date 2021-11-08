import { useQuery, UseQueryOptions } from "react-query";
import { components } from "@octokit/openapi-types";
import { Buffer } from "buffer";

// const GITHUB_PAT = import.meta.env.VITE_GITHUB_PAT;

// export const octokit = new Octokit({
//   auth: GITHUB_PAT,
// });

export interface RepoContext {
  repo: string;
  owner: string;
}

export interface UseFileContentParams extends RepoContext {
  path: string;
  fileRef?: string;
}

export type DirectoryItem = components["schemas"]["content-directory"][number];

function convertContentToString(d: DirectoryItem) {
  return {
    ...d,
    content: Buffer.from(d.content ? d.content : "", "base64").toString(),
  };
}

async function getFileContent(
  params: UseFileContentParams
): Promise<DirectoryItem[]> {
  const { repo, owner, path, fileRef } = params;

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${fileRef}`;
  const res = await fetch(apiUrl);

  if (res.status !== 200) throw new Error("Something bad happened");

  const data = await res.json();

  if (Array.isArray(data)) {
    return data.map(convertContentToString);
  } else {
    return [convertContentToString(data)];
  }
}

export function useFileContent(
  params: UseFileContentParams,

  config?: UseQueryOptions<DirectoryItem[]>
) {
  const { repo, owner, path, fileRef } = params;

  return useQuery(
    ["file", params],
    () =>
      getFileContent({
        repo,
        owner,
        path,
        fileRef,
      }),
    // @ts-ignore
    {
      ...config,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
}
