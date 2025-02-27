/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        p: {
                            margin: '0 !important',
                        },
                        li: {
                            margin: '0 !important',
                        },
                        blockquote: {
                            fontStyle: 'normal',
                        },
                        'ul li p, ol li p': {
                            margin: '0 !important',
                        },
                    },
                },
                quoteless: {
                    css: {
                        'blockquote p:first-of-type::before': { content: 'none' },
                        'blockquote p:first-of-type::after': { content: 'none' },
                    },
                },
            },
        },
        screens: {
            xxl: { max: '1920px' },
            xl: { max: '1440px' },
            lg: { max: '1200px' },
            md: { max: '1024px' },
            sm: { max: '768px' },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
