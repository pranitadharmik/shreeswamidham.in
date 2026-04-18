import { motion } from "framer-motion";
import { Award, Scale, Gem, MapPinned, Eye } from "lucide-react";

const reasons = [
  { icon: Award, title: "Trusted Developer", desc: "Proven track record of successful project deliveries" },
  { icon: Scale, title: "Legal Clarity", desc: "100% legally verified plots with clear titles" },
  { icon: Gem, title: "Best Investment Value", desc: "Properties in high-appreciation zones" },
  { icon: MapPinned, title: "Prime Locations", desc: "Strategically located near key infrastructure" },
  { icon: Eye, title: "Transparent Process", desc: "No hidden costs, complete documentation" },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">The <span className="text-gradient-gold">Shree Swami Dham</span> Advantage</h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center p-6">
            <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 hover:border-primary hover:bg-primary/10 transition-all">
              <r.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-base font-semibold mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
