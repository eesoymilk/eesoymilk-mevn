/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:typescript/recommended",
    "plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
  env: {
    "es2021": true,
		"node": true
  },
  plugins: [
		"@typescript-eslint"
	],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
