# AGENTS.md

本文件用于约束在此仓库工作的 AI / 协作者的行为规范。

## Git 原则

- Commit message 必须使用 `feat:`、`fix:`、`refactor:`、`merge:` 等明确类型开头。
- 类型后使用英文冒号，可跟一个空格，再写简短中文说明。
- **标题（第一行 subject）必须单行，总长度不超过 15 个字**（含类型前缀，如 `feat:` 也计入字数）。
- 正确格式示例：`feat: 修复登录`、`fix: 回测超时`。
- 不要使用没有类型前缀的提交信息，例如 `update`、`first commit`、`修改代码`。
- 本地执行 `npm run hooks:install` 可安装 `.githooks/commit-msg`，提交时自动校验标题长度。
