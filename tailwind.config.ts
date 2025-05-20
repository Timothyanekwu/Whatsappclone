/** @type {import('tailwindcss').Config} */

module.exports ={
    content: [
        '.app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme:{
        extend:{

                colors: {
                primary: '#075E54',         // Main WhatsApp green
                primaryDark: '#064C46',     // Darker version of primary
                secondary: '#25D366',       // Accent green (send button, etc.)
                background: '#ECE5DD',      // Chat background
                messageIncoming: '#FFFFFF', // White message bubble (incoming)
                messageOutgoing: '#DCF8C6', // Green bubble (outgoing)
                border: '#D1D7DB',          // Borders, separators
                statusSeen: '#34B7F1',      // Blue tick
                statusPending: '#A0A0A0',   // Grey tick (sent/delivered)
                chatInput: '#F0F0F0',       // Input background
                header: '#128C7E',          // Header background
                statusBackground: '#111B21',// Status page background
                iconGray: '#54656F',        // Icon color (call, video, etc.)
                iconLightGray: '#8696A0',   // Lighter icon color
                iconDark: '#000000',        // Darker icon color
                },        

        },
    },
    plugins:[],
};

