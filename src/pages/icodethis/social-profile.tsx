import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@mantine/core';
import { IconMessage, IconUserPlus } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function SocialProfile() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const containerVariants = {
    collapsed: {
      width: '96px',
      padding: '0px'
    },
    expanded: {
      width: '420px',
      padding: '28px'
    }
  };

  const childrenVariants = {
    collapsed: {
      opacity: 0
    },
    expanded: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  const staggerAmountInMs = 0.35;

  return (
    <FullScreenLayout>
      <div className="super-centered text-white">
        <motion.div
          layout
          className="flex cursor-pointer flex-col gap-6 rounded-2xl border-indigo-600 bg-indigo-600"
          initial="collapsed"
          variants={containerVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? (
            <motion.img
              layout
              layoutId="profile-image"
              src="https://api.dicebear.com/7.x/adventurer/png?seed=Cuddles"
              alt="Frances S. Cady"
              className="aspect-square w-24 object-cover"
            />
          ) : (
            <>
              <div className="flex items-start gap-3">
                <motion.img
                  layout
                  layoutId="profile-image"
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Cuddles"
                  alt="Frances S. Cady"
                  className="aspect-square w-24 object-cover"
                />
                <motion.div
                  initial="collapsed"
                  animate="expanded"
                  exit="exit"
                  variants={childrenVariants}
                  transition={{
                    delay: 1 * staggerAmountInMs
                  }}
                  className="flex flex-col"
                >
                  <h1 className="text-3xl font-bold">Denny Dharmawan</h1>
                  <h2 className="text-md pt-1 font-semibold">Growth-Led Full-Stack Engineer</h2>
                </motion.div>
              </div>
              <motion.p
                key={'paragraph'}
                initial="collapsed"
                animate="expanded"
                exit="exit"
                variants={childrenVariants}
                transition={{
                  delay: 2 * staggerAmountInMs
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam deserunt facere sapiente
                expedita nesciunt architecto repellendus nisi aut? Amet et dolores quam iste corrupti
                repudiandae recusandae a magni esse veritatis.
              </motion.p>

              <motion.div
                className="pancake-grid rounded-2xl bg-indigo-800 px-3 py-4 text-center [--custom-min:6ch]"
                initial="collapsed"
                animate="expanded"
                exit="exit"
                variants={childrenVariants}
                transition={{
                  delay: 3 * staggerAmountInMs
                }}
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
                className="flex gap-4"
                initial="collapsed"
                animate="expanded"
                exit="exit"
                variants={childrenVariants}
                transition={{
                  delay: 4 * staggerAmountInMs
                }}
              >
                <Button
                  leftSection={<IconUserPlus size={20} />}
                  className="w-1/2 bg-gradient-to-br from-pink-300 via-red-300 to-yellow-500 text-slate-950"
                  onClick={() => {}}
                >
                  Follow
                </Button>

                <Button
                  leftSection={<IconMessage size={20} />}
                  variant="light"
                  className="w-1/2 bg-orange-200 text-slate-950"
                  onClick={() => {}}
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
