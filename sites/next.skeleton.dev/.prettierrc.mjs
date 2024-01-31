/** @type {import("prettier").Config} */
const config = {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    "printWidth": 140
};

export default config;