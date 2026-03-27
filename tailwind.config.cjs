module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                accent: '#6366f1',
                danger: '#ef4444',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};