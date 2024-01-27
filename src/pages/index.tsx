import { Link } from 'react-router-dom';

import { Button, Card } from '@mantine/core';
import { IconExternalLink, IconEye } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import pageObjects from '@/data/icodethis.json';

export default function index() {
  return (
    <FullScreenLayout>
      <main className="content-grid py-8">
        <div>
          <div className="pancake-grid items-start [--custom-gap:1.5rem] [--custom-min:320px]">
            {pageObjects.map((pageObject) => (
              <section aria-labelledby={pageObject.id} key={pageObject.id}>
                <Card
                  className="gap-4"
                  component="a"
                  href={pageObject.path}
                  padding="sm"
                  shadow="sm"
                  target="_blank"
                >
                  {/* <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    h={160}
                    alt="No way!"
                  />
                </Card.Section> */}
                  <div>
                    <h3 className="line-clamp-1 text-2xl font-bold text-primary" id={pageObject.id}>
                      {pageObject.title}
                    </h3>
                    <p className="text-slate-600">Challenge Number {`#${pageObject.challengeNumber}`}</p>
                  </div>

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
                      variant="outline"
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
