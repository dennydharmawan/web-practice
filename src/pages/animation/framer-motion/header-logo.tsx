import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import { Button } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// complex animation by combining LayoutGroup, AnimatePresence, and first render detection

export default function HeaderLogoPage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const firstRender = useRef(true);

  const variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
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
        <LayoutGroup>
          <motion.div layout className="relative rounded bg-white p-4">
            <a
              href="#"
              className="flex"
              style={{
                alignItems: `${isExpanded ? 'end' : 'center'}`
              }}
            >
              <motion.img
                layout
                src="/vite.svg"
                className="mr-3 h-9 w-9"
                width={36}
                height={36}
                alt="Website Logo"
              />
              <motion.div layout className="flex flex-col text-xl font-bold">
                Denny Dharmawan
              </motion.div>
            </a>
            <AnimatePresence mode="popLayout">
              {isExpanded && (
                <motion.p
                  key="paragraph"
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  layout
                  style={{ position: isExpanded ? 'relative' : 'absolute' }}
                  variants={firstRender.current ? {} : variants}
                >
                  World's best engineer
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/*
        <AnimatePresence>
          {isExpanded && (
            <motion.p
              key="paragraph"
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8
              }}
            >
              World's best engineer
            </motion.p>
          )}
        </AnimatePresence> */}

        <Button className="mt-6" onClick={() => setIsExpanded(!isExpanded)}>
          Animate
        </Button>
      </div>
    </FullScreenLayout>
  );
}
