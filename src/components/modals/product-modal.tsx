import React, { useState } from "react";
import { X, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/dtos";

interface ProductCardProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}
export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const categoryLabels = {
    camiseta: "Camiseta",
    camiseta_elenco: "Camiseta de Elenco",
    acessorio: "Acessório",
    giftcard: "Gift Card",
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

          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="aspect-square bg-[#0a0a0a]">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  <ShoppingCart className="w-24 h-24" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <span className="text-[#d4a853] text-sm font-medium tracking-wider uppercase">
                {categoryLabels[product.category]}
              </span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">
                {product.name}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                {product.description || "Produto exclusivo F13 Gamers Club."}
              </p>

              <div className="text-4xl font-bold text-[#d4a853] mb-8">
                R$ {product.price?.toFixed(2).replace(".", ",")}
              </div>

              {/* Sizes */}
              {product.sizes?.length > 0 && (
                <div className="mb-6">
                  <label className="text-white/50 text-sm font-medium block mb-3">
                    Tamanho
                  </label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-lg border-2 font-semibold transition-all ${
                          selectedSize === size
                            ? "border-[#d4a853] bg-[#d4a853] text-black"
                            : "border-white/20 text-white hover:border-[#d4a853]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="text-white/50 text-sm font-medium block mb-3">
                  Quantidade
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-semibold text-xl w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button className="w-full bg-[#d4a853] text-black hover:bg-[#e5b964] h-14 text-lg font-bold rounded-xl">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Adicionar ao Carrinho
              </Button>

              {/* Stock */}
              <p className="text-white/30 text-sm text-center mt-4">
                {product.stock > 0
                  ? `${product.stock} em estoque`
                  : "Sob encomenda"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
