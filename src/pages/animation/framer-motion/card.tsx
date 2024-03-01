import { motion } from 'framer-motion';

import { CertificateCard } from '@/components/ui/certificate-card';

export default function AnimatedCard() {
  const cardContainer = {
    hover: {
      rotateZ: -10,
      skewX: -10
    }
  };
  const cardTwo = {
    hover: {
      scale: 0.9,
      translateX: -80,
      translateY: -10
    }
  };
  const cardThree = {
    hover: {
      scale: 0.9,
      translateX: -90,
      translateY: -20
    }
  };
  const cardFour = {
    hover: {
      scale: 0.9,
      translateX: -50,
      translateY: -30
    }
  };

  return (
    // div className="super-centered relative min-h-screen bg-[#1F1F46] text-white"
    <>
      <motion.div
        className="relative h-[300px] w-[512px]"
        transition={{
          duration: 0.25,
          ease: 'easeOut'
        }}
        variants={cardContainer}
        whileHover="hover"
      >
        <CertificateCard
          className="to-lime-200 absolute left-0 top-0 z-40 flex h-[220px] w-[320px] justify-between rounded-2xl bg-[#18e0f8]/80 p-5 text-lg text-black/[0.8] backdrop-blur-xl"
          initial={{ x: 0, y: 0 }}
          onMouseEnterAnimation={{ translateY: -30 }}
          onMouseLeaveAnimation={{ translateY: 0 }}
        >
          <div className="w-56">
            <div className="grid grid-cols-[224px] grid-rows-[18px] gap-1">
              <p className="text-base font-semibold uppercase text-slate-900/[0.7]">UI Design</p>
              <p className="text-sm text-white/[0.7]">Certificate</p>
            </div>
            <div className="absolute bottom-[30px] left-[20px] right-[196px] top-[148px] mt-auto grid grid-cols-[120px] grid-rows-[4px_4px_4px_6px] gap-2">
              <div className="h-1 w-16 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-24 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-20 rounded-sm bg-white opacity-30" />
              <div className="h-1.5 w-28 rounded bg-white opacity-40" />
            </div>
          </div>
          <img className="mb-6 h-11 w-11 max-w-full" src="https://designcode.io/images/logos/ui-logo.svg" />
        </CertificateCard>

        <CertificateCard
          className="absolute left-[160px] top-[40px] z-30 flex h-[220px] w-[320px] justify-between rounded-2xl bg-[#FFE854]/80 p-5 text-lg text-black/[0.8] backdrop-blur-xl"
          onMouseEnterAnimation={{ translateY: -90 }}
          onMouseLeaveAnimation={{ translateY: 0 }}
          variants={cardTwo}
        >
          <div className="w-56">
            <div className="grid grid-cols-[224px] grid-rows-[18px] gap-1">
              <p className="text-base font-semibold uppercase text-white/[0.7]">UI Design</p>
              <p className="text-sm text-white/[0.7]">Certificate</p>
            </div>
            <div className="absolute bottom-[30px] left-[20px] right-[196px] top-[148px] mt-auto grid grid-cols-[120px] grid-rows-[4px_4px_4px_6px] gap-2">
              <div className="h-1 w-16 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-24 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-20 rounded-sm bg-white opacity-30" />
              <div className="h-1.5 w-28 rounded bg-white opacity-40" />
            </div>
          </div>
          <img className="mb-6 h-11 w-11 max-w-full" src="https://designcode.io/images/logos/ui-logo.svg" />
        </CertificateCard>

        <CertificateCard
          className="absolute left-[240px] top-[70px] z-20 flex h-[220px] w-[320px] justify-between rounded-2xl bg-[#4DC6C2]/80 p-5 text-lg text-black/[0.8] backdrop-blur-xl"
          onMouseEnterAnimation={{
            translateY: -120
          }}
          onMouseLeaveAnimation={{
            translateY: 0
          }}
          variants={cardThree}
        >
          <div className="w-56">
            <div className="grid grid-cols-[224px] grid-rows-[18px] gap-1">
              <p className="text-base font-semibold uppercase text-white/[0.7]">UI Design</p>
              <p className="text-sm text-white/[0.7]">Certificate</p>
            </div>
            <div className="absolute bottom-[30px] left-[20px] right-[196px] top-[148px] mt-auto grid grid-cols-[120px] grid-rows-[4px_4px_4px_6px] gap-2">
              <div className="h-1 w-16 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-24 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-20 rounded-sm bg-white opacity-30" />
              <div className="h-1.5 w-28 rounded bg-white opacity-40" />
            </div>
          </div>
          <img className="mb-6 h-11 w-11 max-w-full" src="https://designcode.io/images/logos/ui-logo.svg" />
        </CertificateCard>

        <CertificateCard
          className="absolute left-[270px] top-[100px] z-10 flex h-[220px] w-[320px] justify-between rounded-2xl bg-[#FE934E]/80 p-5 text-lg text-black/[0.8] backdrop-blur-xl"
          onMouseEnterAnimation={{
            translateY: -150
          }}
          onMouseLeaveAnimation={{
            translateY: 0
          }}
          variants={cardFour}
        >
          <div className="w-56">
            <div className="grid grid-cols-[224px] grid-rows-[18px] gap-1">
              <p className="text-base font-semibold uppercase text-white/[0.7]">UI Design</p>
              <p className="text-sm text-white/[0.7]">Certificate</p>
            </div>
            <div className="absolute bottom-[30px] left-[20px] right-[196px] top-[148px] mt-auto grid grid-cols-[120px] grid-rows-[4px_4px_4px_6px] gap-2">
              <div className="h-1 w-16 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-24 rounded-sm bg-white opacity-30" />
              <div className="h-1 w-20 rounded-sm bg-white opacity-30" />
              <div className="h-1.5 w-28 rounded bg-white opacity-40" />
            </div>
          </div>
          <img className="mb-6 h-11 w-11 max-w-full" src="https://designcode.io/images/logos/ui-logo.svg" />
        </CertificateCard>
      </motion.div>
    </>
  );
}
