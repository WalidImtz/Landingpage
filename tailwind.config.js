module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#111143',
                secondary: '#F98613',
                textPrimary: '#FFFFFF',
                textSecondary: '#D9D9D9',
                accent: '#223381',
                accentText: '#1E40AF',
                highlight: '#FFD180',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                inter: ['Inter'],
                cinzel: ['Cinzel'],
            },
        },
    },
    content: [
        './src/**/*.{html,js}',
    ],
    plugins: [],
};