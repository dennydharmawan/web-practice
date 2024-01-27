import { Button, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

// https://dribbble.com/shots/20089421-Summer-Travel-Price-Plan
export default function SimplePricingPage() {
  return (
    <FullScreenLayout className="bg-[#FF4B01]">
      <div className="super-centered">
        <section className="content-grid clip aspect-[4/3] h-[92vh] bg-[linear-gradient(to_top_right,_#FF4B01_50%,_#F0B103_50%)] drop-shadow-2xl">
          <div className="flex flex-col gap-8 py-10">
            <div className="mx-auto text-center">
              <h1 className="text-5xl font-bold capitalize">Summer Travel price Plan</h1>
              <h2 className="text-3xl font-semibold text-slate-700">Pick Your Summer Plan</h2>
            </div>

            <div className="flex h-full gap-12">
              <div className="flex h-full w-1/2 flex-col gap-6 rounded-b-3xl rounded-tl-[304px] rounded-tr-xl border-4 border-slate-950 bg-white px-6 py-6 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                <section>
                  <img
                    alt="beach"
                    className="mb-3 rounded-b-3xl rounded-tl-[304px] rounded-tr-xl object-cover"
                    src="https://images.pexels.com/photos/3293150/pexels-photo-3293150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />

                  <h1 className="text-2xl font-bold text-purple-700">Coral Paradise Resort</h1>
                  <p className="text-slate-700">123 Oceanfront Avenue, Seaside Cove, Paradise Island</p>
                </section>

                {/* [&>ul~ul]:mt-3 */}
                <section className="pancake-grid">
                  <List
                    center
                    className="columns-2 font-semibold text-slate-950"
                    icon={
                      <ThemeIcon color="purple.7" radius="xl" size={24}>
                        <IconCircleCheck size={18} />
                      </ThemeIcon>
                    }
                    size="sm"
                    spacing="xs"
                  >
                    <List.Item>3 night 4 days</List.Item>
                    <List.Item>4 people</List.Item>
                    <List.Item>Transport Included</List.Item>
                    <List.Item>4 Travel spots</List.Item>
                    <List.Item>Dinner Included</List.Item>
                    <List.Item>Lunch Included</List.Item>
                    <List.Item>4 Individual Room</List.Item>
                    <List.Item>Free Wifi</List.Item>
                  </List>
                </section>

                <div className="flex justify-center">
                  <Button
                    className="border-2 border-slate-950 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                    color="purple.7"
                    size="xl"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="flex h-full w-1/2 flex-col gap-6 rounded-b-3xl rounded-tl-xl rounded-tr-[304px] border-4 border-slate-950 bg-white px-6 py-6 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                <section>
                  <img
                    alt="beach"
                    className="mb-3 rounded-b-3xl rounded-tl-xl rounded-tr-[304px] object-cover"
                    src="https://images.pexels.com/photos/3319815/pexels-photo-3319815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />

                  <h1 className="text-2xl font-bold text-pink-700">Sunset Sands Retreat</h1>
                  <p className="text-slate-700"> 456 Palm Beach Road, Golden Shores, Sun Haven Bay</p>
                </section>

                {/* [&>ul~ul]:mt-3 */}
                <section className="pancake-grid">
                  <List
                    center
                    className="columns-2 font-semibold text-slate-950"
                    icon={
                      <ThemeIcon color="pink.7" radius="xl" size={24}>
                        <IconCircleCheck size={18} />
                      </ThemeIcon>
                    }
                    size="sm"
                    spacing="xs"
                  >
                    <List.Item>3 night 4 days</List.Item>
                    <List.Item>4 people</List.Item>
                    <List.Item>Transport Included</List.Item>
                    <List.Item>4 Travel spots</List.Item>
                    <List.Item>Dinner Included</List.Item>
                    <List.Item>Lunch Included</List.Item>
                    <List.Item>4 Individual Room</List.Item>
                    <List.Item>Free Wifi</List.Item>
                  </List>
                </section>

                <div className="flex justify-center">
                  <Button
                    className="border-2 border-slate-950 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                    color="pink.7"
                    size="xl"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
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
        </div> */}
      </div>
    </FullScreenLayout>
  );
}
