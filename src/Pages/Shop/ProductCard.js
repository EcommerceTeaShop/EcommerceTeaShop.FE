import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link
      to={`/product/${item.id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-light">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {item.badge && (
          <div
            className={`absolute top-3 left-3 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider ${item.badgeColor}`}
          >
            {item.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs font-bold text-primary uppercase tracking-wide">
            {item.origin}
          </p>
          <div className="flex items-center gap-1 text-amber-400">
            <span className="material-symbols-outlined !text-[14px] font-variation-settings-'FILL'1">
              star
            </span>
            <span className="text-xs font-bold text-gray-500">
              {item.rating}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.desc}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span
              className={`font-black text-lg ${item.oldPrice ? "text-red-500" : ""}`}
            >
              {item.price}
            </span>
            {item.oldPrice && (
              <span className="text-sm text-gray-400 line-through decoration-1">
                {item.oldPrice}
              </span>
            )}
          </div>
          <span className="text-xs font-bold text-gray-400">{item.size}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
