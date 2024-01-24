import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from '@generouted/react-router';
import { MantineProvider, createTheme } from '@mantine/core';

import '@/styles/base.css';
import '@/styles/hamburger-menu.css';
import '@mantine/carousel/styles.css';

import { mantineColors } from '@/lib/mantine';

const theme = createTheme({
  colors: mantineColors,
  primaryColor: 'primary'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Routes />
    </MantineProvider>
  </React.StrictMode>
);
