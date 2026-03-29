import React from 'react';
import { motion } from 'motion/react';
import { ThreeScene } from './components/ThreeScene';
import { Navbar } from './components/Navbar';
import { Hero, About } from './components/HeroAbout';
import { Skills, Projects } from './components/SkillsProjects';
import { Contact } from './components/Contact';
import { Trophy, Star, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    { text: 'Earned goodies from Coding Ninjas and GDG for active participation', icon: Trophy },
    { text: 'Secured Internship at Bharat Electronic Limited (BEL), Ghaziabad', icon: Star },
    { text: 'Solved 1000+ Coding Problems on Codechef, Codeforces, Leetcode', icon: Code },
    { text: 'Active Competitive Programmer on CodeChef', icon: Trophy },
  ];

  return (
    <section className="py-24 px-4 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
            >
              <div className="text-indigo-500">
                <item.icon size={24} />
              </div>
              <p className="text-slate-300 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="relative text-slate-200 selection:bg-indigo-500/30">
      <ThreeScene />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>


      <footer className="relative z-10 py-12 px-4 border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-1">Code Architect</p>
            <p className="text-slate-500 text-sm">Computer Science & Engineering Student</p>
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Code Architect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
