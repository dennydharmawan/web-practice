import * as React from 'react';

import { cn } from '@/lib/utils';

const FullScreenLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('content-grid min-h-screen bg-slate-100', className)} {...props} />
  )
);

FullScreenLayout.displayName = 'FullScreenLayout';

export { FullScreenLayout };
