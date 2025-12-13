"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Championship } from "@/lib/dtos";
import { ArrowLeft, CheckCircle, Loader2, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface RegistrationFormProps {
  championship: Championship;
  onBack: () => void;
  onClose: () => void;
}
export default function RegistrationForm({
  championship,
  onBack,
  onClose,
}: RegistrationFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    team_name: "",
    captain_name: "",
    captain_email: "",
    players: [{ nickname: "", game_id: "" }],
  });

  const addPlayer = () => {
    setFormData((prev) => ({
      ...prev,
      players: [...prev.players, { nickname: "", game_id: "" }],
    }));
  };

  const removePlayer = (index: number) => {
    if (formData.players.length > 1) {
      setFormData((prev) => ({
        ...prev,
        players: prev.players.filter((_, i) => i !== index),
      }));
    }
  };

  const updatePlayer = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      players: prev.players.map((p, i) =>
        i === index ? { ...p, [field]: value } : p
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // await base44.entities.ChampionshipRegistration.create({
    //   championship_id: championship.id,
    //   ...formData,
    // });

    setSuccess(true);
    setLoading(false);
    toast.success("Inscrição realizada com sucesso!");
  };

  if (success) {
    return (
      <div className="p-12 text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Inscrição Realizada!
        </h3>
        <p className="text-white/60 mb-8">
          Sua inscrição para o campeonato &quot;{championship.name}&quot; foi
          enviada com sucesso. Você receberá um e-mail com mais informações.
        </p>
        <Button
          onClick={onClose}
          className="bg-[#d4a853] text-black hover:bg-[#e5b964]"
        >
          Fechar
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </button>

      <h3 className="text-2xl font-bold text-white mb-2">Inscrição</h3>
      <p className="text-white/50 mb-8">{championship.name}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Team Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-white/70">Nome do Time</Label>
            <Input
              required
              value={formData.team_name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, team_name: e.target.value }))
              }
              className="bg-[#0a0a0a] border-white/10 text-white mt-2"
              placeholder="Ex: F13 Legends"
            />
          </div>
          <div>
            <Label className="text-white/70">Nome do Capitão</Label>
            <Input
              required
              value={formData.captain_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  captain_name: e.target.value,
                }))
              }
              className="bg-[#0a0a0a] border-white/10 text-white mt-2"
              placeholder="Nome completo"
            />
          </div>
        </div>

        <div>
          <Label className="text-white/70">E-mail do Capitão</Label>
          <Input
            required
            type="email"
            value={formData.captain_email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                captain_email: e.target.value,
              }))
            }
            className="bg-[#0a0a0a] border-white/10 text-white mt-2"
            placeholder="email@exemplo.com"
          />
        </div>

        {/* Players */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <Label className="text-white/70">Jogadores</Label>
            <Button
              type="button"
              onClick={addPlayer}
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Plus className="w-4 h-4 mr-1" />
              Adicionar
            </Button>
          </div>

          <div className="space-y-3">
            {formData.players.map((player, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <Input
                  required
                  value={player.nickname}
                  onChange={(e) =>
                    updatePlayer(idx, "nickname", e.target.value)
                  }
                  className="bg-[#0a0a0a] border-white/10 text-white flex-1"
                  placeholder="Nickname"
                />
                <Input
                  required
                  value={player.game_id}
                  onChange={(e) => updatePlayer(idx, "game_id", e.target.value)}
                  className="bg-[#0a0a0a] border-white/10 text-white flex-1"
                  placeholder="ID do Jogo"
                />
                {formData.players.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => removePlayer(idx)}
                    size="icon"
                    variant="ghost"
                    className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#d4a853] text-black hover:bg-[#e5b964] h-12 font-bold"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            "Confirmar Inscrição"
          )}
        </Button>
      </form>
    </div>
  );
}
