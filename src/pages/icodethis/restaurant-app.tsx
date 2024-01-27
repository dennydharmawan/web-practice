import { Badge, Image, Rating } from '@mantine/core';
import { IconCornerUpRight, IconMenuDeep, IconSearch } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function RestaurantApp() {
  return (
    <FullScreenLayout>
      <div className="super-centered">
        <section className="content-grid w-[380px] overflow-hidden rounded-3xl  bg-[#e27000] text-slate-900 shadow-xl shadow-orange-50 [--custom-padding-inline:1.5rem]">
          <header className="full-width content-grid overflow-hidden border-b-2 border-[#983a08] bg-[#bb4b02] text-white">
            <div className="flex items-center justify-between py-4">
              <IconMenuDeep className="-scale-x-100" />
              <h1 className="">Go-Food</h1>
              <IconSearch />
            </div>
          </header>

          <div className="full-width max-h-[480px] min-h-[480px] divide-y overflow-auto text-white [scrollbar-gutter:auto]">
            {menu.map((menu, idx) => (
              <div
                className="grid grid-cols-[minmax(60px,2fr)_8fr_minmax(max-content,2fr)] items-center gap-3 px-[var(--custom-padding-inline)] py-3"
                key={idx}
              >
                <Image className="aspect-square w-full" fit="cover" radius="md" src={menu.imageUrl} />
                <section className="flex max-w-full flex-col gap-1 self-start overflow-hidden">
                  <div className="max-w-full overflow-auto text-ellipsis whitespace-nowrap font-bold hover:cursor-pointer [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar]:w-6">
                    {menu.name}
                  </div>
                  <Rating color="yellow.3" defaultValue={3} readOnly value={menu.rating} />
                  <div className="flex flex-wrap gap-1 py-1">
                    <Badge color="white" size="sm" variant="outline">
                      various
                    </Badge>
                    <Badge color="white" size="sm" variant="outline">
                      edget
                    </Badge>
                  </div>
                </section>
                <section>
                  <IconCornerUpRight className="m-auto" size={36} />
                  <h3 className="text-center font-semibold">{menu.distance + ' km'}</h3>
                </section>
              </div>
            ))}
          </div>
        </section>
      </div>
    </FullScreenLayout>
  );
}

// const colors = {
//   '50': '#fffbea',
//   '100': '#fff2c5',
//   '200': '#ffe585',
//   '300': '#ffd046',
//   '400': '#ffbb1b',
//   '500': '#ff9700',
//   '600': '#e27000',
//   '700': '#bb4b02',
//   '800': '#983a08',
//   '900': '#7c300b',
//   '950': '#481600'
// };

const menu = [
  {
    bookmark: false,
    distance: 2.5,
    id: 1,
    imageUrl:
      'https://images.pexels.com/photos/10922929/pexels-photo-10922929.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    name: 'Milis Burger',
    rating: 4,
    tags: ['gluten-free', 'fast-food', 'vegetarian', 'salads', 'pasta', 'grill', 'american']
  },
  {
    bookmark: true,
    distance: 3.8,
    id: 2,
    imageUrl:
      'https://images.pexels.com/photos/4661987/pexels-photo-4661987.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    name: 'Pizza Per Tutti',
    rating: 5,
    tags: ['italian', 'pizzas', 'pasta', 'anti-pasta', 'gluten-free', 'fast-food', 'vegetarian']
  },
  {
    bookmark: false,
    distance: 1.5,
    id: 3,
    imageUrl:
      'https://images.pexels.com/photos/8251536/pexels-photo-8251536.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    name: 'Everything Green',
    rating: 3,
    tags: ['salads', 'vegan', 'vegetarian', 'gluten-free', 'pasta']
  },
  {
    bookmark: false,
    distance: 4.2,
    id: 4,
    imageUrl:
      'https://images.pexels.com/photos/5900504/pexels-photo-5900504.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    name: 'Sushi Galore',
    rating: 2,
    tags: ['sushi', 'fish', 'traditional', 'salads', 'gluten-free']
  },
  {
    bookmark: false,
    distance: 2.0,
    id: 5,
    imageUrl:
      'https://images.pexels.com/photos/5386671/pexels-photo-5386671.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    name: 'Patsies Postres',
    rating: 5,
    tags: ['chocolate', 'ice cream', 'jelly', 'custard', 'vegetarian']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 2.0,
    id: 6,
    imageUrl: 'https://source.unsplash.com/150x150/?burger',
    name: 'Burger Bistro',
    rating: 4.2,
    tags: ['burgers', 'american', 'fast-food']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 1.5,
    id: 7,
    imageUrl: 'https://source.unsplash.com/150x150/?sushi',
    name: 'Sushi Sensation',
    rating: 3,
    tags: ['sushi', 'japanese', 'seafood']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 4.5,
    id: 8,
    imageUrl: 'https://source.unsplash.com/150x150/?tacos',
    name: 'Taco Time',
    rating: 4,
    tags: ['mexican', 'tacos', 'spicy']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 2.5,
    id: 9,
    imageUrl: 'https://source.unsplash.com/150x150/?pasta',
    name: 'Pasta Palace',
    rating: 5,
    tags: ['italian', 'pasta', 'gluten-free', 'vegetarian']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 3.0,
    id: 10,
    imageUrl: 'https://source.unsplash.com/150x150/?wok',
    name: 'Wok Wonderland',
    rating: 2,
    tags: ['asian', 'chinese', 'stir-fry']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 1.8,
    id: 11,
    imageUrl: 'https://source.unsplash.com/150x150/?greek-food',
    name: 'Mediterranean Delight',
    rating: 4.7,
    tags: ['mediterranean', 'kebabs', 'hummus']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 2.8,
    id: 12,
    imageUrl: 'https://source.unsplash.com/150x150/?steak',
    name: 'Sizzling Steaks',
    rating: 3,
    tags: ['steakhouse', 'grill', 'bbq']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 3.2,
    id: 13,
    imageUrl: 'https://source.unsplash.com/150x150/?salad',
    name: 'Vegan Vibes',
    rating: 3,
    tags: ['vegan', 'plant-based', 'healthy']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 1.2,
    id: 14,
    imageUrl: 'https://source.unsplash.com/150x150/?fried-fish',
    name: "Fisherman's Catch",
    rating: 1,
    tags: ['seafood', 'fresh', 'grilled']
  },
  {
    bookmark: Math.random() < 0.5,
    distance: 2.3,
    id: 15,
    imageUrl: 'https://source.unsplash.com/150x150/?noodles',
    name: 'Noodle Nirvana',
    rating: 1,
    tags: ['asian', 'noodles', 'ramen']
  }
];
