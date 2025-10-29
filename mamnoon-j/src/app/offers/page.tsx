"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import {
  Fuel,
  CircleDot,
  Battery,
  Droplet,
  Check,
  Clock,
  ArrowLeft,
  CreditCard,
  Shield,
  Lock,
  Wrench,
  Car,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Offers Hero Section - Warm Theme
function OffersHero() {
  const services = [
    { icon: Fuel, name: "الوقود", color: "#ff8a3d" },
    { icon: CircleDot, name: "الإطارات", color: "#227962" },
    { icon: Battery, name: "البطاريات", color: "#ffaf12" },
    { icon: Droplet, name: "تغيير الزيت", color: "#2fa586" },
    { icon: Wrench, name: "الصيانة", color: "#ffd02d" },
    { icon: Car, name: "الفحص", color: "#39c99d" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#2fa586] via-[#39c99d] to-[#f6b640] overflow-hidden pt-20">
      {/* Diagonal Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2fa586]/20 to-transparent"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 80%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-12 text-right"
          >
            {/* Brand Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                <p className="text-[#154a3c] text-lg font-bold">عروض ممنون</p>
              </div>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#154a3c] mb-6 leading-tight"
            >
              خدمات متكاملة
              <br />
              <span className="text-white">للسيارات والصيانة</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-[#154a3c]/80 mb-8 max-w-xl"
            >
              خدمات احترافية متوفرة على مدار الساعة لراحتك وأمانك
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#154a3c] hover:bg-[#1e5f4d] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-[#154a3c]/50 transition-all inline-flex items-center gap-3 group"
            >
              احجز الآن
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE - Car Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
          >
            {/* Main Car Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 w-full flex items-center justify-center px-4"
            >
              {/* Background glow for car */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[400px] bg-gradient-to-br from-[#2fa586]/10 via-[#227962]/5 to-transparent rounded-full blur-3xl" />
              </div>

              <Image
                src="/car-illustration (2).svg"
                alt="Car Services"
                width={900}
                height={675}
                className="w-full max-w-4xl h-auto drop-shadow-2xl relative z-10"
                priority
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-1/4 right-10 w-32 h-32 bg-[#2fa586]/20 rounded-full blur-3xl z-0"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-1/4 left-10 w-40 h-40 bg-[#227962]/20 rounded-full blur-3xl z-0"
            />
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

// Services Grid Section
function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Fuel,
      title: "خدمة الوقود",
      description: "توصيل الوقود مباشرة إلى سيارتك أينما كنت على مدار 24 ساعة",
      color: "#ff8a3d",
      features: ["توصيل سريع", "أسعار تنافسية", "دفع آمن"],
    },
    {
      icon: CircleDot,
      title: "خدمة الإطارات",
      description: "تركيب وإصلاح الإطارات في موقعك بأحدث المعدات",
      color: "#227962",
      features: ["تركيب احترافي", "فحص ضغط الهواء", "إصلاح فوري"],
    },
    {
      icon: Battery,
      title: "خدمة البطاريات",
      description: "تركيب وشحن البطاريات مع ضمان شامل على جميع المنتجات",
      color: "#ffaf12",
      features: ["بطاريات أصلية", "شحن سريع", "ضمان معتمد"],
    },
    {
      icon: Droplet,
      title: "تغيير الزيت",
      description: "تغيير زيت المحرك بزيوت عالية الجودة في موقعك",
      color: "#2fa586",
      features: ["زيوت أصلية", "فلاتر معتمدة", "فحص شامل"],
    },
    {
      icon: Wrench,
      title: "الصيانة الدورية",
      description: "صيانة شاملة لسيارتك مع فحص دقيق لجميع الأنظمة",
      color: "#ffd02d",
      features: ["فحص شامل", "قطع أصلية", "تقرير مفصل"],
    },
    {
      icon: Car,
      title: "الفحص الفني",
      description: "فحص متكامل لسيارتك قبل الشراء أو الصيانة الدورية",
      color: "#39c99d",
      features: ["تقرير احترافي", "فحص إلكتروني", "توصيات عملية"],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-[#f6b640] via-[#e8d5b8] to-[#d6e0d4] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(47,165,134,0.3) 35px, rgba(47,165,134,0.3) 70px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#2fa586]/10 backdrop-blur-sm rounded-full border border-[#2fa586]/20 mb-4">
            <span className="text-[#2fa586] font-bold">خدماتنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#154a3c] mb-6">
            خدماتنا المتكاملة
          </h2>
          <p className="text-xl text-[#154a3c]/70 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات السيارات الاحترافية لضمان راحتك وسلامتك
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f6b640] to-[#2fa586] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glassy Card */}
              <div
                className="relative h-full rounded-3xl p-8 overflow-hidden transition-all duration-300"
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
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                {/* Hover Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    boxShadow: `0 4px 16px ${service.color}40`,
                  }}
                >
                  <service.icon
                    className="w-10 h-10 text-white"
                    strokeWidth={2.5}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#154a3c] mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-[#154a3c]/70 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 relative">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: service.color }}
                        strokeWidth={3}
                      />
                      <span className="text-[#154a3c]/80 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div
                  className="h-1 rounded-full mt-6"
                  style={{
                    background: `linear-gradient(to right, ${service.color}, ${service.color}88)`,
                  }}
                />

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}10, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 24/7 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255,255,255,0.8)",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <Clock className="w-6 h-6 text-[#2fa586]" />
            <span className="text-[#154a3c] font-bold text-lg">
              جميع الخدمات متاحة على مدار 24 ساعة
            </span>
          </div>
        </motion.div>
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
            fill="#e8ece7"
          />
        </svg>
      </div>
    </section>
  );
}

// 3D Card Stack Component
function PaymentCardStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const cards = [
    {
      gradient: "from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]",
      number: "4455 5491 6118 6164",
      name: "اسم العميل",
      type: "VISA",
      logo: "VISA",
      offsetX: 0,
      offsetY: 0,
      rotation: 0,
    },
    {
      gradient: "from-[#f0f9ff]/80 via-[#e0f2fe]/60 to-[#bae6fd]/40",
      number: "5234 7821 9043 2156",
      name: "اسم العميل",
      type: "Mastercard",
      logo: "MC",
      offsetX: 40,
      offsetY: -50,
      rotation: -8,
    },
    {
      gradient: "from-[#7c3aed] via-[#a78bfa] to-[#c4b5fd]",
      number: "4455 5491 6118 6164",
      name: "اسم العميل",
      type: "VISA",
      logo: "VISA",
      offsetX: 80,
      offsetY: -100,
      rotation: -16,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-[#e8ece7] to-[#d6e0d4] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative h-[700px] flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -20 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          rotateX: 15,
                        }
                      : {}
                  }
                  whileHover={{
                    y: -10,
                    rotateX: 20,
                    rotateZ: card.rotation + 2,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="absolute"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translate(${card.offsetX}px, ${card.offsetY}px) rotateX(15deg) rotateZ(${card.rotation}deg)`,
                    zIndex: cards.length - index,
                  }}
                >
                  <div
                    className="w-[420px] h-[260px] rounded-[24px] p-8 backdrop-blur-2xl border border-white/30 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.5),
                        0 12px 24px -8px rgba(0, 0, 0, 0.4),
                        0 4px 8px -2px rgba(0, 0, 0, 0.3),
                        inset 0 1px 2px rgba(255, 255, 255, 0.3),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.2)
                      `,
                    }}
                  >
                    {/* Card Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                      style={{
                        opacity: card.type === "Mastercard" ? 1 : 0.95,
                      }}
                    />

                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between text-white">
                      {/* Top Section - Logo */}
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-amber-400 to-amber-600" />
                        </div>
                        <div
                          className={`font-bold text-3xl tracking-wider ${
                            card.type === "Mastercard"
                              ? "text-gray-800"
                              : "text-white"
                          }`}
                        >
                          {card.logo}
                        </div>
                      </div>

                      {/* Middle Section - Card Number */}
                      <div
                        className={`text-2xl font-mono tracking-[0.3em] ${
                          card.type === "Mastercard"
                            ? "text-gray-700"
                            : "text-white"
                        }`}
                      >
                        {card.number}
                      </div>

                      {/* Bottom Section - Name */}
                      <div className="flex justify-between items-end">
                        <div>
                          <div
                            className={`text-sm opacity-70 mb-1 ${
                              card.type === "Mastercard"
                                ? "text-gray-600"
                                : "text-white"
                            }`}
                          >
                            الاسم
                          </div>
                          <div
                            className={`text-lg font-semibold ${
                              card.type === "Mastercard"
                                ? "text-gray-800"
                                : "text-white"
                            }`}
                          >
                            {card.name}
                          </div>
                        </div>
                        {card.type === "Mastercard" && (
                          <div className="flex gap-[-8px]">
                            <div className="w-10 h-10 rounded-full bg-red-500" />
                            <div className="w-10 h-10 rounded-full bg-orange-400 -ml-4" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Shine Effect */}
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Payment Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="p-10 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255,255,255,0.8)",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#154a3c] mb-6">
              طرق الدفع المتاحة
            </h2>

            <p className="text-xl text-[#154a3c]/80 mb-8 leading-relaxed">
              ندعم جميع طرق الدفع الإلكترونية لراحتك مع أعلى معايير الأمان
              والحماية
            </p>

            {/* Payment Methods */}
            <div className="space-y-4 mb-8">
              {[
                { name: "Visa", icon: CreditCard },
                { name: "Mastercard", icon: CreditCard },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/60 rounded-xl border border-white hover:border-[#2fa586]/50 transition-all group backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f6b640] to-[#ffaf12] flex items-center justify-center shadow-lg">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#154a3c] text-lg font-semibold">
                    {method.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Security Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: "دفع آمن" },
                { icon: Lock, text: "محمي بالكامل" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 bg-[#2fa586]/20 px-4 py-2 rounded-full border border-[#2fa586]/30"
                >
                  <badge.icon className="w-5 h-5 text-[#2fa586]" />
                  <span className="text-[#154a3c] text-sm font-semibold">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partners & Brands Section
function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "شركة الوقود العراقية", category: "شريك الوقود" },
    { name: "بريدجستون", category: "شريك الإطارات" },
    { name: "موبيل", category: "شريك الزيوت" },
    { name: "بوش", category: "شريك قطع الغيار" },
    { name: "هيونداي", category: "وكيل معتمد" },
    { name: "تويوتا", category: "وكيل معتمد" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#d6e0d4] to-[#e8ece7] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(47,165,134,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#2fa586]/10 backdrop-blur-sm rounded-full border border-[#2fa586]/20 mb-4">
            <span className="text-[#2fa586] font-bold">شركاؤنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#154a3c] mb-4">
            نفخر بالعمل مع أفضل العلامات التجارية
          </h2>
          <p className="text-lg text-[#154a3c]/70 max-w-2xl mx-auto">
            نتعاون مع أفضل الشركات العالمية لضمان جودة خدماتنا
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div
                className="relative h-32 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Shine Effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                {/* Logo Placeholder */}
                <div className="text-3xl font-bold bg-gradient-to-r from-[#2fa586] to-[#f6b640] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {partner.name}
                </div>

                {/* Category Badge */}
                <div className="text-xs text-[#154a3c]/60 font-medium">
                  {partner.category}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[#f6b640]/10 to-[#2fa586]/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            "✓ معتمد من وزارة النقل",
            "✓ شهادة الجودة ISO 9001",
            "✓ أكثر من 10 سنوات خبرة",
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.1)",
              }}
            >
              <span className="text-[#154a3c] font-semibold text-sm">
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Call-to-Action Section
function OffersCTA() {
  // Generate stable random positions for particles
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#d6e0d4] via-[#f6b640] to-[#2fa586] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#154a3c]/10 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#154a3c] mb-6">
            جاهز للحصول على أفضل خدمة؟
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-12">
            تواصل معنا الآن واحجز الخدمة التي تحتاجها
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#154a3c] hover:bg-[#1e5f4d] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-[#154a3c]/50 transition-all inline-flex items-center gap-3"
            >
              احجز الآن
              <ArrowLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm hover:bg-white text-[#154a3c] px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3"
            >
              اتصل بنا
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function OffersPage() {
  return (
    <div className="min-h-screen bg-[#0a1f1a]">
      <Navbar />
      <main>
        <OffersHero />
        <ServicesGrid />
        <PartnersSection />
        <PaymentCardStack />
        <OffersCTA />
      </main>
      <Footer />
    </div>
  );
}
