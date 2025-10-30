"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowDown,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Contact Hero Section
function ContactHero() {
  // Generate stable particle positions
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        left: (i * 37 + 13) % 100,
        duration: 2 + ((i * 17) % 40) / 20,
        delay: ((i * 23) % 40) / 20,
      })),
    []
  );

  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-[#2fa586] via-[#39c99d] to-[#f6b640] overflow-hidden flex items-center justify-center pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Icons */}
        {[
          { Icon: Phone, delay: 0, x: "10%", y: "20%" },
          { Icon: Mail, delay: 0.5, x: "80%", y: "30%" },
          { Icon: MessageSquare, delay: 1, x: "20%", y: "70%" },
          { Icon: MapPin, delay: 1.5, x: "85%", y: "65%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
            }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <item.Icon className="w-12 h-12 text-white/20" />
          </motion.div>
        ))}

        {/* Particles with stable positions */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              left: `${particle.left}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Logo */}
        <div className="mx-auto mb-6 sm:mb-8">
          <Image
            src="/Frame 292 (copy).svg"
            alt="ممنون"
            width={120}
            height={120}
            className="mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#154a3c] mb-3 sm:mb-4">
          نحن هنا لمساعدتك
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#154a3c]/80 max-w-2xl mx-auto px-4">
          تواصل معنا في أي وقت، فريقنا جاهز للرد على استفساراتك
        </p>
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#f4f5f7"
          />
        </svg>
      </div>
    </section>
  );
}

// Main Contact Form Section
function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.inquiryType) newErrors.inquiryType = "نوع الاستفسار مطلوب";
    if (!formData.message) newErrors.message = "الرسالة مطلوبة";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiryType: "",
        message: "",
      });
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#f4f5f7] via-[#e8ece7] to-[#d6e0d4] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#154a3c] mb-3">
            تواصل معنا
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#f6b640] to-[#2fa586] mx-auto rounded-full mb-4" />
          <p className="text-lg text-[#154a3c]/70 max-w-xl mx-auto">
            املأ النموذج وسنعود إليك في أقرب وقت ممكن
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255,255,255,0.8)",
              boxShadow:
                "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
            }}
            className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Crystal Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#154a3c] to-[#2fa586] bg-clip-text text-transparent mb-3">
              لنتحدث معاً
            </h2>
            <p className="text-[#154a3c]/70 mb-8 text-lg">
              لطلب عرض أسعار أو ترغب في الاجتماع لتناول القهوة، اتصل بنا مباشرة
              أو املأ النموذج وسنعاود الاتصال بك على الفور.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`peer w-full bg-white/60 border-2 ${
                    errors.name ? "border-red-500" : "border-[#2fa586]/30"
                  } rounded-xl px-4 pt-6 pb-2 text-[#154a3c] placeholder-transparent focus:border-[#2fa586] focus:outline-none focus:ring-2 focus:ring-[#2fa586]/20 transition-all`}
                  placeholder="اسمك الكامل"
                />
                <label
                  htmlFor="name"
                  className="absolute right-4 top-2 text-sm text-[#154a3c]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#2fa586]"
                >
                  اسمك الكامل
                </label>
                {errors.name && (
                  <span className="text-red-400 text-sm flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`peer w-full bg-white/60 border-2 ${
                    errors.phone ? "border-red-500" : "border-[#2fa586]/30"
                  } rounded-xl px-4 pt-6 pb-2 text-[#154a3c] placeholder-transparent focus:border-[#2fa586] focus:outline-none focus:ring-2 focus:ring-[#2fa586]/20 transition-all`}
                  placeholder="رقم الهاتف"
                />
                <label
                  htmlFor="phone"
                  className="absolute right-4 top-2 text-sm text-[#154a3c]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#2fa586]"
                >
                  رقم الهاتف
                </label>
                {errors.phone && (
                  <span className="text-red-400 text-sm flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`peer w-full bg-white/60 border-2 ${
                    errors.email ? "border-red-500" : "border-[#2fa586]/30"
                  } rounded-xl px-4 pt-6 pb-2 text-[#154a3c] placeholder-transparent focus:border-[#2fa586] focus:outline-none focus:ring-2 focus:ring-[#2fa586]/20 transition-all`}
                  placeholder="بريدك الإلكتروني"
                />
                <label
                  htmlFor="email"
                  className="absolute right-4 top-2 text-sm text-[#154a3c]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#2fa586]"
                >
                  بريدك الإلكتروني
                </label>
                {errors.email && (
                  <span className="text-red-400 text-sm flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Inquiry Type Dropdown */}
              <div className="relative">
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className={`w-full bg-white/60 border-2 ${
                    errors.inquiryType
                      ? "border-red-500"
                      : "border-[#2fa586]/30"
                  } rounded-xl px-4 py-4 text-[#154a3c] focus:border-[#2fa586] focus:outline-none focus:ring-2 focus:ring-[#2fa586]/20 transition-all appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    نوع الاستفسار
                  </option>
                  <option value="general" className="bg-white">
                    استفسار عام
                  </option>
                  <option value="support" className="bg-white">
                    دعم فني
                  </option>
                  <option value="sales" className="bg-white">
                    مبيعات
                  </option>
                  <option value="partnership" className="bg-white">
                    شراكة
                  </option>
                  <option value="complaint" className="bg-white">
                    شكوى
                  </option>
                  <option value="suggestion" className="bg-white">
                    اقتراح
                  </option>
                </select>
                <ArrowDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#154a3c]/60 pointer-events-none" />
                {errors.inquiryType && (
                  <span className="text-red-400 text-sm flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.inquiryType}
                  </span>
                )}
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={`peer w-full bg-white/60 border-2 ${
                    errors.message ? "border-red-500" : "border-[#2fa586]/30"
                  } rounded-xl px-4 pt-6 pb-2 text-[#154a3c] placeholder-transparent focus:border-[#2fa586] focus:outline-none focus:ring-2 focus:ring-[#2fa586]/20 transition-all resize-none`}
                  placeholder="رسالتك"
                />
                <label
                  htmlFor="message"
                  className="absolute right-4 top-2 text-sm text-[#154a3c]/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#2fa586]"
                >
                  رسالتك
                </label>
                {errors.message && (
                  <span className="text-red-400 text-sm flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#2fa586] to-[#39c99d] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                    />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    إرسال رسالة
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
              backdropFilter: "blur(20px)",
            }}
            className="p-8 rounded-3xl border-2 border-[#2fa586]/50 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2fa586] to-[#39c99d] flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle2 className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#154a3c] mb-2">
              تم الإرسال بنجاح!
            </h3>
            <p className="text-[#154a3c]/70">سنتواصل معك في أقرب وقت ممكن</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Contact Information Strip
function ContactInfoStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: MapPin,
      primary: "بغداد، العراق",
      secondary: "المقر الرئيسي",
      color: "from-[#ffaf12] to-[#ffd02d]",
    },
    {
      icon: Phone,
      primary: "964 7743538560",
      secondary: "متاح 24/7",
      color: "from-[#2fa586] to-[#2d9f81]",
      href: "tel:9647743538560",
    },
    {
      icon: Mail,
      primary: "support@mamnon.sa",
      secondary: "نرد خلال ساعتين",
      color: "from-[#227962] to-[#247f67]",
      href: "mailto:support@mamnon.sa",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-12 bg-gradient-to-b from-[#d6e0d4] to-[#e8ece7]"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href || "#"}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 1px 0 rgba(255,255,255,0.9)",
                }}
                className="p-6 rounded-2xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right flex-1">
                    <div className="text-[#154a3c] font-bold text-lg mb-1">
                      {info.primary}
                    </div>
                    <div className="text-[#154a3c]/60 text-sm">
                      {info.secondary}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f5f7] to-[#e8ece7]">
      <Navbar />
      <main>
        <ContactHero />
        <ContactFormSection />
        <ContactInfoStrip />
      </main>
      <Footer />
    </div>
  );
}
