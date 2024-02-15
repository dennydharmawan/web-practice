import { Card } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function TransparentGradient() {
  return (
    <FullScreenLayout>
      <div className="super-centered">
        <Card className="max-w-prose [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugit, molestias odio atque minima
          qui fuga nihil nam deserunt expedita, voluptates iure earum voluptatem sint numquam aliquam eaque
          ipsam corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta
          molestias pariatur, atque, officiis quidem ab voluptatibus laudantium animi, id cum! Dignissimos
          numquam voluptates tempora doloremque sapiente quaerat cumque labore!
        </Card>

        <Card className="max-w-prose bg-[linear-gradient(to_bottom,black_0%,transparent_100%)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugit, molestias odio atque minima
          qui fuga nihil nam deserunt expedita, voluptates iure earum voluptatem sint numquam aliquam eaque
          ipsam corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta
          molestias pariatur, atque, officiis quidem ab voluptatibus laudantium animi, id cum! Dignissimos
          numquam voluptates tempora doloremque sapiente quaerat cumque labore!
        </Card>

        <Card className="max-w-prose [background-image:linear-gradient(to_bottom,black_0%,transparent_100%)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugit, molestias odio atque minima
          qui fuga nihil nam deserunt expedita, voluptates iure earum voluptatem sint numquam aliquam eaque
          ipsam corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta
          molestias pariatur, atque, officiis quidem ab voluptatibus laudantium animi, id cum! Dignissimos
          numquam voluptates tempora doloremque sapiente quaerat cumque labore!
        </Card>
      </div>
    </FullScreenLayout>
  );
}
