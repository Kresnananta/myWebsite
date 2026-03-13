import { useState } from 'react';
import toast from 'react-hot-toast';
import {
	Mail,
	Smartphone,
	Github,
	Linkedin
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

	const loadingToast = toast.loading('Sending message...')
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent, thank you', { id: loadingToast });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
      else {
        toast.error('Failed send message', { id:loadingToast });
      }
    } catch (error) {
      toast.error('Server sedang offline!', { id: loadingToast });
    }
  };


	return (
		<>
			{/* Contact */}
			<section id='contact' className='py-20 md:py-32 bg-white dark:bg-slate-900 transition-colors'>
				<div className='max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16'>

					{/* my info */}
					<div className='w-full md:w-5/12 space-y-8'>
						<div>
							<h2 className='text-4xl font-bold mb-4'>Let's Connect!</h2>
							<p className='text-slate-600 dark:text-slate-400 text-lg'>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
						</div>

						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<div className='w-12 h-12 bg-amber-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center shrink-0'>
									<Mail className='w-5 h-5 text-amber-600 dark:text-indigo-400' />
								</div>
								<div>
									<h4 className='font-bold text-lg'>Email</h4>
									<a href="mailto:akresnaananta@gmail.com" className='text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-indigo-400 transition-colors'>akresnaananta@gmail.com</a>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='w-12 h-12 bg-orange-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center shrink-0'>
									<Smartphone className='w-5 h-5 text-orange-600 dark:text-cyan-400' />
								</div>
								<div>
									<h4 className='font-bold text-lg'>Phone</h4>
									<p className='text-slate-600 dark:text-slate-400'>+62 821 2294 8082</p>
								</div>
							</div>
						</div>
						{/* sosmed */}
						<div className='pt-4 flex gap-4'>
							<a href="https://github.com/Kresnananta" target="_blank" rel='noopener noreferrer' className='w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-amber-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all'><Github className='w-5 h-5' /></a>
							<a href="https://www.linkedin.com/in/akresnanta" target="_blank" rel='noopener noreferrer' className='w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-amber-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all'><Linkedin className='w-5 h-5' /></a>
						</div>
					</div>

					{/* Contact Form */}
					<div className='w-full md:w-7/12'>
						<form onSubmit={handleSubmit} className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='space-y-2'>
									<label className='text-sm font-bold text-slate-700 dark:text-slate-300'>Your Name</label>
									<input
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text" 
                    placeholder='John Chena' 
                    className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-indigo-500 transition-shadow text-slate-500 dark:text-slate-200' />
								</div>
								<div className='space-y-2'>
									<label className='text-sm font-bold text-slate-700 dark:text-slate-300'>Your Email</label>
									<input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email" placeholder='johnchena@example.com' className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-indigo-500 transition-shadow text-slate-500 dark:text-slate-200 invalid:focus:ring-red-400 peer' />
									<p className='text-sm text-right md:text-left -mb-8 text-red-400 invisible peer-invalid:visible'>email is not valid</p>
								</div>
							</div>
							<div className='space-y-2'>
								<label className='text-sm font-bold text-slate-700 dark:text-slate-300'>Subject</label>
								<input 
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" placeholder='Project Discussion' className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-indigo-500 transition-shadow text-slate-500 dark:text-slate-200' />
							</div>
							<div className='space-y-2'>
								<label className='text-sm font-bold text-slate-700 dark:text-slate-300'>Message</label>
								<textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5' placeholder='Tell me about yout project...' className='w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-indigo-500 transition-shadow resize-none text-slate-500 dark:text-slate-200'></textarea>
							</div>
							<button type='submit' className='w-full py-4 bg-linear-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 dark:from-indigo-500 dark:to-cyan-500 dark:hover:from-indigo-600 dark:hover:to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform'>Send Message</button>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}