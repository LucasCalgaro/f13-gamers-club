import React from "react";
import { X, Trophy, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Team } from "@/lib/dtos";

interface TeamModalProps {
  team: Team | null;
  isOpen: boolean;
  onClose: () => void;
}
export default function TeamModal({ team, isOpen, onClose }: TeamModalProps) {
  if (!isOpen || !team) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:text-[#d4a853] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="bg-gradient-to-r from-[#d4a853]/20 to-transparent p-8 border-b border-white/10">
            <span className="text-[#d4a853] text-sm font-medium tracking-wider uppercase">
              {team.game}
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">{team.name}</h2>
            <p className="text-white/60 mt-2">
              {team.description || "Time profissional F13 Gamers Club."}
            </p>
          </div>

          <div className="p-8">
            {team.achievements?.length > 0 && (
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#d4a853]" />
                  Conquistas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {team.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-[#d4a853]/10 rounded-lg flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-[#d4a853]" />
                      </div>
                      <span className="text-white/80 text-sm">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#d4a853]" />
                Elenco
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.players?.map((player, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 text-center"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#2a2a2a] flex items-center justify-center overflow-hidden mb-3">
                      {player.photo_url ? (
                        <img
                          src={player.photo_url}
                          alt={player.nickname}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-white/30">
                          {player.nickname?.[0]?.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <h4 className="text-white font-bold">{player.nickname}</h4>
                    <p className="text-white/50 text-sm">{player.name}</p>
                    {player.role && (
                      <span className="inline-block mt-2 px-3 py-1 bg-[#d4a853]/10 text-[#d4a853] text-xs font-medium rounded-full">
                        {player.role}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
