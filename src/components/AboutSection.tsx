import { motion } from "framer-motion";
import { Shield, FileCheck, Handshake, Landmark , CreditCard, LayoutGrid} from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Trust",
    desc: "Decades of reliable real estate development in Nagpur",
  },
  {
    icon: FileCheck,
    title: "Legal Clarity",
    desc: "Every plot comes with a clear title, is approved by the Real Estate Regulatory Authority (RERA), and includes complete and verified documentation.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    desc: "Honest pricing, no hidden charges, guided process from start to end",
  },
  {
    icon: Landmark,
    title: "Easy Financing",
    desc: "Up to 70% loan for NA properties (semi-government banks) and 80%–90% loan for RL properties (government banks)",
  },
  {
    icon: CreditCard,
    title: "Flexible EMI",
    desc: "EMI options available up to 60 months with proper NA documentation and separate 7/12",
  },
  {
    icon: LayoutGrid,
    title: "Plot Sizes",
    desc: "Available in 800, 1000, 1200, 1250, 1500, 1600, 1800, 2000 sq.ft options",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">About Us</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Building <span className="text-gradient-gold">Dreams</span> Since Day One
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed space-y-4">
  <span className="block">
    Shree Swami Dham Builders & Developers is a trusted real estate brand based in Nagpur, specializing in premium residential plots in prime and fast-growing locations.
  </span>

  <span className="block">
    We don’t just sell plots — we help you build a secure future with legally verified properties, clear documentation, and complete transparency.
  </span>

  <span className="block">
    If you’re planning to invest in property in Nagpur — whether to build your dream home or grow your wealth — this is the perfect opportunity for you.
  </span>

  <span className="block">
    With high-growth locations, secure investments, and strong future value appreciation, Shree Swami Dham ensures peace of mind and long-term returns.
  </span>

  <span className="block font-semibold text-foreground">
    Invest today. Secure your tomorrow.
  </span>
</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-background border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors group">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
