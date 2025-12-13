"use client";
import { motion } from "framer-motion";
import { ChevronRight, Gamepad2, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(/banner.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#d4a853]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#d4a853]/10 border border-[#d4a853]/30 rounded-full text-[#d4a853] text-sm font-medium tracking-wider uppercase mb-8">
              De gamers para gamers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            <img
              src="/logo.svg"
              alt="F13 Logo"
              className="h-24 w-auto mx-auto my-4"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Uma comunidade acolhedora que nasceu da paixão por games.
            <br />
            De gamers para gamers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={"/register"}
              className="group px-8 py-4 bg-[#d4a853] text-black font-bold rounded-lg hover:bg-[#e5b964] transition-all duration-300 flex items-center gap-2"
            >
              Seja Membro
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={"/campeonatos"}
              className="px-8 py-4 bg-white/5 text-white border border-white/20 font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Ver Campeonatos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20"
          >
            {[
              { icon: Users, value: "30+", label: "Membros" },
              { icon: Trophy, value: "10+", label: "Campeonatos" },
              { icon: Gamepad2, value: "6", label: "Jogos" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 text-[#d4a853] mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
