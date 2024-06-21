# 格式化项目

add .vscode/settings.json

```json
{
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "always",
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```
