import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ActionIcon, Button } from '@mantine/core';
import { IconArrowUpRight, IconBrandGithubFilled, IconDownload, IconMailFilled } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import { NavListItem } from '@/components/ui/nav-list-item';
import { SocialIcon } from '@/components/ui/social-icon';

export default function PortfolioPage() {
  const navbarCollapseThreshold = 80;
  const [hoveredLink, setHoveredLink] = useState<null | string>(null);
  const location = useLocation();
  const firstRender = useRef(true);

  const { scrollY } = useScroll();
  const [isOverTheFold, setIsOverTheFold] = useState<boolean>(false);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });

  useMotionValueEvent(scrollY, 'change', (latestY) => {
    if (latestY > navbarCollapseThreshold) {
      setIsOverTheFold(true);
    } else {
      setIsOverTheFold(false);
    }
  });

  const navVariants = {
    compacted: {
      backdropFilter: 'blur(4px)',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    },
    expanded: {
      backdropFilter: 'blur(0px)',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0), 0 1px 2px -1px rgb(0 0 0 / 0)'
    }
  };

  const titleVariants = {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 }
  };

  return (
    <FullScreenLayout className="relative place-content-start">
      <HashLink
        className="fixed left-[8px] top-0 z-[50] translate-y-[-120%] rounded-sm bg-slate-700 px-4 py-3 font-semibold text-white transition-all duration-200 ease-in focus:translate-y-0"
        to="#main-content"
      >
        Skip to main content
      </HashLink>

      <LayoutGroup>
        <motion.header
          animate={isOverTheFold ? 'compacted' : 'expanded'}
          className="full-width content-grid fixed top-0 z-50 w-full bg-transparent"
          initial="expanded"
          layout
          variants={navVariants}
        >
          <nav className="py-3">
            <div className="flex max-w-screen-xl flex-wrap items-center gap-12">
              <a className="flex items-center" href="#">
                <motion.img
                  alt="Website Logo"
                  className="my-[1px] mr-3 h-9"
                  height={36}
                  layout
                  src="/portfolio/logo.svg"
                  width={36}
                />
                <div className="self-center whitespace-nowrap">
                  <motion.h1 className="text-xl font-semibold" layout>
                    Denny Dharmawan
                  </motion.h1>
                  <AnimatePresence mode="popLayout">
                    {!isOverTheFold && (
                      <motion.p
                        animate="enter"
                        className="text-purple-heart-700 text-sm font-semibold leading-tight tracking-wide"
                        exit="exit"
                        initial="initial"
                        layout
                        variants={firstRender.current ? {} : titleVariants}
                      >
                        Full-Stack Engineer
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </a>
              <div className="flex items-center lg:order-2">
                <button
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 lg:hidden"
                  data-collapse-toggle="mobile-menu"
                  type="button"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div
                className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                id="mobile-menu"
              >
                <ul
                  className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-6"
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <NavListItem
                    isAnchorActive={location.hash === ''}
                    isHovered={hoveredLink === 'Home'}
                    onMouseOver={() => setHoveredLink('Home')}
                    to="#"
                  >
                    Home
                  </NavListItem>
                  <NavListItem
                    isAnchorActive={location.hash === '#projects'}
                    isHovered={hoveredLink === 'Projects'}
                    onMouseOver={() => setHoveredLink('Projects')}
                    to="#projects"
                  >
                    Projects
                  </NavListItem>
                  <NavListItem
                    isAnchorActive={location.hash === '#experience'}
                    isHovered={hoveredLink === 'Experience'}
                    onMouseOver={() => setHoveredLink('Experience')}
                    to="#experience"
                  >
                    Experience
                  </NavListItem>
                  <NavListItem
                    isAnchorActive={location.hash === '#contact'}
                    isHovered={hoveredLink === 'Contact'}
                    onMouseOver={() => setHoveredLink('Contact')}
                    to="#contact"
                  >
                    Contact
                  </NavListItem>

                  <div className="w-[1px] self-stretch bg-slate-400"></div>

                  <NavListItem
                    isHovered={hoveredLink === 'Training Lab'}
                    onMouseOver={() => setHoveredLink('Training Lab')}
                    to="https://training-lab.dennydharmawan.com"
                  >
                    Training Lab
                  </NavListItem>
                </ul>
              </div>
            </div>
          </nav>
        </motion.header>
      </LayoutGroup>

      <main className="full-width content-grid bg-white">
        <section aria-labelledby="hero-title" className="relative">
          <div className="absolute right-0 top-0 h-[199px] w-[228px]  bg-[url('/portfolio/bauhaus-corner.svg')] bg-cover" />

          <div className="mt-[calc(120px+64px)]" id="fixed-nav-spacer" />

          <section aria-labelledby="hero-title" className="space-y-8">
            <div className="flex flex-wrap items-center gap-10">
              <div className="h-[155px] w-[152px] bg-[url('/portfolio/bauhaus-header.svg')] bg-cover" />
              <h1 className="max-w-[20ch] text-6xl font-semibold tracking-wide" id="hero-title">
                Building exceptional and impactful web solutions.
              </h1>
            </div>

            <div className="flex flex-wrap items-start gap-8">
              <div className="justify flex flex-col items-center justify-between self-stretch pl-[48px]">
                <div className="mt-3 h-[6px] w-[51px] bg-[#3FB8D2]"></div>

                <SocialIcon>
                  <Link target="_blank" to="https://linkedin.com/in/ddharmawan">
                    <svg
                      aria-hidden="true"
                      className="h-[28px] w-[28px] text-current dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                        fill-rule="evenodd"
                      />
                      <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                    </svg>
                  </Link>
                </SocialIcon>

                <SocialIcon>
                  <Link target="_blank" to="https://github.com/dennydharmawan">
                    <IconBrandGithubFilled size={28} />
                  </Link>
                </SocialIcon>

                <SocialIcon>
                  <Link to="mailto:contact@dennydharmawan.com">
                    <IconMailFilled size={28} />
                  </Link>
                </SocialIcon>
              </div>

              <div className="space-y-6">
                <p className="max-w-[35ch] text-xl text-slate-600" id="main-content">
                  I solve business problems with elegant code, creating efficient solutions that not only look
                  great but also function flawlessly.
                </p>

                <div className="space-x-5">
                  <Button size="lg">Explore My Work</Button>
                  <Button leftSection={<IconDownload />} size="lg" variant="light">
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-[120px] grid grid-cols-12 grid-rows-2 gap-4" title="bento-grid">
            <article className="stack-layout group isolate col-span-6 cursor-pointer">
              <div className="overflow-hidden rounded-l-3xl rounded-tr-3xl">
                <img
                  alt="workspace-illustration"
                  className="z-[-1] object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/portfolio/workspace-illustration.png"
                />
              </div>

              <div className="mx-auto mt-[15%] place-self-start rounded-lg border border-white bg-white bg-opacity-50 px-3 py-2 backdrop-blur-md transition-transform duration-300 group-hover:scale-125">
                <h3 className="bg-slate-600 bg-clip-text text-2xl font-semibold text-transparent transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-indigo-600">
                  About Me
                </h3>
              </div>

              <div className="grid h-[96px] w-[96px] translate-y-[1px] place-content-end self-end justify-self-end overflow-hidden bg-[url('/portfolio/lava-mask.svg')] bg-cover bg-no-repeat">
                <ActionIcon className="-translate-y-[1px]" radius={'50%'} size={72}>
                  <IconArrowUpRight
                    className="transition-transform duration-300 group-hover:scale-125"
                    size={36}
                  />
                </ActionIcon>
              </div>
            </article>

            <article className="col-span-6 max-h-[416px] cursor-pointer overflow-auto rounded-3xl bg-[#B8CEDC]"></article>

            <article className="col-span-12 cursor-pointer rounded-3xl bg-slate-700 px-4 py-3 text-white"></article>

            <article className="col-span-4 aspect-square cursor-pointer rounded-3xl bg-[#C3B2E7] px-4 py-3"></article>

            <article className="col-span-4 cursor-pointer rounded-3xl bg-[#F9A474] px-4 py-3 text-white"></article>

            <div className="col-span-4 grid grid-rows-2 gap-4">
              <article className="cursor-pointer rounded-3xl bg-[#C9DA8F]"></article>
              <article className="cursor-pointer rounded-3xl bg-[#F682A5]"></article>
            </div>
          </section>
        </section>
      </main>
      <footer></footer>
    </FullScreenLayout>
  );
}
