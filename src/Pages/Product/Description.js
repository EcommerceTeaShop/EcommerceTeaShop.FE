import React from "react";

const Description = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-6">
        <h3 className="text-2xl font-black text-[#0d1b10]">
          The Essence of Uji
        </h3>
        <p className="text-gray-600 font-medium leading-relaxed">
          Our Ceremonial Grade Matcha is sourced directly from a family-owned
          estate in Uji, Kyoto—the birthplace of Japanese matcha. The leaves are
          shade-grown for 20 days before harvest to boost chlorophyll and
          L-theanine levels, resulting in a vibrant emerald green color and a
          profound umami flavor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          <div className="bg-surface-light p-6 rounded-2xl border border-gray-100">
            <h4 className="font-black text-lg mb-4 flex items-center gap-2 text-[#0d1b10]">
              <span className="material-symbols-outlined text-primary">
                psychiatry
              </span>
              Tasting Notes
            </h4>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Creamy mouthfeel
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Vegetal greens
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Subtle sweetness
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Zero bitterness
              </li>
            </ul>
          </div>
          <div className="bg-surface-light p-6 rounded-2xl border border-gray-100">
            <h4 className="font-black text-lg mb-4 flex items-center gap-2 text-[#0d1b10]">
              <span className="material-symbols-outlined text-primary">
                nutrition
              </span>
              Benefits
            </h4>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                High in antioxidants
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Boosts metabolism
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Calm focus (L-theanine)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Detoxifies naturally
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#ecf6ee] rounded-3xl p-8 border border-primary/20 h-fit">
        <h4 className="text-xl font-black mb-8 text-center text-[#0d1b10]">
          Perfect Brew
        </h4>
        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
              <span className="material-symbols-outlined">thermometer</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                Temperature
              </p>
              <p className="font-bold text-[#0d1b10] mt-0.5">175°F / 80°C</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                Whisk Time
              </p>
              <p className="font-bold text-[#0d1b10] mt-0.5">15-30 Seconds</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
              <span className="material-symbols-outlined">scale</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                Quantity
              </p>
              <p className="font-bold text-[#0d1b10] mt-0.5">1.5g / 1 tsp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
