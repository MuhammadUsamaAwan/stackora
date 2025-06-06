import { About } from '~/components/sections/about';
import { Contact } from '~/components/sections/contact';
import { Hero } from '~/components/sections/hero';
import { Projects } from '~/components/sections/projects';
import { Services } from '~/components/sections/services';
import { Team } from '~/components/sections/team';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Team />
      <Contact />
    </>
  );
}
