import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { designVariants } from "../../data/designVariants";


const customProduct = {
  productId: "custom-design-1",
  name: "Bespoke Tea Design",
  desc: "Tạo trải nghiệm trà hoàn hảo với tùy chọn thiết kế theo yêu cầu. Chọn kiểu bạn thích để hợp gu riêng.",
  variants: designVariants,
};

const CustomDesign = () => {
  const [selectedStyle, setSelectedStyle] = useState(customProduct.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const thumbnails = useMemo(
    () => customProduct.variants.map((variant) => ({ id: variant.id, image: variant.heroImage })),
    []
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: customProduct.productId,
        name: customProduct.name,
        img: selectedStyle.heroImage,
        quantity: quantity,
        productDetail: {
          id: selectedStyle.id,
          sizeLabel: selectedStyle.label,
          unitPrice: selectedStyle.unitPrice,
        },
      })
    );
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
  };

  return (
    <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6 md:py-10 font-display bg-background-light text-[#0d1b10] min-h-screen">
      <nav className="flex flex-wrap gap-2 pb-6 text-sm">
        <Link
          to="/"
          className="text-gray-500 hover:text-primary transition-colors font-medium"
        >
          Trang chủ
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-[#0d1b10] font-bold">Thiết kế tùy chỉnh</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[600px] no-scrollbar pb-2 md:pb-0">
            {thumbnails.map((thumb) => (
              <div
                key={thumb.id}
                onClick={() => handleStyleSelect(customProduct.variants.find((variant) => variant.id === thumb.id))}
                className={`shrink-0 cursor-pointer border-2 rounded-xl overflow-hidden size-20 md:size-24 transition-all ${
                  selectedStyle.id === thumb.id
                    ? "border-primary opacity-100 scale-95"
                    : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={thumb.image}
                  alt={`Custom design thumbnail ${thumb.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-surface-light relative shadow-sm group">
            <img
              src={selectedStyle.heroImage}
              alt="Thiết kế trà tùy chỉnh"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#0d1b10] mb-2">
              {customProduct.name}
            </h1>
            <p className="text-2xl font-black text-primary">
              ${selectedStyle.unitPrice.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 font-medium">{selectedStyle.name}</p>
          </div>

          <p className="text-base leading-relaxed text-gray-600 font-medium">
            {selectedStyle.description || customProduct.desc}
          </p>

          <div className="h-px w-full bg-gray-200"></div>

          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Kiểu
            </label>
            <div className="flex flex-wrap gap-3">
              {customProduct.variants.map((style) => (
                <button
                  key={style.id}
                  onClick={() => handleStyleSelect(style)}
                  className={`px-6 py-2.5 rounded-xl border-2 font-bold transition-all ${
                    selectedStyle.id === style.id
                      ? "border-primary bg-primary/10 text-[#0d1b10] shadow-sm"
                      : "border-gray-200 hover:border-primary text-gray-500 hover:text-[#0d1b10]"
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex items-center border-2 border-gray-200 rounded-xl h-14 w-32 overflow-hidden bg-white">
              <button
                className="w-10 h-full flex items-center justify-center hover:bg-gray-100 text-gray-500 transition-colors"
                onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
              >
                <span className="material-symbols-outlined text-sm">
                  remove
                </span>
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="flex-1 w-full h-full text-center bg-transparent border-none focus:ring-0 p-0 font-black text-[#0d1b10]"
              />
              <button
                className="w-10 h-full flex items-center justify-center hover:bg-gray-100 text-gray-500 transition-colors"
                onClick={() => setQuantity((qty) => qty + 1)}
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 h-14 bg-primary hover:bg-primary/90 text-[#0d1b10] font-black text-lg rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Thêm vào giỏ
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomDesign;