import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// https://dribbble.com/shots/15675799-Dark-theme-re-design
export default function DarkOverlayHero() {
  return (
    <FullScreenLayout>
      <header className="full-width content-grid bg-gray-neutral-900">
        <div className="self-start bg-red-100">
          <img
            alt="img"
            className="aspect-video w-full object-cover"
            src="https://source.unsplash.com/O453M2Liufs"
          />
        </div>
      </header>
    </FullScreenLayout>
  );
}
