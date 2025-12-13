"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4a853]/10 via-transparent to-[#d4a853]/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-3xl p-8 group hover:border-[#d4a853]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#d4a853]/10 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-[#d4a853]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Seja Membro</h3>
            <p className="text-white/50 mb-6 leading-relaxed">
              Faça parte da nossa comunidade e tenha acesso a benefícios
              exclusivos.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center text-[#d4a853] font-semibold group-hover:gap-3 gap-2 transition-all"
            >
              Cadastre-se
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-3xl p-8 group hover:border-[#d4a853]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#d4a853]/10 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-[#d4a853]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Loja Oficial</h3>
            <p className="text-white/50 mb-6 leading-relaxed">
              Confira nossas camisetas, acessórios e gift cards exclusivos.
            </p>
            <Link
              href="/loja"
              className="inline-flex items-center text-[#d4a853] font-semibold group-hover:gap-3 gap-2 transition-all"
            >
              Ver Produtos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 rounded-3xl p-8 group hover:border-[#d4a853]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#d4a853]/10 rounded-2xl flex items-center justify-center mb-6">
              <Trophy className="w-7 h-7 text-[#d4a853]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Campeonatos</h3>
            <p className="text-white/50 mb-6 leading-relaxed">
              Participe dos nossos campeonatos e mostre suas habilidades.
            </p>
            <Link
              href={"/campeonatos"}
              className="inline-flex items-center text-[#d4a853] font-semibold group-hover:gap-3 gap-2 transition-all"
            >
              Ver Campeonatos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
