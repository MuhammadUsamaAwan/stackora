'use client';

const teamMembers = [
  {
    name: 'Muhammad Jahanzeb',
    role: 'Chief Executive Officer (CEO)',
    experience: '7+ Years of Experience | Full-Stack Development | Digital Strategy',
    description:
      'An innovative and growth-driven leader with extensive experience in technology, business development, and product innovation. Jahanzeb offers hands-on expertise in building and scaling digital products, managing cross-functional teams, and delivering significant business value through strategic technological implementation.',
  },
  {
    name: 'Muhammad Usama',
    role: 'UI/UX Product Designer',
    experience: '7+ Years of Experience',
    description:
      'A dedicated and efficient UI/UX Product Designer with a professional approach to problem-solving. Experienced in R&D, creating intuitive user experiences through wireframes and prototypes, and delivering compelling visual designs.',
    skills: [
      'UX Tools: Figma, Adobe XD, Invision Studio',
      'Illustration/Editing: Adobe Photoshop (Ps), Adobe Illustrator (Ai), Corel Draw',
      'Video Editing: Adobe Premiere (Pr), Video Scribe',
      'Core Strengths: User Research & Analysis, Wireframing, Prototyping, Visual Design, Problem-Solving',
    ],
  },
  {
    name: 'Muhammad Usman',
    role: 'Senior Full Stack Developer',
    experience: '7+ Years of Experience',
    description:
      'A seasoned developer specializing in creating robust and scalable web applications. Usman brings comprehensive expertise across the full development lifecycle.',
    skills: [
      'Core Strengths: React.js, Node.js, AWS, JavaScript, TypeScript',
      'Front-End: Next.js, Redux (Saga/Thunk), Context API, MUI, TailwindCSS',
      'Back-End: Express.js, NestJS, Ruby on Rails',
      'DB & DevOps: NoSQL, MySQL, MongoDB, PostgreSQL, GraphQL, Firebase, CI/CD, Docker, Kubernetes, 3rd Party API Integrations (Stripe, Paypal, etc.)',
    ],
  },
  {
    name: 'Ali Tahir',
    role: 'Backend Developer',
    experience: '6+ Years of Experience',
    description:
      'A dedicated Backend Developer with extensive experience in designing, developing, and maintaining server-side logic and robust APIs. Ali excels in optimizing application performance and ensuring data integrity.',
    skills: [
      'Core Strengths: Node.js, Express.js, NestJS, Python (Django/Flask)',
      'Key Skills: API Development (RESTful, GraphQL), Database Management (PostgreSQL, MongoDB, MySQL), Microservices Architecture, Authentication & Authorization (OAuth, JWT), Cloud Services (AWS, Azure), Message Queues (RabbitMQ, Kafka), Docker',
    ],
  },
  {
    name: 'Muhammad Usama',
    role: 'Full Stack Developer',
    experience: '6+ Years of Experience',
    description:
      'A versatile developer skilled in critical thinking and analytical problem-solving for both front-end and back-end systems. Usama is passionate about leveraging new technologies to enhance solutions.',
    skills: [
      'Core Strengths: React.js, Next.js, Node.js, Express.js, Nest.js',
      'Key Skills: SQL, MongoDB, Firebase, Redis, REST APIs, GraphQL, WebRTC, Web Sockets, Microservices, AWS, Terraform, GitHub Actions, System Monitoring & Deployment',
    ],
  },
  {
    name: 'Ghulam Mujtaba',
    role: 'DevOps Engineer',
    experience: '6+ Years of Experience | AWS | Kubernetes | Azure',
    description:
      'A multi-cloud proficient DevOps Engineer adept at enabling cloud-native deployments, CI/CD automation, and Infrastructure as Code across AWS and Azure environments. Mujtaba has a proven ability to reduce deployment time and improve uptime to 99.9%.',
    skills: [
      'Core Strengths: AWS, Azure, Kubernetes, Docker, Terraform',
      'Key Skills: CI/CD Pipeline Design (AWS CodePipeline, Azure DevOps), Scalable Infrastructure (AWS EC2, S3, VPC), Cloud-Native Solutions (Amazon EKS, AKS), Infrastructure as Code (Terraform, AWS CloudFormation), Monitoring (CloudWatch)',
    ],
  },
  {
    name: 'Muhammad Daniyal',
    role: 'Senior QA Engineer',
    experience: '6+ Years of Experience',
    description:
      'A dedicated and detail-oriented QA professional ensuring software quality across fintech, e-commerce, and enterprise platforms. Daniyal brings a strong understanding of SDLC, QA methodologies, and excels in both manual and automation testing.',
    skills: [
      'Core Strengths: Manual & Automation Testing, SDLC & QA Methodologies',
      'Key Skills: Test Planning & Execution, Defect Management, Collaboration with Development Teams, Proactive Issue Resolution, Quality Documentation',
    ],
  },
];

export function Team() {
  return (
    <section className='py-24 text-gray-300'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='mx-auto mb-12 max-w-3xl text-center'>
          <h2 className='mb-4 text-5xl font-extrabold text-white'>Our Team</h2>
          <p className='leading-relaxed text-gray-400'>
            We are a collective of seasoned professionals dedicated to transforming innovative ideas into robust,
            scalable, and high-performing digital solutions. Our team's diverse expertise ensures comprehensive project
            coverage, from strategic leadership and development to deployment and quality assurance.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {teamMembers.map(member => (
            <div key={member.name + member.role} className='hover:shadow-[0_0_15px_var(--primary)] rounded-lg bg-[#1F1F1F] p-6'>
              <h3 className='mb-1 text-xl font-semibold text-white'>{member.name}</h3>
              <p className='mb-2 italic' style={{ color: 'var(--primary)' }}>
                {member.role}
              </p>
              <p className='mb-3 text-sm text-gray-400'>{member.experience}</p>
              <p className='mb-3 text-gray-300'>{member.description}</p>

              {member.skills && (
                <ul className='list-inside list-disc space-y-1 text-sm text-gray-400'>
                  {member.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
