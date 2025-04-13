module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-native",
    "react-hooks",
    "unused-imports",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Dead code and unused code elimination
    "no-unused-vars": "off", // Turned off in favor of @typescript-eslint version
    "@typescript-eslint/no-unused-vars": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-unreachable": "error",
    "no-dead-code": "error",

    // Type safety rules
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-call": "error",

    // React specific rules
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/no-array-index-key": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",

    // React Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // React Native specific rules
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error", // Changed from warn to error
    "react-native/no-color-literals": "error", // Changed from warn to error
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",

    // General code quality rules
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "no-alert": "error",
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-nested-ternary": "error",
    "no-var": "error",
    "prefer-const": "error",
    "require-await": "error",
    eqeqeq: ["error", "always"],
  },
  env: {
    "react-native/react-native": true,
    es2021: true,
  },
};
