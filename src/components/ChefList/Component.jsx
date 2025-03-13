import React, { useState, useEffect } from "react";
import CustomePagination from "../CustomePagination/Component";
import { GetChefsService } from "../../services/Chef/Chef";
import ProfileTempImg from  "../../assets/images/profileTemp.webp" 

function ChefList() {
  const [chefs, setChefs] = useState([]);
  const [filteredChefs, setFilteredChefs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const chefsPerPage = 8;

  useEffect(() => {
    GetChefsService().then((data) => {
      setChefs(data.data || []);
      setFilteredChefs(data.data || []);
    });
  }, []);

  // تحديث نتائج البحث عند تغيير searchTerm
  useEffect(() => {
    const filtered = chefs.filter((chef) =>
      `${chef.firstName} ${chef.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChefs(filtered);
    setCurrentPage(1); // العودة للصفحة الأولى بعد كل بحث
  }, [searchTerm, chefs]);

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredChefs.length / chefsPerPage);
  const displayedChefs = filteredChefs.slice((currentPage - 1) * chefsPerPage, currentPage * chefsPerPage);
  const handleFavoriteClick = (userid) => {
    console.log(userid);
  };

  return (
    <section className="hidden lg:block py-8">
      <div className="container mx-auto max-w-6xl px-4">
      

        {/* 🔎 شريط البحث */}
        <div className="flex my-8 xl:justify-start sm:justify-center font-sans">
          <div className="relative flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-lg bg-[#383838CC] py-2 ps-12 w-96 focus:outline-none text-white"
              placeholder="Search for a chef..."
            />
            <button type="button" className="absolute start-1 top-1 text-black w-10 bg-main-color rounded-full">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* 🧑‍🍳 عرض الطهاة */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
          {displayedChefs.length > 0 ? (
            displayedChefs.map((data, index) => (
              <a href={`/ChefProfile/${data.id}`}  key={index} className="bg-[#383838CC] rounded shadow-lg overflow-hidden text-white">
                <img
               src={
                data?.profileImageLink
                  ? data.profileImageLink.includes("http")
                    ? data.profileImageLink
                    : `${process.env.REACT_APP_API_URL}/${data.profileImageLink}`
                  : ProfileTempImg
              }
                   alt={`${data.firstName} ${data.lastName}`}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2 justify-center gap-2">
                    
                    {/* <button className="bg-transparent" onClick={() => handleFavoriteClick(data.id)}>
                      <i className="far fa-heart text-main-color text-xl"></i>
                      <i class="fa-solid fa-heart  text-main-color text-xl"></i>
                  </button> */}
                    Chef {data.firstName} {data.lastName}
                  </div>
                  <div className="flex justify-center mt-4 gap-4 font-bold">
                    <a
                      href="/events/create"
                      
                      className="mt-4 bg-main-color text-white text-sm p-2 rounded-xl hover:bg-orange-600"
                    >
                      Send Request
                    </a>
                    <a
                      href={"/chat/"+data.id}
                    
                      className="mt-4 bg-main-green-color text-white p-2 text-sm rounded-xl hover:bg-orange-600"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-4">No chefs found</p>
          )}
        </div>

        {/* 🔄 الترقيم */}
        {totalPages > 1 && (
          <CustomePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </section>
  );
}

export default ChefList;
