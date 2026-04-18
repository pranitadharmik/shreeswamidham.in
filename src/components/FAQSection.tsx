import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How can I schedule a site visit?", a: "You can call us at +91 883 019 5933, fill the contact form, or click the WhatsApp button to schedule a free guided site visit at your convenience." },
  { q: "Are the plots legally approved?", a: "Yes, all our plots come with clear titles, proper NA conversion, RERA registration, and all necessary government approvals." },
  { q: "What is the payment process?", a: "We offer flexible payment plans including down payment options and EMI facilities. Our team will guide you through the complete process." },
  { q: "How do I book a plot?", a: "You can book by paying a token amount after site visit and document verification. We assist with the entire registration and documentation process." },
  { q: "Do you provide loan assistance?", a: "Yes, we have tie-ups with leading banks and NBFCs to help you with hassle-free loan processing at competitive interest rates." },
];

const FAQSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">FAQ</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-lg px-6">
            <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline hover:text-primary text-sm py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
