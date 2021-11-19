#!/usr/bin/env node
const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");

async function main() {
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./package.json"), "utf8")
  );

  const blockBuildFuncs = pkg.blocks.map((block) => {
    return esbuild.build({
      entryPoints: [`./` + block.entry],
      bundle: true,
      outfile: `dist/${block.id}.js`,
      format: "cjs",
      minify: true,
    });
  });

  try {
    await Promise.all(blockBuildFuncs);
  } catch (e) {
    console.error("Error bundling blocks", e);
  }
}

main();
