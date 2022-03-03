import { useQuery, UseQueryOptions } from "react-query";
import { components } from "@octokit/openapi-types";
import { FileData, FolderData } from "@githubnext/utils";
import { useEffect, useState } from "react";

export interface RepoContext {
  repo: string;
  owner: string;
}

export interface UseFileContentParams extends RepoContext {
  path: string;
  fileRef?: string;
}

export interface UseFolderContentParams extends RepoContext {
  path: string;
  fileRef?: string;
}

export type DirectoryItem = components["schemas"]["content-directory"][number];
export type TreeItem = components["schemas"]["git-tree"]["tree"][number];

async function getFolderContent(
  params: UseFolderContentParams
): Promise<FolderData> {
  const { repo, owner, path, fileRef } = params;
  let branch = fileRef || "HEAD";

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;

  const res = await fetch(apiUrl, {
    headers: {
      Accept: `Bearer ${PAT}`,
    },
  });
  const { tree: rawTree } = await res.json();

  const files = (rawTree as TreeItem[]).filter((item) => {
    return item.path?.includes(path);
  });

  const tree = files.map((item) => {
    return {
      path: item.path || "",
      mode: item.mode || "",
      type: item.type || "",
      sha: item.sha || "",
      size: item.size || 0,
      url: item.url || "",
    };
  });

  const context = {
    download_url: apiUrl,
    folder: path.split("/").pop() || "",
    path: path,
    repo: repo,
    owner: owner,
    sha: branch,
    username: "mona",
  };

  return {
    tree,
    context,
  };
}

const PAT = import.meta.env.VITE_GITHUB_PAT;

export async function getFileContent(
  params: UseFileContentParams
): Promise<FileData> {
  // TODO: investigate a better way to parse urls
  const { repo, owner, path, fileRef } = params;
  const branch = fileRef || "HEAD";

  const apiUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
  const res = await fetch(
    apiUrl,
    PAT
      ? {
          headers: {
            Accept: `Bearer ${PAT}`,
          },
        }
      : {}
  );

  if (res.status !== 200) throw new Error("Something bad happened");

  const content = await res.text();

  const context = {
    download_url: apiUrl,
    file: path.split("/").pop() || "",
    path: path,
    repo: repo,
    owner: owner,
    sha: "HEAD",
    username: "mona",
  };

  return {
    content,
    context,
  };
}

export function useFileContent(
  params: UseFileContentParams,
  config?: UseQueryOptions<FileData>
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

export function useFolderContent(
  params: UseFolderContentParams,
  config?: UseQueryOptions<FolderData>
) {
  const { repo, owner, path, fileRef } = params;

  return useQuery(
    ["folder", params],
    () =>
      getFolderContent({
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

export function usePackageJson() {
  return useQuery("package", () => import("../../package.json"), {
    retry: false,
    refetchOnWindowFocus: false,
  });
}

const getFromLocalStorage = (key: string) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(error);
    return;
  }
};
export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(
    getFromLocalStorage(key) || initialValue
  );
  useEffect(() => {
    setStoredValue(getFromLocalStorage(key) || initialValue);
  }, [key]);

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export async function getRepoInfo(params: RepoContext): Promise<string> {
  const { repo, owner } = params;

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

  const res = await fetch(apiUrl);
  if (res.status !== 200) {
    throw new Error(
      `Error fetching repo info: ${owner}/${repo}\n${await res.text()}`
    );
  }

  const resObject = await res.json();
  return resObject;
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
