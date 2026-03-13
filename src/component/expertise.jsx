import {
	Layout,
	BrainCircuit,
	Database
} from 'lucide-react';

export default function Expertise() {
	return (
		<>
			{/* Expertise */}
			<section id='expertise' className='py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50 transition-colors'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='text-center max-w-2xl mx-auto mb-16'>
						<h2 className='text-4xl font-bold mb-4'>My Expertise</h2>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* 1 */}
						<div className='bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group'>
							<div className='w-14 h-14 bg-amber-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
								<Layout className='w-7 h-7 text-amber-600 dark:text-indigo-400' />
							</div>
							<h3 className='text-xl font-bold mb-3'>Frontend Development</h3>
							<p className='text-slate-600 dark:text-slate-400'>Crafting responsive and interactive user interfaces using React and modern CSS frameworks like Tailwind.</p>
						</div>
						{/* 2 */}
						<div className='bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group'>
							<div className='w-14 h-14 bg-green-100 dark:bg-pink-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
								<BrainCircuit className='w-7 h-7 text-green-600 dark:text-pink-400' />
							</div>
							<h3 className='text-xl font-bold mb-3'>Machine Learning & IoT</h3>
							<p className='text-slate-600 dark:text-slate-400'>Developing intelligent systems and connected devices using machine learning algorithms and IoT technologies.</p>
						</div>
						{/* 3 */}
						<div className='bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group'>
							<div className='w-14 h-14 bg-red-100 dark:bg-cyan-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
								<Database className='w-7 h-7 text-red-600 dark:text-cyan-400' />
							</div>
							<h3 className='text-xl font-bold mb-3'>Backend Architecture</h3>
							<p className='text-slate-600 dark:text-slate-400'>Architecting scalable backend ecosystems and high-efficiency APIs. Transforming complex business logic into high-performance, resilient server-side solutions.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}