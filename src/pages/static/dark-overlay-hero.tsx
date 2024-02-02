import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// https://dribbble.com/shots/15675799-Dark-theme-re-design
export default function DarkOverlayHero() {
  return (
    <FullScreenLayout>
      <header className="full-width content-grid bg-gray-neutral-900">
        <div
          className="stack-layout self-start"
          style={{
            maskImage: "url('/blur-rectangle.svg')",
            maskPosition: 'center center',
            maskSize: '100% 180%'
          }}
        >
          {/* <div className="relative z-10 aspect-video w-full bg-[url('https://source.unsplash.com/O453M2Liufs')] bg-cover after:pointer-events-none after:absolute after:inset-0 after:h-full after:w-full after:bg-slate-950/50" /> */}

          <div className="bg-img-overlay aspect-video w-full [--custom-bg-img-opacity:0.25] [--custom-bg-img:url('https://source.unsplash.com/O453M2Liufs')]"></div>

          <div className="z-20 grid">
            <h1 className="place-self-center text-8xl text-white">Enjoy the ride</h1>
          </div>
        </div>
      </header>
    </FullScreenLayout>
  );
}
