module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        // "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // indent: ["error", 4],
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ["ConditionalExpression"],
            },
        ],
        "vue/script-indent": [
            "error",
            4,
            {
                baseIndent: 1,
                switchCase: 1,
                ignores: [],
            },
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],

        "no-undef": "off",
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
            },
        },
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                mocha: true,
            },
        },
    ],
};
