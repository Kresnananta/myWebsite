import {
	ArrowUpRight
} from 'lucide-react';
import StackIcon from "tech-stack-icons";
import meHero from '../assets/me_hero.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {

	return (
		<>
			{/* Hero Section */}
			<section className='pt-32 pb-20 md:pt-40 md:min-h-screen flex flex-col md:flex-row items-center max-w-10xl mx-auto px-6 overflow-hidden'>
				{/* Bagian Tulisan */}
				<div className='w-full md:w-1/2 relative z-10 space-y-6 md:pl-10'>
					<h1 className='text-5xl md:text-6xl font-extrabold leading-tight'>Hi I'm <br />
						<span className='bg-linear-to-r from-red-400 to-amber-400 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent'>Agung Kresna</span>
					</h1>
					<p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed'>Computer Engineering Student @ ITS | Cybersecurity Enthusiast | Web Developer | Merging IoT with Machine Learning.</p>
					<div className='pt-4 flex flex-wrap items-center gap-6'>
						<a href="#contact" className='bg-orange-400 hover:bg-orange-500 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1'>
							Hire Me
						</a>
						<a href="#portfolio" className='group font-bold flex items-center text-slate-700 dark:text-slate-200 hover:text-amber-500 hover:dark:text-indigo-400 transition-colors'>
							View Portfolio
							<ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2.5px]" />
						</a>
					</div>
					<h2 className='mt-15 font-semibold text-2xl'>Tech Stack</h2>
					<div className='mt-4 flex gap-4'>
						<StackIcon name="python" className='w-8 h-8' />
						<StackIcon name="c++" className='w-8 h-8' />
						<StackIcon name="js" className='w-8 h-8' />
						<StackIcon name="react" className='w-8 h-8' />
						<StackIcon name="tailwindcss" className='w-8 h-8' />
						<StackIcon name="colab" className='w-8 h-8' />
						<StackIcon name="figma" className='w-8 h-8' />
					</div>
					<div className='hidden md:flex absolute w-12 h-12 -right-30 bottom-10'>
						<span className='m-auto transform scale-[2.5]'>
							<DotLottieReact
								src="https://lottie.host/1f134cf8-f895-45ea-8fcd-81a8cafb5a30/356bwUuXn5.lottie"
								loop
								autoplay
							/>
						</span>
					</div>
				</div>
				{/* Bagian Gambar */}
				<div className='hidden w-full md:w-1/2 mt-16 md:mt-0 md:mr-30 relative md:flex justify-end items-center'>
					<div className='z-10 w-64 h-80 md:w-160 md:h-[35rem] overflow-hidden absolute mt-0 md:mt-10 md:ml-20 transform hover:-translate-y-2 transition-transform duration-500'>
						<img src={meHero} alt="foto" className='object-cover pointer-events-none' />
					</div>

					<div className='absolute w-72 h-72 md:w-70 md:h-[28rem] rounded-full md:rounded-3xl z-0 bg-linear-to-br shadow- from-blue-400 via-indigo-500 to-cyan-400 bg-size-[200%_200%] animate-wave'></div>
				</div>
			</section>
		</>
	)
}
