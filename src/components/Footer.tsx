import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = ["Home", "About", "Services",  "Testimonials", "Contact"];

const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shree Swami Dham" className="h-12 w-12 rounded-full" />
              <div>
                <p className="text-gradient-gold font-heading text-lg font-bold leading-tight">Shree Swami Dham</p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">Builders & Developers</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nagpur's trusted real estate developer delivering premium plots with transparency and legal clarity.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm"><MapPin className="h-4 w-4 text-primary" /> Nagpur, Maharashtra</div>
              <a href="tel:+918830195933" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"><Phone className="h-4 w-4 text-primary" /> +91 883 019 5933</a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm"><Mail className="h-4 w-4 text-primary" /> dhamshreeswami@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
<p className="text-muted-foreground text-sm">
  © {new Date().getFullYear()} Shree Swami Dham Builders & Developers. 
</p>

<p className="text-sm mt-1">
  Designed and Developed by{" "}
  <a
    href="https://www.instagram.com/hellograpiondigital/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold hover:opacity-80 transition"
  >
    <span className="text-blue-600">Grapion</span>{" "}
    <span className="text-yellow-500">Digital</span>
  </a>
</p>        </div>
      </div>
    </footer>
  );
};

export default Footer;
