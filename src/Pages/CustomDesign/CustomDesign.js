import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartSlice";


const customProduct = {
  productId: "custom-design-1",
  name: "Bespoke Tea Design",
  desc: "Tạo trải nghiệm trà hoàn hảo với tùy chọn thiết kế theo yêu cầu. Chọn kiểu bạn thích để hợp gu riêng.",
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAacKjJEwsR2ONaRZe8c_yYC9f2EaBCNBdkoeD3rk5u_YLjwLTTHq3caX4VBTeFhwaZhCXMwfx1uede07YocpZfbz3zSm4dDTeMArH9il756PAY_KRPdxzaH7dSLsSkDuSCWtylICi5fyAIpFKVpfHoYqtkzrNVIw_LC_8kxSc_G2hCDK6BjEVeFI1QeS40XT_nN2m1HECvuM5iS1ISCqku9IWzMdPOmlERjwo-TyhEFiRMMCsyrVn_rvuE28vZW2_9hVi6b426Ln22",
  thumbnails: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAacKjJEwsR2ONaRZe8c_yYC9f2EaBCNBdkoeD3rk5u_YLjwLTTHq3caX4VBTeFhwaZhCXMwfx1uede07YocpZfbz3zSm4dDTeMArH9il756PAY_KRPdxzaH7dSLsSkDuSCWtylICi5fyAIpFKVpfHoYqtkzrNVIw_LC_8kxSc_G2hCDK6BjEVeFI1QeS40XT_nN2m1HECvuM5iS1ISCqku9IWzMdPOmlERjwo-TyhEFiRMMCsyrVn_rvuE28vZW2_9hVi6b426Ln22",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDEy5SGb1GoJxVolf_VV1JBcRC0xUgcv-Rnd59svi8y8pYh9wb7wTv69LD6QpDZy4kVYcCYXr03WGkHpXAMydPgfkmCcD77WCWLeM4jGdZP-UDSOw7FcajWa6AVChxPXrMjAWFq6H7jzB5n2VjhgvPAwhiOaJpFz6xVAqU8SF37LYFXjrcu568cXvfRtJ5ySNOE_4ytShAlBpuPvCFgjZQOPj-pP8njxZEAHSFhLync2cSXHXjp0jARPdjvpQreZr-5anGUr96tDCsx",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBhr9MKfge7rKsRy4-67IG7PaCQ-xIiFA-n-ifJ6E7mmWmx0wHP3oRvAP1l0uFhEPrVJ2xYo1yUoDnS3uBht9GKgEZctDi8ksSmKDXvdMNwR2zPR-PXAXZQHXvIrUDuM8fIkmMVeize2e59g76QbrmLJWTAn4Gc9GFxjssyIsDRZPpMG34V7w3WI5TpyL1KvkiSN_z1wIYw60mpRvxSLvXfq0DlcKKCBtBrlm9pR18tg2uKtbnA-rq-wKZzEqyvEnksc08LBeZ1ZPnM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAK5udmXVqauR08mI9cHzl_cU6jmrHxHtpfSNyJm-yJvGFBPjchE9FHHA3l4MnyzbuKM53m3Vy6_LqnlNKwWBxjiMxr__xJYlJEe4MBSlqFvtgQ0qRrKzL6pvFtdiow5Kf1Y3cFc6529G3DVKq-dpBaQeLj3sSCi9TnNfFJ1OBUJhTNmGcpoDWY2vKGjeyoNHJUAk-LiMdiXUOA-XMWI6DeZk4uxNP0EXy22YXTgKMOY5oRxoagOdo9zLI6KRhrFKSo15IwLItKH9U_",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDatd4azIC27G0oJosUCsoYIyVz2sqfUQcai9atn14GfRqE2UQ_9JseL_fZ3ia3Hi_9iVCEtrq7lw3szV1AJNYr9l2pVO8O79wDRJkFf2oc93eIXd43JdNbIUJ0dLXf1jpQlEfIjPEo3nNcxcBa2D5G_24fxZERsx9IKlFvleI-8DM7beUAp0KV5ik3NFaZ_vjYUox0uekF022l_rFneEB7Etq9APZ0Eev1n-swYKI2T7HFyt05l-sB0fOBdgT5KDXcK6ajGp0obULq",
  ],
  styles: [
    { id: "style-1", label: "Kiểu 1", unitPrice: 25.0 },
    { id: "style-2", label: "Kiểu 2", unitPrice: 30.0 },
    { id: "style-3", label: "Kiểu 3", unitPrice: 35.0 },
    { id: "style-4", label: "Kiểu 4", unitPrice: 40.0 },
    { id: "style-5", label: "Kiểu 5", unitPrice: 45.0 },
  ]
};

const CustomDesign = () => {
  const [selectedStyle, setSelectedStyle] = useState(customProduct.styles[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(customProduct.thumbnails[0]);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: customProduct.productId,
        name: customProduct.name,
        img: customProduct.img,
        quantity: quantity,
        productDetail: {
          id: selectedStyle.id,
          sizeLabel: selectedStyle.label,
          unitPrice: selectedStyle.unitPrice,
        },
      })
    );
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
            {customProduct.thumbnails.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(src)}
                className={`shrink-0 cursor-pointer border-2 rounded-xl overflow-hidden size-20 md:size-24 transition-all ${
                  selectedImage === src
                    ? "border-primary opacity-100 scale-95"
                    : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Custom design thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-surface-light relative shadow-sm group">
            <img
              src={selectedImage}
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
          </div>

          <p className="text-base leading-relaxed text-gray-600 font-medium">
            {customProduct.desc}
          </p>

          <div className="h-px w-full bg-gray-200"></div>

          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Kiểu
            </label>
            <div className="flex flex-wrap gap-3">
              {customProduct.styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
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