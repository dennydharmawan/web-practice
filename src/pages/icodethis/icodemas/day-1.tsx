import { useEffect, useState } from 'react';
import { intervalToDuration, weeksToDays, type Duration } from 'date-fns';

import { padNumber } from '@/lib/utils';

function App() {
  const [calculatedDuration, setCalculatedDuration] = useState<Required<Duration>>({
    years: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    months: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = intervalToDuration({
        start: new Date(),
        end: new Date('2024-12-25')
      });

      setCalculatedDuration({
        years: duration.years || 0,
        weeks: duration.weeks || 0,
        days: duration.days || 0,
        hours: duration.hours || 0,
        minutes: duration.minutes || 0,
        months: duration.months || 0,
        seconds: duration.seconds || 0
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className="content-grid centering relative min-h-screen min-w-[100vw] bg-blue-100 bg-[url('https://icodethis.com/images/iCodeMas/snow_bg.png')] bg-cover bg-center bg-no-repeat text-center text-white">
        <img
          src="https://icodethis.com/images/iCodeMas/santa.png"
          alt="snowman"
          className="absolute bottom-12 right-0 max-w-xs"
        />
        <img
          src="https://icodethis.com/images/iCodeMas/snowman.png"
          alt="snowman"
          className="absolute bottom-12 left-12 max-w-[13rem]"
        />

        <h1 className="mb-3 text-5xl font-bold">iCodeMas is coming to town</h1>
        <div className="centering mb-14">
          <p>Celebrate the Magic of the Season! Exclusive Christmas Challenges for 24 days.</p>
        </div>
        <div className="flexbox-grid m-auto">
          <div className="flex aspect-square w-[160px] flex-col items-center justify-center rounded-xl bg-white/30 text-white shadow-sm backdrop-blur-sm">
            <div className="text-7xl font-extrabold">
              {padNumber(weeksToDays(calculatedDuration.weeks) + calculatedDuration.days)}
            </div>
            <div className="font-medium capitalize">days</div>
          </div>

          <div className="flex aspect-square w-[160px] flex-col items-center justify-center rounded-xl bg-white/30 text-white shadow-sm backdrop-blur-sm">
            <div className="text-7xl font-extrabold">{padNumber(calculatedDuration.hours)}</div>
            <div className="font-medium capitalize">hours</div>
          </div>

          <div className="flex aspect-square w-[160px] flex-col items-center justify-center rounded-xl bg-white/30 text-white shadow-sm backdrop-blur-sm">
            <div className="text-7xl font-extrabold">{padNumber(calculatedDuration.minutes)}</div>
            <div className="font-medium capitalize">mins</div>
          </div>

          <div className="flex aspect-square w-[160px] flex-col items-center justify-center rounded-xl bg-white/30 text-white shadow-sm backdrop-blur-sm">
            <div className="text-7xl font-extrabold">{padNumber(calculatedDuration.seconds)}</div>
            <div className="font-medium capitalize">secs</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
