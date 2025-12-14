"use client";
import { motion } from "framer-motion";
import { Filter, Users } from "lucide-react";
import { useState } from "react";

import TeamCard from "@/components/cards/team-card";
import TeamModal from "@/components/modals/team-modal";
import { Skeleton } from "@/components/ui/skeleton";
import { Team } from "@/lib/dtos";

const games = [
  { value: "all", label: "Todos" },
  { value: "VALORANT", label: "VALORANT" },
  { value: "Fortnite", label: "Fortnite" },
  { value: "League of Legends", label: "League of Legends" },
];

export default function Teams() {
  const [activeGame, setActiveGame] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const filteredTeams: Team[] = [];
  const isLoading = false;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-[#d4a853] text-sm font-medium tracking-widest uppercase">
            Competitivo
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Times <span className="text-[#d4a853]">Profissionais</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Conheça nossos times que competem nos principais cenários de
            esports.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-white/50" />
          {games.map((game) => (
            <button
              key={game.value}
              onClick={() => setActiveGame(game.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeGame === game.value
                  ? "bg-[#d4a853] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {game.label}
            </button>
          ))}
        </div>
      </div>

      {/* Teams Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-3xl p-8">
                <Skeleton className="h-6 w-24 mb-6" />
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-16 w-full mb-6" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        ) : filteredTeams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                onSelect={(team) => setSelectedTeam(team)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhum time encontrado
            </h3>
            <p className="text-white/50">
              Em breve novos times serão anunciados!
            </p>
          </div>
        )}
      </div>

      {/* Team Modal */}
      <TeamModal
        team={selectedTeam}
        isOpen={!!selectedTeam}
        onClose={() => setSelectedTeam(null)}
      />
    </div>
  );
}
