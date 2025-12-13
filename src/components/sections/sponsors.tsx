"use client";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Blacklist Meeting Estética Automotiva", logo: "🚗" },
  { name: "Digital Profile Solutions", logo: "💻" },
  { name: "iModa App", logo: "👗" },
  { name: "Brutos Hamburgueria", logo: "🍔" },
];

export default function SponsorsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] text-sm font-medium tracking-widest uppercase">
            Parceiros
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Nossos <span className="text-[#d4a853]">Patrocinadores</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 hover:border-[#d4a853]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sponsor.logo}
                </div>
                <h3 className="text-white/80 font-medium text-sm group-hover:text-[#d4a853] transition-colors">
                  {sponsor.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-[#d4a853] hover:text-[#e5b964] transition-colors text-sm font-medium"
          >
            Quer ser nosso parceiro? Entre em contato
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
