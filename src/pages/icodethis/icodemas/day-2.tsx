import { useState } from 'react';

import { ActionIcon, Button, Image } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

const products = [
  {
    description:
      "Perfect for adding a festive touch to any space, this miniature tree brings the magic of christmas right into your home. Crafted with care, it's delightful.",
    id: 1,
    imgUrl: 'https://icodethis.com/images/iCodeMas/tree.png',
    price: 19.99,
    title: 'Christmas Tree Decoration'
  },
  {
    description:
      "Perfect for adding a festive touch to any space, this miniature tree brings the magic of christmas right into your home. Crafted with care, it's delightful.",
    id: 2,
    imgUrl: 'https://icodethis.com/images/iCodeMas/gift.png',
    price: 21.55,
    title: 'Christmas gift'
  },
  {
    description:
      "Perfect for adding a festive touch to any space, this miniature tree brings the magic of christmas right into your home. Crafted with care, it's delightful.",
    id: 3,
    imgUrl: 'https://icodethis.com/images/iCodeMas/gingerbread_cookie.png',
    price: 30.21,
    title: 'Christmas Gingerbread Cookie'
  }
];

export default function FeatureProductsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <FullScreenLayout className="bg-blue-light-50">
      <section className="prose m-auto text-center">
        <h1>Featured Products</h1>
        <p>
          Discover the magic of Season with our handpicked Feature Products. From enchanting decorations to
          delightful gifts, these curated items are sure to add a touch of joy to your festive celebrations.
        </p>
      </section>
      <section className="pancake-flexbox breakout mt-12">
        <ActionIcon
          className="relative border-0 p-8"
          color="slate.4"
          onClick={() => setActiveTab(0)}
          size="auto"
        >
          <span className="absolute left-0 top-0 bg-blue-navy-700 px-3 py-3">New</span>
          <Image src="https://icodethis.com/images/iCodeMas/tree.png" />
        </ActionIcon>

        <ActionIcon className="relative border-0" color="slate.4" onClick={() => setActiveTab(1)} size="auto">
          <span className="absolute left-0 top-0 bg-error-600 px-3 py-3">-23%</span>
          <img src="https://icodethis.com/images/iCodeMas/gift.png" />
        </ActionIcon>

        <ActionIcon
          className="relative border-0 p-8"
          color="slate.4"
          onClick={() => setActiveTab(2)}
          size="auto"
        >
          <img src="https://icodethis.com/images/iCodeMas/gingerbread_cookie.png" />
        </ActionIcon>
      </section>

      <section className="breakout pancake-flexbox mt-10">
        <div className="super-centered">
          <div className="max-h-[240px]">
            <Image src={products[activeTab].imgUrl} />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{products[activeTab].title}</h3>
          <h4 className="text-xl font-extrabold">${products[activeTab].price}</h4>
          <p className="mt-6 max-w-prose">{products[activeTab].description}</p>
          <Button className="mt-auto self-start" color="cyan.7">
            Add to cart
          </Button>
        </div>
      </section>
    </FullScreenLayout>
  );
}
