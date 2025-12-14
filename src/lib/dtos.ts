export interface Championship {
  id: number;
  name: string;
  description: string;
  participants: number;
  prize_amount: number;
  prize: string;
  game: string;
  max_teams: number;
  format: string;
  image_url: string;
  start_date: string;
  end_date: string;
  rules: string;
  status: "upcoming" | "open" | "ongoing" | "finished";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  featured: boolean;
  category: "camiseta" | "camiseta_elenco" | "acessorio" | "giftcard";
  sizes: string[];
}

export interface Player {
  id: number;
  nickname: string;
  name: string;
  role: string;
  photo_url: string;
}

export interface Team {
  id: number;
  name: string;
  game: string;
  logo_url: string;
  description: string;
  achievements: string[];
  players: Player[];
}
