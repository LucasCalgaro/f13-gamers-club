"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const games = [
  {
    name: "VALORANT",
    image: "/jogos/valorant-logo.png",
    color: "from-rose-400/20 to-pink-400/40 bg-gradient-to-tr",
  },
  {
    name: "League of Legends",
    image: "/jogos/lol-logo.webp",
    color: "from-blue-500/20 to-green-900/20 ",
  },
  {
    name: "Free-Fire",
    image: "/jogos/free-fire-logo.png",
    className: "scale-90 group-hover:scale-100",
    color: "from-zinc-500/20 to-transparent",
  },
  {
    name: "CS2",
    image: "/jogos/cs-logo.png",
    className: "scale-70 group-hover:scale-90",
    color: "from-orange-500/20 to-blue-500/20 bg-gradient-to-l",
  },
  {
    name: "Rocket League",
    image: "/jogos/rocket-league-logo.webp",
    className: "scale-70 group-hover:scale-90",
    color: "from-blue-400/30 to-blue-600/10",
  },
  {
    name: "PUBG",
    image: "/jogos/pubg-logo.png",
    color: "bg-zinc-500/20",
  },
];

export default function GamesSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#d4a853] text-sm font-medium tracking-widest uppercase">
            Nossa Comunidade
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Jogos que <span className="text-[#d4a853]">Amamos</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game, idx) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.name}
                className={cn(
                  "w-full transition-transform duration-500 group-hover:scale-110 scale-100",
                  game?.className
                )}
              />
              <div
                className={cn(`absolute inset-0 bg-gradient-to-t`, game.color)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
