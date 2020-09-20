#!/usr/bin/env node
// 表示该文件运行于node环境

const path = require('path')

// 
const program = require("commander");

program
    // 定义一个 init 命令
    .command("init")
    // .option("-f, --foo", "enable some foo")
    .description("创建一个 umi 子应用")
    .alias('i')
    .action(() => {
        require(path.resolve(__dirname, '../commands/init.js'))
    })

if (program.args.length === 0) {
    program.help()
}