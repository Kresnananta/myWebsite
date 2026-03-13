import { useState, useEffect, useRef } from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'
import {
  ArrowUp,
} from 'lucide-react';

import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Expertise from './component/expertise';
import Portfolio from './component/portfolio';
import Contact from './component/contact';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode for better initial look, or use localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || true; 
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Smooth scrolling untuk navigasi menu
    root.style.scrollBehavior = 'smooth';
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <>
      
      <div className='min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300'>
        <Toaster 
          position="top-right" 
          reverseOrder={false} 
          toastOptions={{
            className: 'bg-white dark:!bg-slate-800 text-slate-900 dark:!text-white border border-slate-200 dark:border-slate-700',
            duration: 4000,
          }}
        />
        <Navbar isDark={isDark} setIsDark={setIsDark}/>
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Contact />

        {/* back to top btn */}
        <div className='w-10 h-10 bg-amber-500 dark:bg-indigo-500 rounded-full flex fixed bottom-8 right-8'>
          <a href="#" className='m-auto text-white font-extrabold'><ArrowUp /></a>
        </div>
      </div>
    </>
  )
}

export default App
