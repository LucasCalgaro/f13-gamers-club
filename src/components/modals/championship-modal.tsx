"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Championship } from "@/lib/dtos";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  FileText,
  Gift,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import RegistrationForm from "../forms/championship-form";

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

interface ChampionshipModalProps {
  championship: Championship;
  isOpen: boolean;
  onClose: () => void;
}
export default function ChampionshipModal({
  championship,
  isOpen,
  onClose,
}: ChampionshipModalProps) {
  const [showRegistration, setShowRegistration] = useState(false);

  if (!isOpen || !championship) return null;

  const status = statusConfig[championship.status] || statusConfig.upcoming;

  const formatDate = (date?: string) => {
    if (!date) return "-";
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:text-[#d4a853] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {showRegistration ? (
            <RegistrationForm
              championship={championship}
              onBack={() => setShowRegistration(false)}
              onClose={onClose}
            />
          ) : (
            <>
              {/* Header Image */}
              <div className="relative aspect-video bg-[#0a0a0a]">
                {championship.image_url ? (
                  <img
                    src={championship.image_url}
                    alt={championship.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10">
                    <Trophy className="w-32 h-32" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className={`${status.color} border mb-3`}>
                    {status.label}
                  </Badge>
                  <h2 className="text-3xl font-bold text-white">
                    {championship.name}
                  </h2>
                  <p className="text-[#d4a853] font-medium mt-1">
                    {championship.game}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#0a0a0a] rounded-xl p-4">
                    <Calendar className="w-5 h-5 text-[#d4a853] mb-2" />
                    <p className="text-white/50 text-xs mb-1">Data de Início</p>
                    <p className="text-white font-medium text-sm">
                      {formatDate(championship.start_date)}
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-xl p-4">
                    <Calendar className="w-5 h-5 text-[#d4a853] mb-2" />
                    <p className="text-white/50 text-xs mb-1">Data Final</p>
                    <p className="text-white font-medium text-sm">
                      {formatDate(championship.end_date)}
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-xl p-4">
                    <Users className="w-5 h-5 text-[#d4a853] mb-2" />
                    <p className="text-white/50 text-xs mb-1">
                      Máximo de Times
                    </p>
                    <p className="text-white font-medium text-sm">
                      {championship.max_teams || "Ilimitado"}
                    </p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-xl p-4">
                    <Gift className="w-5 h-5 text-[#d4a853] mb-2" />
                    <p className="text-white/50 text-xs mb-1">Premiação</p>
                    <p className="text-white font-medium text-sm">
                      {championship.prize_amount > 0
                        ? `R$ ${championship.prize_amount.toLocaleString(
                            "pt-BR"
                          )}`
                        : championship.prize || "A definir"}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#d4a853]" />
                    Sobre o Campeonato
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {championship.description ||
                      "Campeonato organizado pela F13 Gamers Club."}
                  </p>
                </div>

                {/* Rules */}
                {championship.rules && (
                  <div className="mb-8">
                    <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#d4a853]" />
                      Regras
                    </h3>
                    <div className="bg-[#0a0a0a] rounded-xl p-6 text-white/60 leading-relaxed whitespace-pre-line">
                      {championship.rules}
                    </div>
                  </div>
                )}

                {/* Registration Button */}
                {championship.status === "open" && (
                  <Button
                    onClick={() => setShowRegistration(true)}
                    className="w-full bg-[#d4a853] text-black hover:bg-[#e5b964] h-14 text-lg font-bold rounded-xl"
                  >
                    Inscrever Meu Time
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
