"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, CreditCard, Star, Download } from "lucide-react";
import Image from "next/image";

export default function AppFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Bell,
      title: "إشعارات فورية",
      description: "تلقى تحديثات مباشرة عن طلبك",
    },
    {
      icon: CreditCard,
      title: "دفع آمن",
      description: "طرق دفع متعددة وآمنة 100%",
    },
    {
      icon: Star,
      title: "تقييم الخدمة",
      description: "شارك تجربتك وساعدنا في التحسين",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#f4f5f7] to-[#e8ece7]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Right Side in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:order-2 space-y-8"
          >
            {/* Section Header */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#154a3c] mb-4">
                التطبيق الذكي
              </h2>
              <p className="text-xl text-gray-600">
                كل ما تحتاجه في تطبيق واحد
              </p>
              <div className="w-24 h-1 bg-[#f6b640] mt-4"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              تجربة مستخدم سلسة وسهلة مع واجهة عصرية وميزات ذكية تجعل طلب
              الخدمات أسهل من أي وقت مضى
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2fa586] to-[#227962] flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-[#f6b640]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#154a3c] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-[#2fa586] to-[#39c99d] text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <Download size={24} />
                <div className="text-right">
                  <div className="text-xs">متوفر على</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-[#f6b640] to-[#ffaf12] text-[#154a3c] px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <Download size={24} />
                <div className="text-right">
                  <div className="text-xs">حمّل من</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Phone Mockup - Left Side in RTL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Phone Frame */}
              <div className="relative w-[320px] h-[650px] mx-auto bg-gradient-to-b from-[#2fa586] to-[#227962] rounded-[50px] shadow-2xl border-8 border-[#154a3c] overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#154a3c] rounded-b-3xl z-30"></div>

                {/* App Screenshot */}
                <div className="w-full h-full overflow-hidden bg-white">
                  <Image
                    src="/Screenshot%20from%202025-10-29%2015-30-43.png"
                    alt="تطبيق ممنون"
                    width={320}
                    height={650}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-10 w-32 h-32 bg-[#f6b640]/20 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -left-10 w-40 h-40 bg-[#2fa586]/20 rounded-full blur-2xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
