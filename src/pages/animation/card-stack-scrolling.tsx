import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function CardStackScrolling() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end start'],
    target: ref
  });

  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <FullScreenLayout>
      <div className="content-grid">
        <div className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat veritatis fuga magni ducimus
          similique odio dolorum unde? Sint culpa consequatur laboriosam, aut libero exercitationem qui
          consequuntur? Sed temporibus tenetur a quam debitis autem commodi similique rerum. Aperiam cum, odit
          alias quidem soluta cumque qui! Laborum debitis magni odit ipsa, reiciendis mollitia quasi numquam
          temporibus qui aperiam voluptates quos ipsum doloremque inventore quod quibusdam cum dolor? Quia
          officia ea nobis, enim perferendis nisi illo esse eaque possimus dignissimos vitae, numquam optio
          minus aspernatur voluptas molestias expedita qui! Ut, reiciendis? Perferendis provident optio
          veritatis a nihil harum eveniet, illo aliquid rerum?
        </div>

        <div
          className="relative mx-auto grid w-full justify-center gap-12 overflow-visible bg-slate-700"
          ref={ref}
        >
          <motion.div className="sticky top-[3rem] flex h-[800px] w-[920px] bg-red-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem nemo consequatur et earum omnis
            ad totam quisquam eius pariatur non voluptatibus distinctio iste, a cum veniam exercitationem
            laborum quidem similique quasi esse explicabo odit. Veritatis iure ipsam molestias voluptas
            ducimus nulla nisi. Voluptates, nemo architecto, eum officiis modi velit optio qui facere sed
            impedit iusto aut provident, ipsam ex deleniti ipsum tempore! Error voluptates explicabo libero ad
            iure, commodi nobis sunt nam placeat atque harum deserunt quaerat, repellat aliquid, reprehenderit
            eligendi enim eveniet modi quibusdam ullam! Eveniet repellendus quam doloribus voluptatum eaque,
            sequi eum perspiciatis nihil, cupiditate repudiandae necessitatibus!
          </motion.div>

          <motion.div className="sticky top-[3rem] flex h-[800px] w-[920px] bg-green-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem nemo consequatur et earum omnis
            ad totam quisquam eius pariatur non voluptatibus distinctio iste, a cum veniam exercitationem
            laborum quidem similique quasi esse explicabo odit. Veritatis iure ipsam molestias voluptas
            ducimus nulla nisi. Voluptates, nemo architecto, eum officiis modi velit optio qui facere sed
            impedit iusto aut provident, ipsam ex deleniti ipsum tempore! Error voluptates explicabo libero ad
            iure, commodi nobis sunt nam placeat atque harum deserunt quaerat, repellat aliquid, reprehenderit
            eligendi enim eveniet modi quibusdam ullam! Eveniet repellendus quam doloribus voluptatum eaque,
            sequi eum perspiciatis nihil, cupiditate repudiandae necessitatibus!
          </motion.div>

          <motion.div className="sticky top-[3rem] flex h-[800px] w-[920px] bg-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem nemo consequatur et earum omnis
            ad totam quisquam eius pariatur non voluptatibus distinctio iste, a cum veniam exercitationem
            laborum quidem similique quasi esse explicabo odit. Veritatis iure ipsam molestias voluptas
            ducimus nulla nisi. Voluptates, nemo architecto, eum officiis modi velit optio qui facere sed
            impedit iusto aut provident, ipsam ex deleniti ipsum tempore! Error voluptates explicabo libero ad
            iure, commodi nobis sunt nam placeat atque harum deserunt quaerat, repellat aliquid, reprehenderit
            eligendi enim eveniet modi quibusdam ullam! Eveniet repellendus quam doloribus voluptatum eaque,
            sequi eum perspiciatis nihil, cupiditate repudiandae necessitatibus!
          </motion.div>

          {/* <div className="bg-red-100">a</div>
          <div className="bg-red-100">a</div> */}
        </div>

        <div className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat veritatis fuga magni ducimus
          similique odio dolorum unde? Sint culpa consequatur laboriosam, aut libero exercitationem qui
          consequuntur? Sed temporibus tenetur a quam debitis autem commodi similique rerum. Aperiam cum, odit
          alias quidem soluta cumque qui! Laborum debitis magni odit ipsa, reiciendis mollitia quasi numquam
          temporibus qui aperiam voluptates quos ipsum doloremque inventore quod quibusdam cum dolor? Quia
          officia ea nobis, enim perferendis nisi illo esse eaque possimus dignissimos vitae, numquam optio
          minus aspernatur voluptas molestias expedita qui! Ut, reiciendis? Perferendis provident optio
          veritatis a nihil harum eveniet, illo aliquid rerum?
        </div>
      </div>
    </FullScreenLayout>
  );
}
