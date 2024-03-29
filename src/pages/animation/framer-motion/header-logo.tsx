import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// complex animation by combining LayoutGroup, AnimatePresence, and first render detection

// popLayout example
// https://codesandbox.io/p/sandbox/framer-motion-animatepresence-poplayout-mode-t7qxhv

export default function HeaderLogoPage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const firstRender = useRef(true);

  const variants = {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 }
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });

  return (
    <FullScreenLayout>
      <div className="super-centered">
        <motion.div className="relative rounded bg-white p-4" layout>
          <a
            className="flex"
            href="#"
            style={{
              alignItems: `${isExpanded ? 'end' : 'center'}`
            }}
          >
            <motion.img
              alt="Website Logo"
              className="mr-3 h-9 w-9 justify-start"
              height={36}
              layout
              src="/vite.svg"
              width={36}
            />
            <div className="flex flex-col">
              <motion.div className="flex flex-col text-xl font-bold" layout>
                Denny Dharmawan
              </motion.div>
              <AnimatePresence mode="popLayout">
                {isExpanded && (
                  <motion.p
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    key="paragraph"
                    layout
                    style={{ position: isExpanded ? 'relative' : 'absolute' }}
                    variants={firstRender.current ? {} : variants}
                  >
                    Full-Stack Engineer
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </a>
        </motion.div>
        <Button className="mt-6" onClick={() => setIsExpanded(!isExpanded)}>
          Animate
        </Button>
      </div>
    </FullScreenLayout>
  );
}
