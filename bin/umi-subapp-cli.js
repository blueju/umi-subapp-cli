#!/usr/bin/env node
// 表示该文件运行于node环境

const path = require("path");
//
const program = require("commander");
program.usage("<command>");

// 传入的命令行参数
// 例如：vue init，则传入的命令行参数就是 ["init"]
// const args = program.parse(program.args).args;
// console.log(args.length);
// if (args.length === 0) {
//   program.help();
//   return;
// }

program
  // 定义一个 init 命令
  .command("init")
  // 定义一个配置
  .option("-f, --foo", "enable some foo")
  // 对 init 命令的描述
  .description("初始化创建一个 umi 子应用")
  // 别名
  .alias("i")
  // 执行动作
  .action(require(path.resolve(__dirname, "../commands/init")));
