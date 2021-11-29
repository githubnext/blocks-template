# GitHub Blocks Template

In this repository is a template (built with [Vite](https://vitejs.dev/), [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/)) for developing "blocks" for use in [GitHub Blocks](https://github-blocks.vercel.app/).

## Develop locally

```bash
yarn # install dependencies
yarn dev # start the dev server
```

A development server should now be running on [localhost:4000](localhost:4000).

## Sandbox

When you visit the development server in your browser, you should see two inputs:

1. An `input` that accepts the direct path to a file or a folder on github.com. Here are some valid file/folder paths.

- https://github.com/facebook/react/blob/main/README.md (file)
- https://github.com/facebook/react/blob/0.3-stable/README.md (file)
- https://github.com/facebook/react/blob/main/packages/react-dom/index.js (file)
- https://github.com/facebook/react/ (folder)
- https://github.com/facebook/react/tree/0.3-stable (folder)
- https://github.com/facebook/react/tree/main/packages (folder)

2. A `select` that lists out the contents of the `blocks` array that you have defined in `/package.json`. [Read more about customizing these](#developing-blocks)

Once you've entered a valid path, choose from the different block types and the content should be rendered beneath. Be sure to check your console for errors if you think something has broken!

## Developing blocks

First, open `/package.json` and locate the `blocks` key. You'll notice an array of block objects, with this shape:

```ts
interface BlockDefinition {
  type: "file" | "folder";
  id: string;
  title: string;
  description: string;
  entry: string;
  extensions: string[];
  example_path?: string;
}
```

From top to bottom,

- `type` determines whether this block applies to, well, files or folders.
- `id` is the identifier string for this block: this needs to be unique within your project. GitHub Blocks uses this to determine which block to render.
- `title` and `description` are both presentational attributes that affect how the block will appear on the [Blocks Marketplace](https://blocks-marketplace.vercel.app/)
- `entry` is the most important attribute: its value should be a file path to your block's entry point (starting with `/` - the root)
- `extensions` is an array of file extensions (the text of a filename _after_ the first `.`), which lets GitHub Blocks know for which types of files this block should be listed. `*` represents a wildcard value, meaning the block will always be listed.
- `example_path` (optional) is the path to an example file that will be displayed in the block’s preview on the [Blocks Marketplace](https://blocks-marketplace.vercel.app/).

With your block definition in place, let's take a look at the source code for a given block.

### File Blocks

A file block is a React component that receives a special set of props and returns some JSX. Specifically, the props look like:

```ts
interface FileBlockProps {
  block: {
    id: string;
    type: string;
    title: string;
    description: string;
    entry: string;
    extensions?: string[];
  };
  context: {
    path: string;
    file: string;
    repo: string;
    owner: string;
    sha: string;
  };
  content: string;
  metadata: any;
  onUpdateMetadata: (metadata: any) => void;
}
```

For simple use cases, the `content` prop will be the most useful, as it represents the actual content of the file you're looking at on the GitHub Blocks UI. But if you need additional context (such as the path to the file or the owner/repo in which the file lives), you can access it via the handy `context` prop.

`metadata` is a free-form prop that can be used to store arbitrary data about the file. It's up to you to decide what you want to store in this object: anywhere from definitions of data visualizations in a charts block to annotations for a code block. This is unique per file/folder per block and stored within a [`.github/blocks/file/`](https://github.com/githubnext/blocks-tutorial/tree/main/.github/blocks) folder within the viewed repo. To update the metadata, you can call the `onUpdateMetadata` prop with the updated data, which creates a new commit on the repo.

A few caveats and callouts:

- You can use both third-party _and_ relative imports in your block code! Simply put, feel free to install any dependencies from NPM, or import a local JS/CSS file and it should be included in the final bundle.
- Your block entry file **must have the block component as its default export**. If it does not, bad things will happen.

### Folder Blocks

A folder block is also a React component that receives a special set of props and returns some JSX. Specifically, the props look like:

```ts
interface FolderBlockProps {
  block: {
    id: string;
    type: string;
    title: string;
    description: string;
    entry: string;
    extensions?: string[];
  };
  context: {
    path: string;
    folder: string;
    repo: string;
    owner: string;
    sha: string;
  };
  tree: {
    path?: string;
    mode?: string;
    type?: string;
    sha?: string;
    size?: number;
    url?: string;
  }[];
  metadata: any;
  onUpdateMetadata: (metadata: any) => void;
}
```

For simple use cases, the `tree` prop will be the most useful, as it represents the underlying file tree of the folder you're looking at on the GitHub Blocks UI. But if you need additional context (such as the path to the file or the owner/repo in which the file lives), you can access it via the handy `context` prop.

`metadata` is a free-form prop that can be used to store arbitrary data about the file. It's up to you to decide what you want to store in this object: anywhere from definitions of data visualizations in a charts block to annotations for a code block. This is unique per file/folder per block and stored within a [`.github/blocks/folder/`](https://github.com/githubnext/blocks-tutorial/tree/main/.github/blocks) folder within the viewed repo. To update the metadata, you can call the `onUpdateMetadata` prop with the updated data, which creates a new commit on the repo.

A few caveats and callouts:

- You can use both third-party _and_ relative imports in your block code! Simply put, feel free to install any dependencies from NPM, or import a local JS/CSS file and it should be included in the final bundle.
- Your block entry file **must have the block React component as its default export**. If it does not, bad things will happen.

## Bundling for the Blocks Marketplace

To add your blocks on the [Blocks Marketplace](https://blocks-marketplace.vercel.app/), for anyone to use in GitHub Blocks, you'll need to create a new tag on GitHub. To do this, you'll need to:

```bash
git tag <tagname> # Create a new tag
git push --tags # Push the tag to GitHub
```

The tag will be available on the [Blocks Marketplace](https://blocks-marketplace.vercel.app/) once it updates (every day at 23:00 UTC).

## @githubnext/utils

To reduce the cognitive load associated with writing file and folder block components, we've assembled a helper library called `@githunext/utils` that exposes interface definitions and a few helper functions. This list will undoubtedly change over time, so be sure to check out [the repository page](https://github.com/githubnext/utils) for more detail.

```tsx
import {
  FileBlockProps,
  FolderBlockProps,
  // A nifty hook that allows you to use Tailwind classes in your block component without *any* set up! 🎉
  useTailwindCdn,
  // A helper function that returns the "language" of a file, given a valid file path with extension.
  getLanguageFromFilename,
  // a helper function to turn the flat folder `tree` array into a nested tree structure
  getNestedFileTree,
} from '@githubnext/utils`
```
