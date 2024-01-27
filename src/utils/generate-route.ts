import { RouteObject } from 'react-router-dom';

import { Path } from '@/router';

type PageObject = {
  challengeNumber: string;
  id: string;
  path: Path;
  title: string;
};

export function getRoutes(routes: RouteObject): PageObject[] {
  const paths: Path[] = [];

  const traverse = (element: RouteObject) => {
    if (element.children && element.children.length > 0) {
      element.children.forEach((child) => traverse(child));
    } else if (element.id && typeof element.id === 'string') {
      paths.unshift(('/' + element.id) as Path);
    }
  };

  traverse(routes);

  const sortedPaths = paths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const pageObjects: PageObject[] = sortedPaths
    .map((path) => ({
      challengeNumber: extractChallengeNumberFromPath(path),
      id: extractId(path),
      path,
      title: extractTitle(path)
    }))
    .filter((obj) => obj.challengeNumber !== '');

  return pageObjects;
}

export function extractChallengeNumberFromPath(path: string): string {
  const match = path.match(/\/icodethis\/(\d+)-[a-z-]+/);

  return match ? match[1] : '';
}

export function extractTitle(path: string): string {
  const match = path.match(/\/icodethis\/\d+-(.+)$/);

  return match ? titleCase(match[1].replace(/-/g, ' ')) : ''; // Replace hyphens with spaces
}

export function extractId(path: string): string {
  const match = path.match(/\/icodethis\/\d+-(.+)$/);

  return match ? match[1].replace(/-/g, '-') : ''; // Replace hyphens with dash
}

export function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}
