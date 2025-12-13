"use client";
import { motion } from "framer-motion";
import { ExternalLink, Twitch } from "lucide-react";
import Link from "next/link";

const streamers = [
  {
    name: "CagadoRush",
    image: "/streamers/cagado-rush.png",
    url: "https://www.twitch.tv/cagadorush",
  },
  {
    name: "NextID_",
    image: "/streamers/nextid_.png",
    url: "https://www.twitch.tv/nextid_",
  },
  {
    name: "SonOfLucky",
    image: "/streamers/son_of_lucky.jpeg",
    url: "https://www.twitch.tv/son_of_lucky",
  },
  {
    name: "DivineLSN",
    image: "/streamers/divinelsn.jpeg",
    url: "https://www.twitch.tv/divinelsn",
  },
  {
    name: "kiilluafps",
    image: "/streamers/kiilluafps.png",
    url: "https://www.twitch.tv/kiilluafps",
  },
];

export default function StreamersSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Criadores de <span className="text-[#d4a853]">Conteúdo</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Conheça os criadores de conteúdo que fazem parte da nossa família
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {streamers.map((streamer, idx) => (
            <motion.div
              key={streamer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link className="relative" href={streamer.url} target="_blank">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#d4a853] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative w-32 h-32 rounded-full border-4 border-[#1a1a1a] group-hover:border-[#d4a853]/50 transition-colors duration-300 overflow-hidden">
                  <img
                    src={streamer.image}
                    alt={streamer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-600 rounded-full p-2">
                  <Twitch className="w-4 h-4 text-white" />
                </div>
              </Link>

              <p className="text-white font-semibold text-center mt-6">
                {streamer.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
