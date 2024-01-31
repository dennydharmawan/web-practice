import { motion } from 'framer-motion';

import { ActionIcon, Anchor, Button, Card, Image } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconExternalLink, IconEye, IconMail } from '@tabler/icons-react';
import { createFileRoute, Link } from '@tanstack/react-router';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import DesignShowcaseIllustration from '@/components/ui/design-showcase-illustration';
import pageObjects from '@/data/icodethis.json';

function IndexPage() {
  const beamVariant = {
    animate: {
      x1: '-100%',
      x2: '-100%',
      y1: '0',
      y2: '0%'
    },
    initial: {
      x1: '100%',
      x2: '150%',
      y1: '0',
      y2: '100%'
    }
  };

  return (
    <FullScreenLayout className="relative bg-background-950 text-white">
      {/* Grid Pattern background */}
      <div className="full-width z-1 pointer-events-none absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,white_5%,transparent_25%)]"></div>

      <main className="content-grid relative space-y-6 [--custom-content-max-width:1320px]">
        <section
          aria-labelledby="header-title"
          className="absolute flex w-full items-center justify-between pt-8"
        >
          <div>
            <h1 className="font-bold" id="header-title">
              Denny Dharmawan
            </h1>
            <p>Full-Stack Engineer</p>
          </div>

          <div className="flex gap-5">
            <ActionIcon className="text-white hover:text-indigo-300" component={Link} variant="subtle">
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon className="text-white" component={Link} variant="subtle">
              <IconBrandLinkedin />
            </ActionIcon>
            <ActionIcon className="text-white" component={Link} variant="subtle">
              <IconMail />
            </ActionIcon>
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">
                <span className="text-indigo-500">Icodethis</span>
              </h1>
              <p className="text-gray-500">
                Icodethis is an open-source project that aims to provide a
                platform for developers to share their ideas and code.
              </p>
            </div>
          </motion.div> */}
        </section>

        <section aria-labelledby="header-tagline">
          <div className="mx-auto grid max-w-screen-xl py-12 lg:grid-cols-12 lg:gap-8 lg:py-32 xl:gap-0">
            <div className="mr-7 place-self-center lg:col-span-5">
              <svg
                fill="none"
                height="68"
                viewBox="0 0 236 68"
                width="236"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
                  stroke="url(#paint0_linear)"
                ></path>
                <defs>
                  <motion.linearGradient
                    animate="animate"
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear"
                    initial="initial"
                    transition={{
                      duration: 2,
                      ease: 'linear',
                      repeat: Infinity,
                      repeatDelay: 2,
                      repeatType: 'loop'
                    }}
                    variants={beamVariant}
                  >
                    <stop stop-color="#2EB9DF" stop-opacity="0"></stop>
                    <stop stop-color="#2EB9DF"></stop>
                    <stop offset="1" stop-color="#9E00FF" stop-opacity="0"></stop>
                  </motion.linearGradient>
                </defs>
              </svg>

              <h2 className="mb-8 max-w-2xl text-5xl font-semibold" id="header-tagline">
                Constant Learning,{' '}
                <span className="bg-gradient-to-b from-rose-400 via-fuchsia-500 to-indigo-500  bg-clip-text text-transparent">
                  Endless Exploration:
                </span>{' '}
                One Pixel at a Time!
              </h2>
              <p className="mb-6 max-w-2xl text-balance text-gray-blue-300 md:text-lg lg:mb-8 lg:text-xl">
                Welcome to my training lab, a space where I tackle UI challenges head-on, turning code into
                art. Explore my journey through various coding challenges and witness the magic of front-end
                development.
              </p>

              <div className="flex items-center gap-8">
                <Button size="xl">Browse My Solutions</Button>

                {/* <div className="group relative w-fit transition-transform duration-300 active:scale-95">
                  <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
                    <span className="block rounded-md bg-slate-950 px-4 py-4 text-xl font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/80 group-hover:text-slate-50 group-active:bg-slate-950/90">
                      Let's Work Together
                    </span>
                  </button>
                  <span className="pointer-events-none absolute -inset-4 z-0 scale-y-[80%] transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50"></span>
                </div> */}
                {/*
                <span className="me-3 flex items-center font-medium text-slate-300 dark:text-white">
                  <span className="me-2 rounded-full bg-success-50 p-[2px]">
                    <span className="flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-success"></span>
                  </span>
                  Available for Work
                </span> */}

                {/* <Badge color="secondary.3" size="xl" variant="outline">
                  {pageObjects.length}+ Completed Challenges
                </Badge> */}

                {/* <ArrowDownDoodle className="text-secondary" height={48} /> */}
              </div>
            </div>
            <div className="relative hidden lg:col-span-7 lg:mt-0 lg:flex">
              <div className="absolute left-[82px] top-[-144px]">
                <DesignShowcaseIllustration />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="solution-title">
          <h2 className="mb-4 font-semibold text-secondary" id="solution-title">
            Solution Galery
          </h2>

          <div className="pancake-grid items-start [--custom-gap:1.5rem] [--custom-min:278px]">
            {pageObjects.map((pageObject) => (
              <motion.section
                aria-labelledby={pageObject.id}
                className="group"
                key={pageObject.id}
                whileHover={{
                  translateY: '-8px'
                }}
              >
                <Card
                  className="gap-4 bg-[#595A4A]"
                  component="a"
                  href={pageObject.path}
                  padding="sm"
                  shadow="md"
                  target="_blank"
                >
                  <Card.Section className="overflow-hidden">
                    <Image
                      className="duration-[250ms] aspect-video object-cover transition-transform ease-out group-hover:scale-110"
                      src={pageObject.img.src}
                      srcSet={pageObject.img.srcSet}
                    />
                  </Card.Section>
                  {/*
                  <div>
                    <h3 className="line-clamp-1 text-2xl font-bold text-primary" id={pageObject.id}>
                      {pageObject.title}
                    </h3>
                    <p className="text-slate-600">Challenge Number {`#${pageObject.challengeNumber}`}</p>
                  </div> */}

                  <div className="pancake-flexbox  [--custom-gap:1rem] [--custom-min:112px]">
                    <Button
                      className="text-slate-900"
                      color="accent.2"
                      component={Link}
                      leftSection={<IconEye size={20} />}
                      target="_blank"
                      to={pageObject.path}
                    >
                      Solution
                    </Button>
                    <Button
                      color="accent.2"
                      component={Link}
                      leftSection={<IconExternalLink size={20} />}
                      target="_blank"
                      to={`https://icodethis.com/challenges/${pageObject.challengeNumber}`}
                      variant="outline"
                    >
                      Source
                    </Button>
                  </div>
                </Card>
              </motion.section>
            ))}
          </div>
        </section>
      </main>

      <footer className="full-width content-grid mt-12 bg-background-800 text-white">
        <div className="py-6 lg:py-8">
          <div className="flex gap-10">
            <div className="space-y-8">
              <div className="space-y-3 rounded-md bg-[#111827] px-8 py-6">
                <h1 className="text-2xl font-bold">Denny Dharmawan</h1>

                <p className="max-w-[60ch] text-pretty text-gray-blue-300">
                  A seasoned full-stack engineer from Indonesia, focused on delivering high-quality work from
                  concept through to completion. When I'm not coding, you'll find me at the gym or catching
                  the latest action movies at the cinema.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-balance text-2xl font-semibold">Thanks for looking around.</h3>
              <p className="max-w-[60ch] text-gray-blue-300">
                Built with modern web technologies. <br /> Explore the source code on{' '}
                <Anchor
                  c="cyan.4"
                  href="https://github.com/dennydharmawan/web-practice"
                  rel="noopener noreferrer"
                  target="_blank"
                  underline="always"
                >
                  Github
                </Anchor>{' '}
                to discover the details.
              </p>

              <div className="mt-2">
                <Button>Ready to Talk?</Button>
              </div>
            </div>

            <div>
              <h2 className="relative mb-6 text-sm font-semibold uppercase text-white before:absolute before:-bottom-[10px] before:left-0 before:h-[3px] before:w-[15px] before:bg-secondary after:absolute after:-bottom-[10px] after:left-[25px] after:h-[3px] after:w-[40px] after:bg-secondary">
                Resources
              </h2>
              <ul className="space-y-4 font-medium text-gray-blue-300 dark:text-gray-400">
                <li>
                  <a className="hover:underline" href="https://icodethis.com/">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://icodethis.com/">
                    iCodeThis
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-White relative mb-6 text-sm font-semibold uppercase before:absolute before:-bottom-[10px] before:left-0 before:h-[3px] before:w-[15px] before:bg-secondary after:absolute after:-bottom-[10px] after:left-[25px] after:h-[3px] after:w-[40px] after:bg-secondary">
                Contact Me
              </h2>
              <ul className="space-y-4 font-medium text-gray-blue-300 dark:text-gray-400">
                <li>
                  <a className="hover:underline" href="https://discord.gg/4eeurUVvTy">
                    https://dennydharmawan.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-blue-300 dark:text-gray-400 sm:text-center">
              © {new Date().getFullYear()}{' '}
              <a className="hover:underline" href="https://flowbite.com/">
                Denny Dharmawan™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </FullScreenLayout>
  );
}

export const Route = createFileRoute('/')({
  component: IndexPage
});
