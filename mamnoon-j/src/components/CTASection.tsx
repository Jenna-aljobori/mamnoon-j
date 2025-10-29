"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      id="download"
      className="py-32 relative overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Billboard Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Screenshot%20from%202025-10-29%2015-31-17.png"
          alt="ممنون - لا تروح هي تجيك"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3d31]/95 via-[#154a3c]/80 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-[#f6b640]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-[#2fa586]/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-8 text-center"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl"
          >
            جاهز للبدء؟
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white font-medium drop-shadow-lg"
          >
            حمّل التطبيق الآن واستمتع بخدماتنا المميزة
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-[#f6b640] to-[#ffaf12] hover:shadow-2xl text-white px-12 py-6 rounded-full font-bold text-2xl shadow-2xl transition-all duration-300"
            >
              حمّل التطبيق مجاناً
              <ArrowLeft size={28} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-12"
          >
            {[
              { number: "١٠٠٠+", label: "عميل سعيد" },
              { number: "٤.٨", label: "تقييم التطبيق" },
              { number: "٢٤/٧", label: "خدمة متواصلة" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/20"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#f6b640] mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-white text-base sm:text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
