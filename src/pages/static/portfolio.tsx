import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { ActionIcon, Button, Card, Overlay, Portal } from '@mantine/core';
import {
  IconArrowBigRightLineFilled,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconCircleCheck,
  IconDownload,
  IconMail,
  IconMailFilled,
  IconMessages,
  IconPointFilled
} from '@tabler/icons-react';

import IconBullet from '@/assets/bullet-icon.svg?react';
import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import { NavListItem } from '@/components/ui/nav-list-item';
import { SocialIcon } from '@/components/ui/social-icon';
import jobDescriptions from '@/data/job-descriptions';
import { cn } from '@/lib/utils';

import AnimatedCard from '../animation/framer-motion/card';

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

  const mountainBackgroundVariant = {
    hover: {
      clipPath: 'inset(0% 0% 0% 45%)'
    },
    initial: {
      clipPath: 'inset(0% 0% 0% 0%)'
    }
  };

  const paragraphVariant = {
    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
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
            <HashLink className="flex items-center" to="#">
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
            </HashLink>
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

          <div className="mt-[calc(132px+64px)]" id="fixed-nav-spacer" />

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
                  <Button rightSection={<IconArrowBigRightLineFilled />} size="lg">
                    Explore My Work
                  </Button>
                  <Button leftSection={<IconDownload />} size="lg" variant="light">
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* lighten('var(--mantine-color-gray-4)', 0.74); */}
          <section className="grid grid-cols-12 grid-rows-[repeat(3,432px)] gap-4 py-[132px]">
            <div className="col-span-6 flex">
              <div
                className={cn('z-40 flex', {
                  'fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2': isSelected
                })}
                onClick={(event) => event.stopPropagation()}
              >
                <motion.article
                  className={cn(
                    'group relative isolate flex cursor-pointer overflow-auto rounded-3xl bg-[#F4F1C4] text-yellow-950',
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
                        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 rounded-lg bg-slate-950/60 px-3 py-1 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-125">
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
                        <div className="transition-all duration-300 group-hover:[filter:brightness(105%)saturate(110%)hue-rotate(5deg)] group-hover:[transform:scale(1.05)perspective(750px)]">
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

            <article className="col-span-6 flex cursor-pointer rounded-3xl bg-[#7158DA] text-white">
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

                    <div className="absolute -left-2 top-1/3 rounded-md bg-rose-600 px-3 py-1 text-white shadow-lg">
                      front-end
                    </div>

                    <div className="absolute -right-7 top-2/4 rounded-md bg-orange-700 px-3 py-1 text-white shadow-lg">
                      back-end
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col gap-3">
                    <h3 className="text-3xl font-semibold">Tech Stack</h3>

                    <p className="text-pretty">
                      I leverage my deep understanding of the JavaScript ecosystem whether I'm building
                      dynamic user interfaces or creating robust back-end logic.
                    </p>
                  </div>
                </div>

                <div className="col-span-5 flex justify-center">
                  <div className="relative h-[432px] -translate-y-12 overflow-hidden rounded-xl bg-slate-300/70 p-6 shadow-md backdrop-blur-sm">
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
            {/* bg-[#515161]  */}
            <article className="col-span-12 flex cursor-pointer rounded-3xl bg-[#515161] px-10 py-8 text-white">
              <div className="grid grid-cols-12">
                <div className="col-span-5 flex flex-col justify-center gap-6">
                  <h3 className="text-3xl font-semibold">I strive to live by my work values</h3>
                  <p className="text-pretty">
                    In every project, I champion values that foster innovation, efficiency, and a deep
                    understanding of user needs. My approach is grounded in clear communication, adaptability,
                    and a collaborative spirit, ensuring that every solution is not only technically sound but
                    also aligns with our shared vision for success.
                  </p>
                  <div className="max-w-[280px] space-y-3">
                    {[1, 2, 3, 4].map((id) => (
                      <div className="flex items-center gap-2" key={id}>
                        <IconBullet />
                        Efficiency and Optimization
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-7 m-auto">
                  <AnimatedCard />
                </div>
              </div>
            </article>
            {/*
            <article className="col-span-2 cursor-pointer rounded-3xl bg-[#86BBBD] px-4 py-3 text-white"></article> */}

            <article className="col-span-4 cursor-pointer overflow-hidden rounded-3xl bg-[#7A6061] text-white">
              <div className="space-y-3 px-10 py-8">
                <h1 className="text-3xl font-semibold">Training Lab</h1>
                <p className="text-pretty">
                  Embracing personal growth, I continually challenge myself with small projects showcased on
                  my training lab. Explore it to witness my skills in action.
                </p>
              </div>

              <div className="relative mt-1 h-[320px] w-[280px] rounded-tr-xl border bg-[#E8E8EA] shadow-md">
                <div className="group absolute right-0 top-[3rem] h-[calc(152px-32px)] w-[86px] overflow-hidden bg-red-100 transition-transform duration-300 ease-out hover:-translate-y-8">
                  <img
                    className="absolute bottom-0 h-[152px] w-[102px] bg-cover transition-transform duration-300 ease-out group-hover:translate-y-6"
                    height={159}
                    src="/portfolio/books-right.png"
                    width={102}
                  />
                </div>

                <div className="absolute -left-[104px] bottom-[72px] h-[calc(185px-32px)] w-[259px] overflow-hidden bg-red-100 transition-transform duration-300 ease-out hover:-translate-y-8">
                  <img className="h-[185px] w-[259px] bg-cover" src="/portfolio/books-left.png" />
                </div>
              </div>
            </article>

            <article className="col-span-8 cursor-pointer overflow-hidden rounded-3xl bg-[#F1F1F1]">
              <motion.div
                className="relative h-full w-full bg-[url('/portfolio/mountain-mask-backup.svg')] bg-cover bg-left-bottom text-slate-900"
                initial="initial"
                whileHover="hover"
              >
                <motion.img
                  className="absolute h-full w-full bg-transparent object-cover object-left-bottom"
                  src="/portfolio/mountain.png"
                  transition={{
                    easings: 'easeOut'
                  }}
                  variants={mountainBackgroundVariant}
                />

                {/* <img
                  className="absolute left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 px-8"
                  src="/portfolio/elevate.svg"
                /> */}

                <motion.div
                  className="absolute mx-7 my-5 max-w-[35%] space-y-6 rounded-lg p-3"
                  transition={{
                    easings: 'easeIn'
                  }}
                  variants={paragraphVariant}
                >
                  <p className="text-lg font-semibold">
                    I create digital experiences that take users through captivating journeys, driving
                    engagement and conversion.
                  </p>

                  <div className="flex flex-col gap-2.5">
                    <Button leftSection={<IconMessages />} size="md">
                      Let's Collaborate
                    </Button>
                    <HashLink className="mx-auto text-slate-700 underline" to="#work-experience-title">
                      I want to view your work
                    </HashLink>
                  </div>
                </motion.div>

                {/* <div className="absolute bottom-0 right-0 mx-10 my-8 flex max-w-[30%] flex-col items-end gap-3 rounded-xl bg-white/50 p-3 backdrop-blur">
                  <p className="text-pretty">
                    Ready to embark on this journey together? Let's discuss how my skills can elevate your
                    team."
                  </p>
                  <Button className="max-w- self-stretch">Click me</Button>
                </div> */}
              </motion.div>
            </article>

            {/* <div className="col-span-4 grid grid-rows-2 gap-4">
              <article className="cursor-pointer rounded-3xl bg-[#C9DA8F]"></article>
              <article className="cursor-pointer rounded-3xl bg-[#F682A5]"></article>
            </div> */}
          </section>
        </section>

        <section aria-labelledby="work-experience-title" className="py-[6rem]">
          <h1 className="mb-[80px] text-center" id="work-experience-title">
            <span className="relative isolate text-4xl font-bold after:absolute after:bottom-1 after:end-0 after:start-0 after:z-[-1] after:h-2 after:w-full after:scale-110 after:rounded-md after:bg-purple-700/30">
              Work Experience
            </span>
          </h1>

          {jobDescriptions.map((job, idx) => {
            return (
              <div className=" grid grid-cols-[1fr_2px_3fr]" key={idx}>
                <div className="ml-auto pr-6 text-right font-semibold">
                  <h3 className="text-lg">{job.company}</h3>
                  <h4 className="text-md text-slate-500">{job.date}</h4>
                </div>
                <div className="relative h-full bg-slate-300">
                  <div className="after absolute left-1/2 top-0 grid aspect-square w-6 -translate-x-1/2 place-items-center rounded-full border-2 border-purple-700 bg-purple-100">
                    <IconPointFilled className="text-purple-700" height={12} width={12} />
                  </div>
                </div>
                <div className="flex flex-col gap-8 pb-16 pl-6">
                  <h3 className="text-lg font-semibold">{job.position}</h3>
                  <p className="prose">{job.description}</p>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1 w-7 rounded bg-[#FF682F]"></div>
                      <h4 className=" text-lg font-medium text-purple-700">Key achievements</h4>
                    </div>
                    <ul className="flex flex-col gap-2 font-normal text-slate-700">
                      {job.keyAchievements.map((keyAchievement, idx) => (
                        <li className="flex items-start gap-3 font-medium" key={idx}>
                          <IconCircleCheck className="text-purple-700" />

                          <span className="prose">{keyAchievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <footer className="full-width content-grid relative bg-blue-navy-950 text-white">
        {/* curve decoration */}
        <span className="full-width grid bg-white">
          <svg
            className="full-width relative col-span-12 col-start-1 row-start-1 -mb-1 h-full max-h-24 w-full self-end md:max-h-36"
            fill="none"
            height="111"
            preserveAspectRatio="none"
            viewBox="0 0 1001 111"
            width="1001"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M407.21 15.8956C537.851 42.4389 599.349 76.6302 838.741 93.501C917.226 99.032 967.922 93.2301 1001 81.1469L1001 111H0V21.5267C98.1188 10.501 242.474 -17.575 407.21 15.8956Z"
              style={{
                fill: '#0a2540'
              }}
            ></path>
          </svg>
          <svg
            className="full-width relative col-span-12 col-start-1 row-start-1 h-full max-h-32 w-full self-end md:max-h-44"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1003 143"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1002 114.237C968.911 126.309 918.6 146.592 840.089 141.066C600.613 124.211 539.244 38.2043 408.557 11.6857C243.764 -21.754 98.2857 30.6679 1.00002 67.6339"
              fill="none"
              height="100"
              strokeLinecap="square"
              strokeMiterlimit="30"
              strokeWidth="1"
              style={{
                stroke: '#41a9ef'
              }}
              vectorEffect="non-scaling-stroke"
              width="100"
              x="0"
              y="0"
            ></path>
          </svg>
        </span>

        <div className="mb-12 mt-4 flex">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold">Denny Dharmawan</div>
            <div className="h-full w-[1px] bg-white"></div>
            <div className="text-slate-100">© {new Date().getFullYear()}. All rights reserved.</div>
          </div>
          <div className="ml-auto">
            <div className="flex gap-[18px] text-slate-100">
              <div className="relative z-10 flex items-center justify-center transition-all after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] after:rounded-full after:bg-accent-400 after:transition-all hover:text-blue-navy-950 hover:after:scale-[1.4]">
                <IconBrandLinkedin height={32} width={32} />
              </div>
              <div className="relative z-10 flex items-center justify-center transition-all after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] after:rounded-full after:bg-accent-400 after:transition-all hover:text-blue-navy-950 hover:after:scale-[1.4]">
                <IconBrandGithub height={32} width={32} />
              </div>
              <div className="relative z-10 flex items-center justify-center transition-all after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] after:rounded-full after:bg-accent-400 after:transition-all hover:text-blue-navy-950 hover:after:scale-[1.4]">
                <IconMail height={32} width={32} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FullScreenLayout>
  );
}
