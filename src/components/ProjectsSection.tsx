import { motion } from "framer-motion";

const projects = [
  { title: "Swami Dham Residency", location: "Wardha Road, Nagpur", status: "Now Selling", type: "Residential Plots" },
  { title: "Green Valley Layout", location: "Amravati Road, Nagpur", status: "Upcoming", type: "Premium NA Plots" },
  { title: "Dham Heights", location: "Kamptee Road, Nagpur", status: "Sold Out", type: "Residential Layout" },
  { title: "Shree Gardens", location: "Hingna Road, Nagpur", status: "Now Selling", type: "Farm House Plots" },
];

const statusColor: Record<string, string> = {
  "Now Selling": "bg-accent text-accent-foreground",
  Upcoming: "bg-primary/20 text-primary",
  "Sold Out": "bg-muted text-muted-foreground",
};

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Our Projects</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">Featured <span className="text-gradient-gold">Developments</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all group">
            <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-heading text-2xl font-bold">{p.title.charAt(0)}</span>
                </div>
                <p className="text-muted-foreground text-sm">{p.type}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[p.status]}`}>{p.status}</span>
              </div>
              <p className="text-muted-foreground text-sm">{p.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
