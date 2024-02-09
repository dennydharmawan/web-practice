import { FullScreenLayout } from '@/components/layout/full-screen-layout';

const avatars = [
  ['Lola', 'Buddy', 'Shadow', 'Muffin', 'Lilly'],
  ['Princess', 'Peanut', 'Oreo', 'Jasper', 'Bear', 'Gizmo'],
  ['Bailey', 'Felix', 'logo', 'Abby', 'Harley'],
  ['Nala', 'Jasper', 'Princess', 'Rocky', 'Harley', 'Harley'],
  ['Dusty', 'Simba', 'Zoe', 'Loki', 'Sasha']
];

export default function DiceBearFlashlight() {
  return (
    <FullScreenLayout className="bg-slate-800">
      <div className="super-centered">
        <div className="bg-stone-900 relative grid w-[510px] grid-cols-1 gap-2 [mask-image:url('/blur-rectangle.svg')] [mask-position:center_center] [mask-size:120%_120%] [&>*:nth-child(even)]:grid-cols-6 [&>*:nth-child(odd)]:grid-cols-5">
          {avatars.map((avatar, index) => (
            <div className="grid gap-2" key={`container-${index}`}>
              {avatar.map((name, index) => (
                <img
                  className="max-w-full rounded-xl bg-[linear-gradient(135deg,_rgb(253,_235,_113)_10%,_rgb(248,_216,_0)_100%)]"
                  key={`img-${index}`}
                  src={
                    name === 'logo'
                      ? 'https://www.dicebear.com/logo-home.svg'
                      : `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </FullScreenLayout>
  );
}
