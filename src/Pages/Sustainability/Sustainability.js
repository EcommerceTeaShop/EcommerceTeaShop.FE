import React from "react";
import { Link } from "react-router-dom";

const Sustainability = () => {
  const pillars = [
    {
      icon: "eco",
      title: "Ethical Sourcing",
      desc: "We work directly with tea farmers who practice sustainable agriculture, ensuring fair wages and preserving traditional cultivation methods that respect the land.",
    },
    {
      icon: "inventory_2",
      title: "Eco-Friendly Packaging",
      desc: "Our packaging is 100% recyclable and biodegradable. We use minimal, elegant design to reduce waste while protecting the quality of our teas.",
    },
    {
      icon: "volunteer_activism",
      title: "Community Empowerment",
      desc: "We invest in local communities through education programs, healthcare initiatives, and infrastructure development in tea-growing regions.",
    },
  ];

  return (
    <div className="bg-background-light text-[#0d1b10] font-display min-h-screen">
      <section
        className="relative h-[400px] lg:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 27, 16, 0.4), rgba(13, 27, 16, 0.7)), url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-white text-4xl lg:text-7xl font-black mb-6 tracking-tight">
            Nurturing nature, <br />
            one leaf at a time
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Our commitment to sustainability goes beyond tea — it's a promise to
            the earth and future generations.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full">
            <div className="aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Harvesting fresh tea leaves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0d1b10] mb-8">
              Our Sustainable Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              At Teavault, sustainability isn't just a buzzword — it's woven
              into every step of our process. From the moment a tea leaf is
              plucked to when it reaches your cup, we ensure our practices honor
              the earth, support farming communities, and preserve the ancient
              art of tea cultivation for generations to come.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-light py-16 lg:py-24 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0d1b10] mb-12">
            Our Three Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                  <span className="material-symbols-outlined text-4xl">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-xl font-black mb-4 text-[#0d1b10]">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto px-4 md:px-10 py-16 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-[#0d1b10] mb-6">
          Join us in creating a sustainable future
        </h2>
        <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Every purchase supports ethical farming, eco-friendly practices, and
          thriving communities.
        </p>
        <Link to="/our-story">
          <button className="bg-[#0d1b10] text-white px-10 py-4 rounded-xl font-black shadow-lg hover:bg-opacity-80 active:scale-[0.98] transition-all">
            Learn More About Our Journey
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Sustainability;
