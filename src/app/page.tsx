import { About } from '~/components/sections/about';
import { Contact } from '~/components/sections/contact';
import { Hero } from '~/components/sections/hero';
import { Services } from '~/components/sections/services';
import { Team } from '~/components/sections/team';

export default function HomePage() {
  return (
    <div className='mb-30 space-y-10'>
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
    </div>
  );
}
