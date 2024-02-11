import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function AsideHack() {
  return (
    <FullScreenLayout>
      <div className="super-centered">
        {/* make flex item full-width after it's been wrapped without using media queries */}
        <div className="flex max-w-[300px] flex-wrap bg-green-300">
          <div className="flex-grow bg-teal-300">main content</div>
          <div className="flex-grow-[9999] bg-orange-dark-300">
            aside bar
            {/* <div className="h-1 w-[300px]"></div> */}
          </div>
        </div>

        <div className="mt-3 flex max-w-[300px] flex-wrap bg-green-300">
          <div className="flex-grow bg-teal-300">main content</div>
          <div className="flex-grow-[9999] bg-orange-dark-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quidem!
          </div>
        </div>
      </div>
    </FullScreenLayout>
  );
}
