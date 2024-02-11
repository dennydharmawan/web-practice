import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function KitchenSink() {
  return (
    <FullScreenLayout>
      <div className="">
        <div className="wrapper [--wrapper-content-max-width:400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum ea reiciendis soluta
          repudiandae facilis debitis sint omnis quas veritatis inventore error molestias aliquam, dolores
          laboriosam sequi porro, nihil similique.
        </div>

        <div className="h-3 w-[3rem] bg-red-400"></div>
      </div>
    </FullScreenLayout>
  );
}
