"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Fuel,
  Wrench,
  Battery,
  Droplet,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Fuel,
      name: "الوقود",
      description: "خدمة توصيل الوقود إلى موقعك بسرعة وأمان",
      neonColor: "#00ffff", // Cyan
      shadowColor: "rgba(0, 255, 255, 0.6)",
    },
    {
      icon: Wrench,
      name: "الإطارات",
      description: "تغيير وإصلاح الإطارات في موقعك",
      neonColor: "#ff00ff", // Magenta
      shadowColor: "rgba(255, 0, 255, 0.6)",
    },
    {
      icon: Battery,
      name: "البطاريات",
      description: "بطاريات السيارات بأفضل الأسعار",
      neonColor: "#ffff00", // Yellow
      shadowColor: "rgba(255, 255, 0, 0.6)",
    },
    {
      icon: Droplet,
      name: "تغيير الزيت",
      description: "صيانة زيت المحرك بمعايير عالية",
      neonColor: "#00ff00", // Green
      shadowColor: "rgba(0, 255, 0, 0.6)",
    },
    {
      icon: PhoneCall,
      name: "الإنقاذ السريع",
      description: "خدمة إنقاذ طارئة على مدار الساعة",
      neonColor: "#ff6600", // Orange
      shadowColor: "rgba(255, 102, 0, 0.6)",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#f6b640] via-[#e8d5b8] to-[#d6e0d4] relative overflow-hidden"
    >
      {/* Subtle Decorative Elements */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#154a3c]">
            خدماتنا
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#2fa586]" />
        </motion.div>

        {/* Services Grid */}
        <div className="relative space-y-6">
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
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
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl"
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

                    {/* Service Name with Gradient */}
                    <h3 className="text-2xl font-bold mb-3 relative z-10 bg-gradient-to-r from-[#154a3c] to-[#2fa586] bg-clip-text text-transparent group-hover:from-[#2fa586] group-hover:to-[#f6b640] transition-all duration-500">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#154a3c]/80 relative z-10 leading-relaxed">
                      {service.description}
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

          {/* Second Row - 2 Cards Centered */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  className="group"
                >
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
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl"
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

                    {/* Service Name with Gradient */}
                    <h3 className="text-2xl font-bold mb-3 relative z-10 bg-gradient-to-r from-[#154a3c] to-[#2fa586] bg-clip-text text-transparent group-hover:from-[#2fa586] group-hover:to-[#f6b640] transition-all duration-500">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-[#154a3c]/80 relative z-10 leading-relaxed">
                      {service.description}
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

      {/* Wave Divider for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#d6e0d4"
          />
        </svg>
      </div>
    </section>
  );
}
