function CreateMenuPage() {
  return (
    <div className="mainbg overflow-auto min-h-screen">
      <main
        className=" min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 "
        id="overlay"
      >
        <section className=" w-full  lg:w-7/12 p-3  md:p-5 z-10 text-start lato-bold md:pl-20  ">
          <div className="w-full flex flex-col justify-center items-center Interl ">
            <div className="flex justify-center items-center gap-2 w-1/2">
              <div className="flex flex-col w-1/3 gap-2 items-end">
                <span className="border-main-color w-1/2 block border-[1px] ">
                  {" "}
                </span>
                <span className="border-main-color w-3/4 block border-[1px] ">
                  {" "}
                </span>
              </div>
              <h2 className="text-2xl  ">Menu</h2>
              <div className="flex flex-col w-1/3 gap-2">
                <span className="border-main-color w-1/2 block border-[1px] ">
                  {" "}
                </span>
                <span className="border-main-color w-3/4 block border-[1px] ">
                  {" "}
                </span>
              </div>
            </div>
            <h3 className="uppercase text-sm">Choose your food</h3>
          </div>
          <form
            data-ajax="true"
            data-ajax-loading="#spinner"
            data-ajax-complete="redirectAfterSubmit"
            method="post"
            enctype="multipart/form-data"
            action="/Chef/AddChefMenu"
          >
            <div className="mb-1 ">
              <label
                className="section-title Interl font-medium"
                for="MenuName"
              >
                Menu Name:
              </label>
              <input
                name="MenuName"
                type="text"
                className=" Interl opacity-70 h-[47.02px] border border-[#FFFFFF4D]  bg-[#444444] form-control w-full  p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
                placeholder="Enter menu name"
                data-val="true"
                data-val-required=" this field is required."
                id="MenuName"
                value=""
              />
              <span
                className=" Interl font-medium text-red-600 text-[10px] md:text-[12px] field-validation-valid"
                data-valmsg-for="MenuName"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className=" relative mb-1">
              <label className="Interl section-title" for="AmuseBoucheDec">
                Amuse-bouche
              </label>
              <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   ">
                <textarea
                  value=""
                  name="AmuseBoucheDec"
                  type="text"
                  className=" Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-7/12  p-3"
                  placeholder="Description:"
                  data-val="true"
                  data-val-required=" this field is required."
                  id="AmuseBoucheDec"
                ></textarea>
              </div>
              <span
                className=" Interl font-medium text-red-600 text-[10px] md:text-[12px] h-[27.5px] field-validation-valid"
                data-valmsg-for="AmuseBoucheDec"
                data-valmsg-replace="true"
              ></span>
              <div className="absolute top-4 end-12 md:end-32 flex flex-col items-center justify-center rtl:pl-3 ltr:pr-3 pt-6">
                <label
                  for="AmuseBoucheImage"
                  name="AmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className="AmuseBoucheImageLable lg:block p-2.5 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  Choose Image
                </label>
                <label
                  for="AmuseBoucheImage"
                  name="AmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className="AmuseBoucheImageLable lg:hidden p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  <i className="fa-solid fa-upload"></i>
                </label>
                <input
                  id="AmuseBoucheImage"
                  type="file"
                  name="AmuseBoucheImage"
                  style={{ display: "none" }}
                />
              </div>
              <div className="absolute lg:block top-4 end-2 md:end-2  flex flex-col items-center justify-center ltr:pr-3 rtl:pl-3 pt-6">
                <button
                  type="button"
                  id="ShowAmuseBoucheImage"
                  name="ShowAmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className=" btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  Show Image
                </button>
              </div>
              <div className="absolute lg:hidden top-4 right-0 flex flex-col items-center justify-center pr-3 pt-6">
                <button
                  type="button"
                  id="ShowAmuseBoucheImageMobile"
                  name="ShowAmuseBoucheImageMobile"
                  style={{ borderRadius: "10px" }}
                  className=" btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  <i className="fa-solid fa-image"></i>
                </button>
              </div>
            </div>

            <div className=" relative mb-1">
              <label className="Interl section-title" for="AppetizerDec">
                Appetizer
              </label>
              <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   ">
                <textarea
                  value=""
                  name="AppetizerDec"
                  type="text"
                  className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-7/12  p-3"
                  placeholder="Description:"
                  data-val="true"
                  data-val-required=" this field is required."
                  id="AppetizerDec"
                ></textarea>
              </div>
              <span
                className=" Interl font-medium text-red-600 text-[10px] md:text-[12px] h-[27.5px] field-validation-valid"
                data-valmsg-for="AppetizerDec"
                data-valmsg-replace="true"
              ></span>
              <div className="absolute top-4 end-12 md:end-32 flex flex-col items-center justify-center rtl:pl-3 ltr:pr-3 pt-6">
                <label
                  for="AppetizerImage"
                  style={{ borderRadius: "10px" }}
                  className="AppetizerImageLable lg:block p-2.5 leading-3 bg-[#242424] text-xsm  Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  Choose Image
                </label>
                <label
                  for="AppetizerImage"
                  name="AppetizerImage"
                  style={{ borderRadius: "10px" }}
                  className="AppetizerImageLable lg:hidden p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  <i className="fa-solid fa-upload"></i>
                </label>
                <input
                  id="AppetizerImage"
                  name="AppetizerImage"
                  style={{ display: "none" }}
                  type="file"
                />
              </div>
              <div className="absolute lg:block top-4 end-2 md:end-2 flex flex-col items-center justify-center ltr:pr-3 rtl:pl-3 pt-6">
                <button
                  type="button"
                  id="ShowAppetizerImage"
                  name="ShowAppetizerImage"
                  style={{ borderRadius: "10px" }}
                  className="btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  Show Image
                </button>
              </div>
              <div className="absolute lg:hidden top-4 right-0 flex flex-col items-center justify-center pr-3 pt-6">
                <button
                  type="button"
                  id="ShowAppetizerImageMobile"
                  name="ShowAppetizerImageMobile"
                  style={{ borderRadius: "10px" }}
                  className=" btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  <i className="fa-solid fa-image"></i>
                </button>
              </div>
            </div>
            <div className=" relative mb-1">
              <label className="Interl section-title" for="SaladDec">
                Salad
              </label>
              <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   ">
                <textarea
                  name="SaladDec"
                  type="text"
                  className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-7/12  p-3"
                  placeholder="Description:"
                  data-val="true"
                  data-val-required=" this field is required."
                  id="SaladDec"
                ></textarea>
              </div>
              <span
                className=" Interl font-medium text-red-600 text-[10px] md:text-[12px] h-[27.5px] field-validation-valid"
                data-valmsg-for="SaladDec"
                data-valmsg-replace="true"
              ></span>
              <div className="absolute top-4 end-12 md:end-32 flex flex-col items-center justify-center rtl:pl-3 ltr:pr-3 pt-6">
                <label
                  for="SaladImage"
                  style={{ borderRadius: "10px" }}
                  className="SaladImageLable lg:block p-2.5 leading-3 bg-[#242424] text-xsm  Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  Choose Image
                </label>
                <label
                  for="SaladImage"
                  name="SaladImage"
                  style={{ borderRadius: "10px" }}
                  className="SaladImageLable lg:hidden p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  <i className="fa-solid fa-upload"></i>
                </label>
                <input
                  id="SaladImage"
                  type="file"
                  name="SaladImage"
                  style={{ display: "none" }}
                />
              </div>
              <div className="absolute lg:block top-4 end-2 md:end-2  flex flex-col items-center justify-center ltr:pr-3 rtl:pl-3 pt-6">
                <button
                  type="button"
                  id="ShowSaladImage"
                  name="ShowSaladImage"
                  style={{ borderRadius: "10px" }}
                  className="btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  Show Image
                </button>
              </div>
              <div className="absolute lg:hidden top-4 right-0 flex flex-col items-center justify-center pr-3 pt-6">
                <button
                  type="button"
                  id="ShowSaladImageMobile"
                  name="ShowSaladImage"
                  style={{ borderRadius: "10px" }}
                  className=" btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  <i className="fa-solid fa-image"></i>
                </button>
              </div>
            </div>
            <div className=" relative mb-1">
              <label className="Interl section-title" for="MainCourseDec">
                Main Course
              </label>
              <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   ">
                <textarea
                  name="MainCourseDec"
                  type="text"
                  className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-7/12  p-3"
                  placeholder="Description:"
                  data-val="true"
                  data-val-required=" this field is required."
                  id="MainCourseDec"
                ></textarea>
              </div>
              <span
                className=" Interl font-medium text-red-600 text-[10px] md:text-[12px] h-[27.5px] field-validation-valid"
                data-valmsg-for="MainCourseDec"
                data-valmsg-replace="true"
              ></span>
              <div className="absolute top-4 end-12 md:end-32 flex flex-col items-center justify-center rtl:pl-3 ltr:pr-3 pt-6">
                <label
                  for="MainCourseImage"
                  style={{ borderRadius: "10px" }}
                  className="MainCourseImageLable lg:block p-2.5 leading-3 bg-[#242424] text-xsm  Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  Choose Image
                </label>
                <label
                  for="MainCourseImage"
                  name="MainCourseImage"
                  style={{ borderRadius: "10px" }}
                  className="MainCourseImageLable lg:hidden p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  <i className="fa-solid fa-upload"></i>
                </label>
                <input
                  id="MainCourseImage"
                  type="file"
                  name="MainCourseImage"
                  style={{ display: "none" }}
                />
              </div>
              <div className="absolute lg:block top-4 end-2 md:end-2 flex flex-col items-center justify-center ltr:pr-3 rtl:pl-3 pt-6">
                <button
                  type="button"
                  id="ShowMainCourseImage"
                  name="AmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className="btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  Show Image
                </button>
              </div>
              <div className="absolute lg:hidden top-4 ltr:right-0 rtl:left-0 flex flex-col items-center justify-center pr-3 pt-6">
                <button
                  type="button"
                  id="ShowMainCourseImageMobile"
                  name="AmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className=" btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  <i className="fa-solid fa-image"></i>
                </button>
              </div>
            </div>
            <div className=" relative mb-1">
              <label className="Interl section-title" for="DessertDec">
                Dessert
              </label>
              <div className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-full   ">
                <textarea
                  name="DessertDec"
                  type="text"
                  className="Interl focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none opacity-70 h-[66px] border border-[#FFFFFF4D] bg-[#444444] form-control w-7/12  p-3"
                  placeholder="Description:"
                  data-val="true"
                  data-val-required=" this field is required."
                  id="DessertDec"
                ></textarea>
              </div>
              <span
                className=" Interl font-medium text-red-600 text-[10px] md:text-[12px] h-[27.5px] field-validation-valid"
                data-valmsg-for="DessertDec"
                data-valmsg-replace="true"
              ></span>
              <div className="absolute top-4 end-12 md:end-32 flex flex-col items-center justify-center rtl:pl-3 ltr:pr-3 pt-6">
                <label
                  for="DessertImage"
                  style={{ borderRadius: "10px" }}
                  className="DessertImageLable lg:block p-2.5 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color"
                >
                  Choose Image
                </label>
                <label
                  for="DessertImage"
                  name="DessertImage"
                  style={{ borderRadius: "10px" }}
                  className="DessertImageLable lg:hidden p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none hover:bg-main-color "
                >
                  <i className="fa-solid fa-upload"></i>
                </label>
                <input
                  id="DessertImage"
                  type="file"
                  name="DessertImage"
                  style={{ display: "none" }}
                  accept="image/*"
                />
              </div>
              <div className="absolute lg:block top-4 end-2 md:end-2  flex flex-col items-center justify-center ltr:pr-3 rtl:pl-3 pt-6">
                <button
                  type="button"
                  id="ShowDessertImage"
                  name="AmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className="btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  Show Image
                </button>
              </div>
              <div className="absolute lg:hidden top-4 right-0 flex flex-col items-center justify-center pr-3 pt-6">
                <button
                  type="button"
                  id="ShowDessertImageMobile"
                  name="AmuseBoucheImage"
                  style={{ borderRadius: "10px" }}
                  className=" btn-show-image hover:bg-main-color p-2 leading-3 bg-[#242424] text-xsm Interl font-medium w-33 h-8  text-white  rounded-md flex items-center justify-center focus:outline-none"
                >
                  <i className="fa-solid fa-image"></i>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="Interl  bg-[#6555FF] rounded-[35px]  w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
              >
                Upload
              </button>
            </div>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8BmpMWMegWxPg_GeZvX_LPgxSvDsAp-tN_4RnPnyuPlhFapT2hK2UagUo8eG_DZH4ei_IWO4K_iVpu-9L0NjqWjWUNuhdEBtB3SY3Bo1EHVIVC3DU32r3se1PkWyxdL2Dp1zBYBl-xGbnUNm727tWCCXm04eEGxiadnKbxsEFRrIXjf2bVAvB6ayOrUN1GHJYA"
            />
          </form>
        </section>
        {/* 
        <section className="w-5/12 hidden lg:flex items-center border-l border-main-color">
          <img
            id="mainImage"
            src="/Newassets/dish.png"
            className="w-[38rem] h-5/6 "
            alt="FoodImage"
          />

          <div
            id="selectbox"
            className="flex flex-col justify-center items-center space-y-5 bg-[#1F1F1F] m-5 p-2 "
          >
            <button
              type="button"
              id="close"
              className=" rounded-[9px] w-[30px] hover:bg-[#E40000] text-white self-end my-2 mx-5"
            >
              <i className="text-2xl fa-solid fa-xmark"></i>
            </button>
            <img
              id="selected-image"
              src="/Menu/38575bda-6118-41c1-848f-10688bc743b2.png"
              className="w-[30rem] h-4/6 "
              alt="FoodImage"
            />
            <button
              type="button"
              id="clear"
              className="text-white bg-[#E40000] h-[55px] w-1/3 rounded-[15px] drop-shadow-md shadow-[#E40000] hover:bg-transparent hover:border-4 hover:border-[#E40000] hover:text-[#E40000] font-medium	 "
            >
              Remove Image
            </button>
          </div>
        </section> */}
        {/* <div
          id="selectBoxMobile"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <div className="w-[22rem] h-3/4 flex flex-col  space-y-2 items-center justify-center ">
            <button
              type="button"
              id="closeMobile"
              className=" rounded-[9px] w-[30px] hover:bg-[#E40000] text-white self-end m-5"
            >
              <i className="text-2xl fa-solid fa-xmark"></i>
            </button>
            <img
              id="selected-imageMobile"
              src="/Menu/38575bda-6118-41c1-848f-10688bc743b2.png"
              className="w-[20rem] h-4/6 "
              alt="FoodImage"
            />
            <button
              type="button"
              id="clearMobile"
              className="text-white bg-[#6555FF] rounded-[35px] font-medium w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#E40000] hover:bg-transparent hover:border-4 hover:border-[#E40000] hover:text-[#E40000]"
            >
              Remove Image
            </button>
          </div>
        </div> */}
        <div
          id="spinner"
          style={{ display: "none" }}
          className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
        </div>
      </main>
    </div>
  );
}

// function ChooseImageButton() {
//   return <button>Choose Image</button>;
// }

// function ShowImageButton() {
//   return <button>Show Image</button>;
// }

export default CreateMenuPage;
