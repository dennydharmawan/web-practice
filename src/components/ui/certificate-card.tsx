import * as React from 'react';
import { HTMLMotionProps, motion, useAnimate } from 'framer-motion';

import { cn } from '@/lib/utils';

const CertificateCard = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    onMouseEnterAnimation?: any;
    onMouseLeaveAnimation?: any;
  }
>(({ className, onMouseEnterAnimation, onMouseLeaveAnimation, ...props }, ref) => {
  const [scope, animate] = useAnimate();

  return (
    <div ref={ref}>
      <motion.div
        className={cn('rounded-lg shadow-sm', className)}
        ref={scope}
        {...props}
        onMouseEnter={() => {
          animate(scope.current, onMouseEnterAnimation);
        }}
        onMouseLeave={() => {
          animate(scope.current, onMouseLeaveAnimation);
        }}
      />
    </div>
  );
});

CertificateCard.displayName = 'CertificateCard';

export { CertificateCard };
