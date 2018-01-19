module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["html"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "prettier-eslint": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "linebreak-style": "off",
  },
  globals: {},
};
