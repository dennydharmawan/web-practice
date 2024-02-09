import { Card } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function PortfolioProject() {
  return (
    <FullScreenLayout className="bg-slate-950 text-white">
      <div className="super-centered">
        <Card className="relative isolate w-[360px] bg-slate-900 text-white" padding="xl">
          {/* <div className="absolute aspect-square w-full bg-[radial-gradient(closest-side,rgba(255,230,0,0.21),#1E293B)]"></div> */}
          <div className="pointer-events-none absolute aspect-square w-[120px] bg-[#cbd5e1] blur-[120px] "></div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, dolore illo. Quas veritatis nemo,
          repudiandae excepturi repellat eos placeat, in ratione delectus explicabo vero sunt magni! Id illo
          cupiditate nihil.
        </Card>
      </div>
    </FullScreenLayout>
  );
}
