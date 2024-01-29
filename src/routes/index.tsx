import { motion } from 'framer-motion';

import { Anchor, Button, Card, Image } from '@mantine/core';
import { IconExternalLink, IconEye } from '@tabler/icons-react';
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
      <div className="full-width z-1 absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,white_5%,transparent_25%)]"></div>

      <main className="content-grid relative space-y-6 [--custom-content-max-width:1320px]">
        <section aria-labelledby="header-title" className="absolute pt-4">
          <h1 className="font-bold" id="header-title">
            Denny Dharmawan
          </h1>
          <p>Growth-Led Full-Stack Engineer</p>
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
          <div className="mx-auto grid max-w-screen-xl py-12 lg:grid-cols-12 lg:gap-8 lg:py-24 xl:gap-0">
            <div className="mr-4 place-self-center lg:col-span-5">
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

              <h2 className="mb-4 max-w-2xl text-5xl font-semibold" id="header-tagline">
                Constant Learning, Endless Exploration: One Pixel at a Time!
              </h2>
              <p className="mb-4 max-w-2xl text-gray-blue-300 md:text-lg lg:mb-8 lg:text-xl">
                Welcome to my training lab, a space where I tackle UI challenges head-on, turning code into
                art. Explore my journey through various coding challenges and witness the magic of front-end
                development.
              </p>

              <div className="flex items-center justify-start gap-3">
                <Button className="bg-secondary text-slate-950" size="lg">
                  See My Solutions
                  {/* <IconArrowNarrowDown className="ml-1 animate-bounce" size="32" /> */}
                </Button>

                {/* <Badge color="secondary.4" size="lg" variant="outline">
                  {pageObjects.length}+ Completed Challenges
                </Badge> */}
              </div>
            </div>
            <div className="relative hidden lg:col-span-7 lg:mt-0 lg:flex">
              <div className="absolute left-[82px] top-[-200px]">
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
                whileHover={{ translateY: '-8px' }}
              >
                <Card
                  className="gap-4 bg-[#595A4A]"
                  component="a"
                  href={pageObject.path}
                  padding="sm"
                  shadow="md"
                  target="_blank"
                >
                  <Card.Section>
                    <Image
                      className="aspect-video object-cover"
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

      <footer className="content-grid text-white">
        <div className="py-6 lg:py-8">
          <div className="flex justify-between">
            <div>
              <a className="flex items-center" href="https://flowbite.com/">
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Thanks for looking around
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                <ul className="font-medium text-gray-blue-300 dark:text-gray-400">
                  <li className="mb-4">
                    <a className="hover:underline" href="https://flowbite.com/">
                      Flowbite
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
                <h2 className="text-White mb-6 text-sm font-semibold uppercase dark:text-white">Follow Me</h2>
                <ul className="space-y-4 font-medium text-gray-blue-300 dark:text-gray-400">
                  <li>
                    <a className="hover:underline" href="https://discord.gg/4eeurUVvTy">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline " href="https://github.com/themesberg/flowbite">
                      Github
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="https://discord.gg/4eeurUVvTy">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © {new Date().getFullYear()}{' '}
              <a className="hover:underline" href="https://flowbite.com/">
                Denny Dharmawan™
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex sm:mt-0 sm:justify-center">
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    fill-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>

        <p>
          Build with modern web technologies. Explore the source code on{' '}
          <Anchor c="accent.2" href="https://mantine.dev/" rel="noopener noreferrer" target="_blank">
            GitHub
          </Anchor>{' '}
          to discover the details.
        </p>
      </footer>
    </FullScreenLayout>
  );
}

export const Route = createFileRoute('/')({
  component: IndexPage
});
