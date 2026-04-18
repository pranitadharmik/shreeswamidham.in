import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Jayesh Patel", text: "Exceptional service and transparency. Our plot purchase was smooth and hassle-free. Highly recommend Shree Swami Dham!", rating: 5 },
  { name: "Priya Deshmukh", text: "Best investment decision we made. The location has already appreciated significantly. Very professional team.", rating: 5 },
  { name: "Amit Sharma", text: "Clear documentation, honest pricing, and great after-sales support. They truly stand by their promises.", rating: 5 },
  { name: "Sanjay Wankhede", text: "The site visit experience was impressive. Everything was exactly as shown. Trusted builders in Nagpur!", rating: 4 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">What Our <span className="text-gradient-gold">Clients Say</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-7 hover:border-primary/30 transition-colors">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className={`h-4 w-4 ${j < t.rating ? "text-primary fill-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
            <p className="font-heading font-semibold text-sm">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
