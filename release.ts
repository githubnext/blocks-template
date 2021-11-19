#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

// Loop over each directory inside of the dist directory and generate a tar ball for each of them
const distDir = path.resolve(__dirname, "./dist");
const distBlocks = fs.readdirSync(distDir);

distBlocks.forEach((distBlock) => {
  const tarBall = `${distBlock}.tar.gz`;
  const tarBallPath = path.resolve(__dirname, "./dist", tarBall);
  const tarBallCmd = `tar -czf ${tarBallPath} -C ${distDir} ${distBlock}`;
  exec(tarBallCmd);
});
