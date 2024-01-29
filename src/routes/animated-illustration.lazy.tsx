import { createLazyFileRoute } from '@tanstack/react-router';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import DesignShowcaseIllustration from '@/components/ui/design-showcase-illustration';

export const Route = createLazyFileRoute('/animated-illustration')({
  component: AnimatedIllustrationPage
});

export default function AnimatedIllustrationPage() {
  // [&>*]:[transform:rotateY(-20deg)_rotateX(20deg)]
  // [perspective-origin:left_up] [perspective:5000px] [transform-style:flat]
  return (
    <FullScreenLayout>
      <div className="content-grid h-[890px] bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
        <div>
          <DesignShowcaseIllustration />
        </div>
      </div>
    </FullScreenLayout>
  );
}
