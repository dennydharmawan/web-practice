import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Button, Card, Image } from '@mantine/core';
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
              <motion.section
                aria-labelledby={pageObject.id}
                className="group"
                key={pageObject.id}
                whileHover={{ translateY: '-8px' }}
              >
                <Card
                  className="gap-4"
                  component="a"
                  href={pageObject.path}
                  padding="sm"
                  shadow="md"
                  target="_blank"
                >
                  <Card.Section>
                    <Image
                      className="aspect-video object-cover"
                      src={!pageObject.img.src}
                      srcSet={!pageObject.img.srcSet}
                    />
                  </Card.Section>
                  {/*
                  <div>
                    <h3 className="line-clamp-1 text-2xl font-bold text-primary" id={pageObject.id}>
                      {pageObject.title}
                    </h3>
                    <p className="text-slate-600">Challenge Number {`#${pageObject.challengeNumber}`}</p>
                  </div> */}

                  <div className="pancake-flexbox [--custom-gap:1rem] [--custom-min:160px]">
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
              </motion.section>
            ))}
          </div>
        </div>
      </main>
    </FullScreenLayout>
  );
}
