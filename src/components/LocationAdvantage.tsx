import { motion } from "framer-motion";
import { GraduationCap, Hospital, Route, TrendingUp, Building2, Trees } from "lucide-react";

const advantages = [
  { icon: GraduationCap, title: "Top Schools & Colleges", desc: "Within 5-10 km radius" },
  { icon: Hospital, title: "Hospitals & Clinics", desc: "Quick access to healthcare" },
  { icon: Route, title: "NH & Highways", desc: "Excellent road connectivity" },
  { icon: TrendingUp, title: "Fast Developing Areas", desc: "Nagpur's growth corridors" },
  { icon: Building2, title: "Commercial Hubs", desc: "Near business & IT parks" },
  { icon: Trees, title: "Green Surroundings", desc: "Clean, pollution-free zones" },
];

const LocationAdvantage = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Location</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          Location <span className="text-gradient-gold">Advantage</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Our projects are strategically located in Nagpur's fastest-growing areas with high appreciation potential.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {advantages.map((a, i) => {
          const Icon = a.icon;

          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-background rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base mb-2 text-foreground">
                {a.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {a.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default LocationAdvantage;