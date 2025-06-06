import {
  ArrowRightIcon,
  CircuitBoardIcon,
  CogIcon,
  FlameIcon,
  GlobeIcon,
  HammerIcon,
  LayoutDashboardIcon,
  SmartphoneIcon,
  WrenchIcon,
  ZapIcon,
} from 'lucide-react';

import { cn } from '~/lib/cn';

export function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Responsive, high-performance websites built with modern frameworks and future-ready tech.',
      icon: <GlobeIcon />,
    },
    {
      title: 'Mobile Development',
      description:
        'Native and hybrid mobile apps for iOS and Android that deliver speed, reliability, and intuitive UX.',
      icon: <SmartphoneIcon />,
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Unified applications that run seamlessly across devices — built once, deployed everywhere.',
      icon: <CogIcon />,
    },
    {
      title: 'Custom Software',
      description: 'Bespoke software engineered to solve complex business challenges with elegance and scale.',
      icon: <CircuitBoardIcon />,
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and beautiful interfaces backed by user behavior insights and design systems.',
      icon: <HammerIcon />,
    },
    {
      title: 'Consulting Services',
      description: 'Strategic consulting to validate ideas, shape product vision, and optimize tech execution.',
      icon: <WrenchIcon />,
    },
    {
      title: 'Product Strategy',
      description: 'From idea to launch — we help define product goals, roadmap, and market fit with clarity.',
      icon: <ArrowRightIcon />,
    },
    {
      title: 'Design Systems',
      description: 'Scalable, reusable UI components and style guides to ensure consistency across products.',
      icon: <LayoutDashboardIcon />,
    },
  ];

  return (
    <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4'>
      {services.map((service, index) => (
        <Service key={service.title} {...service} index={index} />
      ))}
    </div>
  );
}

const Service = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <section
      id='services'
      className={cn(
        'group/service border-text-muted-foreground relative flex flex-col border-r py-10 mt-10',
        (index === 0 || index === 4) && 'border-text-muted-foreground border-l',
        index < 4 && 'border-text-muted-foreground border-b'
      )}
    >
      {index < 4 && (
        <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent opacity-0 transition duration-200 group-hover/service:opacity-100' />
      )}
      {index >= 4 && (
        <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent opacity-0 transition duration-200 group-hover/service:opacity-100' />
      )}
      <div className='text-muted-foreground relative z-10 mb-4 px-10'>{icon}</div>
      <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
        <div className='group-hover/service:bg-primary absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-700 transition-all duration-200 group-hover/service:h-8' />
        <span className='inline-block transition duration-200 group-hover/service:translate-x-2'>{title}</span>
      </div>
      <p className='text-muted-foreground relative z-10 max-w-xs px-10 text-sm'>{description}</p>
    </section>
  );
};
