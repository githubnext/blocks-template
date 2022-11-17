# GitHub Blocks Template

Use this repository as a starter template for building your own Blocks.
## Quickstart

> 🛑 Currently, you must be flagged into the [GitHub Blocks Technical Preview](https://blocks.githubnext.com) in order to develop blocks. There is no "offline" development mode at this time.

Fork this repo using the `Use this template` button above:

!["Use this template" button](https://user-images.githubusercontent.com/8978670/144893319-5d45ab5c-12c0-42b4-99f8-97f658deb03b.png)

Then, clone _your_ repo (not [this one!](https://github.com/githubnext/blocks-template)) and get ready for action:

```bash
yarn # install dependencies
yarn start # start the dev server
# Or use npm, pnpm, you know the drill
```

When you visit [localhost:4000](https://localhost:4000) in your browser, you'll be
redirected to the Blocks app, but your locally-developed blocks will appear in the block picker:

<img alt="Block picker" src="https://user-images.githubusercontent.com/56439/181648955-101b6567-3f9b-44b3-af99-7ef3ca6161b9.png" width="418" />

This template includes one example File Block and one Folder Block. The dev server supports hot reloading, so make some changes, and see what they do!

## Under the hood

Currently, Blocks are [React](https://reactjs.org/) components. They have a well-defined contract with their surroundings, and receive a [fixed set of props](TODO) when they are instantiated. They are developed in [TypeScript](https://www.typescriptlang.org/), and bundled with [Vite](https://vitejs.dev/).

## More Info

Visit [githubnext/blocks](https://blocks.githubnext.com/githubnext/blocks) for a full tutorial, documentation, and examples.

You should also join us in our discord! There's a [#blocks channel](https://discord.com/channels/735557230698692749/1039950186136469535) where you can connect with us and other folks who are building Blocks:

> 👋 https://discord.gg/githubnext
## License

MIT

✌️ ❤️
_GitHub Next_
