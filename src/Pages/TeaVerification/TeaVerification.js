import React from 'react';

const TeaVerification = () => {
  const verificationSteps = [
    {
      icon: 'description',
      title: '1. Origin Documentation',
      desc: 'We verify the tea\'s origin through documentation from the grower, including geographic location, cultivation methods, and harvest details. Each tea must have a clear, traceable lineage from garden to cup.'
    },
    {
      icon: 'science',
      title: '2. Quality Assessment',
      desc: 'Our certified tea sommeliers conduct detailed sensory analysis, evaluating appearance, aroma, flavor, and mouthfeel. We assess proper processing techniques and ensure the tea meets premium quality standards for its category.'
    },
    {
      icon: 'handshake',
      title: '3. Producer Verification',
      desc: 'We establish direct relationships with tea producers, visiting gardens when possible and verifying sustainable farming practices, fair labor conditions, and traditional processing methods. Only producers who meet our ethical standards can sell through Tea Vault.'
    },
    {
      icon: 'verified',
      title: '4. Authenticity Certification',
      desc: 'Once verified, each tea receives an authenticity certificate with detailed information about its origin, processing, and tasting notes. This certificate accompanies your purchase, ensuring transparency and traceability.'
    },
    {
      icon: 'monitoring',
      title: '5. Ongoing Monitoring',
      desc: 'Verification doesn\'t end at approval. We maintain relationships with our producers and conduct periodic reviews to ensure consistent quality, sustainable practices, and adherence to our standards over time.'
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
            <span className="material-symbols-outlined text-3xl">verified_user</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-black mb-6 tracking-tight">Expert Tea Verification</h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Every tea in Tea Vault undergoes rigorous evaluation by certified tea masters to ensure authenticity, quality, and ethical sourcing.
          </p>
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto px-4 md:px-10 py-16 lg:py-24">
        <div className="space-y-6">
          {verificationSteps.map((step, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-surface-light flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-black mb-3 text-[#0d1b10]">{step.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-light py-16 lg:py-24 border-y border-gray-100">
        <div className="max-w-[1024px] mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl font-black text-[#0d1b10] mb-6">Our Expert Team</h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
            Tea Vault's verification process is led by internationally certified tea sommeliers with decades of combined experience in tea evaluation, cultivation, and cultural studies. Our team includes specialists in Chinese, Japanese, Indian, and Taiwanese tea traditions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-primary mb-2">15+</span>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Years Average Experience</span>
            </div>
            <div className="flex flex-col items-center gap-2 border-y md:border-y-0 md:border-x border-gray-200 py-6 md:py-0">
              <span className="text-5xl font-black text-primary mb-2">1,200+</span>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Teas Evaluated Annually</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-primary mb-2">98%</span>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto px-4 md:px-10 py-16 lg:py-24 text-center">
        <div className="bg-[#0d1b10] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Trust Through Transparency</h2>
            <p className="text-gray-300 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Our verification process ensures that every tea you purchase from Tea Vault represents the highest standards of quality, authenticity, and ethical sourcing.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeaVerification;