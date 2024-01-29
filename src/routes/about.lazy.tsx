import { createLazyFileRoute } from '@tanstack/react-router';

import DesignShowcaseIllustration from '@/components/ui/design-showcase-illustration';

export const Route = createLazyFileRoute('/about')({
  component: About
});

function About() {
  return (
    <div className="p-2">
      <DesignShowcaseIllustration />
    </div>
  );
}
