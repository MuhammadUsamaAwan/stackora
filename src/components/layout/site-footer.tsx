'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ChevronRightIcon, MailIcon, PhoneIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    setTimeout(() => {
      setSubmitting(false);
      setMessage('Thanks for subscribing!');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className='bg-background border-border border-t py-12'>
      <div className='container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3'>
        {/* Links */}
        <div>
          <h3 className='mb-6 text-lg font-semibold'>Quick Links</h3>
          <ul className='text-muted-foreground space-y-3'>
            <li>
              <Link href='/' className='hover:text-primary flex items-center'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#services' className='hover:text-primary flex items-center'>
                Services
              </Link>
            </li>
            <li>
              <Link href='#about' className='hover:text-primary flex items-center'>
                About
              </Link>
            </li>
            <li>
              <Link href='#contact' className='hover:text-primary flex items-center'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='mb-6 text-lg font-semibold'>Contact Info</h3>
          <ul className='text-muted-foreground space-y-4 text-sm'>
            <li className='flex items-center gap-3'>
              <PhoneIcon className='text-primary h-5 w-5' />
              <a href='tel:+9233445258901' className='hover:underline'>
                +92 3445258901
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <MailIcon className='text-primary h-5 w-5' />
              <a href='mailto:info@stackora.com' className='hover:underline'>
                info@stackora.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='mb-6 text-lg font-semibold'>Newsletter</h3>
          <p className='text-muted-foreground mb-4 text-sm'>
            Subscribe to get the latest updates, news, and offers from Stackora.
          </p>
          <form onSubmit={handleSubscribe} className='flex flex-col gap-3 sm:flex-row'>
            <Input
              type='email'
              placeholder='Your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='flex-1'
              disabled={submitting}
            />
            <Button type='submit' disabled={submitting} size='sm'>
              {submitting ? 'Sending...' : 'Subscribe'}
            </Button>
          </form>
          {message && <p className='mt-3 text-sm text-green-500'>{message}</p>}
        </div>
      </div>
      <div className='text-muted-foreground mt-12 text-center text-sm'>
        &copy; {new Date().getFullYear()} Stackora. All rights reserved.
      </div>
    </footer>
  );
}
