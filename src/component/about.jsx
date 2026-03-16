import {
	ChevronRight
} from 'lucide-react';

export default function About() {
	return (
		<>
			{/* About Me */}
			<section id='about' className='py-20 md:py-32 bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 transition-colors'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='flex flex-col md:flex-row items-center gap-12'>

						{/* Left Stats */}
						<div className='w-full md:w-5/12 grid grid-cols-2 gap-4'>
							<div className='bg-amber-50 dark:bg-slate-800 p-6 rounded-tl-2xl rounded-tr-2xl shadow-sm text-center'>
								<h3 className='text-4xl font-extrabold text-amber-500 dark:text-indigo-400'>2+</h3>
								<p className='text-sm font-medium text-slate-600 dark:text-slate-400 mt-2'>Years of Experience</p>
							</div>
							<div className='bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm text-center mt-8'>
								<h3 className='text-4xl font-extrabold text-orange-500 dark:text-cyan-400'>5+</h3>
								<p className='text-sm font-medium text-slate-600 dark:text-slate-400 mt-2'>Projects Completed</p>
							</div>
							<div className='bg-slate-50 dark:bg-slate-800 p-6 rounded-bl-2xl rounded-br-2xl shadow-sm text-center -mt-8'>
								<h3 className='text-4xl font-extrabold text-red-400 dark:text-blue-400'>0</h3>
								<p className='text-sm font-medium text-slate-600 dark:text-slate-400 mt-2'>Satisfied Clients</p>
							</div>
							<div className='bg-orange-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm text-center'>
								<h3 className='text-4xl font-extrabold text-amber-600 dark:text-indigo-300'>100%</h3>
								<p className='text-sm font-medium text-slate-600 dark:text-slate-400 mt-2'>Dedication</p>
							</div>
						</div>

						{/* Text Section */}
						<div className='w-full md:w-7/12 space-y-6'>
							<div className='inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-indigo-900/50 text-amber-700 dark:text-indigo-300 font-semibold text-sm mb-2'>
								Get to know me
							</div>
							<h2 className='text-4xl font-bold'>About Me</h2>
							<p className='text-lg leading-relaxed text-slate-600 dark:text-slate-300'>I'm a Computer Engineering student from ITS, specializing in software development and logical problem solving. I enjoy turning complex technical challenges into efficient, high-performance, and secure digital solutions.</p>
							<p className='text-lg leading-relaxed text-slate-600 dark:text-slate-300'>My job is to build your systems so that they are robust and functional from the core, utilizing my strong foundation in C/C++ and Python. Moreover, I add a modern touch to your products using React and Tailwind CSS to ensure they are scalable and user-friendly. My aim is to bridge the gap between Machine Learning and IoT in the most innovative way, driven by a global mindset and a passion for technical excellence.</p>

							<div className='mt-auto pt-4'>
								<a href="#contact" className='inline-flex items-center text-amber-600 dark:text-indigo-400 font-bold hover:underline underline-offset-4'>Send me a message <ChevronRight className='ml-1' /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}