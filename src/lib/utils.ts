import { clsx, type ClassValue } from 'clsx';
import { RouteObject } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Path } from '@/router';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function padNumber(number: number) {
  return String(number).padStart(2, '0');
}

export function getRoutes(routes: RouteObject): Path[] {
  const paths: Path[] = [];

  const traverse = (element: RouteObject) => {
    if (element.children && element.children.length > 0) {
      element.children.forEach((child) => traverse(child));
    } else if (element.id && typeof element.id === 'string') {
      paths.unshift(('/' + element.id) as Path);
    }
  };

  traverse(routes);

  const sortedPaths = paths.sort((a,b) => a.localeCompare(b, undefined, {numeric: true}))

  return sortedPaths;
}
