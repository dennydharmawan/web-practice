import * as React from 'react';

import { cn } from '@/lib/utils';

const FullScreenLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'content-grid grid min-h-[100dvh] min-h-screen content-center justify-center  bg-slate-100',
        className
      )}
      {...props}
    />
  )
);

FullScreenLayout.displayName = 'FullScreenLayout';

export { FullScreenLayout };
