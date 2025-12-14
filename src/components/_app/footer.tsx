"use client";
import {
  Gamepad2,
  Instagram,
  MessageCircle,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Logo" className="h-24" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Uma organização de gamers para gamers. Comunidade, competição e
              diversão em um só lugar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Loja", href: "/loja" },
                { label: "Times", href: "/times" },
                { label: "Campeonatos", href: "/campeonatos" },
                { label: "Seja Membro", href: "/register" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-[#d4a853] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jogos */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              Nossos Jogos
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>VALORANT</li>
              <li>League of Legends</li>
              <li>Fortnite</li>
              <li>CS2</li>
              <li>Dead By Daylight</li>
              <li>Minecraft</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitch, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/50 hover:text-[#d4a853] hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2025 F13 Gamers Club. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
