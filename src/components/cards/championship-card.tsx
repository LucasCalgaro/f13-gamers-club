"use client";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion } from "framer-motion";
import { Calendar, Clock, Trophy, Users } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const statusConfig = {
  upcoming: {
    label: "Em Breve",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  open: {
    label: "Inscrições Abertas",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  ongoing: {
    label: "Em Andamento",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  finished: {
    label: "Finalizado",
    color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  },
};

interface Championship {
  id: number;
  name: string;
  description: string;
  participants: number;
  prize_amount: number;
  game: string;
  max_teams: number;
  format: string;
  image_url: string;
  start_date: string;
  end_date: string;
  status: "upcoming" | "open" | "ongoing" | "finished";
}
interface ChampionshipCardProps {
  championship: Championship;
  onSelect: React.Dispatch<React.SetStateAction<Championship>>;
}

export default function ChampionshipCard({
  championship,
  onSelect,
}: ChampionshipCardProps) {
  const status = statusConfig[championship.status] || statusConfig.upcoming;

  const formatDate = (date?: string) => {
    if (!date) return "-";
    return format(new Date(date), "dd 'de' MMM", { locale: ptBR });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => onSelect(championship)}
      className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#d4a853]/30 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
        {championship.image_url ? (
          <img
            src={championship.image_url}
            alt={championship.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/10">
            <Trophy className="w-20 h-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${status.color} border`}>{status.label}</Badge>
        </div>

        {/* Prize */}
        {championship.prize_amount > 0 && (
          <div className="absolute bottom-4 right-4">
            <div className="px-4 py-2 bg-[#d4a853] text-black font-bold rounded-lg">
              R$ {championship.prize_amount.toLocaleString("pt-BR")}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-[#d4a853] text-xs font-medium tracking-wider uppercase">
          {championship.game}
        </span>
        <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-[#d4a853] transition-colors">
          {championship.name}
        </h3>

        <p className="text-white/50 text-sm line-clamp-2 mb-4">
          {championship.description ||
            "Campeonato organizado pela F13 Gamers Club."}
        </p>

        {/* Info */}
        <div className="flex flex-wrap gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(championship.start_date)}</span>
          </div>
          {championship.max_teams && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{championship.max_teams} times</span>
            </div>
          )}
          {championship.format && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{championship.format}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
