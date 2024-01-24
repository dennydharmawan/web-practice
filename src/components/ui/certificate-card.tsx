import * as React from 'react';
import { HTMLMotionProps, motion, useAnimate } from 'framer-motion';

import { cn } from '@/lib/utils';

const CertificateCard = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'> & {
    onMouseEnterAnimation?: any;
    onMouseLeaveAnimation?: any;
  }
>(({ className, onMouseEnterAnimation, onMouseLeaveAnimation, ...props }) => {
  const [scope, animate] = useAnimate();

  return (
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
  );
});

CertificateCard.displayName = 'CertificateCard';

export { CertificateCard };
