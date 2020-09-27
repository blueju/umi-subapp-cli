#!/usr/bin/env node
// 表示该文件运行于node环境

const program = require("commander");

// commands
const init = require('../commands/init.js')

program
  .version(require('../package.json').version)
  .usage('<command> [options]')

program
  // 定义一个 init 命令
  .command("init <subapp-name>")
  // 对 init 命令的描述
  .description("初始化一个 Umi 子应用")
  // 执行动作
  .action(init);

// 传入的命令行参数
// 例如：umi-subapp-cli init，则传入的命令行参数就是 ["init"]

if (program.args.length === 0) {
  program.help();
}