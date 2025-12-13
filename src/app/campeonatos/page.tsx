"use client";
import ChampionshipCard from "@/components/cards/championship-card";
import ChampionshipModal from "@/components/modals/championship-modal";
import { Skeleton } from "@/components/ui/skeleton";
import { Championship } from "@/lib/dtos";
import { motion } from "framer-motion";
import { Filter, Trophy } from "lucide-react";
import { useState } from "react";

const statusFilters = [
  { value: "all", label: "Todos" },
  { value: "open", label: "Inscrições Abertas" },
  { value: "upcoming", label: "Em Breve" },
  { value: "ongoing", label: "Em Andamento" },
  { value: "finished", label: "Finalizados" },
];

export default function Championships() {
  const [activeStatus, setActiveStatus] = useState("all");
  const [selectedChampionship, setSelectedChampionship] =
    useState<Championship | null>(null);

  const isLoading = false;
  const filteredChampionships: Championship[] = [];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-[#d4a853] text-sm font-medium tracking-widest uppercase">
            Compete
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            <span className="text-[#d4a853]">Campeonatos</span> F13
          </h1>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Participe dos nossos campeonatos e mostre suas habilidades para a
            comunidade.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-white/50" />
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveStatus(filter.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStatus === filter.value
                  ? "bg-[#d4a853] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-3xl overflow-hidden">
                <Skeleton className="aspect-video" />
                <div className="p-6">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-6 w-48 mb-3" />
                  <Skeleton className="h-12 w-full mb-4" />
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredChampionships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChampionships.map((championship) => (
              <ChampionshipCard
                key={championship.id}
                championship={championship}
                onSelect={(championship) =>
                  setSelectedChampionship(championship as Championship)
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Trophy className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhum campeonato encontrado
            </h3>
            <p className="text-white/50">
              Fique de olho para novos campeonatos!
            </p>
          </div>
        )}
      </div>

      {/* Championship Modal */}
      <ChampionshipModal
        championship={selectedChampionship!}
        isOpen={!!selectedChampionship}
        onClose={() => setSelectedChampionship(null)}
      />
    </div>
  );
}
