"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "#services", label: "الخدمات" },
    { href: "#packages", label: "الباقات" },
    { href: "/our-story", label: "عن ممنون" },
  ];

  const services = [
    { href: "#", label: "توصيل الوقود" },
    { href: "#", label: "صيانة الإطارات" },
    { href: "#", label: "البطاريات" },
    { href: "#", label: "تغيير الزيت" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#154a3c] to-[#13322b] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo (1).svg"
              alt="ممنون"
              width={140}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              خدمة متكاملة لتوصيل الوقود والصيانة الذكية. نصل إليك أينما كنت
              بأفضل الخدمات وأسرع الأوقات.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ffaf12] flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon
                      size={18}
                      className="text-white group-hover:text-[#154a3c]"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#ffaf12]">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#ffaf12] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#ffaf12] group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#ffaf12]">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-[#ffaf12] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#ffaf12] group-hover:w-4 transition-all duration-300"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#ffaf12]">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:xxxxxxx"
                  className="flex items-center gap-3 text-white/80 hover:text-[#ffaf12] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffaf12] transition-all duration-300">
                    <Phone
                      size={18}
                      className="text-white group-hover:text-[#154a3c]"
                    />
                  </div>
                  <span>xxxxxxx</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:xxxxxxx"
                  className="flex items-center gap-3 text-white/80 hover:text-[#ffaf12] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffaf12] transition-all duration-300">
                    <Phone
                      size={18}
                      className="text-white group-hover:text-[#154a3c]"
                    />
                  </div>
                  <span>xxxxxxx</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mamnon.com"
                  className="flex items-center gap-3 text-white/80 hover:text-[#ffaf12] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ffaf12] transition-all duration-300">
                    <Mail
                      size={18}
                      className="text-white group-hover:text-[#154a3c]"
                    />
                  </div>
                  <span>info@mamnon.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white/60 text-sm"
          >
            <p>© 2025 ممنون. جميع الحقوق محفوظة.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
