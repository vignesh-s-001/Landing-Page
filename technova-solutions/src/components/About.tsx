"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Lightbulb, Users, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We build with accuracy and intent, delivering solutions that hit the mark every time.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Client-First Culture",
    description: "Your success is our mission. We collaborate closely at every stage to exceed expectations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We stay ahead of the curve, adopting cutting-edge technologies to future-proof your product.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing, code reviews, and best practices ensure every delivery is production-ready.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 30+ countries with round-the-clock support and localized expertise.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Complete visibility into project progress with real-time updates and clear communication.",
    color: "from-violet-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Building Tomorrow&apos;s
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Digital Future
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            TechNova Solutions was founded with a clear purpose: to bridge the gap between
            business challenges and technology innovation.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower organizations of all sizes with transformative technology solutions
                that drive measurable growth, operational efficiency, and lasting competitive
                advantage in an ever-evolving digital landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the global leader in delivering human-centered technology solutions,
                creating a world where every business—regardless of size or industry—can
                harness the full potential of digital innovation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-200`}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
