"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Smartphone,
  Clock,
  Award,
  Users,
} from "lucide-react";

export default function WhyMamnon() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "خدمة سريعة",
      description: "نصل إليك في أسرع وقت ممكن أينما كنت",
      gradient: "from-[#ffaf12] to-[#ffb13f]",
      size: "large", // Will span 2 columns
      delay: 0,
    },
    {
      icon: ShieldCheck,
      title: "جودة مضمونة",
      description: "نستخدم أفضل المواد والمعدات في جميع خدماتنا",
      gradient: "from-[#2d9f81] to-[#2fa586]",
      size: "medium",
      delay: 1.5,
    },
    {
      icon: Smartphone,
      title: "تطبيق ذكي",
      description: "تتبع الطلبات والدفع الإلكتروني بسهولة",
      gradient: "from-[#154a3c] to-[#175343]",
      size: "medium",
      delay: 3,
    },
    {
      icon: Clock,
      title: "متاح على مدار الساعة",
      description: "خدماتنا متاحة 24/7 لراحتك",
      gradient: "from-[#227962] to-[#247f67]",
      size: "small",
      delay: 4.5,
    },
    {
      icon: Award,
      title: "معايير عالية",
      description: "نلتزم بأعلى معايير الجودة والاحترافية",
      gradient: "from-[#ffaf12] to-[#ffd02d]",
      size: "medium",
      delay: 6,
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "فريق مدرب وذو خبرة عالية",
      gradient: "from-[#2fa586] to-[#2d9f81]",
      size: "small",
      delay: 7.5,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#d6e0d4] via-[#e8ece7] to-[#f4f5f7] relative overflow-hidden"
    >
      {/* Flowing Background Elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#ffaf12]/5 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#154a3c] mb-3 sm:mb-4">
            لماذا ممنون؟
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            نجمع بين السرعة والموثوقية والتكنولوجيا الذكية
          </p>
          <div className="w-24 h-1 bg-[#ffaf12] mx-auto mt-6"></div>
        </motion.div>

        {/* Asymmetric Bento Grid with Sequential Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            // Define grid span based on size
            const gridSpan =
              feature.size === "large"
                ? "md:col-span-2 lg:col-span-2 md:row-span-2"
                : feature.size === "medium"
                ? "md:col-span-1 lg:col-span-2"
                : "md:col-span-1 lg:col-span-1";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50, y: 30 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                          delay: feature.delay,
                          duration: 0.8,
                          ease: "easeOut",
                        },
                      }
                    : {}
                }
                className={`${gridSpan} group`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className={`h-full p-8 rounded-3xl glass-dark border border-[#154a3c]/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${
                    feature.size === "large"
                      ? "min-h-[400px] flex flex-col justify-center"
                      : "min-h-[200px]"
                  }`}
                >
                  {/* Gradient Border Effect on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Flowing Background Accent */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.1, 0.2, 0.1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? {
                            scale: 1,
                            rotate: 0,
                            transition: {
                              delay: feature.delay + 0.3,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 200,
                            },
                          }
                        : {}
                    }
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                    className={`${
                      feature.size === "large"
                        ? "w-24 h-24 mb-8"
                        : "w-20 h-20 mb-6"
                    } rounded-2xl bg-gradient-to-br ${
                      feature.gradient
                    } flex items-center justify-center shadow-lg relative z-10`}
                  >
                    <Icon
                      size={feature.size === "large" ? 48 : 36}
                      className="text-white"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: feature.delay + 0.5,
                                duration: 0.6,
                              },
                            }
                          : {}
                      }
                      className={`${
                        feature.size === "large" ? "text-3xl" : "text-2xl"
                      } font-bold text-[#154a3c] mb-4`}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              transition: {
                                delay: feature.delay + 0.7,
                                duration: 0.6,
                              },
                            }
                          : {}
                      }
                      className={`text-gray-600 ${
                        feature.size === "large" ? "text-lg" : "text-base"
                      } leading-relaxed`}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Animated Underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? {
                              width: "100%",
                              transition: {
                                delay: feature.delay + 0.9,
                                duration: 0.8,
                              },
                            }
                          : {}
                      }
                      className={`h-1 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full`}
                    />
                  </div>

                  {/* Decorative Corner Element */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-4 left-4 w-8 h-8 opacity-10"
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-lg transform rotate-45`}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
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
            fill="#f6b640"
          />
        </svg>
      </div>
    </section>
  );
}
