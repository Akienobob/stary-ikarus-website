import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contacts() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7d7efc1e-07c1-47f6-95c2-79590f8951b2',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(t('contacts.form_success'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Ошибка при отправке формы. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Ошибка при отправке формы. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">{t('contacts.title')}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
          <p className="section-subtitle mt-6">{t('contacts.description')}</p>
        </motion.div>

        {/* Contact Info + Form Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information Cards */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            {/* Email Card */}
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {t('contacts.booking')}
                </h3>
              </div>
              <a
                href="mailto:booking@staryikarus.com"
                className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
              >
                {t('contacts.booking_email')}
              </a>
            </div>

            {/* Social Media Card */}
            <div className="glass-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {t('contacts.social_title')}
                </h3>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/@starikarus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm"
                >
                  YouTube
                </a>
                <span className="text-foreground/30">•</span>
                <a
                  href="https://www.instagram.com/staryikarus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-2 glass-card p-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <div>
                <label className="block text-foreground font-sans font-semibold text-sm mb-2">
                  {t('contacts.form_name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder={t('contacts.form_name')}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-foreground font-sans font-semibold text-sm mb-2">
                  {t('contacts.form_email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder={t('contacts.form_email')}
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label className="block text-foreground font-sans font-semibold text-sm mb-2">
                {t('contacts.form_subject')}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder={t('contacts.form_subject')}
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label className="block text-foreground font-sans font-semibold text-sm mb-2">
                {t('contacts.form_message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                placeholder={t('contacts.form_message')}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-foreground hover:bg-accent/90 disabled:opacity-50 font-sans font-semibold"
              size="lg"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Отправка...' : t('contacts.form_submit')}
            </Button>
          </motion.form>
        </motion.div>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Additional Info */}
        <motion.section
          className="py-12 md:py-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
              {t('contacts.thank_you_title')}
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('contacts.thank_you_text')}
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
