import Image from 'next/image';
import { Award, Utensils, Store } from 'lucide-react'; // Using Lucide icons for consistency

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* --- HERO SECTION --- */}
      {/* Added pt-32 to push content down below fixed header */}
      <section className="relative h-screen flex items-center justify-start pt-20">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://rollsnation.in/wp-content/uploads/2022/03/rolls-768x952.png" // Placeholder for your burger/roll image
            alt="Rolls Nation Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              &apos;Rolls Nation&apos; Expansion for PAN INDIA
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-none">
              Best <span className="text-white">Kathi Rolls</span> <br /> 
              Franchise <span className="text-white">In India</span>
            </h1>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed max-w-lg">
              Rolls Nation has pledged to take the &quot;ROLL&quot; rolling the world. 
              We come up with this concept to serve every single customer, 
              who doesn&apos;t need to compromise on their own choices.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded font-bold uppercase tracking-wider transition-all hover:scale-105">
              Know More
            </button>
          </div>
          
          {/* Floating Roll Image (Right Side) */}
          <div className="hidden md:block relative h-150 w-full animate-in fade-in slide-in-from-right-10 duration-1000">
             {/* Replace with your specific 'Three Rolls' png */}
             <Image 
               src="https://rollsnation.in/wp-content/uploads/2022/05/S-Logo.png" 
               alt="Delicious Rolls" 
               fill 
               className="object-contain drop-shadow-2xl" 
             />
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (RN SPECIALITY) --- */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 text-yellow-500 uppercase tracking-tight">
            RN Speciality
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 p-12 rounded-xl text-center border border-zinc-800 hover:border-yellow-500/50 hover:bg-zinc-900 transition-all group">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-6xl font-black text-white mb-2">15<span className="text-yellow-500 text-4xl align-top">+</span></h3>
              <p className="text-zinc-400 uppercase tracking-widest font-medium">Year Experience</p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/50 p-12 rounded-xl text-center border border-zinc-800 hover:border-yellow-500/50 hover:bg-zinc-900 transition-all group">
              <Utensils className="w-16 h-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-6xl font-black text-white mb-2">99<span className="text-yellow-500 text-4xl align-top">+</span></h3>
              <p className="text-zinc-400 uppercase tracking-widest font-medium">Menu Variant</p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 p-12 rounded-xl text-center border border-zinc-800 hover:border-yellow-500/50 hover:bg-zinc-900 transition-all group">
              <Store className="w-16 h-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-6xl font-black text-white mb-2">25<span className="text-yellow-500 text-4xl align-top">+</span></h3>
              <p className="text-zinc-400 uppercase tracking-widest font-medium">Restaurant Branch</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BIG CTA SECTION --- */}
      <section className="bg-yellow-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-2">
            Now Open For Franchise
          </h2>
          <a href="tel:+917696833321" className="text-4xl md:text-6xl font-black text-black hover:text-white transition-colors block mt-4">
             📞 76968-33321
          </a>
        </div>
      </section>

    </div>
  );
}