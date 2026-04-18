import { motion } from "framer-motion";
import { Home, LayoutGrid, TrendingUp, FileText, MapPin } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Plot Development", desc: "Well-planned residential plots with modern amenities and infrastructure in prime Nagpur locations." },
  { icon: LayoutGrid, title: "Land Layout Planning", desc: "Expert layout design ensuring optimal space utilization, road connectivity, and green zones." },
  { icon: TrendingUp, title: "Investment Properties", desc: "High-return investment opportunities in Nagpur's fastest-growing corridors." },
  { icon: FileText, title: "Legal Documentation Support", desc: "End-to-end legal support including title verification, RERA registration, and agreement drafting." },
  { icon: MapPin, title: "Site Visit Assistance", desc: "Complimentary guided site visits with detailed project walkthrough and area insights." },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Our Services</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">What We <span className="text-gradient-gold">Offer</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-7 hover:shadow-gold hover:border-primary/40 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
              <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
