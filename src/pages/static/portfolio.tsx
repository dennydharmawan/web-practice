import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import { NavListItem } from '@/components/ui/nav-list-item';

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
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    },
    expanded: { backgroundColor: 'rgba(255, 255, 255, 0)' }
  };

  const titleVariants = {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
    initial: { opacity: 0 }
  };

  return (
    <FullScreenLayout className="relative place-content-start">
      {/* <HashLink
        className="absolute z-[50] rounded-sm bg-slate-700 p-4 font-semibold text-white"
        to="#main-content"
      >
        Skip to main content
      </HashLink> */}

      <LayoutGroup>
        <motion.header
          animate={isOverTheFold ? 'compacted' : 'expanded'}
          className="full-width content-grid fixed top-0 w-full bg-transparent"
          initial="expanded"
          layout
          variants={navVariants}
        >
          <nav className="py-3">
            <div className="flex max-w-screen-xl flex-wrap items-center justify-between">
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

      <main className="full-width content-grid min-h-[200vh] bg-slate-300">
        <section aria-labelledby="hero-title">
          <h1 className="mt-[120px]" id="hero-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reprehenderit?
          </h1>

          <p className=" mt-[360px]" id="main-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum natus impedit voluptatem maiores
            inventore, nostrum quasi. Vel, modi ducimus minima ut rem ipsa natus velit. Molestias velit rerum
            vitae animi!asdasdas
          </p>
        </section>
      </main>
      <footer></footer>
    </FullScreenLayout>
  );
}
