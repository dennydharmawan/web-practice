import { motion } from 'framer-motion';

export default function DesignShowcaseIllustration() {
  const customTransition = {
    duration: 0.4,
    ease: 'easeInOut'
  };

  const cardOneVariant = {
    hover: {
      transform: 'rotateY(0deg) rotateX(0deg) translate(-30px, -30px)',
      transition: customTransition
    },
    rest: { transform: 'rotateY(-20deg) rotateX(20deg)', transition: customTransition }
  };

  const cardTwoVariant = {
    hover: {
      transform: 'rotateY(0deg) rotateX(0deg) translate(0px, -30px)',
      transition: customTransition
    },
    rest: { transform: 'rotateY(-20deg) rotateX(20deg)', transition: customTransition }
  };

  const cardThreeVariant = {
    hover: {
      transform: 'rotateY(0deg) rotateX(0deg) translate(0px, 0px)',
      transition: customTransition
    },
    rest: { transform: 'rotateY(-20deg) rotateX(20deg)', transition: customTransition }
  };

  const cardFourVariant = {
    hover: {
      transform: 'rotateY(0deg) rotateX(0deg) translate(-120px, 60px)',
      transition: customTransition
    },
    rest: { transform: 'rotateY(-20deg) rotateX(20deg)', transition: customTransition }
  };

  const cardFiveVariant = {
    hover: {
      transform: 'rotateY(0deg) rotateX(0deg) translate(30px, 30px)',
      transition: customTransition
    },
    rest: { transform: 'rotateY(-20deg) rotateX(20deg)', transition: customTransition }
  };

  // [&>*]:[transform:rotateY(-20deg)_rotateX(20deg)]
  // [perspective-origin:left_up] [perspective:5000px] [transform-style:flat]
  return (
    <motion.article
      className="relative [perspective-origin:left_bottom] [perspective:8000px] [transform-style:flat]"
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        className="absolute left-[-37px] top-[150px] h-28 w-44 rounded-xl bg-gradient-to-br from-blue-600 to-teal-300"
        variants={cardOneVariant}
      >
        <img className="h-28 w-44 max-w-full" src="https://designcode.io/images/mockups/mockup-card2.svg" />
      </motion.div>

      <motion.div
        className="absolute left-[176px] top-[150px] h-28 w-44 rounded-xl bg-[linear-gradient(192.64deg,_rgb(67,_22,_219)_12.72%,_rgb(144,_118,_231)_54.49%,_rgb(162,_238,_255)_100.01%)]"
        variants={cardTwoVariant}
      >
        <img className="h-28 w-44 max-w-full" src="https://designcode.io/images/mockups/mockup-card2.svg" />
      </motion.div>

      <motion.div
        className="absolute left-0 top-[200px] h-96 w-[628px] rounded-xl bg-indigo-950/[0.2] backdrop-blur-[10px]"
        variants={cardThreeVariant}
      >
        <img
          className="h-96 w-[628px] max-w-full"
          src="https://designcode.io/images/mockups/mockup-content.svg"
        />
      </motion.div>

      <motion.div
        className="absolute left-[40px] top-[370px] z-[5] h-[255px] w-96 rounded-xl bg-indigo-950/[0.2] backdrop-blur-[10px]"
        variants={cardFourVariant}
      >
        <img
          className="h-[255px] w-96 max-w-full"
          src="https://designcode.io/images/mockups/mockup2-bg.svg"
        />
      </motion.div>

      <motion.div
        className="absolute left-[280px] top-[400px] z-[5] h-[255px] w-96 rounded-xl bg-indigo-950/[0.2] backdrop-blur-[10px]"
        variants={cardFiveVariant}
      >
        <img
          className="h-[255px] w-96 max-w-full"
          src="https://designcode.io/images/mockups/mockup3-bg.svg"
        />
      </motion.div>
    </motion.article>
  );
}
