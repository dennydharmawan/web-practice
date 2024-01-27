import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/base.css';
import '@/styles/hamburger-menu.css';
import '@mantine/carousel/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { mantineColors } from '@/lib/mantine';

import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const theme = createTheme({
  colors: mantineColors,
  primaryColor: 'primary'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
