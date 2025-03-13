import React from "react";

const CustomePagination = ({ currentPage, totalPages, onPageChange }) => {
  // توليد أرقام الصفحات الظاهرة مع إضافة نقاط عند الحاجة
  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= 6) {
      // إظهار جميع الصفحات إذا كان العدد صغيرًا
      pages = [...Array(totalPages).keys()].map((n) => n + 1);
    } else {
      // الصفحات الأولى + النقاط + الصفحات الأخيرة
      if (currentPage > 3) pages.push(1, "...");

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...", totalPages);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-6 gap-2 p-2 rounded-b-md">
      {/* زر السابق */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`bg-white text-black font-semibold text-[10px] md:text-[16px] px-3 py-1 rounded-md ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
      >
        ◀
      </button>

      {/* أزرار الصفحات */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`px-3 py-1 rounded-md font-semibold text-[10px] md:text-[16px] ${
            page === currentPage
              ? "bg-orange-500 text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* زر التالي */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`bg-white text-black font-semibold text-[10px] md:text-[16px] px-3 py-1 rounded-md ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
      >
        ▶
      </button>
    </div>
  );
};

export default CustomePagination;
