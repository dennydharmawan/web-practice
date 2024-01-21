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

          <div className="full-width max-h-[480px] min-h-[480px] divide-y overflow-auto text-white">
            {menu.map((menu, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[minmax(60px,2fr)_8fr_minmax(max-content,2fr)] items-center gap-3 px-[var(--custom-padding-inline)] py-3"
              >
                <Image radius="md" src={menu.imageUrl} fit="cover" className="aspect-square w-full" />
                <section className="flex flex-col gap-1 self-start">
                  <div className="shrink-0 overflow-hidden text-ellipsis whitespace-nowrap bg-yellow-100 font-bold">
                    {menu.name}
                  </div>
                  <Rating value={menu.rating} defaultValue={3} color="yellow.3" readOnly />
                  <div className="flex flex-wrap gap-1 py-1">
                    <Badge color="white" variant="outline" size="sm">
                      various
                    </Badge>
                    <Badge color="white" variant="outline" size="sm">
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
    id: 1,
    name: 'Milis Burgers asdasdasdasdasdasdsa',
    imageUrl:
      'https://images.pexels.com/photos/10922929/pexels-photo-10922929.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    rating: 4,
    distance: 2.5,
    tags: ['gluten-free', 'fast-food', 'vegetarian', 'salads', 'pasta', 'grill', 'american'],
    bookmark: false
  },
  {
    id: 2,
    name: 'Pizza Per Tutti',
    imageUrl:
      'https://images.pexels.com/photos/4661987/pexels-photo-4661987.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    rating: 5,
    distance: 3.8,
    tags: ['italian', 'pizzas', 'pasta', 'anti-pasta', 'gluten-free', 'fast-food', 'vegetarian'],
    bookmark: true
  },
  {
    id: 3,
    name: 'Everything Green',
    imageUrl:
      'https://images.pexels.com/photos/8251536/pexels-photo-8251536.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    rating: 3,
    distance: 1.5,
    tags: ['salads', 'vegan', 'vegetarian', 'gluten-free', 'pasta'],
    bookmark: false
  },
  {
    id: 4,
    name: 'Sushi Galore',
    imageUrl:
      'https://images.pexels.com/photos/5900504/pexels-photo-5900504.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    rating: 2,
    distance: 4.2,
    tags: ['sushi', 'fish', 'traditional', 'salads', 'gluten-free'],
    bookmark: false
  },
  {
    id: 5,
    name: 'Patsies Postres',
    imageUrl:
      'https://images.pexels.com/photos/5386671/pexels-photo-5386671.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1',
    rating: 5,
    distance: 2.0,
    tags: ['chocolate', 'ice cream', 'jelly', 'custard', 'vegetarian'],
    bookmark: false
  },
  {
    id: 6,
    name: 'Burger Bistro',
    imageUrl: 'https://source.unsplash.com/150x150/?burger',
    rating: 4.2,
    distance: 2.0,
    tags: ['burgers', 'american', 'fast-food'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 7,
    name: 'Sushi Sensation',
    imageUrl: 'https://source.unsplash.com/150x150/?sushi',
    rating: 3,
    distance: 1.5,
    tags: ['sushi', 'japanese', 'seafood'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 8,
    name: 'Taco Time',
    imageUrl: 'https://source.unsplash.com/150x150/?tacos',
    rating: 4,
    distance: 4.5,
    tags: ['mexican', 'tacos', 'spicy'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 9,
    name: 'Pasta Palace',
    imageUrl: 'https://source.unsplash.com/150x150/?pasta',
    rating: 5,
    distance: 2.5,
    tags: ['italian', 'pasta', 'gluten-free', 'vegetarian'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 10,
    name: 'Wok Wonderland',
    imageUrl: 'https://source.unsplash.com/150x150/?wok',
    rating: 2,
    distance: 3.0,
    tags: ['asian', 'chinese', 'stir-fry'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 11,
    name: 'Mediterranean Delight',
    imageUrl: 'https://source.unsplash.com/150x150/?greek-food',
    rating: 4.7,
    distance: 1.8,
    tags: ['mediterranean', 'kebabs', 'hummus'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 12,
    name: 'Sizzling Steaks',
    imageUrl: 'https://source.unsplash.com/150x150/?steak',
    rating: 3,
    distance: 2.8,
    tags: ['steakhouse', 'grill', 'bbq'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 13,
    name: 'Vegan Vibes',
    imageUrl: 'https://source.unsplash.com/150x150/?salad',
    rating: 3,
    distance: 3.2,
    tags: ['vegan', 'plant-based', 'healthy'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 14,
    name: "Fisherman's Catch",
    imageUrl: 'https://source.unsplash.com/150x150/?fried-fish',
    rating: 1,
    distance: 1.2,
    tags: ['seafood', 'fresh', 'grilled'],
    bookmark: Math.random() < 0.5
  },
  {
    id: 15,
    name: 'Noodle Nirvana',
    imageUrl: 'https://source.unsplash.com/150x150/?noodles',
    rating: 1,
    distance: 2.3,
    tags: ['asian', 'noodles', 'ramen'],
    bookmark: Math.random() < 0.5
  }
];
