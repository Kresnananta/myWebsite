import { useState, useEffect, useRef, Children } from 'react'
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
import Experience from './component/experience';
import Footer from './component/footer';

import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const myDomain = '';

const ScrollReveal = ({ children, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    );
  };

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
      <Helmet>
        <title>Agung Kresna | Computer Engineering & Aspiring Cybersecurity</title>

        <meta name="description" content="Portfolio of Agung Kresna, a Computer Engineering student at ITS Surabaya. Specializing in Cybersecurity, AIoT, and Fullstack Web Development." />
        <meta name="keywords" content="Agung Kresna, Kresnanta, Portfolio, ITS Surabaya, Computer Engineering, Cybersecurity, AIoT" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agung Kresna | Engineering & Security" />
        <meta property="og:description" content="Merging IoT with Machine Learning & Securing Systems. See my latest projects." />
        <meta property="og:image" content="/meta_preview.png" />

        <meta name="theme-color" content="#4F46E5" />
      </Helmet>
      
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
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Expertise /></ScrollReveal>
        <ScrollReveal><Portfolio /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
        <Footer/>
        
        

        {/* back to top btn */}
        <div className='w-10 h-10 bg-amber-500 dark:bg-indigo-500 rounded-full flex fixed bottom-8 right-8'>
          <a href="#" className='m-auto text-white font-extrabold'><ArrowUp /></a>
        </div>
      </div>
    </>
  )
}

export default App
