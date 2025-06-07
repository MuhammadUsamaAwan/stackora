import Link from 'next/link';

import { ArrowRightIcon } from 'lucide-react';

import { buttonVariants } from '~/components/ui/button';

export function Hero() {
  return (
    <section className='container mx-auto pt-20'>
      <div className='flex justify-center'>
        <div className='border-muted text-foreground/80 flex w-fit justify-center rounded-full border px-4 py-2 text-sm'>
          ⚡ Driving Innovation Through Design & Code
        </div>
      </div>
      <h1 className='mx-auto mt-8 max-w-2xl text-center text-5xl font-extrabold text-balance'>
        Building Beautiful, Scalable Digital Experiences
      </h1>
      <p className='text-muted-foreground mx-auto mt-4 max-w-3xl text-center text-lg text-balance'>
        At SaaBstack, we specialize in crafting exceptional web and mobile solutions with seamless UX/UI design. Whether
        you’re launching a startup or scaling an enterprise platform — we bring your digital vision to life with
        precision and creativity.
      </p>
      <div className='mt-4 flex justify-center'>
        <Link href='#services' className={buttonVariants({ size: 'lg' })}>
          Our Services <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
