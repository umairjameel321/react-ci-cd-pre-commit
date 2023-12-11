# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Commands I used for the boilerplate

npm create vite@latest react-app -- --template react-swc-ts

npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react@latest

npm install --save-dev husky lint-staged

git init
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

npm install --save-dev @commitlint/{cli,config-conventional}

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'  Now create commitlint.config.cjs

npm install --save-dev gh-pages

Settings > Actions > General > Read and Write permissions
