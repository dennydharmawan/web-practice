import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ActionIcon, Button, Card, Overlay, Portal } from '@mantine/core';
import { IconArrowUpRight, IconBrandGithubFilled, IconDownload, IconMailFilled } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import { NavListItem } from '@/components/ui/nav-list-item';
import { SocialIcon } from '@/components/ui/social-icon';
import { cn } from '@/lib/utils';

export default function PortfolioPage() {
  const navbarCollapseThreshold = 80;
  const { scrollY } = useScroll();
  const [isOverTheFold, setIsOverTheFold] = useState<boolean>(false);
  const firstRender = useRef(true);
  const divRef = useRef<HTMLElement>(null);

  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<null | string>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

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

  const navVariant = {
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

  const bentoOverlayVariant = {
    enter: {
      opacity: 1,
      transition: {
        delay: 0.3
      }
    },
    initial: { opacity: firstRender.current ? 1 : 0 }
  };

  return (
    <FullScreenLayout className="relative place-content-start">
      <HashLink
        className="fixed left-[8px] top-0 z-[50] translate-y-[-120%] rounded-sm bg-slate-700 px-4 py-3 font-semibold text-white transition-all duration-200 ease-in focus:translate-y-0"
        to="#main-content"
      >
        Skip to main content
      </HashLink>

      <motion.header
        animate={isOverTheFold ? 'compacted' : 'expanded'}
        className="full-width content-grid fixed left-0 top-0 z-50 w-full bg-transparent"
        initial="expanded"
        layout
        variants={navVariant}
      >
        <nav className="py-3">
          <div className="flex max-w-screen-xl flex-wrap items-center gap-12">
            <a className="flex items-center" href="#">
              <motion.img
                alt="Website Logo"
                className="mr-3 h-9"
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
                    <motion.div
                      animate="enter"
                      className="text-sm font-semibold leading-tight tracking-wide text-primary-700"
                      exit="exit"
                      initial="initial"
                      layout
                      variants={firstRender.current ? {} : titleVariants}
                    >
                      Full-Stack Engineer
                    </motion.div>
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
                  target="_blank"
                  to="https://training-lab.dennydharmawan.com"
                >
                  Training Lab
                </NavListItem>
              </ul>
            </div>
          </div>
        </nav>
      </motion.header>

      <main className="full-width content-grid bg-white">
        <section aria-labelledby="hero-title" className="relative">
          <div className="absolute right-0 top-0 h-[199px] w-[228px]  bg-[url('/portfolio/bauhaus-corner.svg')] bg-cover" />

          <div className="mt-[calc(120px+64px)]" id="fixed-nav-spacer" />

          <section aria-labelledby="hero-title" className="space-y-8">
            <div className="flex flex-wrap items-center gap-10">
              <div className="h-[155px] w-[152px] bg-[url('/portfolio/bauhaus-header.svg')] bg-cover" />
              <h2 className="max-w-[25ch] text-balance text-6xl font-bold tracking-wide" id="hero-title">
                Building exceptional and impactful web solutions.
              </h2>
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
                        clipRule="evenodd"
                        d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                        fillRule="evenodd"
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
                <p className="max-w-[60ch] text-pretty text-xl text-slate-600" id="main-content">
                  I solve business problems with elegant code, creating efficient solutions that not only look
                  great but also function flawlessly. With a keen eye for detail and a passion for innovation,
                  I tackle every project with creativity and precision, ensuring that each solution not only
                  meets but exceeds expectations.
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

          {/* lighten('var(--mantine-color-gray-4)', 0.74); */}
          <section className="mt-[120px] grid grid-cols-12 grid-rows-[repeat(3,424px)] gap-4">
            <div className="col-span-6 flex">
              <div
                className={cn('z-40 flex', {
                  'fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2': isSelected
                })}
                onClick={(event) => event.stopPropagation()}
              >
                <motion.article
                  className={cn(
                    'group relative isolate flex cursor-pointer overflow-auto rounded-3xl bg-yellow-100 text-yellow-950',
                    {
                      'flex max-h-[80vh] w-[calc(2*32px+65ch)] cursor-auto flex-wrap items-start p-8':
                        isSelected
                    }
                  )}
                  layout
                  onClick={() => {
                    setIsSelected(!isSelected);
                  }}
                  ref={divRef}
                >
                  {!isSelected && (
                    <>
                      <motion.div animate="enter" initial="initial" variants={bentoOverlayVariant}>
                        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 rounded-lg bg-slate-900/50 px-3 py-1 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-125">
                          <h3 className="text-lg font-semibold text-white">About Me</h3>
                        </div>

                        <div className="absolute bottom-0 right-0 grid h-[96px] w-[96px]  place-content-end justify-self-end overflow-hidden bg-[url('/portfolio/lava-mask.svg')] bg-cover bg-no-repeat">
                          <ActionIcon className="" radius={'50%'} size={72}>
                            <IconArrowUpRight
                              className="transition-transform duration-300 group-hover:scale-125"
                              size={36}
                            />
                          </ActionIcon>
                        </div>
                      </motion.div>

                      <div className="stack-layout relative z-[-1] place-content-stretch overflow-hidden rounded-3xl">
                        <div className="transition-transform duration-300 group-hover:scale-105">
                          <motion.img
                            alt="workspace-illustration"
                            className="min-h-full rounded-3xl object-cover"
                            height={1200}
                            layoutId="workplace-illustration"
                            src="/portfolio/workspace-illustration.png"
                            width={1800}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {isSelected && (
                    <>
                      <Portal>
                        <div className="fixed left-0 top-0 z-[999] h-full w-full">
                          <Overlay
                            backgroundOpacity={0.75}
                            className="cursor-pointer"
                            color="slate.7"
                            onClick={() => {
                              if (isSelected) {
                                setIsSelected(false);
                              }
                            }}
                          />
                        </div>
                      </Portal>

                      <div className="space-y-7">
                        <div className="grid grid-cols-12 gap-8">
                          <div className="col-span-6 flex flex-col">
                            <img className="mb-auto w-full bg-cover" src="/portfolio/bauhaus-underline.svg" />

                            <div>Hello 👋, my name is</div>
                            <motion.h3 className="text-3xl font-semibold">Denny Dharmawan</motion.h3>
                          </div>

                          <div className="col-span-6">
                            <motion.img
                              alt="workspace-illustration"
                              className="min-h-full rounded-xl object-cover"
                              layoutId="workplace-illustration"
                              src="/portfolio/workspace-illustration.png"
                            />
                          </div>
                        </div>

                        <p>
                          Welcome to my digital realm! I'm a seasoned full-stack developer driven by a
                          relentless pursuit of excellence in crafting impactful web solutions. With over{' '}
                          <span id="yearsOfExperience">{new Date().getFullYear() - 2019}</span> years of
                          experience, I have honed my skills through hands-on experience in building complex
                          web applications, collaborating with cross-functional teams, and ensuring high
                          performance and security standards, particularly in the fintech sector.
                        </p>

                        <p>
                          My journey in web development began with a fascination for problem-solving and a
                          love for innovative technologies. Specializing in JavaScript and proficient across
                          the entire stack, I thrive on transforming business goals into intuitive and
                          impactful digital experiences.
                        </p>

                        <p>
                          Beyond just lines of code, I bring a unique blend of creativity and precision to
                          every project I undertake. Whether it's optimizing performance, enhancing user
                          experience, or solving intricate business challenges, I'm dedicated to delivering
                          results that exceed expectations.
                        </p>

                        <p>
                          Driven by a passion for continuous learning and growth, I remain at the forefront of
                          industry trends and technologies by constantly exploring new technologies, embarking
                          on creative projects, and immersing myself in insightful web development podcasts.
                          From startups to established enterprises, I've collaborated with a diverse range of
                          clients, each experience shaping my skills and approach.
                        </p>

                        <p>
                          Interested to see my work? Check out my sample projects to witness my skills in
                          action.
                        </p>
                      </div>
                    </>
                  )}
                </motion.article>
              </div>
            </div>

            <article className="col-span-6 flex cursor-pointer rounded-3xl bg-[#7024FC] text-white">
              <div className="grid grid-cols-12">
                <div className="col-span-7 flex flex-col py-8 pl-10 pr-8">
                  <div className="relative">
                    <div className="tucked-photo">
                      <img
                        className="relative aspect-video place-self-center object-cover [--p:8px]"
                        height={720}
                        src="/portfolio/notes.png"
                        width={1080}
                      />
                    </div>

                    {/* <div className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-slate-900/30"></div> */}

                    <div className="absolute -left-2 top-1/3 rounded-md bg-red-600 px-3 py-1 shadow-lg">
                      front-end
                    </div>

                    <div className="absolute -right-7 top-2/4 rounded-md bg-orange-600 px-3 py-1 shadow-lg">
                      back-end
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col gap-3">
                    <h3 className="text-3xl font-semibold">My Tech Stack</h3>

                    <p className="text-pretty">
                      I leverage my deep understanding of the JavaScript ecosystem whether I'm building
                      dynamic user interfaces or crafting robust back-end logic.
                    </p>
                  </div>
                </div>

                <div className="col-span-5 flex justify-center">
                  <div className="relative h-[424px] -translate-y-12 overflow-hidden rounded-xl bg-slate-300/70 p-6 shadow-md backdrop-blur-sm">
                    <div className="flex flex-col gap-3 transition-transform duration-300 ease-out hover:translate-y-[-152px]">
                      <Card className="aspect-square w-[96px] flex-shrink-0 flex-grow-0 bg-slate-800"></Card>
                      <Card className="aspect-square w-[96px] flex-shrink-0 flex-grow-0 bg-slate-800"></Card>
                      <Card className="aspect-square w-[96px] flex-shrink-0 flex-grow-0 bg-slate-800"></Card>
                      <Card className="aspect-square w-[96px] flex-shrink-0 flex-grow-0 bg-slate-800"></Card>
                      <Card className="aspect-square w-[96px] flex-shrink-0 flex-grow-0 bg-slate-800"></Card>
                    </div>

                    <div className="pointer-events-none absolute inset-0 z-50 mx-4 scale-y-110 blur [background-image:linear-gradient(to_bottom,transparent_90%,white_100%)]"></div>
                  </div>
                </div>
              </div>
            </article>

            <article className="col-span-12 cursor-pointer rounded-3xl bg-slate-700 px-4 py-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam id eaque corporis
              culpa autem, omnis repellat eius quo quas non a recusandae consequuntur similique aperiam et
              ducimus amet quidem?
            </article>

            <article className="col-span-4 cursor-pointer overflow-hidden rounded-3xl border-4 border-purple-400 bg-[#0E4E70] text-white">
              <div className="space-y-3 px-8 py-6">
                <h1 className="text-3xl font-semibold">Training Lab</h1>
                <p>
                  Embracing personal growth, I continually challenge myself with small projects showcased on
                  my training lab. Explore it to witness my skills in action.
                </p>
              </div>

              <div className="relative mt-1 h-[320px] w-[280px] rounded-tr-xl border bg-white shadow-md">
                <div className="group absolute right-0 top-[4rem] h-[134px] w-[86px] overflow-hidden bg-red-100 transition-transform duration-300 ease-out hover:-translate-y-6">
                  <img
                    className="absolute bottom-0 h-[159px] w-[102px] bg-cover transition-transform duration-300 ease-out group-hover:translate-y-6"
                    height={159}
                    src="https://www.relume.io/__assets/6177739448baa66404ce1d9c/658e3d870f2f680e3eb336fb_Mockup%20Image%202.png"
                    width={102}
                  />
                </div>

                <div className="absolute -left-[112px] bottom-[72px] h-[111px] w-[258px] overflow-hidden bg-red-100">
                  <img
                    className="h-[111px] w-[258px] bg-cover"
                    src="https://source.unsplash.com/400x300/?beach"
                  />
                </div>
              </div>
            </article>

            <article className="col-span-4 cursor-pointer rounded-3xl bg-[#F65C39] px-4 py-3 text-white"></article>

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
