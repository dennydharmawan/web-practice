import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Switch } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

//https://www.youtube.com/watch?v=vIBKSmWAdIA
export default function TailwindThemePage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <FullScreenLayout className="bg-paper/25">
      <motion.div className="super-centered">
        <Switch checked={darkMode} label={darkMode ? 'Dark Mode' : 'Light Mode'} onChange={toggleDarkMode} />
      </motion.div>
    </FullScreenLayout>
  );
}
