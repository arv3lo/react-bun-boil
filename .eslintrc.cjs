module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["import", "@typescript-eslint", "react-refresh"],
  rules: {
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Built-in types are first
          "external", // third party or external dependencies
          "internal", // import from within the project
          ["sibling", "parent"], //  sibling and parent types. They can be mingled together
          "index", // imports from the index file of a directory
          "object", // imports of objects or classes
          "type", // imports of types, interfaces, or type definitions
        ],
        "newlines-between": "always",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "prettier/prettier": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "react/no-array-index-key": "off",
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  },
};
