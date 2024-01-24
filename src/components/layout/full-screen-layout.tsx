import * as React from 'react';

import { cn } from '@/lib/utils';

const FullScreenLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('content-grid min-h-screen bg-slate-100', className)} ref={ref} {...props} />
  )
);

FullScreenLayout.displayName = 'FullScreenLayout';

export { FullScreenLayout };
