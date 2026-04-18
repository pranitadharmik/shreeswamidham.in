import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";


const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium plots" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 text-center py-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4 font-medium">Nagpur's Trusted Developer</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Build Your Dream Plot<br />
            <span className="text-gradient-gold">with Trust & Transparency</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Premium residential & commercial plots in Nagpur — legally verified, strategically located, and built for lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button onClick={() => scrollTo("projects")} className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity">
              View Projects
            </button> */}
           {/* Button */}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
