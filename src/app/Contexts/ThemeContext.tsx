'use client'

import React, { ReactNode, useCallback } from 'react'
import { createContext, useState } from 'react';


type Theme = {
   colors: {
                  darkMode: string;
                  lightMode: string;
                  primary: string;
                  primaryDark: string;
                  secondary: string;
                  background: string;
                  messageIncoming: string;
                  messageOutgoing: string;
                  border: string;
                  statusSeen: string;
                  statusPending: string;
                  chatInput: string;
                  header: string;
                  statusBackground: string;
                  iconGray: string;
                  iconLightGray: string;
                  iconDark: string;
                  },

          fontSize:{
            h1: string;
            h2: string;
            h3: string;  
            h4: string;
            h5: string;
            h6: string;
            p: string;
            small: string;
            extrasmall: string;
          },
};

const defaultTheme: Theme = {
  colors: {
        darkMode: "#000000", // Dark mode background
        lightMode: "#FFFFFF", // Light mode background

       // WhatsApp colors
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

  fontSize:{
        h1: "2.986rem",
        h2: "2.488rem",
        h3: "2.074rem",
        h4: "1.728rem",
        h5: "1.44rem",
        h6: "1.2rem",
        p:  "1rem",
        small: "0.833rem",
        extrasmall: "0.694rem",
  }
};

export const ThemeContext = createContext<Theme>(defaultTheme);


export const AppTheme = ({children}:{children: ReactNode}) => {


    const [themeMode, setThemeMode] = useState <string>("light");
    const handleThemeMode = useCallback(()=>{
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },[]);

    const themeStyles = {
        backgroundColor: themeMode === "light" ? defaultTheme.colors.lightMode : defaultTheme.colors.darkMode,
        color: themeMode === "light" ? defaultTheme.colors.primary : defaultTheme.colors.primaryDark,
    }
  
  const value={
    colors: {
      ...defaultTheme.colors,
    },
    fontSize:{
      ...defaultTheme.fontSize,
    },
    themeMode,
    handleThemeMode,
    themeStyles,

  }

  return (
    <ThemeContext value={value}>
      {children}
    </ThemeContext>
  );
};

