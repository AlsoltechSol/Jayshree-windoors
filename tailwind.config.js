module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                brand: {
                    yellow: '#F5C518',
                    'yellow-dark': '#D4A800',
                    'yellow-light': '#FFF3CC',
                    gold: '#E8B100',
                    gray: {
                        50: '#FAFAFA',
                        100: '#F5F5F5',
                        200: '#EEEEEE',
                        300: '#E0E0E0',
                        400: '#BDBDBD',
                        500: '#9E9E9E',
                        600: '#757575',
                        700: '#616161',
                        800: '#424242',
                        900: '#1A1A2E',
                    },
                },
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.8s ease-out forwards',
                'slide-left': 'slide-left 0.8s ease-out forwards',
                'slide-right': 'slide-right 0.8s ease-out forwards',
                'fade-in': 'fade-in 1s ease-out forwards',
                counter: 'counter 2s ease-out forwards',
                shimmer: 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 5px rgba(245, 197, 24, 0.3), 0 0 15px rgba(245, 197, 24, 0.1)',
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(245, 197, 24, 0.5), 0 0 40px rgba(245, 197, 24, 0.2)',
                    },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-left': {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-right': {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
};
