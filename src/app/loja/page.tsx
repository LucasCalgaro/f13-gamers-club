"use client";
import { motion } from "framer-motion";
import { Filter, ShoppingBag } from "lucide-react";
import { useState } from "react";

import ProductCard from "@/components/cards/product-card";
import ProductModal from "@/components/modals/product-modal";
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from "@/lib/dtos";

const categories = [
  { value: "all", label: "Todos" },
  { value: "camiseta", label: "Camisetas" },
  { value: "camiseta_elenco", label: "Elenco" },
  { value: "acessorio", label: "Acessórios" },
  { value: "giftcard", label: "Gift Cards" },
];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts: Product[] = [];
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
            Loja Oficial
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            F13 <span className="text-[#d4a853]">Store</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Camisetas exclusivas, acessórios e gift cards para gamers de
            verdade.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-white/50" />
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-[#d4a853] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
                <Skeleton className="aspect-square" />
                <div className="p-5">
                  <Skeleton className="h-3 w-20 mb-2" />
                  <Skeleton className="h-5 w-32 mb-3" />
                  <Skeleton className="h-7 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={(product) => setSelectedProduct(product as Product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-white/50">Em breve novos produtos!</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct!}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
