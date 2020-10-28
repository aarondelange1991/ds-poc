module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./styling/tailwind.config.js'),
    ],
};
