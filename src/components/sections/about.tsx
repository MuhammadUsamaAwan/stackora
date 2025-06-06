'use client';

import { CodeIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';

export function About() {
  return (
    <section id='about' className='py-24 text-gray-300'>
      <div className='container mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2'>
        <div>
          <Badge variant='outline' className='mb-6 text-sm tracking-widest text-gray-400'>
            ABOUT STACKORA
          </Badge>

          <h2 className='mb-6 text-4xl font-extrabold tracking-tight text-white drop-shadow-md md:text-5xl'>
            Building Bold Digital Futures, Together.
          </h2>

          <p className='mb-6 text-lg leading-relaxed text-gray-400'>
            At Stackora, we believe technology should do more than just work — it should inspire, connect, and
            transform. Our mission is to empower businesses with innovative web, mobile, and design solutions that truly
            make a difference.
          </p>

          <p className='max-w-xl text-gray-500 italic'>
            “Craftsmanship in code. Passion in design. Partnership in vision.”
          </p>
        </div>

        <div className='flex justify-center'>
          <CodeIcon className='text-primary size-70' />
        </div>
      </div>
    </section>
  );
}
