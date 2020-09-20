const fs = require("fs");

const ora = require("ora");
const chalk = require("chalk");
const program = require("commander");
const { prompt } = require("inquirer");
const download = require("download-git-repo");
const { log } = require("console");

const args = program.parse(program.args).args;

// 定义提问集，提问顺序从 0 开始
const questions = [
  {
    name: "name",
    // 问题
    message: "Project name",
    // 回答方式
    type: "input",
    default: () => {
      return typeof args[1] === "string" ? args[1] : "umi3-subapp";
    },
    // 校验
    // validate(val) {
    //     const validate = (val.trim().split(" ")).length === 1
    //     return validate || 'Project name is not allowed to have spaces ';
    // },
    // 转换
    // transformer(val) {
    //     return val;
    // }
  },
];

module.exports = prompt(questions).then((answers) => {
  const { name } = answers;

  const projectName = name;
  const gitUrl = "blueju/umi3-subapp-template";

  const spinner = ora("Downloading please wait...");
  spinner.start();

  // 从 github 仓库拉下 template，并存储至当前目录下名称为 projectName 的文件夹内
  download(`${gitUrl}`, `./${projectName}`, (err) => {
    if (err) {
      console.log(chalk.red(err));
      process.exit();
    }
    // 更新 package.json
    fs.readFile(`./${projectName}/package.json`, "utf8", (err, data) => {
      if (err) {
        spinner.stop();
        console.error(err);
        return;
      }
      const packageJson = JSON.parse(data);
      packageJson.name = name;
      var updatePackageJson = JSON.stringify(packageJson, null, 2);
      fs.writeFile(
        `./${projectName}/package.json`,
        updatePackageJson,
        "utf8",
        (err) => {
          if (err) {
            spinner.stop();
            console.error(err);
            return;
          } else {
            spinner.stop();
            console.log(`
${chalk.green("初始化创建项目成功！")}

${chalk.yellow(`cd ${name}`)}
${chalk.yellow("npm install")}
${chalk.yellow("npm start")}
            `);
          }
        }
      );
    });
  });
});
