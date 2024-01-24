import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@mantine/core';
import { IconMessage, IconUserPlus } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// TODO: add exit animation for the text
// TODO: add theme switcher
// https://codesandbox.io/p/sandbox/dark-mode-switch-framer-motion-u2h6o?file=%2Fcomponents%2FDarkModeSwitch.tsx%3A75%2C27
// https://codepen.io/antonpamalis/pen/BKEBGX
// https://codepen.io/sarahetter/pen/QNQPgz

export default function SocialProfilePage() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const containerVariants = {
    collapsed: {
      padding: '0px',
      width: '96px'
    },
    expanded: {
      padding: '28px',
      width: '420px'
    }
  };

  const childrenVariants = {
    collapsed: {
      opacity: 0
    },
    exit: {
      opacity: 0
    },
    expanded: {
      opacity: 1
    }
  };

  const staggerAmountInMs = 0.35;

  return (
    <FullScreenLayout>
      <div className="super-centered text-white">
        <motion.div
          animate={isExpanded ? 'expanded' : 'collapsed'}
          className="flex cursor-pointer flex-col gap-6 rounded-2xl border-indigo-600 bg-indigo-600"
          initial="collapsed"
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          variants={containerVariants}
        >
          {!isExpanded ? (
            <motion.img
              alt="Frances S. Cady"
              className="aspect-square w-24 object-cover"
              height={96}
              layout
              layoutId="profile-image"
              src="https://api.dicebear.com/7.x/adventurer/png?seed=Cuddles"
              width={96}
            />
          ) : (
            <>
              <div className="flex items-center gap-3">
                <motion.img
                  alt="Frances S. Cady"
                  className="aspect-square w-24 object-cover"
                  height={96}
                  layout
                  layoutId="profile-image"
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                  width={96}
                />
                <motion.div
                  animate="expanded"
                  className="flex flex-col"
                  initial="collapsed"
                  layout
                  transition={{
                    delay: 1 * staggerAmountInMs
                  }}
                  variants={childrenVariants}
                >
                  <h1 className="text-2xl font-bold">Denny Dharmawan</h1>
                  <h2 className="text-md pt-1 font-semibold">Growth-Led Full-Stack Engineer</h2>
                </motion.div>
              </div>
              <motion.p
                animate="expanded"
                className="-mt-6"
                exit="exit"
                initial="collapsed"
                key={'paragraph'}
                transition={{
                  delay: 2 * staggerAmountInMs
                }}
                variants={childrenVariants}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam deserunt facere sapiente
                expedita nesciunt architecto repellendus nisi aut? Amet et dolores quam iste corrupti
                repudiandae recusandae a magni esse veritatis.
              </motion.p>

              <motion.div
                animate="expanded"
                className="pancake-grid rounded-2xl bg-indigo-800 px-3 py-4 text-center [--custom-min:6ch]"
                exit="exit"
                initial="collapsed"
                transition={{
                  delay: 3 * staggerAmountInMs
                }}
                variants={childrenVariants}
              >
                <div>
                  <h3>Projects</h3>
                  <p className="text-2xl font-semibold">1368</p>
                </div>
                <div>
                  <h3>Followers</h3>
                  <p className="text-2xl font-semibold">845</p>
                </div>
                <div>
                  <h3>Rating</h3>
                  <p className="text-2xl font-semibold">9.8</p>
                </div>
              </motion.div>

              <motion.div
                animate="expanded"
                className="flex gap-4"
                exit="exit"
                initial="collapsed"
                transition={{
                  delay: 4 * staggerAmountInMs
                }}
                variants={childrenVariants}
              >
                <Button
                  className="w-1/2 bg-gradient-to-br from-pink-300 via-red-300 to-yellow-500 text-slate-950"
                  leftSection={<IconUserPlus size={20} />}
                  onClick={() => {}}
                >
                  Follow
                </Button>

                <Button
                  className="w-1/2 bg-orange-200 text-slate-950"
                  leftSection={<IconMessage size={20} />}
                  onClick={() => {}}
                  variant="light"
                >
                  Send Message
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </FullScreenLayout>
  );
}
