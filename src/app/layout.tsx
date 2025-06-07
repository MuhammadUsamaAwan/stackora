import type { Metadata } from 'next';

import { fontSans } from '~/lib/fonts';
import { Background } from '~/components/layout/background';
import { SiteHeader } from '~/components/layout/site-header';

import '~/styles/globals.css';

import { cn } from '~/lib/cn';
import { SiteFooter } from '~/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'SaaBstack | Web, Mobile, UX/UI Solutions',
  description:
    'SaaBstack crafts high-performance web and mobile applications with world-class UX/UI design. Scalable. Secure. Stunning.',
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(fontSans.variable, 'antialiased')}>
        <SiteHeader />
        <main>{children}</main>
        <Background />
        <SiteFooter />
      </body>
    </html>
  );
}
