'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';

type Card = {
  className: string;
  content: JSX.Element | React.ReactNode | string;
  id: number;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1  gap-4 p-10 md:grid-cols-3 ">
      {cards.map((card, i) => (
        <div className={cn(card.className, '')} key={i}>
          <motion.div
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2'
                : lastSelected?.id === card.id
                  ? 'z-40 h-full w-full rounded-xl bg-white'
                  : 'h-full w-full rounded-xl bg-white'
            )}
            layout
            onClick={() => handleClick(card)}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
        className={cn(
          'absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        onClick={handleOutsideClick}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      alt="thumbnail"
      className={cn(
        'absolute inset-0 h-full w-full object-cover object-top transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      height="500"
      onLoad={() => setLoaded(true)}
      src={card.thumbnail}
      width="500"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        animate={{
          opacity: 0.6
        }}
        className="absolute inset-0 z-10 h-full w-full bg-black opacity-60"
        initial={{
          opacity: 0
        }}
      />
      <motion.div
        animate={{
          opacity: 1,
          y: 0
        }}
        className="relative z-[70] px-8 pb-4"
        initial={{
          opacity: 0,
          y: 100
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
