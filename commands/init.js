const program = require('commander')

const option = program.parse(program.args).args[0]
const defaultName = typeof option === 'string' ? option : 'umi3-subapp'

// 定义提问，提问顺序从 0 开始
const questions = [
    {
        name: 'name',
        // 问题
        message: 'Project name',
        // 回答方式
        type: 'input',
        default: () => {
            return typeof option === 'string' ? option : 'umi3-subapp'
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
    }
]

module.exports =
    prompt(questions)
        .then(answers => {
            const {name} = answers

            const projectName = name
            const gitUrl = name
            const projectName = name
        })