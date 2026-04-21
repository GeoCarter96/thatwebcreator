import Image from 'next/image';


export default function PortfolioPage() {
  const projects = [
  { id: 1, title: "Tats By JB", description: "Website for a tattoo artist.", link: "https://tatsbyjb.vercel.app/", image: "/tats.png" },

  { id: 2, title: "THE WUN", description: "Contact and advertising website for virtual creator.", link: "https://thewun-sigma.vercel.app/", image: "/wun.png" },
  { id: 3, title: "More Life", description: "Health and wellness vegan restaurant website.", link: "https://morelife-one.vercel.app/", image: "/more.png" },
  { id: 4, title: "Blade Gym", description: "Gym mockup website.", link: "https://bladegym.vercel.app/", image: "/bladegym.png" },
  { id: 5, title: "Beauty Meets Nerd", description: "Minimalist website for content creator.", link: "https://beautymeetsnerd.vercel.app/", image: "/beautymeetsnerd.png" }
];


  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-indigo-500/30">
      
      {/* Astro-style Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
         
          
          <div className="flex items-center gap-6 text-sm font-medium">

            <a href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
            <a href="/contact" className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-slate-200 transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-32 text-center overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,rgba(2,6,23,0))]" />
        
       <div className="mb-12 flex h-20 w-56 items-center justify-center border-2 border-slate-800 bg-slate-900/30  ">
  <Image 
    src="/logo.jpeg"          // Put your logo file in the 'public' folder
    alt="Your Logo" 
    width={224}             // Matches the w-56 (56 * 4px)
    height={80}              // Matches the h-20 (20 * 4px)
    className="object-contain border-rounded " // 'p-2' keeps it from touching the edges
  />
</div>


        <h1 className="max-w-4xl text-5xl font-black tracking-tighter text-white sm:text-8xl lg:leading-[1.1]">
          Building the <span className="text-indigo-500">future</span> of the web.
        </h1>
        
        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
          I specialize in high-performance web applications that combine 
          cinematic design with technical excellence.
        </p>

        <div className="mt-12">
          <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full bg-slate-800 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-700">
            View My Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-500 mt-2">A collection of recent client launches.</p>
          </div>
          <div className="h-px flex-1 bg-slate-800 ml-12 hidden md:block mb-4"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a key={project.id} href={project.link}   target="_blank" 
        rel="noopener noreferrer" className="group block">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all group-hover:border-indigo-500/50">
                   <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
                <div className="flex h-full w-full items-center justify-center text-slate-800 transition-transform duration-500 group-hover:scale-110">
                  <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-500 leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      
   

      

      {/* Dark Footer */}
      <footer className="border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-600 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} ThatWebCreator
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-tighter">
            <a 
  href="https://www.instagram.com/thatwebcreator" 
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
