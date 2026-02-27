import React from "react";
import { useParams, Link } from "react-router-dom";

const JournalDetail = () => {
  // 1. Get the ID from the URL (e.g., /journal/1)
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      category: "Wellness",
      date: "April 12, 2024",
      readTime: "5 min read",
      title: "Benefits of Oolong Tea for Heart Health",
      desc: "New research suggests that a daily cup of Oolong can significantly lower cholesterol levels...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDKRTyVz7dd9bxyLv3Lf4DZsy3cWAG0uGqantT8F7Wl0n7KXIEOlg7FutmSBQe45ZQmXPklk7ROrElgqcCVJkcC3WtLXQp755DqCe6u6su2Z3zrTlokYpZt2_duwJpqrhyCGEqUGIOMvE3n46fI-44GnncrOo-JAqwsDpgRansTZymZpS3MvCuUDxtqp46juGDBe5v11HmDMyLt84avwSGqaLVj6lo1vKLwuVD87kiV4yfpkQs47FYQHmT-eZTusKfvJDSa9SLdxjT",
    },
    {
      id: 2,
      category: "Tradition",
      date: "April 08, 2024",
      readTime: "8 min read",
      title: "The History of the Japanese Tea Ceremony",
      desc: "Exploring the profound spiritual roots and technical mastery of Chanoyu, the way of tea...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtpgP2EgoktGk0RKogqPkO5LxahdcOEFXI8cpfj0kNrWhEPCx7AG-8yn8Yg5LBPrF0fJzzh_AjSRLrBieMQ3QjK8XwUhljgZ8HJob3-66cn8iytCTusqPr7UN7iGrbi-LXmgY3-VkW1PcXE8NziQIvX0dCzdEuBS4tXfCuQnD0YACzYBiUzVEJ3AtOG6PouhT9JFHq1vTk_fSw0fcIOgQPxlwb74d40VR2RQaHCMbz6INOHJPx2olimiYv9MlDYIswTKE4L04LNEb3",
    },
    {
      id: 3,
      category: "Tutorial",
      date: "April 05, 2024",
      readTime: "3 min read",
      title: "Water Temperature: The Secret to Better Flavor",
      desc: "Stop burning your green tea. Learn the specific temperatures for every variety of leaf...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVuPpQZJmXNuYMMsiFQNt-xooBYyyB_wesNi4RGlDHMoQ8w9m7WNruW5yzFEJTGmKHqCXYqa0N-d8Y7xyhh_rF10DHPcvZmhbZgr3t9XWCLwpNJsbTXpgV_7mZXzF31Dk--_1SHWIFZmoPenLWkMCqm9wwauYC5-drllIg5aLao-fzdCUieHKOv8qYLvbwaF2srRfRBi9kyTdUonaDeUBLWvFbEwJyhaWJ2gnSlOS_3NdEhmvIez5EfdG4ltp_KN5eZ4d86q9YXFny",
    },
    {
      id: 4,
      category: "Sourcing",
      date: "March 28, 2024",
      readTime: "12 min read",
      title: "Spring Harvest 2024: A Trip to Darjeeling",
      desc: "An exclusive look at this year's first flush and the incredible families harvesting it...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6-GO3bel_ztFUMh7MWSHSFVzn_AXH0UnLlp380j_-1DHtaF_ZuVioVt3bxiFbalOr78WdYSAlPwcqa8zvoHaHdhJSL1WG-Gz86cKZRIzFuiOueksWgxKnTMS6lQMHYsaBc7jS2Z99nOzmYI35LSnQnOM9enNVswQ-9SNMkS0js1CTVSI-6szIdoRnuak2Qd58So-3yinNRD_WvZCQWlXjjNrGqKHfTis5oag2l-UT6UXgsVJwMqPbJba5SUIxlYZMjjKnl7cuiql8",
    },
    {
      id: 5,
      category: "Culture",
      date: "March 22, 2024",
      readTime: "6 min read",
      title: "The Fascinating Tale of Earl Grey Tea",
      desc: "How a British diplomat and Bergamot oranges created one of the world's most iconic flavors...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB21X5QM8_vyKyNKHqgj7_wVX3lKgywA3pNjEsY0dnwA_vMkUAVYOI9TnaQ0dvapFRUKgWaVQmGgS-Md1sJixpg43VtC1vZN2Zk_45mYS4pVzOVSQ3VaJqHApn5T0BufwtXUupAWVp5ArilJQ6yjSnMsoR4gAe6IOGX4mIzpa_8_O9TJ9dbgvEAJexUAWNIRcDFwBfC6Y_KWNSj8GWEWwleh8oub9d9mag8dZufaCNYWejDMZXzJGg6jy_fzr6cflRbfX97fKFDsuXE",
    },
    {
      id: 6,
      category: "Health",
      date: "March 15, 2024",
      readTime: "4 min read",
      title: "5 Herbal Teas for Better Sleep Tonight",
      desc: "Say goodbye to restless nights with these naturally caffeine-free infusions that soothe the mind...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8d_yp0AsNrWuFAl4NfFOMcZY9TWMI2wU21MpBk0xN4eodZWS0xgMU3WlRtRJIs-XWm9Gqcv9lx_DIkIaesbGmMi6B0xbStNe-zQ_Ool5j6lOsES4LE6mLbTvGus4RXpl7VXOclpJJMI0finUhZz3j2y_6eh5Glab1HmY94upnzQXZIYErxGEiUpPRhOD3R4FY24-WiZeyzo3aqW1z33dTs7OE_NV_T05Logl-I3ST4R3djZMvECIUN3A4itSlCe9dnxQRvpEPCG4",
    },
  ];

  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0d1b10] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link
            to="/journal"
            className="text-gray-400 hover:text-white underline"
          >
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1b10] text-white font-sans">
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10">
          <Link className="hover:text-white transition-colors" to="/">
            Home
          </Link>
          <span className="opacity-30">/</span>
          <Link className="hover:text-white transition-colors" to="/journal">
            Journal
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-white">{article.category}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1">
            <div className="relative w-full aspect-[16/8] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src={article.img}
                alt={article.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b10]/90 via-[#0d1b10]/20 to-transparent flex flex-col justify-end p-10">
                <span className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded mb-6 w-fit">
                  {article.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
                  {article.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-300 text-xs font-medium uppercase tracking-widest">
                  <span className="px-2 py-0.5 border border-white/20 rounded text-[9px]">
                    Admin Post
                  </span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light italic">
                {article.desc}
              </p>

              {/* Full Content (Static for now, or add a 'body' field to your JSON) */}
              <div className="text-gray-400 leading-8 space-y-6 text-base">
                <p>
                  Oolong tea occupies a unique place between green and black
                  teas. Its partial oxidation creates a complex profile that
                  bridges the gap between fresh and malty flavors.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-28">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-8 pb-4 border-b border-white/5">
                Recent Posts
              </h3>
              <div className="space-y-10">
                {/* Show other articles, but not the current one */}
                {articles
                  .filter((a) => a.id !== article.id)
                  .slice(0, 3)
                  .map((recent) => (
                    <Link
                      key={recent.id}
                      to={`/journal/${recent.id}`}
                      className="group block"
                    >
                      <h4 className="text-sm font-bold leading-snug group-hover:text-gray-300 transition-colors">
                        {recent.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">
                        {recent.date}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default JournalDetail;
