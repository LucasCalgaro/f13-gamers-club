import { Team } from "@/lib/dtos";
import { motion } from "framer-motion";
import { ChevronRight, Trophy, Users } from "lucide-react";

const gameColors = {
  VALORANT: "from-red-500/20 to-red-900/20",
  Fortnite: "from-purple-500/20 to-purple-900/20",
  "League of Legends": "from-blue-500/20 to-blue-900/20",
};

const gameBadgeColors = {
  VALORANT: "bg-red-500/20 text-red-400 border-red-500/30",
  Fortnite: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "League of Legends": "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

interface TeamCardProps {
  team: Team;
  onSelect: (team: Team) => void;
}
export default function TeamCard({ team, onSelect }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => onSelect(team)}
      className={`group relative bg-gradient-to-br ${
        gameColors[team.game as keyof typeof gameColors] ||
        "from-[#d4a853]/10 to-[#d4a853]/5"
      } rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4a853]/30 transition-all duration-300 cursor-pointer`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative p-8">
        {/* Game Badge */}
        <div
          className={`inline-flex items-center px-3 py-1.5 rounded-full border text-xs font-medium mb-6 ${
            gameBadgeColors[team.game as keyof typeof gameBadgeColors] ||
            "bg-[#d4a853]/20 text-[#d4a853] border-[#d4a853]/30"
          }`}
        >
          {team.game}
        </div>

        {/* Team Name */}
        <h3 className="text-2xl font-bold text-white mb-4">{team.name}</h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2">
          {team.description || "Time profissional F13 Gamers Club."}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-white/50">
            <Users className="w-4 h-4" />
            <span className="text-sm">
              {team.players?.length || 0} jogadores
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">
              {team.achievements?.length || 0} conquistas
            </span>
          </div>
        </div>

        {/* Players Preview */}
        {team.players?.length > 0 && (
          <div className="flex -space-x-3 mb-6">
            {team.players.slice(0, 5).map((player, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full bg-[#2a2a2a] border-2 border-[#1a1a1a] flex items-center justify-center overflow-hidden"
              >
                {player.photo_url ? (
                  <img
                    src={player.photo_url}
                    alt={player.nickname}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold text-white/50">
                    {player.nickname?.[0]?.toUpperCase()}
                  </span>
                )}
              </div>
            ))}
            {team.players.length > 5 && (
              <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border-2 border-[#1a1a1a] flex items-center justify-center">
                <span className="text-xs font-bold text-white/50">
                  +{team.players.length - 5}
                </span>
              </div>
            )}
          </div>
        )}

        {/* View More */}
        <div className="flex items-center text-[#d4a853] font-medium text-sm group-hover:gap-2 gap-1 transition-all">
          Ver Time Completo
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
