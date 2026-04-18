import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. ${form.message}`;
    window.open(`https://wa.me/918830195933?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Get In <span className="text-gradient-gold">Touch</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">Nagpur, Maharashtra, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+918830195933" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 883 019 5933</a>
              </div>
            </div>
            <a href="https://wa.me/918830195933" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit} className="space-y-5">
            <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <textarea placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
            <button type="submit" className="w-full bg-gradient-gold text-primary-foreground px-6 py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
