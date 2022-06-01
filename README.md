# GitHub Blocks Template

> 📣 Use this repository as a starter template if you're a GitHub user interested in building your own custom Blocks!

**Beware!** The videos on this page cover an earlier version of Blocks; the text of this page has the latest information.

The project is built with [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/). We'll guide you through how to use it.

Here's a short tutorial video on how to get started creating your own block:

[Tutorial Video](https://user-images.githubusercontent.com/8978670/156399836-96acfff1-e44d-4047-b508-6e3e4e83f68c.mp4)

Here's a short tutorial video on the Blocks API:

[Blocks API](https://user-images.githubusercontent.com/8978670/156633540-64d90ce8-9df6-48ce-98ee-6d99a796227a.mp4)

#### GitHub Blocks API

A Block is a React component; it receives props and returns JSX. The Blocks application provides props describing the content to render, and also callback props that Blocks can use to update content or metadata, or call the GitHub API.

There are two kinds of of Blocks: File Blocks and Folder Blocks. Their API is mostly the same, except that File Blocks receive file content and Folder Blocks receive folder content.

All blocks receive the following props:

```ts
interface CommonBlockProps {
  // metadata from `blocks.config.json`
  block: {
    id: string;
    type: string;
    title: string;
    description: string;
    entry: string;
    matches?: string[];
  };

  // context about the repo, file / folder, and version
  context: {
    path: string;
    file: string; // for File Blocks
    folder: string; // for Folder Blocks
    repo: string;
    owner: string;
    sha: string;
  };

  // arbitrary metadata for Blocks to store configuration etc.
  metadata: any;
  onUpdateMetadata: (newMetadata: any) => void;

  // callback to call any GET endpoint in the GitHub API:
  // https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps
  // e.g. `/repos/{owner}/{repo}/contributors`
  onRequestGitHubData: (
    path: string,
    params: Record<string, any>
  ) => Promise<any>;

  onNavigateToPath: (path: string) => void;
}
```

File Blocks additionally receive

```ts
interface FileBlockProps {
  // the file content
  content: string;
  // callback to update the file content
  onUpdateContent: (newContent: string) => void;

  // the original file content
  originalContent: string;

  // whether or not the user can edit the content
  isEditable: boolean;
}
```

Folder Blocks additionally receive

```ts
interface FolderBlockProps {
  // flat list of files and folders in the tree
  tree: {
    path?: string;
    mode?: string;
    type?: string;
    sha?: string;
    size?: number;
    url?: string;
  }[];
}
```

`metadata` is a free-form prop that can be used to store arbitrary data about the file. It's up to you to decide what you want to store in this object: anywhere from definitions of data visualizations in a charts Block to annotations for a code Block. This is unique per file/folder per Block and stored within a [`.github/blocks/file/`](https://github.com/githubnext/blocks-tutorial/tree/main/.github/blocks) folder within the viewed repo. To update the metadata, you can call the `onUpdateMetadata` prop with the updated data; the user will be prompted to accept the change and create a new commit in the repo.

File Blocks can implement editable content by calling `onUpdateContent` to update the current content. The Blocks application has a Save button which prompts the user to accept the change and create a new commit (or branch) in the repo. When content has been updated but not yet committed, the `originalContent` prop contains the original file content, so the block can show a diff. When the `isEditable` flag is false, the user does not have permission to edit the file, so the block should disable editing.

A few caveats and callouts:

- You can import CSS files or split your block into multiple TypeScript files, and everything will be bundled with your block.
- You can use any third-party dependencies from NPM; just add them with `yarn add` and import them as usual, and they'll be bundled with your block.
- The [GitHub Primer React components](https://primer.style/react/) are already included as a dependency
- Your Block entry file **must have the Block component as its default export** so the GitHub Blocks application can find it.
- To make authenticated requests to the GitHub API, create a [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (with `repo` scope) and pass it when you start the dev server:

```
VITE_GITHUB_PAT=${your personal access token} yarn start
```

or put it in your [`.env`](https://vitejs.dev/guide/env-and-mode.html#env-files) file in the project root directory.

##### Relevant repos

[Blocks examples](https://github.com/githubnext/blocks-examples)

Example blocks that we've built to showcase the API.

[Blocks utility library](https://github.com/githubnext/blocks-dev)

This template project includes a dependency on the GitHub Blocks utility library, which contains types and functions to make it easier to build Blocks. You can import them from `@githubnext/blocks`; see [the repository page](https://github.com/githubnext/blocks-dev) for more detail.

## Setup

This repo is a template! To use it just click on the "Use this template" button on the top right to set it up for your use.

<img width="495" alt="Screen Shot 2021-12-06 at 12 29 29 PM" src="https://user-images.githubusercontent.com/8978670/144893319-5d45ab5c-12c0-42b4-99f8-97f658deb03b.png" />

The button will take you to a screen to specify what you want to name your own repo.

<img width="801" alt="Screen Shot 2021-12-06 at 12 29 17 PM" src="https://user-images.githubusercontent.com/8978670/144893351-25b24bfa-3400-4e92-9a2a-618b3ac06a5e.png" />

## Step 1. Develop locally

```bash
git clone <repo URL>
yarn # install dependencies
yarn start # start the dev server
```

A development server should now be running on [localhost:4000](localhost:4000).

## Step 2. View your Blocks within a sandbox

When you visit [localhost:4000](localhost:4000) in your browser, you'll see an interface where you can test out your Block.

This starter project has one example folder block and one example file block.

[Sandbox video](https://user-images.githubusercontent.com/8978670/144666304-b9012177-aed6-4c26-afc3-3de8c8d6d0ad.mov)

You can play with two bits of the interface to view your Blocks:

1. **Input file or folder**: An input that accepts the path to a file or a folder on github.com. Here are some valid file/folder paths.

- https://github.com/facebook/react/blob/main/README.md (file)
- https://github.com/facebook/react/blob/0.3-stable/README.md (file)
- https://github.com/facebook/react/blob/main/packages/react-dom/index.js (file)
- https://github.com/facebook/react/ (folder)
- https://github.com/facebook/react/tree/0.3-stable (folder)
- https://github.com/facebook/react/tree/main/packages (folder)

2. **List of custom blocks**: A menu of the blocks that you have defined in `blocks.config.json` (see below; for now this contains the example file and folder blocks)

Once you've entered a valid path, choose a block from the menu; the file or folder content should be rendered beneath. Check your console for errors if something isn't working!

## Step 3. Build your custom Blocks with the GitHub Blocks API

To create your own custom blocks you need to do two things:

### Step 3.1: Define your custom block

If you open up `/blocks.config.json`, you'll notice an array of block objects with the definitions for each custom block. It looks like this:

```ts
interface BlockDefinition {
  type: "file" | "folder";
  id: string;
  title: string;
  description: string;
  entry: string;
  matches?: string[]; // An array of globs written in picomatch syntax. See https://github.com/micromatch/picomatch for examples.
}
```

You have to define these properties for your own custom Block.

From top to bottom:

- `type` determines whether this block applies to files or folders.
- `id` is an identifier string for this block, like `"code-block"`. GitHub Blocks uses this to determine which block to render; it needs to be unique within your project.
- `title` and `description` control how your block appears within the GitHub Blocks application.
- `entry` is the path (relative to the project root) to the block's entry point, like `"blocks/example-file-block/index.tsx"`.
- `matches` is an array of globs describing filenames for which GitHub Blocks should show this block as an option, like `["*.json"]` for a block that handles JSON files, or `["*"]` for one that handles any file. (The glob syntax follows https://github.com/micromatch/picomatch)

### Step 3.2: Code your Block

Your code goes in the `blocks/` directory. Here you'll find the two example blocks as a starting point. You can modify them, rename them (don't forget to update `blocks.config.json`), or just delete them.

## Step 4. Deploy your Blocks to production

To make your custom block accessible to the GitHub Blocks application, there are a few steps you need to take:

### Step 4.1: Add the topic `github-blocks` to your repo (optional)

If you want your blocks to show up in the block picker in GitHub Blocks, you need to tag this repository with the topic `github-blocks` so the application can find it.

<img width="323" alt="Screen Shot 2021-12-03 at 2 54 55 PM" src="https://user-images.githubusercontent.com/8978670/144665902-63543c98-2486-4e13-9c54-f1d4bc6544a4.png" />

**This step is optional!** If you aren't ready to share your block with others, don't tag the repo. Your blocks won't show up in the block picker by default, but you can paste the repo URL (`https://github.com/{owner}/{repo}`) into the search box at the top of the block picker to search blocks in the repo.

### Step 4.2: Push a new tag

This template includes a GitHub Action to build a production version of your block. All you need to do to kick off the build process is create a new tag:

```bash
git tag 0.9.0 # Create a new tag with your own version number
git push --tags # Push the tag to GitHub
```

### Step 4.3: Wait for the build process to finish

Look under Actions for your repo to see that your build has finished. The latest successful build should now be accessible in the GitHub Blocks application.

From the repository settings page, make sure that your workflow has **Read and write** permissions or the action will fail with a 403 error.

<img width="805" alt="Screen Shot 2022-05-11 at 8 14 06 AM" src="https://user-images.githubusercontent.com/5148596/167847856-22ad190a-d73c-4b97-a0e2-c3c854db0d4f.png">

<img width="1097" alt="Screen Shot 2021-12-03 at 3 03 33 PM" src="https://user-images.githubusercontent.com/8978670/144665796-cb1ff450-c872-47c5-90b3-f74aea10286b.png" />

<img width="152" alt="Screen Shot 2021-12-03 at 3 02 10 PM" src="https://user-images.githubusercontent.com/8978670/144665673-431e28f9-9e9d-43b3-87f8-1e5d98bed92c.png" />

## Troubleshooting

- When developing folder blocks you might hit a "Something went wrong" message if you reach the rate limit of the GitHub API. This is because we're hitting the API unauthenticated. You can avoid this by configuring a personal access token (see above).

- If your Actions build fails, try running `yarn build` locally.
