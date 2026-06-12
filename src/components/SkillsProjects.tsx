import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Globe, Cpu, Layout, Server, Smartphone, ShieldCheck } from 'lucide-react';

const SkillCard = ({ name, icon: Icon, level }: { name: string, icon: any, level: number }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-1.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="bg-indigo-500 h-full rounded-full"
      />
    </div>
  </motion.div>
);

export const Skills = () => {
  const categories = [
    {
      title: 'Technical',
      skills: [
        { name: 'C/C++', icon: Code2, level: 90 },
        { name: 'Python', icon: Code2, level: 85 },
        { name: 'JavaScript', icon: Code2, level: 90 },
        { name: 'React JS', icon: Layout, level: 92 },
        { name: 'NodeJS', icon: Server, level: 88 },
        { name: 'MongoDB', icon: Database, level: 85 },
        { name: 'Express', icon: Server, level: 85 },
        { name: 'Tailwind', icon: Layout, level: 95 },
        { name: 'Angular', icon: Layout, level: 75 },
      ]
    },
    {
      title: 'Curriculum',
      skills: [
        { name: 'DSA', icon: Cpu, level: 88 },
        { name: 'DBMS', icon: Database, level: 85 },
        { name: 'OS', icon: Cpu, level: 80 },
        { name: 'CN', icon: Globe, level: 82 },
        { name: 'OOPs', icon: Code2, level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency and academic foundation.
          </p>
        </div>
        
        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-2">
                <div className="w-8 h-px bg-indigo-500/50" /> {cat.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <SkillCard key={sIdx} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: 'AI Grader – Teaching Website',
      desc: 'AI-powered assignment grading system for PDF and code evaluations. Built dashboards for teachers and students with smart feedback.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS'],
      image: 'https://picsum.photos/seed/grader/600/400',
      link: 'https://ai-grader-glkc.onrender.com/'
    },
    
    {
      title: 'Hotel Booking Platform',
      desc: 'Comprehensive lodging booking engine with dynamic room filtering, secure reservation flow, user reservation logs, and administration panel.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://picsum.photos/seed/hotelbooking/600/400',
      link: 'https://hotel-booking-two-brown.vercel.app/'
    },

    {
      title: 'Online Course Platform',
      desc: 'Full-featured educational system featuring video streaming course modules, rich learner dashboard, real-time testing, and study track metrics.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      image: 'https://picsum.photos/seed/academic/600/400',
      link: 'https://academia-learning.onrender.com'
    },

    {
      title: 'Chattrix – Chatting Website',
      desc: 'Real-time messaging platform built for seamless one-on-one and group conversations with JWT auth and encrypted storage.',
      tech: ['React.js', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
      image: 'https://picsum.photos/seed/chattrix/600/400',
      link: 'https://github.com/codeprakash123'
    }

  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400">Real-world applications built with modern technologies.</p>
          </div>
          <a href="https://github.com/codeprakash123" target="_blank" rel="noreferrer" className="hidden md:block text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            View GitHub →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -10 }}
              className="group rounded-2xl bg-slate-800/40 border border-slate-700/50 overflow-hidden backdrop-blur-sm block"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
