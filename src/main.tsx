import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from '@generouted/react-router';
import { createTheme, MantineProvider } from '@mantine/core';

import '@/styles/index.css';

import { mantineColors } from '@/lib/mantine';

console.log(mantineColors);
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
