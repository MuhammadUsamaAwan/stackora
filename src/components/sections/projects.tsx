'use client';

import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';

const projects = [
   {
    title: 'LetsBuild',
    description: 'Construction collaboration platform improving site coordination and progress tracking.',
    image: '/letsbuild.avif',
    link: 'https://www.letsbuild.com/',
  },
  {
    title: 'Epoka',
    description: 'Global provider of IT hardware and lifecycle solutions serving multiple industries.',
    image: '/epoka.avif',
    link: 'https://epoka.com/',
  },
  {
    title: 'LB Aproplan',
    description: 'Streamlined field reporting tool for managing inspections, safety, and quality control.',
    image: '/lb-aproplan.avif',
    link: 'https://www.letsbuild.com/lb-aproplan',
  },
  {
    title: 'Körber',
    description: 'End-to-end supply chain technology solutions for logistics, pharma, and manufacturing.',
    image: '/koerber.avif',
    link: 'https://www.koerber.com/en/',
  },
  {
    title: 'LB GenieBelt',
    description: 'Real-time project planning and Gantt chart tool for enhanced team transparency.',
    image: '/lb-geniebelt.avif',
    link: 'https://www.letsbuild.com/lb-geniebelt',
  },
   {
    title: 'MaxAttire',
    description: 'A comprehensive e-commerce platform specializing in custom decoration services.',
    image: '/maxattire.avif',
    link: 'http://themaxattire.com/',
  },
  {
    title: 'ATC Tees',
    description: 'An innovative e-commerce platform offering custom t-shirt designs and a marketplace for team stores.',
    image: '/atctees.avif',
    link: 'http://atctees.com/',
  },
  {
    title: 'Expense Tracker',
    description: 'A PWA where where users can create custom categories and templates to effectively track their expenses.',
    image: '/expensetracker.avif',
    link: 'https://expense-tracker-eight-livid.vercel.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-extrabold text-white mb-3">Our Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our recent work that showcases our commitment to quality, innovation, and user-focused solutions.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1F1F1F] rounded-lg shadow-lg overflow-hidden group hover:shadow-[0_0_15px_var(--primary)] transition-shadow duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-[var(--primary)] hover:underline"
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  View Project <ArrowUpRightIcon className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
