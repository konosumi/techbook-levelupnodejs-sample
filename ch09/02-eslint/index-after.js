"use strict";

// CPUのコア数を取得する
const numCPUs = require("os").cpus().length;

// コンソールに出力する
// eslint-disable-next-line no-console
console.log(`${numCPUs} core cpu.`);
