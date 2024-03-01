import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { cn } from '@/lib/utils';

export interface NavListItemProps extends NavLinkProps {
  isAnchorActive?: boolean;
  isHovered?: boolean;
}

const NavListItem = React.forwardRef<HTMLAnchorElement, NavListItemProps>(
  ({ children, className, isAnchorActive, isHovered, to, ...props }, ref) => {
    return (
      <li className={'relative isolate px-3 py-1.5'}>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              animate={{ opacity: 0.25 }}
              className="absolute inset-0 z-[-1] rounded-sm bg-[#fabd60]"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              layoutId="link-highlight"
            />
          )}
        </AnimatePresence>

        <NavLink
          className={cn(
            'block border-b border-slate-100 px-3 py-3 tracking-wide text-slate-700 transition-colors lg:border-0 lg:p-0 lg:hover:bg-transparent',
            { 'font-bold text-indigo-700': isAnchorActive },
            className
          )}
          ref={ref}
          to={to}
          {...props}
        >
          {children}
        </NavLink>
      </li>
    );
  }
);

NavListItem.displayName = 'NavListItem';

export { NavListItem };
