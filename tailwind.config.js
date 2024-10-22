/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        screens: {
            xxl: { max: '1920px' },
            xl: { max: '1440px' },
            lg: { max: '1200px' },
            md: { max: '1024px' },
            sm: { max: '768px' },
        },
    },
    plugins: [],
};
