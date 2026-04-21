import Image from 'next/image';
import Link from 'next/link';
export default function PricingPage() {
  const plans = [
    {
      name: "1 Page Website",
      price: "$300",
      description: "Perfect for content creators or business startups needing a high-impact landing page.",
      features: ["Custom Design", "Links To All Social Media", "Customized Intro With Photos Or Video"],
      cta: "Basic",
      highlight: false
    },
    {
      name: "2 Page Website",
      price: "$500",
      description: "Perfect for growing content creators or businesses with a bit more complexity.",
      features: ["Custom Design", "Links To All Social Media", "Customized Intro With Photos Or Video", "Advanced Animations"],
      cta: "*Most Popular* Professional",
      highlight: true
    },
    {
      name: "3 Page Website",
      price: "$1000",
      description: "Perfect for established content creators or businesses with significant online presence.",
      features: ["Custom Design", "Links To All Social Media", "Intake Form", "Customized Intro With Photos Or Video", "Advanced Animations"],
      cta: "Advanced",
      highlight: false
    },
     
  ];

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

      {/* Pricing Header */}
      <section className="relative px-6 pt-40 pb-16 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-full bg-[radial-gradient(circle_at_50%_20%,#1e1b4b,rgba(2,6,23,0))]" />
        
        <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl">
          Transparent <span className="text-indigo-500">Pricing.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          No hidden fees. No surprises. Just high-performance websites delivered at a fixed price.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlight 
                ? "bg-slate-900/60 border-indigo-500 shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)] scale-105 z-10 py-12" 
                : "bg-slate-950 border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500 text-sm">/project</span>}
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="h-5 w-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
<Link href="/contact" className="block">
              <button className={`w-full py-4 rounded-xl font-bold cursor-pointer transition-all ${
                plan.highlight 
                ? "bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white" 
                : "bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
              }`}>
                {plan.cta}
              </button>
               </Link>
            </div>
          ))}
        </div>

        
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            Ready for your new website? <a href="/contact" className="text-indigo-400 font-bold hover:underline">Let's talk.</a>
          </p>
        </div>
      </section>

      
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
