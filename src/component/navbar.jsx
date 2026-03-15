import { useState, useEffect } from 'react';
import {
	Sun,
	Moon,
	Menu,
	X
} from 'lucide-react';
import { a } from 'framer-motion/client';

export default function Navbar({ isDark, setIsDark }) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActivateSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
				setActivateSection('hero');
			}
		};

		window.addEventListener('scroll', handleScroll);

		// --- cek section aktif ---
		const sections = ['hero', 'about', 'expertise', 'portfolio', 'contact'];
    
		const observerOptions = {
			root: null,
			rootMargin: '-40% 0px -40% 0px', // Deteksi saat section berada di tengah layar
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActivateSection(entry.target.id);
				}
			});
		}, observerOptions);

		sections.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		}
	}, []);

	return (
		<div className={`fixed top-0 w-full z-50 p-4 pt-6 justify-between items-center flex font-bold text-lg transition-all duration-300 ${isScrolled && !isMobileMenuOpen ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm py-4' : 'py-6 bg-transparent backdrop-blur-none'}`}>
			<div className='ml-4 md:ml-10'><span className='text-4xl'>Kresnanta</span> <span className='bg-linear-to-r from-red-400 to-amber-400 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent'>Portfolio</span></div>

			{/* Navbar Desktop */}
			<div className='hidden md:flex gap-8 items-center mr-10'>
				{[
					{ id: 'about', label: 'About' },
					{ id: 'expertise', label: 'Expertise' },
					{ id: 'portfolio', label: 'Project' }
				].map((item) => (
					<a key={item.id} 
					href={`#${item.id}`} 
					className={`group relative px-2 transition-colors duration-300 ${ activeSection === item.id ? 'text-amber-500 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-indigo-400' }`}>
						{item.label}
						<span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 dark:bg-indigo-400 transition-all duration-300 ease-in-out ${activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}`}>
						</span>
					</a>
				))}
				{/* <a href="#about" className='px-5 hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'>About</a>
				<a href="#expertise" className='px-5 hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'>Expertise</a>
				<a href="#portfolio" className='px-5 hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'>Project</a> */}
				<a href="#contact" className='px-5 py-2 border-2 border-amber-500 text-amber-600 dark:text-slate-100 dark:border-indigo-400 rounded-lg hover:bg-amber-50 dark:hover:bg-indigo-900/30 transition-all'>
					Contact
				</a>
				<div className="flex items-center justify-center border-l-2 border-slate-300 dark:border-slate-700 pl-5">
					<Sun className='mr-2 w-5 h-5 text-amber-500' />
					<label className="relative flex items-center  cursor-pointer">
						<input type="checkbox" id="toggle" className="sr-only peer" checked={isDark} onChange={() => setIsDark(!isDark)} />
						<div className="w-12 h-6 bg-amber-200 hover:bg-amber-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:border-amber-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-indigo-700 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 "></div>
					</label>
					<Moon className='ml-2 w-5 h-5 text-indigo-400' />
				</div>
			</div>
			{/* Mobile menu (hamburger) */}
			<div className='md:hidden mr-4'>
				<button onClick={() => setIsMobileMenuOpen(true)} className='p-2 text-slate-700 dark:text-slate-200 focus:outline-none hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'>
					<Menu className='w-7 h-7' />
				</button>
			</div>
			{/* side menu overlay */}
			<div className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
			</div>
			{/* Mobile Side Menu Drawer */}
			<div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 px-6 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-slate-500 dark:text-slate-400 focus:outline-none hover:text-amber-500 dark:hover:text-indigo-400 transition-colors">
					<X className="w-7 h-7" />
				</button>

				<div className='flex flex-col gap-6 text-lg font-bold'>
					<a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-indigo-400 transition-colors">About</a>
					<a href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-indigo-400 transition-colors">Expertise</a>
					<a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-indigo-400 transition-colors">Project</a>
					<a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-indigo-400 transition-colors">Experience</a>
					<a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-max px-6 py-2 border-2 border-amber-500 text-amber-600 dark:text-slate-100 dark:border-indigo-400 rounded-lg hover:bg-amber-50 dark:hover:bg-indigo-900/30 transition-all">Contact</a>

					{/* dark mode side menu */}
					<div className="flex items-center mt-4 pt-6 border-t border-slate-200 dark:border-slate-800">
						<Sun className='mr-2 w-5 h-5 text-amber-500' />
						<label className="relative flex items-center  cursor-pointer">
							<input type="checkbox" id="toggle" className="sr-only peer" checked={isDark} onChange={() => setIsDark(!isDark)} />
							<div className="w-12 h-6 bg-amber-200 hover:bg-amber-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:left-0 after:bg-white after:border-amber-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-indigo-700 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 "></div>
						</label>
						<Moon className='ml-2 w-5 h-5 text-indigo-400' />
					</div>
				</div>
			</div>
		</div>
	)
}
