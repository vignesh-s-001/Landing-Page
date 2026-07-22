"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@technovasolutions.com",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA 94102",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9AM – 6PM PST",
    color: "from-orange-500 to-amber-600",
  },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+\d\s\-().]{7,20}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 1500)); // simulate API call
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full box-border px-4 py-3.5 rounded-xl glass border transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors[field] && touched[field]
      ? "border-red-400 dark:border-red-500 bg-red-50/30 dark:bg-red-500/5"
      : "border-indigo-200/50 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/50"
    }`;

  return (
    <section id="contact" className="py-24 mesh-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Let&apos;s Build Something
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Amazing Together
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to take the next step? Tell us about your project and we&apos;ll
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white break-all">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            {/* CTA callout */}
            <div className="glass rounded-2xl p-6 border border-indigo-200/50 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-500/5 dark:to-purple-500/5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Need a quick response?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Schedule a free 30-minute discovery call with one of our senior
                consultants.
              </p>
              <a
                href="tel:+15551234567"
                id="contact-call-button"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-8 sm:p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                suppressHydrationWarning
                onSubmit={handleSubmit}
                noValidate
                className="glass rounded-3xl p-6 sm:p-8 space-y-5"
                id="contact-form"
                aria-label="Contact form"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      suppressHydrationWarning
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputClass("name")} pl-10`}
                      aria-required="true"
                      aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && touched.name && (
                    <p id="name-error" role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      suppressHydrationWarning
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputClass("email")} pl-10`}
                      aria-required="true"
                      aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p id="email-error" role="alert" className="text-red-500 text-xs mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      suppressHydrationWarning
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClass("phone")} pl-10`}
                      aria-required="true"
                      aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1.5">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-gray-400" />
                    <textarea
                      suppressHydrationWarning
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass("message")} pl-10 resize-none`}
                      aria-required="true"
                      aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                    />
                  </div>
                  {errors.message && touched.message && (
                    <p id="message-error" role="alert" className="text-red-500 text-xs mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  suppressHydrationWarning
                  type="submit"
                  id="contact-submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-base"
                  aria-label="Send message"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
