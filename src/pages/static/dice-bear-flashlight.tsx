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
        <div
          className="bg-stone-900 relative grid w-[510px] grid-cols-1 gap-2 [&>*:nth-child(even)]:grid-cols-6 [&>*:nth-child(odd)]:grid-cols-5 "
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg width='750' height='750' viewBox='0 0 750 750' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_f_111_2)'%3E%3Crect x='180' y='180' width='390' height='390' rx='100' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_111_2' x='0' y='0' width='750' height='750' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='57.5' result='effect1_foregroundBlur_111_2'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A\")",
            maskPosition: 'center center',
            maskSize: '120% 120%'
          }}
        >
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
