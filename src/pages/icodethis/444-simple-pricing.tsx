import { Button, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function SimplePricingPage() {
  return (
    <FullScreenLayout>
      <div className="super-centered">
        <div className="flex gap-5">
          <div className="min-w-[20rem] rounded-md border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <div className="block cursor-pointer">
              <section className="h-full w-full">
                <div className="h-full px-6 py-5 text-left">
                  <div className="mb-4">
                    <h1 className="text-2xl font-bold text-purple-600">Starter</h1>
                    <p className="font-semibold text-slate-600">Free</p>
                  </div>

                  <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <ThemeIcon color="purple.6" size={24} radius="xl">
                        <IconCircleCheck size={16} />
                      </ThemeIcon>
                    }
                    className="text-slate-950"
                  >
                    <List.Item>Unlimited files</List.Item>
                    <List.Item>Unlimited editos</List.Item>
                    <List.Item>Unlimited cloud storage</List.Item>
                  </List>

                  <Button color="purple.6" className="mt-6">
                    Choose Starter
                  </Button>
                </div>
              </section>
            </div>
          </div>

          <div className="min-w-[20rem] rounded-md border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <div className="block cursor-pointer">
              <section className="h-full w-full">
                <div className="h-full px-6 py-5 text-left">
                  <div className="mb-4">
                    <h1 className="text-2xl font-bold text-pink-600">Professional</h1>
                    <p className="font-semibold text-slate-600">$12 per member</p>
                  </div>

                  <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <ThemeIcon color="pink.6" size={24} radius="xl">
                        <IconCircleCheck size={16} />
                      </ThemeIcon>
                    }
                    className="text-slate-950"
                  >
                    <List.Item>Unlimited projects</List.Item>
                    <List.Item>Private Projects</List.Item>
                    <List.Item>Team libraries</List.Item>
                  </List>

                  <Button color="pink.6" className="mt-6">
                    Choose Professional
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </FullScreenLayout>
  );
}
