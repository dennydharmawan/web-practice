import { IconSend } from '@tabler/icons-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

export default function Chat() {
  return (
    <section className="content-grid super-centered relative min-h-[100dvh] min-h-screen bg-slate-700 text-slate-900">
      <div className="m-auto grid max-w-[480px] grid-cols-1 divide-y overflow-clip rounded-xl">
        <div className="text-bold flex flex-col items-center bg-cyan-700 p-6 text-center text-white">
          <h1 className="mb-4 text-xl font-semibold">Virtual assistant</h1>
          <p className="inline-block w-full text-cyan-100">
            Our virtual assistant is ready to assist you, making your online experience seamless and enjoyable
          </p>
        </div>
        <section className="max-h-[320px] space-y-3 overflow-auto bg-white p-4">
          <h3 className="text-center text-slate-400">7 minutes ago</h3>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="inline-block rounded-sm bg-slate-100 p-2">Hi there!</p>
          </div>
          <div className="flex gap-4">
            <p className="ml-[56px] inline-block rounded-sm bg-slate-100 p-2">How can I help you?</p>
          </div>
          <div className="flex justify-end gap-4">
            <p className="inline-block max-w-[336px] rounded-sm bg-blue-light-100 p-2">
              Hello virtual assistant!
            </p>
            <Avatar>
              <AvatarFallback className="bg-green-600 text-white">DD</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex gap-4">
            <p className="ml-[56px] inline-block rounded-sm bg-blue-light-100 p-2">
              What's the weather forecast for tomorrow in New York City?
            </p>
          </div>
        </section>
        <section className="flex items-center bg-white p-4">
          <Input placeholder="Message virtual assistant..." type="text" />

          <IconSend className=" ml-2 text-cyan-700" />
        </section>
      </div>
    </section>
  );
}
