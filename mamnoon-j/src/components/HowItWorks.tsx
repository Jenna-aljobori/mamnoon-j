"use client";

import { motion, useInView } from "framer-motion";
import { Download, MapPin, CheckCircle } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "١",
    icon: Download,
    title: "حمّل التطبيق",
    description: "قم بتحميل تطبيق ممنون على هاتفك الذكي من متجر التطبيقات",
  },
  {
    number: "٢",
    icon: MapPin,
    title: "اختر الخدمة",
    description: "حدد الخدمة المطلوبة وموقعك الحالي بكل سهولة",
  },
  {
    number: "٣",
    icon: CheckCircle,
    title: "استقبل الطلب",
    description: "فريقنا المحترف في طريقه إليك لإتمام الخدمة بجودة عالية",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#f6b640] via-[#e8d5b8] to-[#d6e0d4]"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(47,165,134,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47,165,134,0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#154a3c]">
            كيف يعمل؟
          </h2>
          <p className="text-xl text-[#154a3c]/70">
            احصل على الخدمة في 3 خطوات بسيطة
          </p>
          <div className="w-24 h-1 mx-auto bg-[#2fa586] mt-4"></div>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group"
                >
                  {/* Crystal Clear Shiny Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="h-full p-8 rounded-3xl relative overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(246,182,64,0.4)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "2px solid rgba(255,255,255,0.8)",
                      boxShadow:
                        "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
                    }}
                  >
                    {/* Crystal Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Shimmer */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(45deg, transparent 30%, rgba(246,182,64,0.3) 50%, transparent 70%)",
                          "linear-gradient(45deg, transparent 30%, rgba(47,165,134,0.3) 50%, transparent 70%)",
                          "linear-gradient(45deg, transparent 30%, rgba(246,182,64,0.3) 50%, transparent 70%)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Glowing Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl mx-auto"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(246,182,64,0.9), rgba(255,175,18,0.9))",
                        boxShadow:
                          "0 8px 20px rgba(246,182,64,0.5), inset 0 1px 1px rgba(255,255,255,0.5)",
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow:
                          "0 12px 30px rgba(246,182,64,0.7), inset 0 2px 2px rgba(255,255,255,0.7)",
                      }}
                    >
                      <Icon size={36} className="text-white drop-shadow-lg" />
                    </motion.div>

                    {/* Title with Gradient */}
                    <h3 className="text-2xl font-bold mb-3 relative z-10 bg-gradient-to-r from-[#154a3c] to-[#2fa586] bg-clip-text text-transparent group-hover:from-[#2fa586] group-hover:to-[#f6b640] transition-all duration-500 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#154a3c]/80 relative z-10 leading-relaxed text-center">
                      {step.description}
                    </p>

                    {/* Bottom Glow Bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f6b640] via-[#2fa586] to-[#f6b640]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        boxShadow: "0 0 20px rgba(246,182,64,0.8)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
