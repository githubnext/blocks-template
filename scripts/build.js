const esbuild = require("esbuild");
const path = require("path");

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('./config/env');

const build = async () => {
  const blocksConfigPath = path.resolve(process.cwd(), "blocks.config.json");
  const blocksConfig = require(blocksConfigPath);

  const blockBuildFuncs = blocksConfig.map((block) => {
    return esbuild.build({
      entryPoints: [`./` + block.entry],
      bundle: true,
      outdir: `dist/${block.id}`,
      format: "iife",
      globalName: "BlockBundle",
      minify: true,
      external: ["fs", "path", "assert", "react", "react-dom", "@primer/react"],
    });
  });

  try {
    await Promise.all(blockBuildFuncs);
  } catch (e) {
    console.error("Error bundling blocks", e);
  }
}
build()

module.exports = build;