import { Button } from "@/components/ui/button";
import { Product } from "@/lib/dtos";
import { motion } from "framer-motion";
import { Eye, ShoppingCart } from "lucide-react";

const categoryLabels = {
  camiseta: "Camiseta",
  camiseta_elenco: "Camiseta Elenco",
  acessorio: "Acessório",
  giftcard: "Gift Card",
};

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
}

export default function ProductCard({ product, onView }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4a853]/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20">
            <ShoppingCart className="w-16 h-16" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button
            onClick={() => onView(product)}
            size="icon"
            className="bg-white text-black hover:bg-[#d4a853] w-12 h-12 rounded-full"
          >
            <Eye className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-[#d4a853] text-black hover:bg-[#e5b964] w-12 h-12 rounded-full"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>

        {/* Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-[#d4a853] text-black text-xs font-bold rounded-full">
            DESTAQUE
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <span className="text-[#d4a853] text-xs font-medium tracking-wider uppercase">
          {categoryLabels[product.category]}
        </span>
        <h3 className="text-white font-semibold mt-1 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            R$ {product.price?.toFixed(2).replace(".", ",")}
          </span>
          {product.sizes?.length > 0 && (
            <span className="text-white/40 text-xs">
              {product.sizes.join(" • ")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
