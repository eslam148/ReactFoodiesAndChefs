import { useEffect, useState } from "react";
import DishImg2 from "../../assets/images/dish.webp";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import checkSignIn from "../../utils/checkSignIn";

function MenusForm({ isNewMenu, menu, setMenu }) {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    checkSignIn();
  });

  return (
    <div className="mainbg overflow-hidden min-h-screen">
      <main className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0" id="overlay">
        <section className="min-h-screen space-y-6 md:min-h-full ltr:border-r rtl:border-l border-main-color flex flex-col w-full md:w-7/12 p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
          <div className="w-full flex flex-col justify-center items-center Interl ">
            <div className="flex justify-center items-center gap-2 w-1/2">
              <div className="flex flex-col w-1/3 gap-2 items-end">
                <span className="border-main-color w-1/2 block border-[1px]" />
                <span className="border-main-color w-3/4 block border-[1px]" />
              </div>
              <h2 className="text-2xl">{t("menus.form.title")}</h2>
              <div className="flex flex-col w-1/3 gap-2">
                <span className="border-main-color w-1/2 block border-[1px]" />
                <span className="border-main-color w-3/4 block border-[1px]" />
              </div>
            </div>
            <h3 className="uppercase text-sm">{t("menus.form.subtitle")}</h3>
          </div>
          <div>
            <div className="mb-1">
              <label className="section-title">{t("menus.form.name")}</label>
              <input
                maxLength="100"
                type="text"
                id="event-Description"
                className="opacity-90 rounded-none placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] bg-[#444444] form-control w-full p-3"
                placeholder={t("menus.form.namePlaceholder")}
                required
                value={menu?.name}
                onChange={(e) => setMenu({ ...menu, name: e.target.value })}
              />
            </div>
            <div className="mb-1">
              <label className="section-title">
                {t("menus.form.description")}
              </label>
              <input
                maxLength="100"
                type="text"
                id="event-Description"
                className="opacity-90 rounded-none placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] bg-[#444444] form-control w-full p-3"
                placeholder={t("menus.form.descriptionPlaceholder")}
                required
                value={menu?.description}
                onChange={(e) =>
                  setMenu({ ...menu, description: e.target.value })
                }
              />
            </div>
            <hr className="w-full bg-main-color h-1 my-4 border-none" />
            {menu?.courses?.map((course, index) => (
              <div key={index} className="flex flex-col gap-2 mb-4">
                <div className="flex flex-col gap-2">
                  <label className="section-title flex flex-row justify-between pr-4">
                    {t("menus.form.course")} {index + 1}
                    <i
                      className="fa-solid fa-trash-can text-lg text-main-color hover:text-red-500 cursor-pointer"
                      onClick={() => {
                        const newCourses = [...menu.courses];
                        newCourses.splice(index, 1);
                        setMenu({ ...menu, courses: newCourses });
                      }}
                    />
                  </label>
                  <input
                    maxLength="100"
                    type="text"
                    id="CourseName"
                    name="CourseName"
                    className="opacity-90 rounded-none placeholder-gray-400 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none h-[47.02px] bg-[#444444] form-control w-full p-3"
                    placeholder={t("menus.form.courseNamePlaceholder")}
                    value={course.name}
                    required
                    onChange={(e) => {
                      const newCourses = [...menu.courses];
                      newCourses[index].name = e.target.value;
                      setMenu({ ...menu, courses: newCourses });
                    }}
                  />
                </div>
                <div className="relative mb-1">
                  <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] bg-[#444444] w-full">
                    <textarea
                      id="CourseDesc"
                      name="CourseDesc"
                      type="text"
                      className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] w-full p-3"
                      placeholder={t("menus.form.courseDescriptionPlaceholder")}
                      value={course.description}
                      required
                      onChange={(e) => {
                        const newCourses = [...menu.courses];
                        newCourses[index].description = e.target.value;
                        setMenu({ ...menu, courses: newCourses });
                      }}
                    ></textarea>
                  </div>
                  <div className="flex flex-row w-full justify-start items-center gap-4 mt-4">
                    <div>
                      <label
                        htmlFor={`CourseImg ${index}`}
                        name={`CourseImg ${index}`}
                        className={`hidden lg:block w-38 py-1 px-2 rounded-md text-lg text-center text-white font-medium hover:bg-main-dark-color cursor-pointer ${
                          course.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                      >
                        {t("menus.form.chooseImage")}
                      </label>
                      <label
                        htmlFor={`CourseImg ${index}`}
                        className={`lg:hidden p-2 text-sm font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none hover:bg-main-dark-color cursor-pointer ${
                          course.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                      >
                        <i className="fa-solid fa-upload" />
                      </label>
                      <input
                        type="file"
                        id={`CourseImg ${index}`}
                        name={`CourseImg ${index}`}
                        required
                        onChange={(e) => {
                          const newCourses = [...menu.courses];
                          newCourses[index].image = e.target.files[0];
                          setMenu({ ...menu, courses: newCourses });
                        }}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        id={`ShowCourseImg ${index}`}
                        name={`ShowCourseImg ${index}`}
                        className={`hidden lg:block w-38 py-1 px-2 rounded-md text-lg text-center text-white font-medium hover:bg-main-dark-color cursor-pointer ${
                          course.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                        onClick={() => {
                          setModalImg(URL.createObjectURL(course.image));
                          setIsModalOpen(true);
                        }}
                      >
                        {t("menus.form.showImage")}
                      </button>
                      <button
                        type="button"
                        id={`ShowCourseImg ${index}`}
                        name={`ShowCourseImg ${index}`}
                        className={`lg:hidden p-2 text-sm font-medium w-33 h-8 text-white rounded-md flex items-center justify-center focus:outline-none hover:bg-main-dark-color cursor-pointer ${
                          course.image ? "bg-main-color" : "bg-[#444444]"
                        }`}
                        onClick={() => {
                          setModalImg(URL.createObjectURL(course.image));
                          setIsModalOpen(true);
                        }}
                      >
                        <i className="fa-solid fa-image" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center gap-4">
              <button
                className="px-4 py-2 mt-10 text-lg font-bold bg-main-color hover:bg-main-dark-color"
                onClick={() => {
                  const newCourses = [...menu.courses];
                  newCourses.push({ name: "", description: "", image: null });
                  setMenu({ ...menu, courses: newCourses });
                }}
              >
                {t("menus.form.addCourse")}
              </button>
            </div>
            <button
              type="submit"
              style={{ height: "40.76px" }}
              className="w-full mt-20 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t("menus.form.addMenu")}
            </button>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>

                {/* Image */}
                <img
                  src={modalImg}
                  alt="Preview"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </section>
        <section className="w-5/12 hidden md:flex justify-end">
          <img
            src={DishImg2}
            className="w-[30rem] h-[30rem] object-cover"
            alt="FoodImage"
          />
        </section>
      </main>
    </div>
  );
}

export default MenusForm;
