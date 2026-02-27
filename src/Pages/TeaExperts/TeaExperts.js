import React from 'react';

const TeaExperts = () => {
  const experts = [
    {
      role: 'Tea Sommelier',
      name: 'Dr. Minh Nguyen',
      desc: 'With over 20 years of experience in tea cultivation and tasting, Dr. Minh brings deep knowledge of Asian tea traditions.',
      img: 'https://media.discordapp.net/attachments/1019970889888059412/1476605756257210368/person-enjoying-relaxing-time-home.jpg?ex=69a1bbc6&is=69a06a46&hm=8d97437c7882dcb25f4024b801e8f984258478d83c2b307c1615448b494b3a5a&=&format=webp&width=703&height=937'
    },
    {
      role: 'Herbal Specialist',
      name: 'Nguyễn Văn Khánh',
      desc: 'Khánh specializes in herbal blends and wellness teas, combining ancient wisdom with modern nutritional science.',
      img: 'https://media.discordapp.net/attachments/1019970889888059412/1476606012323659837/man-enjoying-cup-matcha-tea.jpg?ex=69a1bc03&is=69a06a83&hm=cfb625384d9a89748c8b4ace80f691bd52b5bf910e06a9a154d593b6ceabab24&=&format=webp&width=625&height=833'
    },
    {
      role: 'Japanese Tea Master',
      name: 'Kenji Tanaka',
      desc: 'Trained in Kyoto\'s traditional tea ceremonies, Kenji brings authentic Japanese tea expertise to our collection.',
      img: 'https://media.discordapp.net/attachments/1019970889888059412/1476606010666913793/medium-shot-man-with-matcha-tea.jpg?ex=69a1bc02&is=69a06a82&hm=94d85d26f99ed08bcaa169b1720e029ee9a64d296a0f1c9473af4b2afc037029&=&format=webp&width=625&height=833'
    },
    {
      role: 'Ayurvedic Tea Expert',
      name: 'Maya Patel',
      desc: 'Maya integrates Ayurvedic principles into tea blending, creating harmonious and healing tea experiences.',
      img: 'https://media.discordapp.net/attachments/1019970889888059412/1476606009895026789/image-pretty-young-woman-apron-holding-cup.jpg?ex=69a1bc02&is=69a06a82&hm=322760877260a584fff7042af149353772660d503e4edb1cf9d2e7b534496d8b&=&format=webp&width=625&height=833'
    }
  ];

  return (
    <div className="bg-background-light text-[#0d1b10] font-display min-h-screen">
      
      <section 
        className="relative h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(13, 27, 16, 0.7), rgba(13, 27, 16, 0.8)), url("https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")` }}
      >
        <div className="text-center z-10 px-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-6 backdrop-blur-sm border border-primary/30">
            <span className="material-symbols-outlined text-3xl">groups</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-black mb-6 tracking-tight">Meet Our Tea Experts</h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Our team of certified tea specialists brings decades of combined expertise in tea cultivation, blending, and the art of mindful tea ceremonies.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col">
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden bg-surface-light mb-6 relative">
                <img 
                  src={expert.img} 
                  alt={expert.name} 
                  className="w-full h-full object-covergrayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                  <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                  {expert.role}
                </div>
                <h3 className="text-2xl font-black text-[#0d1b10] mb-3">{expert.name}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed flex-1">
                  {expert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto px-4 md:px-10 pb-16 lg:pb-24 text-center">
        <div className="bg-[#0d1b10] rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-800 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
            <span className="material-symbols-outlined text-4xl">military_tech</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Certified Excellence</h2>
          <p className="text-gray-400 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
            All our tea experts hold internationally recognized certifications from prestigious institutions including the Tea Association, International Tea Masters Association, and traditional tea schools across Asia. Their combined knowledge ensures every Teavault product meets the highest standards of quality and authenticity.
          </p>
        </div>
      </section>

    </div>
  );
};

export default TeaExperts;