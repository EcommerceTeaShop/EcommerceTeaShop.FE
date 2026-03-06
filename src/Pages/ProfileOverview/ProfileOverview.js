import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileOverview = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth || { isAuthenticated: false, user: null });
  
  const [activeView, setActiveView] = useState('overview');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 px-4 md:px-10 py-12 font-display bg-background-light relative">
      
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-2xl font-black text-[#0d1b10] mb-2">Đổi mật khẩu</h3>
            <p className="text-sm text-gray-500 mb-6">Tạo mật khẩu mới an toàn cho tài khoản của bạn.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowPasswordModal(false); alert("Đang mô phỏng cập nhật mật khẩu..."); }}>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Mật khẩu hiện tại</label>
                <input type="password" required className="w-full rounded-xl border border-gray-200 bg-surface-light py-3 px-4 font-semibold text-[#0d1b10] focus:ring-2 focus:ring-primary focus:border-transparent mt-1" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Mật khẩu mới</label>
                <input type="password" required className="w-full rounded-xl border border-gray-200 bg-surface-light py-3 px-4 font-semibold text-[#0d1b10] focus:ring-2 focus:ring-primary focus:border-transparent mt-1" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Xác nhận mật khẩu mới</label>
                <input type="password" required className="w-full rounded-xl border border-gray-200 bg-surface-light py-3 px-4 font-semibold text-[#0d1b10] focus:ring-2 focus:ring-primary focus:border-transparent mt-1" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowPasswordModal(false)} className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">Hủy</button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-primary text-[#0d1b10] font-bold hover:bg-primary/90 transition-transform hover:scale-[1.02] shadow-sm">Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-2xl font-black text-[#0d1b10] mb-2">Địa chỉ giao hàng</h3>
            <p className="text-sm text-gray-500 mb-6">Cập nhật nơi bạn muốn nhận trà.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddressModal(false); alert("Đang mô phỏng lưu địa chỉ..."); }}>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Nhãn địa chỉ (vd. Nhà, Công ty)</label>
                <input type="text" defaultValue="Giao đến campus" required className="w-full rounded-xl border border-gray-200 bg-surface-light py-3 px-4 font-semibold text-[#0d1b10] focus:ring-2 focus:ring-primary focus:border-transparent mt-1" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Địa chỉ đầy đủ</label>
                <textarea rows="3" required defaultValue="FPT University Campus&#13;&#10;Hòa Lạc Hi-Tech Park&#13;&#10;Thạch Thất, Hà Nội, Việt Nam" className="w-full rounded-xl border border-gray-200 bg-surface-light py-3 px-4 font-semibold text-[#0d1b10] focus:ring-2 focus:ring-primary focus:border-transparent mt-1 resize-none"></textarea>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowAddressModal(false)} className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">Hủy</button>
                <button type="submit" className="flex-1 py-3 rounded-xl bg-primary text-[#0d1b10] font-bold hover:bg-primary/90 transition-transform hover:scale-[1.02] shadow-sm">Lưu địa chỉ</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <aside className="w-full shrink-0 lg:w-64">
        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveView('overview')} 
            className={`flex items-center gap-3 rounded-xl px-5 py-4 font-bold transition-all w-full text-left ${activeView === 'overview' ? 'bg-primary/10 text-[#0d1b10] border border-primary/20' : 'text-gray-500 hover:text-[#0d1b10] hover:bg-surface-light'}`}
          >
            <span className={`material-symbols-outlined text-[22px] ${activeView === 'overview' ? 'text-primary' : ''}`}>person</span>
            <span className="text-sm">Tổng quan tài khoản</span>
          </button>
          
          <button 
            onClick={() => setActiveView('orders')} 
            className={`flex items-center gap-3 rounded-xl px-5 py-4 font-bold transition-all w-full text-left ${activeView === 'orders' ? 'bg-primary/10 text-[#0d1b10] border border-primary/20' : 'text-gray-500 hover:text-[#0d1b10] hover:bg-surface-light'}`}
          >
            <span className={`material-symbols-outlined text-[22px] ${activeView === 'orders' ? 'text-primary' : ''}`}>package_2</span>
            <span className="text-sm">Đơn hàng của tôi</span>
          </button>
          
          <button 
            onClick={() => setShowPasswordModal(true)} 
            className="w-full flex items-center gap-3 rounded-xl px-5 py-4 text-gray-500 hover:text-[#0d1b10] hover:bg-surface-light transition-all font-medium text-left"
          >
            <span className="material-symbols-outlined text-[22px]">lock_reset</span>
            <span className="text-sm">Đổi mật khẩu</span>
          </button>
        </nav>
      </aside>

      <section className="flex flex-1 flex-col gap-8">
        
        {activeView === 'overview' && (
          <>
            <div className="rounded-3xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-primary/10 text-primary flex items-center justify-center text-4xl font-black uppercase ring-4 ring-surface-light">
                    {user?.name?.charAt(0) || "C"}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0d1b10]">{user?.name || "Khách hàng"}</h2>
                    <p className="mt-2 text-gray-500 font-medium text-sm">{user?.email || "customer@teavault.com"}</p>
                  </div>
                </div>
                
                <Link to="/profile/edit" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 px-8 py-3 text-sm font-bold text-[#0d1b10] hover:border-primary hover:bg-primary/5 transition-all mt-4 md:mt-0 whitespace-nowrap">
                  Chỉnh sửa hồ sơ
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 pt-10 border-t border-gray-100">
                <div className="space-y-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Thông tin cá nhân</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Họ và tên</label>
                      <p className="text-base font-bold text-[#0d1b10] group-hover:text-primary transition-colors">{user?.name || "Khách hàng"}</p>
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Số điện thoại</label>
                      <p className="text-base font-bold text-[#0d1b10] group-hover:text-primary transition-colors">+84 987 654 321</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Địa chỉ giao hàng</h3>
                    <button onClick={() => setShowAddressModal(true)} className="text-xs font-bold text-primary hover:underline">Thêm mới</button>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 relative group hover:border-primary transition-colors cursor-pointer">
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary bg-white px-2 py-1 rounded-md shadow-sm">Mặc định</span>
                    <p className="font-bold text-[#0d1b10] mb-1">Giao đến campus</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      FPT University Campus<br/>
                      Hòa Lạc Hi-Tech Park<br/>
                      Thạch Thất, Hà Nội, Việt Nam
                    </p>
                    <div className="mt-4 flex gap-3 relative z-10">
                      <button onClick={() => setShowAddressModal(true)} className="text-xs font-bold text-gray-500 hover:text-primary transition-colors">Chỉnh sửa</button>
                      <button onClick={() => alert('Đang mô phỏng xóa địa chỉ...')} className="text-xs font-bold text-gray-500 hover:text-red-500 transition-colors">Xóa</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-[#0d1b10]">Hoạt động gần đây</h3>
                <button onClick={() => setActiveView('orders')} className="text-xs font-bold uppercase tracking-widest text-primary hover:underline transition-all">Xem lịch sử</button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-5 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-surface-light flex items-center justify-center text-[#0d1b10]">
                      <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#0d1b10]">#TEA-8829</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Feb 24, 2026</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-[#0d1b10]">$42.00</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mt-1 block">Đang giao</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-surface-light flex items-center justify-center text-[#0d1b10]">
                      <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#0d1b10]">#TEA-8710</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">Feb 15, 2026</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-[#0d1b10]">$65.50</p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1 block">Đã giao</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeView === 'orders' && (
          <div className="rounded-3xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-[#0d1b10] mb-2">Lịch sử đơn hàng</h2>
            <p className="text-sm text-gray-500 mb-8">Theo dõi và quản lý các lần mua trước đây.</p>
            
            <div className="space-y-4">
              {[
                { id: "#TEA-8829", date: "Feb 24, 2026", total: "$42.00", items: "Premium Jasmine Pearls", status: "Đang giao", statusColor: "text-primary" },
                { id: "#TEA-8710", date: "Feb 15, 2026", total: "$65.50", items: "Matcha Starter Kit", status: "Đã giao", statusColor: "text-gray-500" },
                { id: "#TEA-8455", date: "Jan 10, 2026", total: "$24.00", items: "Oolong Tasting Box", status: "Đã giao", statusColor: "text-gray-500" }
              ].map((order, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-surface-light flex items-center justify-center text-[#0d1b10] shrink-0">
                      <span className="material-symbols-outlined text-2xl">local_shipping</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <p className="text-base font-black text-[#0d1b10]">{order.id}</p>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${order.statusColor}`}>{order.status}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-600 mt-1">{order.items}</p>
                      <p className="text-xs text-gray-400 mt-1">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center gap-2 border-t md:border-none border-gray-100 pt-4 md:pt-0">
                    <p className="text-lg font-black text-[#0d1b10]">{order.total}</p>
                    <button onClick={() => alert("Đang mô phỏng mở chi tiết đơn hàng...")} className="text-xs font-bold text-primary hover:underline">Xem hóa đơn</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
};

export default ProfileOverview;