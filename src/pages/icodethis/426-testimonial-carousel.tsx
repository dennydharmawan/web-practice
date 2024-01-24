import { Carousel } from '@mantine/carousel';
import { Avatar, Paper } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

//https://icodethis.com/challenges/426
export default function TestimonialCarouselPage() {
  return (
    <FullScreenLayout className="bg-blue-light-100 ">
      <section className="super-centered text-center">
        <Paper p="xl" shadow="xs">
          <h3 className="text-2xl font-extrabold">A word from our customers</h3>
          <h4 className="text-lg font-semibold">We've been helping businesses do their best since 2018.</h4>
          <div className="mt-12 text-white">
            <Carousel className="max-w-prose">
              <Carousel.Slide>
                <div className="mx-12 w-auto bg-slate-600 p-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, incidunt. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Culpa omnis ratione rem quas nobis!
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>

          <div className="mt-8">
            <Avatar className="m-auto" color="cyan" radius="xl" size="lg">
              MK
            </Avatar>
            <h5 className="mt-2 font-bold text-slate-900">John V.Bellamy</h5>
            <h6 className="font-semibold text-slate-600">Founter & CEO of The Company</h6>
          </div>
        </Paper>
      </section>
    </FullScreenLayout>
  );
}

TestimonialCarouselPage.reference = 'https://icodethis.com/challenges/426';
