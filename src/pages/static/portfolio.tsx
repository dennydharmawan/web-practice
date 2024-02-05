import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
    <FullScreenLayout className="relative place-content-start bg-red-100">
      <HashLink
        className="fixed left-[8px] top-0 z-[50] translate-y-[-120%] rounded-sm bg-slate-700 px-4 py-3 font-semibold text-white transition-all duration-200 ease-in focus:translate-y-0"
        to="#main-content"
      >
        Skip to main content
      </HashLink>

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, iure aliquid omnis ut
            necessitatibus libero earum quibusdam placeat, ab odit qui blanditiis suscipit fugiat illum
            tenetur iste culpa id minima soluta temporibus sunt at vitae optio. Autem, delectus quia?
            Molestias distinctio, dicta nulla dolore impedit sint nesciunt assumenda voluptatibus? Minima
            illum aliquam, magni earum cum voluptas recusandae voluptatibus sit quae est omnis nobis. Itaque
            voluptates odit praesentium distinctio ducimus, eaque cupiditate placeat labore voluptatem eius
            numquam quidem, dicta nihil suscipit tempora delectus nemo possimus eum, sed excepturi accusamus
            libero necessitatibus tenetur. Hic suscipit consequuntur accusantium porro facilis! Cumque
            obcaecati, repellendus ipsum et dignissimos culpa asperiores at ullam pariatur rerum possimus
            totam debitis porro dolores, non veniam itaque repellat, magnam beatae id. Sequi nobis doloribus
            quod laudantium deleniti repellat, iure recusandae excepturi? Reiciendis autem iusto hic velit ea
            nam minima dolore culpa quidem quod voluptatibus atque molestias alias, aliquid dicta quo facilis
            iure ut sit assumenda inventore accusamus. Nihil soluta accusantium ipsum, sunt quo eaque deserunt
            unde, error voluptatum, cupiditate dolores. Minus aperiam facilis tempore nihil explicabo fugit
            ullam saepe? Quia autem voluptate minima ab suscipit eligendi cumque accusamus itaque aliquid quod
            non esse reprehenderit, minus tempora? Fuga delectus asperiores at molestiae aut praesentium
            quidem aspernatur, repudiandae deleniti molestias facere voluptates ad natus, iusto expedita
            saepe? Dolor quam cumque optio eius libero explicabo officia ducimus quaerat cum eos in nulla sit
            facere at soluta quis placeat, sequi tenetur id debitis perferendis repellendus non mollitia quod.
            Quod voluptatibus assumenda illo labore maxime eius dicta fuga eos accusantium natus laudantium
            facere cumque in expedita facilis, pariatur ullam deleniti totam mollitia excepturi cum laborum
            sapiente. Accusamus odio cumque velit, recusandae autem corporis sunt, sint voluptatum, illum
            totam numquam qui nesciunt asperiores alias ratione repellendus soluta perspiciatis ab tempore.
            Eveniet neque suscipit optio doloribus nesciunt? Sit sed aut soluta consequuntur ipsa aperiam
            atque quae at rerum, sint labore porro alias optio molestiae, cupiditate facere aliquam aspernatur
            enim. Mollitia unde vel ea temporibus, eaque libero dolore quisquam, vero est voluptatum fuga
            totam nobis laboriosam dolor dicta aliquid voluptas. Quidem reprehenderit quae magni aut. In, fuga
            dolorem doloribus vitae voluptas porro, repudiandae quidem officiis vero vel rerum excepturi
            sapiente reprehenderit dolore consectetur omnis ad minima quod sequi, fugiat voluptatum!
            Perferendis, illum magni beatae id iure laudantium cum laborum nemo officia facere mollitia.
            Quisquam quibusdam animi vitae magnam, voluptates obcaecati, voluptate ad eum ullam, reprehenderit
            vero! Provident repellendus soluta voluptate sed maxime quis consequuntur corporis fugiat omnis,
            numquam atque sint praesentium, labore vitae eum, magni minus? Quia dolorum inventore numquam in
            tempore, quis deleniti a nulla illo facilis eum! Quam vitae, laborum quo praesentium dolore
            recusandae nam corrupti, enim facilis repellat voluptate a. Culpa quis ut illum nisi fugit!
            Nesciunt autem debitis, architecto repudiandae eveniet, explicabo quaerat deleniti eligendi harum
            dolore recusandae excepturi dolorem, aspernatur odit repellat quod iste alias. Mollitia qui
            similique cupiditate vel suscipit excepturi fugiat velit odio, aperiam fuga magnam animi explicabo
            accusantium repellat doloribus nam repudiandae fugit hic earum culpa delectus recusandae porro
            nostrum.
          </h1>

          <div className="mt-20 font-semibold" id="main-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum natus impedit voluptatem maiores
            inventore, nostrum quasi. Vel, modi ducimus minima ut rem ipsa natus velit. Molestias velit rerum
            vitae animi!asdasdas
          </div>
        </section>
      </main>
      <footer></footer>
    </FullScreenLayout>
  );
}
