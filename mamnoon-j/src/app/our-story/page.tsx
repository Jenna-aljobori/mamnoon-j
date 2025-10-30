"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Target,
  Compass,
  Lightbulb,
  Shield,
  Leaf,
  Award,
  TrendingUp,
  Users,
  MapPin,
  Sparkles,
  Brain,
  Heart,
  Rocket,
  Star,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animated Counter Component
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Story Hero Section with Logo
function StoryHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#2fa586] via-[#39c99d] to-[#f6b640] overflow-hidden py-32 min-h-[90vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + ((i * 17) % 30) / 10,
              repeat: Infinity,
              delay: ((i * 23) % 20) / 10,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 29) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right space-y-8"
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="inline-block"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#f6b640]/20 to-[#2fa586]/20 rounded-full blur-xl scale-150"
                />
                <Image
                  src="/Frame 292 (copy).svg"
                  alt="Mamnoon Logo"
                  width={150}
                  height={150}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
              >
                <span className="text-[#154a3c] font-bold text-lg">قصتنا</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#154a3c] mb-6 leading-tight"
              >
                رحلة النجاح
                <br />
                <span className="text-white">تبدأ هنا</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-[#154a3c]/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                من فكرة بسيطة إلى منصة رائدة في خدمات السيارات الذكية
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full">
                  <Star className="w-5 h-5 text-[#f6b640]" fill="#f6b640" />
                  <span className="text-[#154a3c] font-semibold">منذ 2020</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full">
                  <Users className="w-5 h-5 text-[#154a3c]" />
                  <span className="text-[#154a3c] font-semibold">+1M عميل</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full">
                  <CheckCircle className="w-5 h-5 text-[#2fa586]" />
                  <span className="text-[#154a3c] font-semibold">موثوق</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              {/* Placeholder for Team/Office Photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border-4 border-white/50 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/50 flex items-center justify-center">
                    <Users className="w-16 h-16 text-[#154a3c]" />
                  </div>
                  <p className="text-2xl font-bold text-[#154a3c]">
                    صورة الفريق / المكتب
                  </p>
                  <p className="text-[#154a3c]/70">سيتم إضافة الصورة هنا</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#f6b640]/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2fa586]/30 rounded-full blur-2xl"
              />
            </div>
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
            fill="#d6e0d4"
          />
        </svg>
      </div>
    </section>
  );
}

// Journey Timeline Section with Photo Placeholder
function JourneyTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journeyStories = [
    {
      title: "البداية",
      year: "2020",
      content:
        "بدأت ممنون كفكرة بسيطة في عام 2020، عندما لاحظ مؤسسوها الحاجة الملحة لحلول ذكية وموثوقة لخدمات السيارات في المملكة العربية.",
      icon: Sparkles,
      gradient: "from-[#f6b640] to-[#ffaf12]",
    },
    {
      title: "النمو",
      year: "اليوم",
      content:
        "اليوم، أصبحت ممنون واحدة من أكبر الشركات في مجال خدمات السيارات الذكية، مع أكثر من مليون طلب خدمة مكتمل.",
      icon: TrendingUp,
      gradient: "from-[#2fa586] to-[#39c99d]",
    },
    {
      title: "المستقبل",
      year: "2025+",
      content:
        "نحن نفخر بأن نكون جزءاً من التحول الرقمي في قطاع الخدمات العراقي، ونسعى دائماً لتطوير حلول مبتكرة.",
      icon: Rocket,
      gradient: "from-[#39c99d] to-[#2fa586]",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-[#d6e0d4] via-[#e8ece7] to-[#f4f5f7] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#2fa586]/10 backdrop-blur-sm rounded-full border border-[#2fa586]/20 mb-4">
            <span className="text-[#2fa586] font-bold">رحلتنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#154a3c] mb-6">
            قصة نجاح ملهمة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f6b640] to-[#2fa586] mx-auto rounded-full" />
        </motion.div>

        {/* Journey Cards with Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#f6b640] via-[#2fa586] to-[#39c99d] origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {journeyStories.map((story, index) => {
              const Icon = story.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Story Card with Crystal Glass Effect */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "2px solid rgba(255,255,255,0.8)",
                      boxShadow:
                        "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
                    }}
                    className="p-8 rounded-3xl h-full relative overflow-hidden"
                  >
                    {/* Crystal Shine Effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                    {/* Year Badge */}
                    <motion.div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-br from-[#f6b640]/20 to-[#2fa586]/20 backdrop-blur-sm rounded-full border border-[#f6b640]/30">
                      <span className="text-[#154a3c] font-bold text-sm">
                        {story.year}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <div className="mt-16 mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center shadow-lg shadow-[#2fa586]/30`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#154a3c] mb-4 text-center">
                      {story.title}
                    </h3>

                    {/* Content */}
                    <p className="text-[#154a3c]/70 text-lg leading-relaxed text-center">
                      {story.content}
                    </p>

                    {/* Bottom Accent */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                      className={`h-1 bg-gradient-to-r ${story.gradient} mt-6 rounded-full`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative h-[450px] rounded-3xl overflow-hidden bg-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md border-4 border-white/70 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/60 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-[#f6b640]" />
                </div>
                <p className="text-2xl font-bold text-[#154a3c]">
                  صورة مراحل التطور / الأحداث المهمة
                </p>
                <p className="text-[#154a3c]/70">سيتم إضافة الصورة هنا</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
        >
          {[
            { value: 1000000, suffix: "+", label: "طلب خدمة", icon: Users },
            { value: 500, suffix: "+", label: "مزود خدمة", icon: MapPin },
            { value: 2020, suffix: "", label: "منذ عام", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
              }}
              className="p-8 rounded-3xl text-center group"
            >
              <stat.icon className="w-16 h-16 text-[#2fa586] mx-auto mb-4 group-hover:text-[#f6b640] transition-colors" />
              <div className="text-5xl font-bold bg-gradient-to-r from-[#f6b640] to-[#2fa586] bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#154a3c]/70 text-lg font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Mission & Vision with Photo Section
function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-[#f4f5f7] to-[#e8ece7] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#f6b640]/10 backdrop-blur-sm rounded-full border border-[#f6b640]/20 mb-4">
            <span className="text-[#f6b640] font-bold">رسالتنا ورؤيتنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#154a3c] mb-6">
            نحو مستقبل أفضل
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f6b640] to-[#2fa586] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Mission Card with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
              }}
              className="p-10 rounded-3xl order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f6b640] to-[#ffaf12] flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[#154a3c]">رسالتنا</h3>
              </div>

              <p className="text-[#154a3c]/80 text-xl leading-relaxed mb-6">
                أن نصبح المنصة الرائدة في تقديم خدمات السيارات الذكية في المملكة
                العربية مع التركيز على تسهيل حياة العملاء من خلال حلول مبتكرة
                وموثوقة وسريعة الاستجابة.
              </p>

              <div className="space-y-3">
                {["الابتكار المستمر", "الجودة العالية", "رضا العملاء"].map(
                  (item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-[#2fa586]" />
                      <span className="text-[#154a3c] font-semibold text-lg">
                        {item}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Mission Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f6b640]/20 to-[#2fa586]/20 backdrop-blur-md border-4 border-white/70 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-white/60 flex items-center justify-center">
                      <Target className="w-12 h-12 text-[#f6b640]" />
                    </div>
                    <p className="text-xl font-bold text-[#154a3c]">
                      صورة رسالتنا
                    </p>
                    <p className="text-[#154a3c]/70">سيتم إضافة الصورة هنا</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision Card with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2fa586]/20 to-[#39c99d]/20 backdrop-blur-md border-4 border-white/70 rounded-3xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-white/60 flex items-center justify-center">
                      <Compass className="w-12 h-12 text-[#2fa586]" />
                    </div>
                    <p className="text-xl font-bold text-[#154a3c]">
                      صورة رؤيتنا
                    </p>
                    <p className="text-[#154a3c]/70">سيتم إضافة الصورة هنا</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
              }}
              className="p-10 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2fa586] to-[#39c99d] flex items-center justify-center shadow-lg">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[#154a3c]">رؤيتنا</h3>
              </div>

              <p className="text-[#154a3c]/80 text-xl leading-relaxed mb-6">
                أن نكون المرجع الأول لخدمات السيارات الذكية في الشرق الأوسط، مع
                تغطية شاملة لجميع احتياجات العملاء من خلال تطبيق واحد متكامل
                يجمع بين التقنية والخدمة المتميزة.
              </p>

              <div className="space-y-3">
                {["التوسع الإقليمي", "التحول الرقمي", "الريادة السوقية"].map(
                  (item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-[#f6b640]" />
                      <span className="text-[#154a3c] font-semibold text-lg">
                        {item}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Core Values Grid
function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      title: "الابتكار",
      description:
        "نطور حلولاً تقنية ذكية لتحسين تجربة العملاء وتسهيل حياتهم اليومية",
      icon: Lightbulb,
      color: "from-[#f6b640] to-[#ffaf12]",
    },
    {
      title: "الموثوقية",
      description:
        "نلتزم بأعلى معايير الجودة والسلامة في جميع خدماتنا ومنتجاتنا",
      icon: Shield,
      color: "from-[#2fa586] to-[#39c99d]",
    },
    {
      title: "الاستدامة",
      description:
        "نعمل على تقليل البصمة الكربونية وتعزيز الممارسات البيئية المسؤولة",
      icon: Leaf,
      color: "from-[#39c99d] to-[#2fa586]",
    },
    {
      title: "التميز في الخدمة",
      description: "نسعى دائماً لتقديم أفضل تجربة خدمة عملاء في السوق العراقي",
      icon: Heart,
      color: "from-[#f6b640] to-[#2fa586]",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-[#e8ece7] to-[#d6e0d4] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#2fa586]/10 backdrop-blur-sm rounded-full border border-[#2fa586]/20 mb-4">
            <span className="text-[#2fa586] font-bold">قيمنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#154a3c] mb-6">
            القيم التي نؤمن بها
          </h2>
          <p className="text-xl text-[#154a3c]/70 max-w-3xl mx-auto">
            القيم التي توجه عملنا وتحدد هويتنا كشركة رائدة في مجال الخدمات
            الذكية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f6b640] to-[#2fa586] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
                }}
                className="p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
              >
                {/* Crystal Shine */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                {/* Hover Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg shadow-[#2fa586]/20 mx-auto`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#154a3c] mb-3 text-center">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-[#154a3c]/70 text-base leading-relaxed text-center">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className={`h-1 bg-gradient-to-r ${value.color} mt-6 rounded-full mx-auto w-16 group-hover:w-full transition-all duration-300`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Team Section with Photo Placeholders
function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const teamRoles = [
    { icon: Users, title: "فريق القيادة", description: "قادة ذوو رؤية وخبرة" },
    { icon: Brain, title: "فريق التقنية", description: "مبتكرون ومطورون" },
    {
      icon: Heart,
      title: "فريق خدمة العملاء",
      description: "دعم متميز ومستمر",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-[#d6e0d4] to-[#e8ece7] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#f6b640]/10 backdrop-blur-sm rounded-full border border-[#f6b640]/20 mb-4">
            <span className="text-[#f6b640] font-bold">فريقنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#154a3c] mb-6">
            الأشخاص وراء النجاح
          </h2>
          <p className="text-xl text-[#154a3c]/70 max-w-3xl mx-auto">
            فريق متميز من المحترفين الملتزمين بتقديم أفضل الخدمات
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f6b640] to-[#2fa586] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Main Team Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2fa586]/20 to-[#f6b640]/20 backdrop-blur-md border-4 border-white/70 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/60 flex items-center justify-center">
                  <Users className="w-16 h-16 text-[#2fa586]" />
                </div>
                <p className="text-3xl font-bold text-[#154a3c]">
                  صورة الفريق الجماعية
                </p>
                <p className="text-[#154a3c]/70 text-lg">
                  سيتم إضافة صورة الفريق هنا
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Roles */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {/* Role Photo Placeholder */}
                <div className="relative h-[300px] rounded-3xl overflow-hidden mb-6 bg-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md border-4 border-white/70 rounded-3xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white/60 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-[#2fa586]" />
                      </div>
                      <p className="text-lg font-bold text-[#154a3c]">
                        صورة {role.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Role Info */}
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "2px solid rgba(255,255,255,0.8)",
                    boxShadow:
                      "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
                  }}
                  className="p-6 rounded-3xl text-center"
                >
                  <h3 className="text-2xl font-bold text-[#154a3c] mb-2">
                    {role.title}
                  </h3>
                  <p className="text-[#154a3c]/70">{role.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function StoryCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#e8ece7] via-[#f6b640] to-[#2fa586] overflow-hidden">
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
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + ((i * 17) % 30) / 10,
              repeat: Infinity,
              delay: ((i * 23) % 20) / 10,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 29) % 100}%`,
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
          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-8"
          >
            <Image
              src="/Frame 292 (copy).svg"
              alt="Mamnoon Logo"
              width={100}
              height={100}
              className="drop-shadow-2xl"
            />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-[#154a3c] mb-6">
            انضم إلى رحلتنا
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-12">
            كن جزءاً من قصة النجاح. حمّل التطبيق الآن
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#154a3c] to-[#2fa586] hover:from-[#2fa586] hover:to-[#154a3c] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
          >
            حمّل التطبيق الآن
            <Rocket className="w-6 h-6" />
          </motion.button>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center items-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-white" fill="white" />
              <span className="text-white font-semibold">4.8 تقييم</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">+1M مستخدم</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">موثوق 100%</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-[#0a1f1a]">
      <Navbar />
      <main>
        <StoryHero />
        <JourneyTimeline />
        <MissionVision />
        <CoreValues />
        <TeamSection />
        <StoryCTA />
      </main>
      <Footer />
    </div>
  );
}
