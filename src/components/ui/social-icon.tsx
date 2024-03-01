import * as React from 'react';

import { cn } from '@/lib/utils';

export const SocialIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        'relative isolate flex items-center justify-center text-primary-600 transition-colors after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] after:rounded-full after:bg-primary-600 after:transition-transform hover:text-white hover:after:scale-150',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

SocialIcon.displayName = 'SocialIcon';
