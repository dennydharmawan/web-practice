import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// https://stackoverflow.com/questions/59828938/multi-line-padded-text-with-outer-and-inner-rounded-corners-in-css

export default function LavaOverlayHeroPage() {
  return (
    <FullScreenLayout>
      <div className="full-width content-grid bg-white py-12">
        <div className="isolate grid grid-cols-12 self-start">
          <div className="grid-row relative col-start-1 col-end-8 row-start-1 row-end-2 place-self-center">
            <h1 className="">
              <div className="goo" contentEditable="true">
                This is an example of a simple headline or text with rounded corners using
                <br />a gooey SVG filter.
              </div>
            </h1>
          </div>

          <div className="col-start-4 col-end-[-1] row-start-1 row-end-2">
            <div className="relative z-[-1] aspect-video w-full bg-[url('https://source.unsplash.com/cckf4TsHAuw')] bg-cover after:pointer-events-none after:absolute after:inset-0 after:h-full after:w-full after:bg-slate-950/50" />

            {/* <div className="goo relative z-[-1] aspect-video w-full bg-blue-100 bg-cover [--color-highlight:#ff3] after:pointer-events-none after:absolute after:inset-0 after:h-full after:w-full after:bg-slate-950/50" /> */}
          </div>
        </div>
      </div>
    </FullScreenLayout>
  );
}
