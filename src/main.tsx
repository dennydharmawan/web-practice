import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/base.css';
import '@/styles/hamburger-menu.css';
import '@mantine/carousel/styles.css';

import { Routes } from '@generouted/react-router/lazy';
import { createTheme, MantineProvider } from '@mantine/core';

import { mantineColors } from '@/lib/mantine';

const theme = createTheme({
  colors: mantineColors,
  primaryColor: 'primary',
  primaryShade: 6
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Routes />
    </MantineProvider>
  </React.StrictMode>
);
