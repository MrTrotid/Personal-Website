'use client';
import Link from 'next/link';
import BackgroundCircles from '@/components/BackgroundCircles';
import Modal from '@/components/Modal';
import { useState, useRef, useEffect } from 'react';
import '../app/globals.css';
import Image from 'next/image';

type SchoolKey = 'stxaviers' | 'sos';
type ExperienceType = 'jjb' | 'scouts';

interface SchoolData {
  name: string;
  logo: string;
  degree: string;
  period: string;
  grade?: string;
  activities?: string[];
}

interface ExperienceData {
  title: string;
  organization: string;
  logo: string;
  period: string;
  location: string;
  type: string;
}

export default function AboutMe() {
  const [selectedSchool, setSelectedSchool] = useState<SchoolKey | null>(null);
  const [isSkillsOpen, setIsSkillsOpen] = useState(true);
  const [isEducationOpen, setIsEducationOpen] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);

  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      skillsRef.current.style.setProperty('--content-height', `${skillsRef.current.scrollHeight}px`);
    }
    if (educationRef.current) {
      educationRef.current.style.setProperty('--content-height', `${educationRef.current.scrollHeight}px`);
    }
    if (experienceRef.current) {
      experienceRef.current.style.setProperty('--content-height', `${experienceRef.current.scrollHeight}px`);
    }
  }, [isSkillsOpen, isEducationOpen, isExperienceOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const educationData: Record<SchoolKey, SchoolData> = {
    'stxaviers': {
      name: "St. Xavier's College, Maitighar",
      logo: "/logos/stxaviers.png",
      degree: "GCE A Levels, Mathematics and Computer Science",
      period: "Jun 2023 - Jun 2025",
    },
    'sos': {
      name: "SOS Hermann Gmeiner School, Sanothimi",
      logo: "/logos/sos.png",
      degree: "Secondary Education",
      period: "Apr 2018 - Apr 2023",
      grade: "3.85",
      activities: ["Class Representative", "Scout"]
    }
  };

  const experienceData: Record<ExperienceType, ExperienceData> = {
    'jjb': {
      title: "Event Manager and Deputy Manager of Information Technology",
      organization: "Junior Jaycees Budhanilkantha",
      logo: "/logos/jjb.png",
      period: "Feb 2024 - Jan 2025",
      location: "Kathmandu, Bāgmatī, Nepal",
      type: "Seasonal"
    },
    'scouts': {
      title: "Patrol Leader",
      organization: "Nepal Scouts",
      logo: "/logos/scouts.png",
      period: "Apr 2019 - Apr 2021",
      location: "Bhaktapur, Bāgmatī, Nepal",
      type: "Apprenticeship"
    }
  };

  return (
    <main className="cursor-gradient min-h-screen p-8 relative overflow-hidden animate-fadeIn bg-transparent">
      <BackgroundCircles />
      <div className="max-w-3xl mx-auto relative z-10 text-white">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md 
            bg-white/5 backdrop-blur-sm hover:bg-white/10 
            transition-all duration-300 ease-in-out
            hover:translate-x-[-2px] text-sm animate-slideInLeft"
        >
          <span className="inline-block leading-none relative top-[0.5px]">←</span>
          <span className="inline-block leading-tight">Home</span>
        </Link>

        <div className="space-y-8 backdrop-blur-sm bg-black/30 p-8 rounded-lg mt-8 
          animate-slideInUp hover:bg-black/40 transition-all duration-500">
          <h1 className="text-4xl font-bold animate-slideInRight hover:scale-[1.02] transition-all duration-500">
            About Me
          </h1>
          
          <section className="space-y-4">
            <p className="text-lg text-gray-200 animate-fadeIn delay-300 
              hover:text-white transition-all duration-500">
              Hi there! I’m Baman Prasad Guragain from Nepal. I have a deep passion for ethical hacking and cybersecurity, and I’m constantly exploring new ways to enhance my skills. With an intermediate understanding of the field, I am eager to dive deeper and stay updated with the latest trends. My goal is to build a successful career in ethical hacking, and I’m always looking for opportunities to learn and grow in this ever-evolving domain.
            </p>
            
            <div className="flex flex-col gap-8 py-6">
              {/* Skills Section */}
              <div className="animate-slideInLeft delay-500">
                <button 
                  onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                  className={`w-full flex items-center justify-between text-xl font-semibold mb-4 hover:text-blue-300 transition-colors group cursor-pointer dropdown-trigger ${isSkillsOpen ? 'active' : ''}`}
                >
                  <span>Skills</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform dropdown-indicator ${isSkillsOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  ref={skillsRef}
                  className="dropdown-content"
                  data-state={isSkillsOpen ? 'open' : 'closed'}
                >
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {['Full Stack Development', 'React & Next.js', 'Node.js', 'TypeScript', 'Database Design']
                      .map((skill, i) => (
                        <li key={skill} 
                          className="hover:text-blue-200 transition-all duration-500 transform hover:translate-x-2"
                          style={{ animationDelay: `${600 + i * 150}ms` }}>
                          {skill}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              
              {/* Education Section */}
              <div className="animate-slideInUp delay-700">
                <button 
                  onClick={() => setIsEducationOpen(!isEducationOpen)}
                  className={`w-full flex items-center justify-between text-xl font-semibold mb-4 hover:text-blue-300 transition-colors group cursor-pointer dropdown-trigger ${isEducationOpen ? 'active' : ''}`}
                >
                  <span>Education</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform dropdown-indicator ${isEducationOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  ref={educationRef}
                  className="dropdown-content"
                  data-state={isEducationOpen ? 'open' : 'closed'}
                >
                  <ul className="space-y-4">
                    {Object.entries(educationData).map(([key, school]) => (
                      <li 
                        key={key}
                        onClick={() => setSelectedSchool(key as SchoolKey)}
                        className="p-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 
                          transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={school.logo}
                              alt={`${school.name} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white hover:text-blue-200 transition-colors">{school.name}</div>
                            <div className="text-sm text-gray-300">{school.period}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Experience Section */}
              <div className="animate-slideInUp delay-800">
                <button 
                  onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                  className={`w-full flex items-center justify-between text-xl font-semibold mb-4 hover:text-blue-300 transition-colors group cursor-pointer dropdown-trigger ${isExperienceOpen ? 'active' : ''}`}
                >
                  <span>Experience</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform dropdown-indicator ${isExperienceOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  ref={experienceRef}
                  className="dropdown-content"
                  data-state={isExperienceOpen ? 'open' : 'closed'}
                >
                  <ul className="space-y-4">
                    {Object.entries(experienceData).map(([key, exp]) => (
                      <li 
                        key={key}
                        onClick={() => setSelectedExperience(key as ExperienceType)}
                        className="p-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 
                          transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={exp.logo}
                              alt={`${exp.organization} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-white hover:text-blue-200 transition-colors">{exp.title}</div>
                            <div className="text-sm text-gray-300">{exp.organization} · {exp.type}</div>
                            <div className="text-sm text-gray-400">{exp.period}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Modal 
                isOpen={!!selectedSchool} 
                onClose={() => setSelectedSchool(null)}
              >
                {selectedSchool && (
                  <div className="text-white">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={educationData[selectedSchool].logo}
                          alt={`${educationData[selectedSchool].name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-200">
                          {educationData[selectedSchool].name}
                        </h3>
                        <p className="text-lg text-gray-300 mt-2">
                          {educationData[selectedSchool].degree}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-lg">{educationData[selectedSchool].degree}</p>
                      <p className="text-gray-300">{educationData[selectedSchool].period}</p>
                      {educationData[selectedSchool].grade && (
                        <p className="text-gray-300">
                          <span className="text-blue-300">Grade:</span> {educationData[selectedSchool].grade}
                        </p>
                      )}
                      {educationData[selectedSchool].activities && (
                        <div>
                          <span className="text-blue-300">Activities:</span>
                          <ul className="list-disc list-inside mt-2 text-gray-300">
                            {educationData[selectedSchool].activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Modal>

              <Modal 
                isOpen={!!selectedExperience} 
                onClose={() => setSelectedExperience(null)}
              >
                {selectedExperience && (
                  <div className="text-white">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={experienceData[selectedExperience].logo}
                          alt={`${experienceData[selectedExperience].organization} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-200">
                          {experienceData[selectedExperience].title}
                        </h3>
                        <p className="text-lg text-gray-300 mt-2">
                          {experienceData[selectedExperience].organization}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-300">{experienceData[selectedExperience].period}</p>
                      <p className="text-gray-300">{experienceData[selectedExperience].location}</p>
                      <p className="text-blue-300">{experienceData[selectedExperience].type}</p>
                    </div>
                  </div>
                )}
              </Modal>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
