import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@mantine/core';
import { IconMessage, IconUserPlus } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function SocialProfile() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const variants = {
    collapsed: {
      width: 'auto'
    },
    expanded: {
      width: '420px'
    }
  };

  return (
    <FullScreenLayout>
      <div className="super-centered text-white">
        <motion.div
          layout
          // className="h-24 w-24 cursor-pointer overflow-hidden rounded-full  border-8 border-indigo-600"
          className="flex flex-col gap-6 rounded-2xl border-indigo-600 bg-indigo-600 p-4"
          initial="collapsed"
          variants={variants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? (
            <motion.img
              layout
              layoutId="profile-image"
              src="https://i.pravatar.cc/80?img=10"
              alt="Frances S. Cady"
              className="aspect-square w-20 object-cover"
            />
          ) : (
            <>
              <motion.div layout className="flex items-start gap-3">
                <motion.img
                  layoutId="profile-image"
                  src="https://i.pravatar.cc/80?img=10"
                  alt="Frances S. Cady"
                  className="aspect-square w-16 object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold">Denny Dharmawan</h1>
                  <h2 className="text-md pt-1 font-semibold">Growth-Led Full-Stack Engineer</h2>
                </div>
              </motion.div>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam deserunt facere sapiente
                expedita nesciunt architecto repellendus nisi aut? Amet et dolores quam iste corrupti
                repudiandae recusandae a magni esse veritatis.
              </p>
              <div className="pancake-grid rounded-2xl bg-indigo-800 px-3 py-4 text-center [--custom-min:6ch]">
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
              </div>

              <div className="flex gap-4">
                <Button
                  leftSection={<IconUserPlus size={20} />}
                  // gradient={{ from: 'rose', to: 'orange', deg: 90 }}
                  className="w-1/2 bg-gradient-to-br from-pink-300 via-red-300 to-yellow-500 text-slate-950"
                >
                  Follow
                </Button>

                <Button
                  leftSection={<IconMessage size={20} />}
                  variant="light"
                  className="w-1/2 bg-orange-200 text-slate-950"
                >
                  Send Message
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </FullScreenLayout>
  );
}
