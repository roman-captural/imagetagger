module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/typescript"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        semi: ["error", "never"],
        indent: ["warn", 4, {
            FunctionExpression: {parameters: "first"}
        }],
        quotes: ["warn", "double"]
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    }
}