"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Mitchell",
    role: "CTO",
    company: "FintechFlow Inc.",
    avatar: "AM",
    avatarColor: "from-indigo-500 to-purple-600",
    rating: 5,
    text: "TechNova Solutions transformed our entire digital infrastructure in just 6 months. Their team's technical expertise in cloud migration and AI integration exceeded every expectation we had. The result was a 40% improvement in system performance.",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Founder & CEO",
    company: "GrowthLab Studios",
    avatar: "JR",
    avatarColor: "from-purple-500 to-pink-600",
    rating: 5,
    text: "The React Native app they built for us has a 4.9-star rating on both app stores. TechNova's attention to UI/UX detail and their agile process meant we shipped on time and on budget. I couldn't recommend them more highly.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "VP of Product",
    company: "HealthBridge Digital",
    avatar: "PS",
    avatarColor: "from-emerald-500 to-teal-600",
    rating: 5,
    text: "Working with TechNova on our AI consulting engagement was game-changing. They helped us implement predictive analytics that reduced patient wait times by 35%. Their consultants truly understand both business and technology.",
  },
  {
    id: 4,
    name: "Thomas Weber",
    role: "Head of Engineering",
    company: "EcomScale GmbH",
    avatar: "TW",
    avatarColor: "from-blue-500 to-cyan-600",
    rating: 5,
    text: "After migrating our e-commerce platform to their cloud solution, our load times dropped from 8 seconds to under 1.5 seconds. Sales increased by 28% the following quarter. TechNova doesn't just deliver—they over-deliver.",
  },
  {
    id: 5,
    name: "Sarah O'Brien",
    role: "Marketing Director",
    company: "BrandVision Agency",
    avatar: "SO",
    avatarColor: "from-orange-500 to-amber-600",
    rating: 5,
    text: "Their digital marketing team completely overhauled our SEO and content strategy. Within 3 months, our organic traffic grew by 200% and lead quality improved dramatically. A true strategic partner, not just a vendor.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 mesh-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
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
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            What Our Clients
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Are Saying
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear from the businesses we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Cards grid — visible on lg */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:grid grid-cols-3 gap-6 mb-8"
        >
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="glass rounded-3xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-indigo-400 mb-4 opacity-60" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{t.role}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{t.company}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Carousel — visible on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:hidden"
        >
          <div className="glass rounded-3xl p-8 mb-6 min-h-[320px] relative overflow-hidden">
            <Quote className="w-8 h-8 text-indigo-400 mb-4 opacity-60" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{active.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${active.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {active.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">{active.name}</div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{active.role}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{active.company}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              suppressHydrationWarning
              onClick={prev}
              id="testimonial-prev"
              aria-label="Previous testimonial"
              className="p-3 glass rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  suppressHydrationWarning
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    i === activeIndex
                      ? "w-6 bg-indigo-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button
              suppressHydrationWarning
              onClick={next}
              id="testimonial-next"
              aria-label="Next testimonial"
              className="p-3 glass rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          {["Google", "Microsoft", "AWS", "Shopify", "Stripe", "Vercel"].map((brand) => (
            <div
              key={brand}
              className="text-xl font-black text-gray-300 dark:text-gray-700 hover:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-200 cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
