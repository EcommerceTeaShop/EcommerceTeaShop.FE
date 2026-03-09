import React, { useState } from 'react';
import homeHeroBanners from '../../../data/homeHeroBanners';

const STORAGE_KEY = 'homeHeroBanners.v3';

const getStoredBanners = () => {
  if (typeof window === 'undefined') return homeHeroBanners;
  try {
    const cached = window.localStorage.getItem(STORAGE_KEY);
    return cached ? JSON.parse(cached) : homeHeroBanners;
  } catch (error) {
    console.warn('Không thể đọc banner từ localStorage', error);
    return homeHeroBanners;
  }
};

const persistBanners = (payload) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    window.dispatchEvent(new Event('homeHeroBannersUpdated'));
  } catch (error) {
    console.warn('Không thể lưu banner xuống localStorage', error);
  }
};

const initialHistory = [
  { id: '#HIS-021', title: 'Hero Tết 2025', duration: 'Jan 2025 - Feb 2025', owner: 'Uyên', status: 'Đã kết thúc' },
  { id: '#HIS-019', title: 'Popup Mid Autumn', duration: 'Aug 2024 - Oct 2024', owner: 'Khoa', status: 'Đã kết thúc' },
  { id: '#HIS-017', title: 'Hero thiết kế bespoke', duration: 'Apr 2024 - Jul 2024', owner: 'Thư', status: 'Đã kết thúc' },
];

const Campaigns = () => {
  const [liveBanners, setLiveBanners] = useState(getStoredBanners);
  const [history, setHistory] = useState(initialHistory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    note: '',
    description: '',
    image: '',
    cta: '',
    link: '',
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setFormData({ title: '', note: '', description: '', image: '', cta: '', link: '' });
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setFormData({
      title: liveBanners[index]?.title || '',
      note: liveBanners[index]?.note || '',
      description: liveBanners[index]?.description || '',
      image: liveBanners[index]?.image || '',
      cta: liveBanners[index]?.cta || '',
      link: liveBanners[index]?.link || '',
    });
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingIndex === null) return;
    if (!formData.title || !formData.image) {
      alert('Nhập tối thiểu tiêu đề và link ảnh');
      return;
    }
    const updated = liveBanners.map((banner, idx) =>
      idx === editingIndex
        ? {
            ...banner,
            title: formData.title,
            note: formData.note,
            description: formData.description,
            image: formData.image,
            cta: formData.cta,
            link: formData.link,
            lastUpdated: new Date().toLocaleDateString('vi-VN'),
          }
        : banner,
    );
    setLiveBanners(updated);
    persistBanners(updated);
    setHistory((prev) => [
      {
        id: `#HIS-${prev.length + 22}`,
        title: `${formData.title} (thay slide ${editingIndex + 1})`,
        duration: 'Đang chờ áp dụng',
        owner: 'Bạn',
        status: 'Vừa cập nhật',
      },
      ...prev,
    ]);
    handleCloseModal();
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 text-slate-900 min-h-screen">
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">edit</span>
                Chỉnh banner Home
              </h3>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-4 mb-6">
              <input
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                placeholder="Tiêu đề"
              />
              <textarea
                value={formData.note}
                onChange={(e) => setFormData((prev) => ({ ...prev, note: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                rows={2}
                placeholder="Ghi chú (ví dụ slide nào, thông điệp)"
              />
              <textarea
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                rows={3}
                placeholder="Mô tả hiển thị dưới tiêu đề"
              />
              <input
                value={formData.image}
                onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                placeholder="Link ảnh"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={formData.cta}
                  onChange={(e) => setFormData((prev) => ({ ...prev, cta: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                  placeholder="CTA"
                />
                  <input
                    value={formData.link}
                    onChange={(e) => setFormData((prev) => ({ ...prev, link: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
                  placeholder="Đường dẫn"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={handleCloseModal} className="flex-1 py-2.5 rounded-lg bg-slate-100 text-slate-600 font-bold text-sm">
                Hủy
              </button>
                <button onClick={handleSaveEdit} className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm">
                  Lưu banner
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Banner trang chủ</h1>
            <p className="mt-1 text-slate-500">Chọn một banner để chỉnh sửa nội dung.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {liveBanners.map((banner, index) => (
            <div key={banner.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="aspect-video bg-slate-100">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{banner.note}</p>
                <h3 className="text-lg font-black text-slate-900 line-clamp-2">{banner.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{banner.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Cập nhật {banner.lastUpdated}</span>
                  <span className="font-bold text-blue-600">{banner.cta}</span>
                </div>
                <button
                        onClick={() => openEditModal(index)}
                  className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-blue-600"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Chỉnh sửa
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">history</span>
              Lịch sử banner
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Gần đây</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-medium">
                <tr>
                  <th className="px-6 py-3">Mã</th>
                  <th className="px-6 py-3">Tiêu đề</th>
                  <th className="px-6 py-3">Thời gian chạy</th>
                  <th className="px-6 py-3">Phụ trách</th>
                  <th className="px-6 py-3">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-mono text-sm font-bold text-slate-700">{item.id}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">{item.title}</td>
                    <td className="px-6 py-4 text-slate-500">{item.duration}</td>
                    <td className="px-6 py-4 text-slate-500">{item.owner}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;