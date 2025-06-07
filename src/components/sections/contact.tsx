'use client';

import { useState } from 'react';

import { MailIcon, PhoneIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

export function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');

    setTimeout(() => {
      setSubmitting(false);
      setSuccessMessage('Thank you! Your message has been sent.');
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id='contact' className='pt-24 pb-48'>
      <div className='container mx-auto grid grid-cols-1 items-start gap-12 md:grid-cols-2'>
        <div>
          <h2 className='mb-6 text-3xl font-bold'>Let&apos;s Get in Touch</h2>
          <p className='text-muted-foreground mb-8'>
            Reach out to discuss your project, request a quote, or just say hello. We&apos;ll get back to you within one
            business day.
          </p>

          <div className='space-y-4 text-sm'>
            <div className='flex items-center gap-3'>
              <PhoneIcon className='text-primary h-5 w-5' />
              <a href='tel:+923445258901' className='hover:underline'>
                +92 3445258901
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <MailIcon className='text-primary h-5 w-5' />
              <a href='mailto:info@saabstack.com' className='hover:underline'>
                info@saabstack.com
              </a>
            </div>
          </div>
        </div>

        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input type='text' placeholder='First Name' required />
            <Input type='text' placeholder='Last Name' required />
          </div>
          <Input type='email' placeholder='Your Email' required />
          <Textarea placeholder='Your Message' rows={5} required />
          <Button type='submit' size='lg' disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
          {successMessage && <p className='text-green-600'>{successMessage}</p>}
        </form>
      </div>
    </section>
  );
}
