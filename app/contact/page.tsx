'use client'
import { useState } from 'react';

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-indigo-500/30">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="text-slate-400 hover:text-white transition-colors"> 🡨 Back</a>
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
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Type</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all text-white appearance-none">
                    <option>1 Page Website</option>
                    <option>2 Page Website</option>
                    <option>3 Page Website</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    rows={4}
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
                  <label htmlFor="agreement" className="text-[11px] text-slate-400 leading-tight">
                    I understand that there are no refunds and once instructions are  submitted and discussed there will be zero changes to the website.
                  </label>
                </div>

                <button 
                  disabled={!agreed}
                  className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] ${
                    agreed 
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20" 
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>

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
