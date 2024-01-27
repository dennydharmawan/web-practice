import { useState } from 'react';
import { motion } from 'framer-motion';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function SwitchPage() {
  const [state, setState] = useState('start');

  return (
    <FullScreenLayout>
      <div className="super-centered">
        <div
          className="flex h-[100px] w-[300px] rounded-[50px] bg-blue-100 p-[10px]"
          style={{ justifyContent: state }}
        >
          <motion.div
            className="h-[80px] w-[80px] rounded-full bg-white"
            layout
            onClick={() => setState(state === 'start' ? 'end' : 'start')}
          ></motion.div>
        </div>
      </div>
    </FullScreenLayout>
  );
}
