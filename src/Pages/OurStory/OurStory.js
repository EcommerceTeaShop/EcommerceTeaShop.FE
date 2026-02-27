import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const values = [
    {
      icon: 'verified_user',
      title: 'Expert Verification',
      desc: 'Our team of certified tea sommeliers evaluates every tea for authenticity, quality, and proper processing before it enters our collection.'
    },
    {
      icon: 'eco',
      title: 'Sustainable Sourcing',
      desc: 'We partner exclusively with growers who practice organic cultivation, water conservation, and biodiversity protection in their tea gardens.'
    },
    {
      icon: 'handshake',
      title: 'Direct Relationships',
      desc: 'We maintain personal connections with our artisan partners, ensuring fair compensation and long-term sustainability for their families and communities.'
    },
    {
      icon: 'history_edu',
      title: 'Cultural Preservation',
      desc: 'Through our Journal and educational programs, we document and share traditional tea knowledge, brewing techniques, and cultural practices.'
    }
  ];

  return (
    <div className="bg-background-light text-[#0d1b10] font-display min-h-screen">
      
      <section 
        className="relative h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(13, 27, 16, 0.6), rgba(13, 27, 16, 0.8)), url("https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")` }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-white text-5xl lg:text-7xl font-black mb-6 tracking-tight">Our Story</h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Preserving tea culture through expert verification and authentic sourcing
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Tea Vault was founded on a simple belief: exceptional tea deserves exceptional care. In a world of mass production and questionable origins, we saw a need for a trusted platform that celebrates authentic tea culture while supporting artisan growers.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Every tea in our collection is personally verified by certified tea masters who have spent decades studying traditional cultivation and processing methods. We work directly with small-scale farmers who practice sustainable agriculture and honor centuries-old techniques.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Our mission extends beyond commerce. We're building a community of tea enthusiasts, supporting fair trade practices, and preserving traditional knowledge for future generations.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 group">
              <img 
                src="https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Fresh tea leaves" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-light py-16 lg:py-24 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                </div>
                <h3 className="text-xl font-black mb-4 text-[#0d1b10]">{val.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto px-4 md:px-10 py-16 lg:py-24 text-center">
        <div className="bg-[#0d1b10] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" 
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1576092762791-dd9e2220cad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")` }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Join Our Journey</h2>
            <p className="text-gray-300 font-medium text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're a tea connoisseur or just beginning to explore, we invite you to experience the difference that authentic, expertly curated tea can make.
            </p>
            <Link to="/shop">
              <button className="bg-primary text-[#0d1b10] px-10 py-4 rounded-xl font-black shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Explore The Collection
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStory;