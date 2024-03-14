import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// https://dribbble.com/shots/15675799-Dark-theme-re-design
export default function DarkOverlayHero() {
  return (
    <FullScreenLayout>
      {/*     mask-image: linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, transparent 100%); */}

      {/* [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1.0)_40%,transparent_50%)] [mask-position:center] */}
      <header className="full-width content-grid place-content-center bg-gray-neutral-900">
        <div
          className="stack-layout [mask-position:center self-start "
          // style={{
          //   WebkitMaskImage: "url('/blur-rectangle.svg')",
          //   WebkitMaskPosition: 'center center',
          //   WebkitMaskSize: '100% 100%'
          // }}
        >
          {/* <div className="relative z-10 aspect-video w-full bg-[url('https://source.unsplash.com/O453M2Liufs')] bg-cover after:pointer-events-none after:absolute after:inset-0 after:h-full after:w-full after:bg-slate-950/50" /> */}

          <div className="bg-img-overlay aspect-video w-full [--custom-bg-img-opacity:0.75] [--custom-bg-img:url('https://source.unsplash.com/O453M2Liufs')]"></div>

          <div className="z-20 grid">
            <h1 className="place-self-center text-8xl text-white">Enjoy the ride</h1>
          </div>

          <div className="pointer-events-none inset-0 z-50 [background-image:radial-gradient(closest-side,transparent_75%,#111927_100%)]"></div>
        </div>
      </header>
    </FullScreenLayout>
  );
}
