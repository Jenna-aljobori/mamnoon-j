"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#2fa586] via-[#39c99d] to-[#f6b640] overflow-hidden pt-20">
      {/* Oil Droplet Lava Lamp Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Liquid Blobs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,175,18,0.3) 0%, rgba(255,175,18,0.1) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.8, 1.4, 1],
            rotate: [360, 270, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-20 w-[500px] h-[500px] rounded-[60%_40%_30%_70%/40%_60%_50%_50%]"
          style={{
            background:
              "radial-gradient(circle, rgba(47,165,134,0.3) 0%, rgba(47,165,134,0.1) 70%, transparent 100%)",
            filter: "blur(50px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -60, 90, 0],
            y: [0, -50, 80, 0],
            scale: [1, 1.2, 0.85, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-[50%_50%_40%_60%/60%_40%_60%_40%]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,208,45,0.25) 0%, rgba(255,208,45,0.08) 70%, transparent 100%)",
            filter: "blur(45px)",
          }}
        />

        {/* Glassmorphism Overlay */}
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Text Content - Right Side in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 lg:order-2"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/Frame 292 (copy).svg"
                alt="ممنون"
                width={140}
                height={140}
                className="w-auto h-20"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              يفوّلك وين ما تكون
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-white/90 font-medium"
            >
              خدمة متكاملة لتوصيل الوقود والصيانة الذكية
            </motion.p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3 text-lg">
              {["الوقود", "الإطارات", "البطاريات", "تغيير الزيت"].map(
                (service, index) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    {service}
                  </motion.span>
                )
              )}
            </div>

            {/* Feature Checkmarks */}
            <div className="space-y-4">
              {[
                "تصميم عصري وسهل الاستخدام",
                "مكونات قابلة للتخصيص بالكامل",
                "متوافق مع الجوال وقابل للتوسع",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.1 + index * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ffaf12] flex items-center justify-center">
                    <Check size={16} className="text-[#154a3c]" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffaf12] hover:bg-[#ffb13f] text-[#154a3c] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
              >
                احجز الآن
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                تعرف على الخدمات
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Phone Mockups - Left Side in RTL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] lg:order-1"
          >
            {/* Main Phone (Front) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative w-[280px] h-[570px] bg-gradient-to-b from-[#2fa586] to-[#227962] rounded-[50px] shadow-2xl border-8 border-[#154a3c] overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#154a3c] rounded-b-3xl z-30"></div>

                {/* Scrollable Mini Homepage */}
                <div className="w-full h-full overflow-y-scroll bg-[#f4f5f7] scrollbar-thin">
                  {/* Mini Hero Section */}
                  <div className="bg-gradient-to-b from-[#2fa586] via-[#39c99d] to-[#f6b640] p-4 pt-10 pb-6 text-center">
                    <Image
                      src="/Frame 292 (copy).svg"
                      alt="ممنون"
                      width={60}
                      height={60}
                      className="h-10 w-auto mx-auto mb-3"
                    />
                    <h3 className="text-[#154a3c] text-lg font-bold mb-1">
                      يفوّلك وين ما تكون
                    </h3>
                    <p className="text-[#154a3c]/70 text-xs mb-3">
                      خدمة متكاملة لتوصيل الوقود والصيانة
                    </p>
                    <button className="bg-[#154a3c] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      احجز الآن
                    </button>
                  </div>

                  {/* Mini Services Section */}
                  <div className="p-4 bg-[#f6b640]">
                    <h4 className="text-[#154a3c] font-bold text-sm mb-3 text-center">
                      خدماتنا
                    </h4>
                    <div className="space-y-2">
                      {[
                        {
                          name: "الوقود",
                          icon: "⛽",
                          color: "from-[#ffaf12] to-[#ffb13f]",
                        },
                        {
                          name: "الإطارات",
                          icon: "🔧",
                          color: "from-[#2fa586] to-[#39c99d]",
                        },
                        {
                          name: "البطاريات",
                          icon: "🔋",
                          color: "from-[#227962] to-[#2fa586]",
                        },
                        {
                          name: "تغيير الزيت",
                          icon: "🛢️",
                          color: "from-[#154a3c] to-[#227962]",
                        },
                      ].map((service) => (
                        <div
                          key={service.name}
                          className={`bg-gradient-to-r ${service.color} p-3 rounded-xl text-white flex items-center gap-2 shadow-md`}
                        >
                          <span className="text-xl">{service.icon}</span>
                          <span className="text-xs font-semibold">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini Why Mamnon Section */}
                  <div className="p-4 bg-[#d6e0d4]">
                    <h4 className="text-[#154a3c] font-bold text-sm mb-3 text-center">
                      لماذا ممنون؟
                    </h4>
                    <div className="space-y-2">
                      {[
                        { title: "خدمة سريعة", icon: "⚡" },
                        { title: "جودة مضمونة", icon: "✓" },
                        { title: "تطبيق ذكي", icon: "📱" },
                      ].map((feature) => (
                        <div
                          key={feature.title}
                          className="bg-white/80 p-2 rounded-lg flex items-center gap-2 shadow-sm border border-white/50"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#2fa586] flex items-center justify-center text-xs text-white">
                            {feature.icon}
                          </div>
                          <span className="text-xs font-semibold text-[#154a3c]">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini How It Works */}
                  <div className="p-4 bg-[#e8ece7]">
                    <h4 className="text-[#154a3c] font-bold text-sm mb-3 text-center">
                      كيف يعمل؟
                    </h4>
                    <div className="space-y-2">
                      {[
                        { num: "١", text: "حمّل التطبيق" },
                        { num: "٢", text: "اختر الخدمة" },
                        { num: "٣", text: "استقبل الطلب" },
                      ].map((step) => (
                        <div key={step.num} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#f6b640] flex items-center justify-center text-[#154a3c] text-xs font-bold shadow-sm">
                            {step.num}
                          </div>
                          <span className="text-xs text-[#154a3c]/80">
                            {step.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini CTA Section */}
                  <div className="p-4 bg-gradient-to-br from-[#2fa586] to-[#39c99d] text-center">
                    <h4 className="text-white font-bold text-sm mb-2">
                      جاهز للبدء؟
                    </h4>
                    <p className="text-white/90 text-xs mb-3">
                      حمّل التطبيق الآن
                    </p>
                    <button className="bg-white text-[#2fa586] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      حمّل مجاناً
                    </button>
                  </div>

                  {/* Mini Footer */}
                  <div className="p-4 bg-[#154a3c] text-center">
                    <Image
                      src="/Frame 292 (copy).svg"
                      alt="ممنون"
                      width={40}
                      height={40}
                      className="h-8 w-auto mx-auto mb-2"
                    />
                    <p className="text-white/60 text-[10px]">
                      © 2025 ممنون. جميع الحقوق محفوظة
                    </p>
                  </div>
                </div>

                {/* Custom Scrollbar Styles */}
                <style jsx>{`
                  .scrollbar-thin::-webkit-scrollbar {
                    width: 3px;
                  }
                  .scrollbar-thin::-webkit-scrollbar-track {
                    background: #e8ece7;
                  }
                  .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #2fa586;
                    border-radius: 3px;
                  }
                `}</style>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
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
