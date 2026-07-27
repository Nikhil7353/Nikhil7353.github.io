import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { useState, useRef, FormEvent } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'nikhilchavan063@gmail.com', href: 'mailto:nikhilchavan063@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
  { icon: Clock, label: 'Availability', value: 'Mon-Fri, 9AM-6PM IST', href: null },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Nikhil7353', icon: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nikhil-chavhan', icon: '💼' },
  { label: 'Twitter', href: 'https://twitter.com/nikhilchavhan', icon: '🐦' },
  { label: 'Email', href: 'mailto:nikhilchavan063@gmail.com', icon: '✉️' },
];

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState('submitting');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll show success
      // In production, replace with actual form submission:
      // const response = await fetch('https://formspree.io/f/your-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      formRef.current?.reset();
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section className="section relative" id="contact">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header max-w-3xl mx-auto text-center mb-16"
        >
          <div className="eyebrow inline-flex mb-4">Get In Touch</div>
          <h2 className="section-title">Let's build something <span className="gradient-text">amazing together</span></h2>
          <p className="section-subtitle mt-4">
            Have a project in mind? I'm always open to discussing new opportunities, 
            interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((item, i) => (
            <Card key={item.label} className="p-6 text-center hover:border-brand/30 transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }}>
              <div className={`p-3 rounded-xl bg-${item.icon === Mail ? 'coral' : item.icon === MapPin ? 'brand' : 'amber'}/10 text-${item.icon === Mail ? 'coral' : item.icon === MapPin ? 'brand' : 'amber'} mx-auto mb-4 w-fit`}>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-ink mb-2">{item.label}</h3>
              {item.href ? (
                <a href={item.href} className="text-ink-muted hover:text-brand transition-colors">{item.value}</a>
              ) : (
                <p className="text-ink-muted">{item.value}</p>
              )}
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <Card className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-ink mb-6">Send a message</h3>
            
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center gap-3"
                role="alert"
              >
                <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                <div>
                  <p className="font-semibold text-emerald">Message sent!</p>
                  <p className="text-sm text-emerald/80">I'll get back to you within 24 hours.</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setFormState('idle')}>Send another</Button>
              </motion.div>
            )}

            {formState === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-coral/10 border border-coral/20 flex items-center gap-3"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 text-coral flex-shrink-0" />
                <p className="text-coral">Something went wrong. Please try again or email me directly.</p>
                <Button variant="ghost" size="sm" onClick={() => setFormState('idle')}>Retry</Button>
              </motion.div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  error={errors.name}
                  required
                  disabled={formState === 'submitting'}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  error={errors.email}
                  required
                  disabled={formState === 'submitting'}
                />
              </div>
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                error={errors.subject}
                required
                disabled={formState === 'submitting'}
              />
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={5}
                  className={`w-full bg-surface border rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand ${errors.message ? 'border-coral focus:ring-coral/20 focus:border-coral' : 'border-line hover:border-brand/50'} disabled:opacity-50`}
                  error={errors.message}
                  required
                  disabled={formState === 'submitting'}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="mt-1.5 text-sm text-coral" role="alert">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full sm:w-auto" size="lg" loading={formState === 'submitting'}>
                <Send className="w-5 h-5" aria-hidden="true" />
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <Card className="p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-coral/5" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-ink mb-6">Prefer a direct approach?</h3>
              <p className="text-ink-muted mb-8">
                Skip the form and reach out directly. I'm responsive on all these platforms 
                and usually reply within a few hours during business days.
              </p>
              
              <div className="space-y-4 mb-8">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-line hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 transition-all duration-300 group"
                  >
                    <span className="text-3xl" aria-hidden="true">{social.icon}</span>
                    <div>
                      <p className="font-semibold text-ink group-hover:text-brand transition-colors">{social.label}</p>
                      <p className="text-sm text-ink-muted">{social.href}</p>
                    </div>
                    <MessageSquare className="w-5 h-5 text-muted group-hover:text-brand transition-colors ml-auto" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>

              <div className="pt-6 border-t border-line">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-line">
                  <div className="p-2 rounded-lg bg-brand/10 text-brand">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Typical response time</p>
                    <p className="text-sm text-ink-muted">Under 4 hours on weekdays</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface/60 backdrop-blur-xl border border-line">
            <Mail className="w-5 h-5 text-coral" aria-hidden="true" />
            <span className="text-sm font-semibold text-ink">
              Or email directly: <a href="mailto:nikhilchavan063@gmail.com" className="text-brand hover:underline ml-1">nikhilchavan063@gmail.com</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}