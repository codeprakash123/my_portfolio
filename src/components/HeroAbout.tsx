import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Terminal, Code2, Cpu, Database, Globe } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
          <Terminal size={14} />
          <span>Computer Science Student</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-indigo-500">Prakash Raj</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A passionate 3rd-year Computer Science & Engineering student focused on building 
          scalable web applications and exploring the future of technology.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="src/assets/1.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-lg bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
          >
            Download Resume
          </motion.a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-slate-500">
          <motion.a whileHover={{ y: -2, color: '#fff' }} href="https://github.com/codeprakash123" target="_blank" rel="noreferrer" className="transition-colors">
            <Github size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -2, color: '#fff' }} href="https://www.linkedin.com/in/prakash-raj-508b10294" target="_blank" rel="noreferrer" className="transition-colors">
            <Linkedin size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -2, color: '#fff' }} href="mailto:prakash522004@gmail.com" className="transition-colors">
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export const About = () => {
  const details = [
    { label: 'Roll No', value: '2023021243', icon: <Terminal size={18} /> },
    { label: 'Year', value: 'Pre final Year', icon: <Cpu size={18} /> },
    { label: 'Branch', value: 'Computer Science & Engineering', icon: <Code2 size={18} /> },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'MMMUT, Gorakhpur',
      duration: '2023 - 2027',
      description: 'Current CGPA: 7.8/10.0. Focusing on core CS subjects like DSA, DBMS, OS, and CN.'
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'DAV Sr. Sec. Public School, Anpara',
      duration: '2022',
      description: 'Percentage: 87.0%'
    }
  ];

  const experience = [
    {
      role: 'Web Developer Intern',
      company: 'Bharat Electronic Limited – CRL Ghaziabad',
      duration: 'June 2025 - July 2025',
      points: [
        'Developed an interactive 3D railway station model using Three.js.',
        'Optimized 3D rendering performance by 100%, improving frame rate.',
        'Implemented a drag-and-drop interface for placing station facilities.'
      ]
    },
    {
      role: 'Web Developer Virtual Intern',
      company: 'CORIZO',
      duration: 'Oct 2024 - Nov 2024',
      points: [
        'Worked on various projects using modern development methodologies.',
        'Managed and maintained backend databases efficiently.'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I am a dedicated Computer Science student at MMMUT, Gorakhpur, with a strong passion for 3D web development and full-stack engineering. 
              With experience in Three.js and the MERN stack, I strive to create immersive and efficient digital experiences.
            </p>
            <div className="space-y-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="text-indigo-500">{item.icon}</div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-500 p-1 shadow-2xl shadow-indigo-500/20">
              <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden relative group">
                <img 
                src="assets/profile.jpeg"
                  alt="Prakash Raj" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-600/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Terminal className="text-indigo-500" size={24} /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="text-indigo-400 text-sm font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-indigo-300 text-sm mb-2">{edu.institution}</p>
                  <p className="text-slate-400 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Cpu className="text-indigo-500" size={24} /> Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <span className="text-indigo-400 text-sm font-medium">{exp.duration}</span>
                  </div>
                  <p className="text-indigo-300 text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm flex gap-2">
                        <span className="text-indigo-500">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
