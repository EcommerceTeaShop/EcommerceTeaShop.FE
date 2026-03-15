import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ProductEdit = () => {
  const location = useLocation();
  const isAddMode = location.pathname.includes('/add');

  return (
    <div className="flex-1 overflow-y-scroll p-4 md:p-8 bg-gray-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {isAddMode ? 'Thêm sản phẩm mới' : 'Cập nhật sản phẩm'}
            </h1>
            <p className="mt-1 text-slate-500">
              {isAddMode ? 'Tạo sản phẩm trà mới và thiết lập chỉ số so sánh.' : 'Chỉnh sửa chi tiết, dữ liệu so sánh và tùy chọn đóng gói.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/products" className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
              Hủy
            </Link>
            <button 
              onClick={() => alert(isAddMode ? 'Đang mô phỏng thêm sản phẩm mới vào Redux store...' : 'Đang mô phỏng lưu chỉnh sửa...')}
              className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-all transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">{isAddMode ? 'add_circle' : 'save'}</span>
              {isAddMode ? 'Đăng trà' : 'Lưu thay đổi'}
            </button>
          </div>
        </div>

        {!isAddMode && (
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200">
            <div className="relative flex items-center w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="block w-full h-12 pl-12 pr-4 bg-transparent border-none rounded-lg text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all sm:text-sm" 
                placeholder="Tìm theo tên sản phẩm, SKU, hoặc thẻ để chỉnh sửa..." 
                type="text"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600">edit_note</span> Thông tin chung
                </h3>
                {!isAddMode && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                    Đã đăng
                  </span>
                )}
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="product-name">Tên sản phẩm</label>
                  <input 
                    className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" 
                    id="product-name" 
                    type="text" 
                    defaultValue={isAddMode ? '' : "Imperial Jasmine Pearl Green Tea"}
                    placeholder={isAddMode ? 'vd. Spring Harvest Matcha' : ''}
                  />
                </div>
                
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Mô tả cửa hàng</label>
                  <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                    <div className="flex items-center gap-1 p-2 border-b border-slate-200 bg-white">
                      <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded" type="button"><span className="material-symbols-outlined text-[18px]">format_bold</span></button>
                      <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded" type="button"><span className="material-symbols-outlined text-[18px]">format_italic</span></button>
                      <div className="w-px h-4 bg-slate-300 mx-1"></div>
                      <button className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded" type="button"><span className="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
                    </div>
                    <div className="p-3">
                      <textarea 
                        className="w-full border-none bg-transparent p-0 focus:ring-0 text-sm text-slate-800 resize-none outline-none" 
                        rows="4"
                        defaultValue={isAddMode ? '' : "Hand-rolled pearls of premium green tea infused with the delicate scent of night-blooming jasmine flowers. Perfect for relaxing evenings."}
                        placeholder={isAddMode ? 'Mô tả hương vị, câu chuyện và cảm giác của loại trà này...' : ''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">imagesmode</span> Hình ảnh sản phẩm
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                {!isAddMode && (
                  <div className="relative group aspect-square rounded-lg overflow-hidden border-2 border-blue-600 bg-slate-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 text-4xl">photo_camera</span>
                    <div className="absolute top-1 left-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 rounded">CHÍNH</div>
                  </div>
                )}
                {!isAddMode && (
                  <div className="relative group aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-300 text-3xl">image</span>
                  </div>
                )}
                <label className="flex flex-col items-center justify-center aspect-square rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <span className="material-symbols-outlined text-slate-400 text-3xl mb-1">add_photo_alternate</span>
                  <span className="text-xs text-slate-500 font-bold">Tải lên</span>
                  <input className="hidden" type="file" />
                </label>
              </div>
            </div>

          </div>

          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">payments</span> Cơ chế giá
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Giá cơ bản ($)</label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-slate-500 font-bold sm:text-sm">$</span>
                    </div>
                    <input className="block w-full rounded-lg border-slate-200 bg-slate-50 pl-7 pr-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-mono" placeholder="0.00" type="number" defaultValue={isAddMode ? "" : "24.50"} />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-slate-500 font-bold sm:text-sm">USD</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Giá so sánh giảm</label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-slate-500 font-bold sm:text-sm">$</span>
                    </div>
                    <input className="block w-full rounded-lg border-slate-200 bg-slate-50 pl-7 pr-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-mono" placeholder="0.00" type="number" defaultValue={isAddMode ? "" : "28.00"} />
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">inventory</span> Tồn kho
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Số lượng ban đầu</label>
                  <input className="block w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm font-mono" type="number" defaultValue={isAddMode ? "0" : "128"} />
                </div>
                {!isAddMode && (
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                      <span>Lần nhập hàng gần nhất:</span>
                      <span className="text-blue-600">Oct 24, 2023</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;