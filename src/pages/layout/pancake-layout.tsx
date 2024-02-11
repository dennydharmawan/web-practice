import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function PancakeLayoutPage() {
  return (
    <FullScreenLayout>
      <div className="super-centered pancake-grid gap-4">
        <div className="bg-slate-300">a</div>
        <div className="bg-slate-300">b</div>
        <div className="bg-slate-300">c</div>
      </div>
    </FullScreenLayout>
  );
}
