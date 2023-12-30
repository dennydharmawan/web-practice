import { IconTruckDelivery, IconUserQuestion, IconWallet } from '@tabler/icons-react';

// INSPIRATION https://www.learnui.design/blog/spice-up-designs.html#icon-highlight-shape

function Features() {
  return (
    <section className="content-grid super-centered relative min-h-[100dvh] min-h-screen bg-slate-700 text-slate-900">
      <div className="deconstructed-pancake-flexbox [--custom-gap:3rem]">
        <div className="flex flex-row flex-wrap gap-4 bg-blue-50 px-4 py-4">
          <div className="relative basis-12">
            <IconTruckDelivery className="relative z-20 h-full w-full text-slate-700" />
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-2 -top-2 z-10 scale-75 text-blue-light-300"
            >
              <path
                fill="currentColor"
                d="M51.1,-33.8C59,-15.9,53,5.6,42.2,23.4C31.4,41.1,15.7,55,-2.6,56.5C-20.9,58,-41.8,47.1,-50,30.8C-58.3,14.6,-53.9,-7,-43.4,-26.4C-33,-45.8,-16.5,-63.1,2.6,-64.6C21.6,-66.1,43.3,-51.8,51.1,-33.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="flexflex-col gap-2">
            <h3 className="text-xl font-semibold">Free shipping</h3>
            <p className="text-slate-600">Free shipping on all orders over $19.99.</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 bg-blue-50 px-4 py-4">
          <div className="relative basis-12">
            <IconWallet className="relative z-20 h-full w-full text-slate-700" />
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-2 -top-2 z-10 scale-75 text-orange-300"
            >
              <path
                fill="currentColor"
                d="M61.6,-53.8C71.1,-37.1,64.3,-12,55,6.1C45.7,24.2,34.1,35.4,22,38.4C9.9,41.5,-2.6,36.5,-9.3,29.4C-15.9,22.3,-16.7,13.1,-15.8,6.6C-15,0,-12.5,-4,-9.6,-19.1C-6.7,-34.3,-3.3,-60.6,11.3,-69.6C26,-78.7,52,-70.4,61.6,-53.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="flex flex-col flex-wrap gap-2">
            <h3 className="text-xl font-semibold">Money back guarantee</h3>
            <p className="text-slate-600">Within 30 days of purchase.</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 bg-blue-50 px-4 py-4">
          <div className="relative basis-12">
            <IconUserQuestion className="relative z-20 h-full w-full text-slate-700" />
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-2 -top-2 z-10 scale-75 text-rose-300"
            >
              <path
                fill="currentColor"
                d="M65.5,-43.4C79.2,-35.1,80.6,-8.2,72.4,12C64.2,32.1,46.3,45.5,27,54C7.7,62.5,-13,66.2,-24.7,58C-36.5,49.7,-39.4,29.7,-44,9.9C-48.6,-9.9,-55,-29.4,-47.9,-36.2C-40.9,-43,-20.4,-37.1,2.7,-39.3C25.9,-41.4,51.8,-51.7,65.5,-43.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Online support</h3>
            <p className="text-slate-600">Our online support is here for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
