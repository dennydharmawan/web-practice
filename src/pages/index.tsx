import { Link } from 'react-router-dom';

import { routes } from '@generouted/react-router';
import { Button, Card } from '@mantine/core';
import { IconExternalLink, IconEye } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import { getRoutes } from '@/lib/utils';

export default function index() {
  const pageObjects = getRoutes(routes[0]);
  console.log(pageObjects);

  return (
    <FullScreenLayout>
      <main className="content-grid py-8">
        <div>
          <div className="pancake-grid items-start [--custom-gap:1.5rem] [--custom-min:320px]">
            {pageObjects
              // .filter((pageObject) => pageObject !== '/' && route.startsWith('/icodethis'))
              .map((pageObject) => (
                <section aria-labelledby={pageObject.id} key={pageObject.id}>
                  <Card component="a" href={pageObject.path} padding="sm" shadow="sm" target="_blank">
                    {/* <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    h={160}
                    alt="No way!"
                  />
                </Card.Section> */}
                    <h3 className="text-2xl font-bold text-primary" id={pageObject.id}>
                      {pageObject.title}
                    </h3>
                    <div className="pancake-flexbox mt-auto [--custom-gap:1rem] [--custom-min:160px]">
                      <Button
                        component={Link}
                        leftSection={<IconEye size={20} />}
                        target="_blank"
                        to={pageObject.path}
                      >
                        View Solution
                      </Button>
                      <Button
                        component={Link}
                        leftSection={<IconExternalLink size={20} />}
                        target="_blank"
                        to={`https://icodethis.com/challenges/${pageObject.challengeNumber}`}
                        variant="light"
                      >
                        Visit Challenge
                      </Button>
                    </div>
                  </Card>
                </section>
              ))}
          </div>
        </div>
      </main>
    </FullScreenLayout>
  );
}
