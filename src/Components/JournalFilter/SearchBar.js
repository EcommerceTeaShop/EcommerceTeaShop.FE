import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative min-w-[280px]">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
        search
      </span>
      <input
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#0d1b10] font-medium placeholder:text-gray-400"
        placeholder="Tìm bài viết..."
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
