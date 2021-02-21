# ESLint
- ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. Makes developers to write code in certain pattern which makes code more consistent
  
<br/>

## ESLint Configuration
- In This project we created sparate eslint for client and backend
- Create .eslintrc.json file in project root directory
- We have different configuration for React and Nodejs

## ESLint Setup
- Libraries required to setup liniting on react
- Learn more about eslint and it's configuration at [ESLint Offical Docs](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)
- **`npm install --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint prettier`**


### React ESLint Config
- .eslintrc.json
```json
{
  "extends": [
    "prettier",
    "prettier/standard",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier", "@typescript-eslint"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": { "ecmaVersion": 2019, "sourceType": "module" },
  "rules": {
    "prettier/prettier": "error"
  }
}
```

<br/>

### Nodejs ESLint Config
```json
{
  "extends": [
    "prettier",
    "prettier/standard",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier", "@typescript-eslint"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": { "ecmaVersion": 2019, "sourceType": "module" },
  "rules": {
    "prettier/prettier": "error"
  }
}
```