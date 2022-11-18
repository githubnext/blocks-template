const fs = require("fs");
const chalk = require("chalk");
const express = require("express");
const { createServer } = require("vite");
const getViteConfigDev = require("./config/vite.config.dev");
const parseGitConfig = require("parse-git-config");
const argv = require('minimist')(process.argv.slice(2));

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

require("./config/env");

const main = async () => {
  const port = argv.port || process.env.PORT || 4000;
  const app = express();

  const vite = await createServer(getViteConfigDev(port))

  app.get("/blocks.config.json", (req, res) => {
    const json = fs.readFileSync("./blocks.config.json");
    const obj = JSON.parse(json);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(obj);
  });

  app.get("/git.config.json", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(parseGitConfig.sync());
  });

  app.use(vite.middlewares);

  console.log(
    chalk.cyan(`Starting the development server at http://localhost:${port}`)
  );
  app.listen(port);

  if (process.env.CI !== "true") {
    // Gracefully exit when stdin ends
    process.stdin.on("end", function () {
      app.close();
      process.exit();
    });
  }
};
main();
