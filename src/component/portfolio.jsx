import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import {
	ExternalLink,
	Github
} from 'lucide-react';
import axios from 'axios';
import proj1 from '../assets/proj1.jpg';

const TECH_COLORS = {
  'React': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  'Tailwind': 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300',
  'Python': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  'Django': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  'Vue JS': 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
  'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  'React Native': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  'Firebase': 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  'Docker': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  'Vite': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  'Supabase': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  'JavaScript': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
  'TypeScript': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  'C': 'bg-indigo-200 text-indigo-700 dark:bg-indigo-800/50 dark:text-indigo-300',
  'C++': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  'C#': 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300',
  '.NET': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  // Warna default 
  'Default': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
};

const TechBadge = ({ name }) => {
	const colorClass = TECH_COLORS[name] || TECH_COLORS.Default;

	return (
		<span className={`text-xs font-bold px-3 py-1 rounded-full ${colorClass}`}>
			{name}
		</span>
	);
};

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 animate-pulse">
    <div className="h-64 bg-slate-200 dark:bg-slate-700"></div> {/* Area Gambar */}
    <div className="p-8">
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div> {/* Tag 1 */}
        <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full"></div> {/* Tag 2 */}
      </div>
      <div className="h-7 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div> {/* Judul */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded"></div> {/* Deskripsi baris 1 */}
        <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded"></div> {/* Deskripsi baris 2 */}
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
	const [showAllProjects, setShowAllProjects] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error("Gagal mengambil data project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

	return (
		<>
			{/* Porfolio */}
			<section id='portfolio' className='py-20 md:py-32 bg-white dark:bg-slate-900 transition-colors'>
				<div className='max-w-6xl mx-auto px-6'>
					<h2 className='text-4xl font-bold mb-16 text-center'>Featured Projects</h2>

					{/* container max-h + transisi buat show all */}
					<div className='relative'>
						<div className={`transition-all duration-500 ease-in-out overflow-hidden ${showAllProjects ? 'max-h-[4000px]' : 'max-h-[1300px] md:max-h-[800px]'}`}>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {loading ? (
                <>
                  <SkeletonCard/>
                  <SkeletonCard/>
                  <SkeletonCard/>
                  <SkeletonCard/>
                </>
              ) : (
                projects.map((project) => (
                  <div key={project.id} className='group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-indigo-500 transition-colors'>
                    <div className='h-64 overflow-hidden relative'>
                      <div className='absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10'></div>
                      <img src={project.image_url} alt={project.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                    </div>

                    <div className='p-8'>
                      {/* techstack */}
                      <div className='flex gap-2 mb-4'>
                        {project.tags?.map((tag, index) => (
                          <TechBadge key={index} name={tag.trim()}/>
                        ))}
                      </div>

                      {/* text */}
                      <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                      <p className='text-slate-600 dark:text-slate-400 mb-6'>{project.description}</p>

                      {/* Links */}
                      <div className='flex items-center gap-4'>
                        <a href={project.live_demo || "#"} className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><ExternalLink className='w-4 h-4' />Live Demo</a>
                        <a href={project.source_code} className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><Github className='w-4 h-4' />Source Code</a>
                      </div>
                    </div>
                  </div>
                ))
              )}

							</div>
						</div>

						{/* fade efect (view all) */}
						{!showAllProjects && projects.length > 2 && (
							<div className="absolute bottom-0 left-0 w-full h-80 bg-linear-to-t from-white dark:from-slate-900 to-transparent flex items-end justify-center pb-8 z-20">
								<button
									onClick={() => setShowAllProjects(true)}
									className="px-8 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-amber-500 hover:text-amber-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
								>
									View All Projects
								</button>
							</div>
						)}
					</div>

					{/* show less btn */}
					{showAllProjects && (
						<div className="mt-12 text-center animate-fade-in">
							<button
								onClick={() => {
                  setShowAllProjects(false);
                  // supaya smooth..
                  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                }}
								className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg font-bold hover:border-amber-500 hover:text-amber-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all"
							>
								Show Less Projects
							</button>
						</div>
					)}
				</div>
			</section>
		</>
	);
}