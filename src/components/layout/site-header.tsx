'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CodeIcon, MenuIcon } from 'lucide-react';

import { cn } from '~/lib/cn';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

const menuItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Services',
    link: '#services',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header>
      <div className='container mx-auto flex h-14 items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 text-xl font-semibold'>
          <CodeIcon className='text-primary size-5' />
          <div>
            Stack<span className='text-primary'>ora</span>
          </div>
        </Link>
        <nav className='hidden gap-10 md:flex'>
          {menuItems.map(item => (
            <Link
              className={cn('text-muted-foreground hover:text-foreground', pathname === item.link && 'text-foreground')}
              key={item.link}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger className='md:hidden' asChild>
            <Button variant='ghost'>
              <MenuIcon className='size-5' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-26'>
            {menuItems.map(item => (
              <DropdownMenuItem key={item.link} className='p-0'>
                <Link
                  className={cn(
                    'text-muted-foreground w-full px-2 py-1.5',
                    pathname === item.link && 'text-foreground'
                  )}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
