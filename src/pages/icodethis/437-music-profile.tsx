import { useMeasure } from 'react-use';

import { Carousel } from '@mantine/carousel';
import { ActionIcon, Card, Image } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// https://css-tricks.com/create-diagonal-layouts-like-its-2020/
// https://getwaves.io/
// https://wweb.dev/resources/css-separator-generator

// y = tan(α) * width / 2

// Convert degrees to radians
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Assuming α is in degrees
function calculateX(alphaDegrees: number, width: number): number {
  // Convert degrees to radians before using Math.tan
  const alphaRadians: number = toRadians(alphaDegrees);
  return (Math.tan(alphaRadians) * width) / 2;
}

export default function MusicProfilePage() {
  const [ref, { width }] = useMeasure<HTMLImageElement>();
  const translateY = calculateX(-11, width);

  const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png'
  ];

  return (
    <FullScreenLayout>
      <div className="m-auto max-w-lg">
        <Card padding="lg" radius="md" shadow="sm" withBorder>
          <Card.Section className="relative">
            <div className="content-grid">
              <div className="full-width relative">
                <Image
                  alt="Norway"
                  className="relative"
                  height={300}
                  ref={ref}
                  src="https://source.unsplash.com/UuzkCF-jmPY?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={400}
                />
                <div
                  className="absolute w-full bg-white"
                  style={{
                    height: -1 * 2 * translateY + 'px',
                    transform: `translateY(${translateY}px) skewY(-11deg)`
                  }}
                ></div>
                <ActionIcon
                  aria-label="Add new profile"
                  className="absolute bottom-0 right-0 rounded-full drop-shadow-xl"
                  color="indigo.5"
                  size={64}
                  style={{
                    transform: 'translateX(calc(-1 * var(--padding-inline)))'
                  }}
                  variant="filled"
                >
                  <IconPlus size={48} />
                </ActionIcon>
              </div>

              <div className="relative my-8 flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-indigo-700">Dorothy J. Block</h3>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quae sequi magni officiis
                  dolor in iusto totam molestiae, ipsa, aspernatur recusandae tempore cumque a distinctio
                  debitis odit asperiores sit, perferendis nisi nam. Recusandae velit, cumque voluptatibus
                  mollitia consequuntur totam esse quos voluptatum eos deleniti, consectetur, nemo ducimus
                  nulla. Ut eum repellendus non autem! Alias perferendis, ipsa amet qui non itaque.
                </p>
                <h4 className="text-2xl font-bold uppercase text-indigo-500">Albums</h4>
                <Carousel align="start" loop slideGap="md" slideSize="70%" slidesToScroll={1}>
                  {images.map((image, index) => (
                    <Carousel.Slide key={index}>
                      <Image src={image} />
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </div>
            </div>
          </Card.Section>
        </Card>
      </div>
    </FullScreenLayout>
  );
}
