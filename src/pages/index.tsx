import { Path, To } from 'react-router-dom';

import { routes } from '@generouted/react-router';

import { getRoutes } from '@/lib/utils';
import { Link } from '@/router';

type a = To & keyof Path;

export default function index() {
  const routeList = getRoutes(routes[0]);

  return (
    <div className="flex flex-col">
      {routeList
        .filter((route) => route !== '/')
        .map((route, idx) => (
          <Link key={idx} to={route as any}>
            {route}
          </Link>
        ))}
    </div>
  );
}
