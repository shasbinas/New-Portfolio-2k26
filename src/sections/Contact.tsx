import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">New York, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-medium">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/your-form-id" // Replace with actual Formspree ID
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/10 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/10 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-6 py-4 rounded-2xl bg-secondary/10 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/20"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
