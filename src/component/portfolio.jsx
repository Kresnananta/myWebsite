import { useState } from 'react';
import {
	ExternalLink,
	Github
} from 'lucide-react';
import proj1 from '../assets/mapGraph.png';
//import proj2 from '../assets/';

export default function Portfolio() {
	const [showAllProjects, setShowAllProjects] = useState(false);

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
								{/* 1 */}
								<div className='group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-indigo-500 transition-colors'>
									<div className='h-64 overflow-hidden relative'>
										<div className='absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10'></div>
										<img src={proj1} alt="project 1" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
									</div>
									<div className='p-8'>
										{/* techstack */}
										<div className='flex gap-2 mb-4'>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>React</span>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>Tailwind</span>
										</div>
										{/* text */}
										<h3 className='text-2xl font-bold mb-3'>Personal Website</h3>
										<p className='text-slate-600 dark:text-slate-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laudantium illo est doloremque minus magnam a dicta asperiores eius consequuntur?</p>
										<div className='flex items-center gap-4'>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><ExternalLink className='w-4 h-4' />Live Demo</a>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><Github className='w-4 h-4' />Source Code</a>
										</div>
									</div>
								</div>

								{/* 2 */}
								<div className='group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-indigo-500 transition-colors'>
									<div className='h-64 overflow-hidden relative'>
										<div className='absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10'></div>
										<img src={proj1} alt="project 1" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
									</div>
									<div className='p-8'>
										<div className='flex gap-2 mb-4'>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>React</span>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>Tailwind</span>
										</div>
										<h3 className='text-2xl font-bold mb-3'>Personal Website</h3>
										<p className='text-slate-600 dark:text-slate-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laudantium illo est doloremque minus magnam a dicta asperiores eius consequuntur?</p>
										<div className='flex items-center gap-4'>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><ExternalLink className='w-4 h-4' />Live Demo</a>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><Github className='w-4 h-4' />Source Code</a>
										</div>
									</div>
								</div>

								{/* 3 */}
								<div className='group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-indigo-500 transition-colors'>
									<div className='h-64 overflow-hidden relative'>
										<div className='absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10'></div>
										<img src={proj1} alt="project 1" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
									</div>
									<div className='p-8'>
										<div className='flex gap-2 mb-4'>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>React</span>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>Tailwind</span>
										</div>
										<h3 className='text-2xl font-bold mb-3'>Personal Website</h3>
										<p className='text-slate-600 dark:text-slate-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laudantium illo est doloremque minus magnam a dicta asperiores eius consequuntur?</p>
										<div className='flex items-center gap-4'>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><ExternalLink className='w-4 h-4' />Live Demo</a>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><Github className='w-4 h-4' />Source Code</a>
										</div>
									</div>
								</div>

								{/* 4 */}
								<div className='group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-indigo-500 transition-colors'>
									<div className='h-64 overflow-hidden relative'>
										<div className='absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10'></div>
										<img src={proj1} alt="project 1" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
									</div>
									<div className='p-8'>
										<div className='flex gap-2 mb-4'>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>React</span>
											<span className='text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full'>Tailwind</span>
										</div>
										<h3 className='text-2xl font-bold mb-3'>Personal Website</h3>
										<p className='text-slate-600 dark:text-slate-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laudantium illo est doloremque minus magnam a dicta asperiores eius consequuntur?</p>
										<div className='flex items-center gap-4'>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><ExternalLink className='w-4 h-4' />Live Demo</a>
											<a href="#" className='flex items-center gap-2 text-sm font-bold hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'><Github className='w-4 h-4' />Source Code</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* fade efect (view all) */}
						{!showAllProjects && (
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
								onClick={() => setShowAllProjects(false)}
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