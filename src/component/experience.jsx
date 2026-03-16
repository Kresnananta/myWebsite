import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar
} from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    title: "Secretary of Internal Department",
    company: "TPKH ITS",
    date: "Feb 2025 — Jan 2026",
    description: "Manage internal administration and coordination between department members to ensure the efficiency of the student organization.",
    location: "Surabaya, Indonesia"
  },
  {
    id: 2,
    title: "Data Management Staff",
    company: "MAGE (Multimedia and Game Event) 11",
    date: "Feb 2025 — Dec 2025",
    description: "Responsible for Managing and organizing competition and participant data for MAGE 11.",
    location: "Surabaya, Indonesia"
  },
  {
    id: 3,
    title: "Basic Programing Practicum Assistant",
    company: "LAB MIOT @ ITS",
    date: "Aug 2025 — Nov 2025",
    description: "Assisted in teaching fundamental programming concepts during practicum sessions by guiding students in coding exercises, debugging programs, and understanding basic programming logic.",
    location: "Surabaya, Indonesia"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl container mx-auto px-6 md:px-12">
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Experience <span className="text-amber-500 dark:text-indigo-400">&</span> Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-600 ml-4 md:ml-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="mb-12 ml-8 relative group">
              {/* titik timeline */}
              <div className="absolute -left-[43px] top-1.5 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-amber-500 dark:border-indigo-500 rounded-full z-10 group-hover:bg-amber-500 dark:group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.5)] dark:shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>

              {/* Card konten */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-indigo-500/50 transition-all duration-500 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-indigo-500/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white group-hover:text-amber-500 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mt-1 font-medium italic">
                      <Briefcase className="w-4 h-4 mr-2"/>
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center text-sm font-bold text-amber-500 dark:text-indigo-400 bg-amber-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full border border-amber-100 dark:border-indigo-800/50 w-max shrink-0">
                    <Calendar className="w-4 h-4 mr-2"/>
                    {exp.date}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {exp.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
                  {exp.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}