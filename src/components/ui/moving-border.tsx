'use client';

import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

import { cn } from '@/utils/cn';

export function Button({
  as: Component = 'button',
  borderClassName,
  borderRadius = '1.75rem',
  children,
  className,
  containerClassName,
  duration,
  ...otherProps
}: {
  [key: string]: any;
  as?: any;
  borderClassName?: string;
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
}) {
  return (
    <Component
      className={cn(
        'relative h-16 w-40  overflow-hidden bg-transparent p-[1px] text-xl ',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius
      }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              'h-20 w-20 bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] opacity-[0.8]',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          'relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  [key: string]: any;
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        className="absolute h-full w-full"
        height="100%"
        preserveAspectRatio="none"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <rect fill="none" height="100%" ref={pathRef} rx={rx} ry={ry} width="100%" />
      </svg>
      <motion.div
        style={{
          display: 'inline-block',
          left: 0,
          position: 'absolute',
          top: 0,
          transform
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
