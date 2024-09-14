'use client'

import React, { useEffect } from 'react';

const ColorSchemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    function setColorScheme() {
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    setColorScheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(setColorScheme);

    return () => mediaQuery.removeListener(setColorScheme);
  }, []);

  return <>{children}</>;
};

export default ColorSchemeProvider;