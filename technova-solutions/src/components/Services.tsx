"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks like Next.js, React, and Node.js. Scalable, performant, and SEO-optimized.",
    features: ["Next.js & React", "REST & GraphQL APIs", "Database Design", "Performance Optimization"],
    color: "from-indigo-500 to-purple-600",
    glow: "shadow-indigo-500/20",
    hoverBorder: "hover:border-indigo-500/50",
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile apps for iOS and Android that deliver exceptional user experiences.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
    color: "from-purple-500 to-pink-600",
    glow: "shadow-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design that creates intuitive, beautiful interfaces users love. From wireframes to polished prototypes.",
    features: ["User Research", "Wireframing", "Figma Prototypes", "Design Systems"],
    color: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/20",
    hoverBorder: "hover:border-pink-500/50",
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Robust cloud infrastructure on AWS, Azure, and GCP. Migration, optimization, and managed cloud services.",
    features: ["AWS / Azure / GCP", "DevOps & CI/CD", "Microservices", "Cloud Security"],
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
  },
  {
    id: "ai-consulting",
    icon: Brain,
    title: "AI Consulting",
    description:
      "Strategic AI implementation to automate workflows, extract insights, and create intelligent products that outperform competition.",
    features: ["Machine Learning", "NLP & Chatbots", "Computer Vision", "Predictive Analytics"],
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies that build brand authority, drive qualified traffic, and maximize conversion rates.",
    features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics & Reporting"],
    color: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/20",
    hoverBorder: "hover:border-orange-500/50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 mesh-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Scale & Succeed
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From concept to deployment, we offer end-to-end technology services that
            power your business forward.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              id={`service-${service.id}`}
              className={`group relative glass rounded-3xl p-8 border border-transparent ${service.hoverBorder} hover:shadow-xl ${service.glow} transition-all duration-300 hover:-translate-y-2 cursor-default overflow-hidden`}
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 relative">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 relative mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <a
                href="#contact"
                className={`relative flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-2 transition-all duration-200 cursor-pointer`}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
