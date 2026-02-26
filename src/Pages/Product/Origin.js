import React from "react";

const Origin = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-[#0d1b10]">Origin</h3>
      <p className="text-gray-600 font-medium leading-relaxed">
        Our matcha is grown in Uji, Kyoto — a region with centuries of tea
        cultivation expertise. Farmers nurture the tea plants using traditional
        shade-growing techniques and hand-select leaves at peak freshness to
        ensure intense color and umami.
      </p>

      <div className="bg-surface-light p-6 rounded-2xl border border-gray-100">
        <h4 className="font-black text-lg mb-4 text-[#0d1b10]">
          Estate Practices
        </h4>
        <ul className="space-y-3 text-gray-600 font-medium">
          <li>Shade-grown for 20 days before harvest</li>
          <li>Stone-ground using traditional mills</li>
          <li>Hand-selected, small-batch processing</li>
          <li>Family-run estate with sustainable practices</li>
        </ul>
      </div>

      <div className="bg-surface-light p-6 rounded-2xl border border-gray-100">
        <h4 className="font-black text-lg mb-4 text-[#0d1b10]">Terroir</h4>
        <p className="text-gray-600 font-medium leading-relaxed">
          The mineral-rich soils of Uji and careful cultivation create matcha
          with a balanced umami profile and vivid green hue. Seasonal weather
          patterns and gentle processing contribute to the final flavor.
        </p>
      </div>
    </div>
  );
};

export default Origin;
