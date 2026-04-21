'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') || "1 Page Website";
  
  const formRef = useRef<HTMLFormElement>(null);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs.sendForm(
      'service_04lmk1m',   // Replace with your Service ID
      'template_krxf7y8',  // Replace with your Template ID
      formRef.current,
      'UJBA30cB3h3rGvO9M'    // Replace with your Public Key
    )
    .then(() => {
      setStatus('success');
      formRef.current?.reset();
      setAgreed(false);
      // Optional: Reset button after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('Email Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Name</label>
            <input 
              name="user_name"
              type="text" 
              required
              placeholder="John Doe"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email</label>
            <input 
              name="user_email"
              type="email" 
              required
              placeholder="john@example.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Project Type</label>
          <select 
            name="project_type"
            defaultValue={selectedPlan}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all text-white appearance-none"
          >
            <option value="1 Page Website">1 Page Website</option>
            <option value="2 Page Website">2 Page Website</option>
            <option value="3 Page Website">3 Page Website</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Message</label>
          <textarea 
            name="message"
            rows={4}
            required
            placeholder="Tell us about your project..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white"
          ></textarea>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-start gap-3">
          <input 
            type="checkbox" 
            id="agreement"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-950 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
          />
          <label htmlFor="agreement" className="text-[11px] text-slate-400 leading-tight cursor-pointer">
            I understand that there are no refunds and once instructions are submitted and discussed there will be zero changes to the website.
          </label>
        </div>

        {/* Animated Button Section */}
        <div className="relative h-[60px] w-full overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.button
                key="submit-btn"
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                disabled={!agreed || status === 'sending'}
                className={`w-full h-full font-bold transition-all shadow-lg active:scale-[0.98] ${
                  agreed && status !== 'sending'
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20" 
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                {status === 'sending' ? "Sending..." : "Send Message"}
              </motion.button>
            ) : (
              <motion.div
                key="success-msg"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full h-full bg-emerald-500/10 border border-emerald-500/50 rounded-xl flex items-center justify-center gap-3 text-emerald-400 font-bold"
              >
                <motion.svg 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
                Message Sent Successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {status === 'error' && (
          <p className="text-center text-rose-400 text-xs font-medium">Failed to send. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-indigo-500/30">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="text-slate-400 hover:text-white transition-colors border-white border-2 px-4 py-2 rounded-full"> Back</a>
          </div>
        </div>
      </nav>

      <section className="relative px-6 pt-40 pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-full w-full max-w-4xl bg-[radial-gradient(circle_at_50%_0%,#1e1b4b,rgba(2,6,23,0))]" />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Text & Info */}
            <div>
              <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:leading-[1.1]">
                Let’s build <br />
                <span className="text-indigo-500">something</span> great.
              </h1>
              <p className="mt-8 text-lg text-slate-400 leading-relaxed max-w-md">
                Have a project in mind? Reach out and let’s discuss how we can bring your vision to life with technical excellence.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Email Us</h4>
                  <p className="text-xl font-medium text-white">thatwebcreator@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Socials</h4>
                  <div className="flex gap-4 mt-2">
                     <a 
                      href="https://instagram.com/thatwebcreator" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <Suspense fallback={<div className="text-slate-500">Loading form...</div>}>
              <ContactFormContent />
            </Suspense>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-600 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} ThatWebCreator
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-tighter">
            <a 
              href="https://instagram.com/thatwebcreator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
