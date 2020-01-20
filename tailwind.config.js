// See https://tailwindcss.com/docs/configuration for details

module.exports = {
    theme: {
        extend: {
            colors: {
                blue: '#0048AB',
                gray: '#484848',
                white: '#f2f7ff'
            },
            fontFamily: {
                mono: [
                    'JetBrains Mono',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace'
                ],
                body: this.mono,
                heading: this.mono
            }
        }
    },
    variants: {},
    plugins: []
};
