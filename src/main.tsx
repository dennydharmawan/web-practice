import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from '@generouted/react-router';
import { createTheme, MantineProvider } from '@mantine/core';

import '@/styles/hamburger-menu.css';
import '@/styles/index.css';
import '@mantine/carousel/styles.css';

import { mantineColors } from '@/lib/mantine';

const theme = createTheme({
  primaryColor: 'primary',
  colors: mantineColors
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Routes />
    </MantineProvider>
  </React.StrictMode>
);
