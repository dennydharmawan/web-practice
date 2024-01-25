import { useState } from 'react';

import { Anchor, Button, Card } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';
import { cn } from '@/lib/utils';

export default function SubcriptionPricingPage() {
  const [activeItem, setActiveItem] = useState<0 | 1 | null>(null);

  const toggleActiveItem = (itemId: 0 | 1) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === itemId ? null : itemId));
  };

  return (
    <FullScreenLayout className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500">
      <main className="super-centered">
        <img
          height={100}
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          width={100}
        />
        <section aria-labelledby="pricing-title">
          <Card className="flex flex-col gap-8" padding="xl" radius="md" shadow="sm" withBorder>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-600" id="pricing-title">
                Try FREE for 4 weeks
              </h1>
              <p className="font-semibold text-slate-600">
                We uncover the facts around the clock, all over the globe
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-6">
                <li onClick={() => toggleActiveItem(0)}>
                  <Card
                    className={cn('border-slate-600 hover:bg-gray-100 hover:text-gray-600', {
                      'bg-primary-200': activeItem === 0
                    })}
                    shadow="sm"
                    withBorder
                  >
                    <h2 className="text-lg font-semibold uppercase">Monthly</h2>
                    <p className="text-2xl font-bold">4 weeks for free</p>
                    <p className="text-lg text-slate-600">Then 3$ every month for the first year</p>
                  </Card>
                </li>

                <li onClick={() => toggleActiveItem(1)}>
                  <Card
                    className={cn('border-slate-600 hover:bg-gray-100 hover:text-gray-600', {
                      'bg-primary-200': activeItem === 1
                    })}
                    shadow="sm"
                    withBorder
                  >
                    <h2 className="text-lg font-semibold uppercase">Yearly</h2>
                    <p className="text-2xl font-bold">4 weeks for free</p>
                    <p className="text-lg text-slate-600">Then 30$ for the first year</p>
                  </Card>
                </li>
              </ul>
            </div>

            <nav className="m-auto flex flex-col gap-3">
              <Button variant="filled">Continue</Button>
              <Button variant="outline">Continue with paypal</Button>
              <Anchor className="m-auto mt-5 font-semibold" underline="always">
                View more offers
              </Anchor>
            </nav>
          </Card>
        </section>
      </main>
    </FullScreenLayout>
  );
}
