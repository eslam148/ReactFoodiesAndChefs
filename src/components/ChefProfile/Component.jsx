import FacebookIcon from "../../assets/images/facebook.svg";
import XIcon from "../../assets/images/X.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import ProfileTempImg from "../../assets/images/profileTemp.webp";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import isJwtTokenValid from "../../utils/validateToken";
import uploadProfilePicture from "../../services/profile/uploadProfilePicture";
import editProfileService from "../../services/profile/editProfile";
import checkSignIn from "../../utils/checkSignIn";

function ChefProfile({ isEditable, userData, setUserData }) {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [profilePicError, setProfilePicError] = useState("");
  const [preview, setPreview] = useState(
    userData?.profileImageLink
      ? `${process.env.REACT_APP_API_URL}/${userData.profileImageLink}`
      : ProfileTempImg // Replace with a placeholder
  );
  const fileInputRef = useRef(null);

  // check if signed in or not
 

 
 

 

   
const AddToFavorate = () => {}
  return (
    <section className="CreateEventpgMobile min-h-screen mainbg relative md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10">
    
    {/* // <!-- Section 1: Chef Profile --> */}
    <section class="mt-8 mb-16 font-sans">
        <div class="container mx-auto max-w-6xl px-4 text-center rounded-lg">
            <h1 class="text-4xl font-bold mb-4 text-white">chef {userData?.firstName } {userData?.lastName}</h1>
            <p class="text-lg mb-4 text-white"> 
             {userData?.description}
            </p>
               
            
            <div class="w-64 h-64 rounded-lg border-2 border-[#FA8836] overflow-hidden mx-auto">
                <img src={preview} alt="Chef Image" class="w-full h-full object-cover"/>
            </div>
            <div class="mt-4 flex flex-col items-center">
                <div class="flex gap-4">
                    {/* <div class="flex items-center">
                        <i class="fas fa-spoon fa-utensils mr-2 text-[#FA8836]"></i>
                        <p class="text-sm text-white mt-1">Italian, Moroccan, Local</p>
                    </div> */}
                    <div class="flex items-center text-sm text-white mt-2">
                        <i class="fas fa-map-marker-alt mr-1 text-[#FA8836]"></i>
                        <span>{userData?.city}, {userData?.country}</span>
                    </div>
                </div>
                <button class="bg-transparent flex items-center text-white px-3 py-2 focus:outline-none mt-4" onClick={AddToFavorate}>
                    <i class="far fa-heart mr-2 text-[#FA8836]"></i>
                    Add to Favorite
                </button>
                <div class="flex items-center mt-4 gap-2 justify-center">
                    <button
                        class="flex items-center bg-[#FA8836] hover:bg-orange-600 text-white px-3 py-2 rounded-lg focus:outline-none">
                        <i class="fas fa-envelope mr-2"></i>
                        Send Request
                    </button>
                    <button
                        class="flex items-center bg-[#128000] hover:bg-green-800 text-white px-3 py-2 rounded-lg focus:outline-none">
                        <i class="fas fa-comment mr-2"></i>
                        Chat Now
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    
    <section class="hidden lg:block py-8">
        <div class="container mx-auto max-w-6xl px-4">
            <div class="h-[3px] bg-main-color mb-8"></div>
            <h2 class="text-center sm:text-4xl md:text-6xl font-bold text-[#FA8836] mb-16 mt-14">
                Chef's Event Menus
            </h2>
            <div class="flex my-8 xl:justify-start sm:justify-center font-sans">
                <div class="relative flex">
                    <input type="text" class="rounded-lg bg-[#383838CC] py-2 ps-12 w-96 focus:outline-none text-white"
                        placeholder="Search" />
                    <button class="absolute start-1 top-1 text-black w-10 bg-main-color rounded-full  ">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <button className="bg-main-color flex h-11 items-center justify-center ml-4 w-10" >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 12.5L5.5 4.5" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <path d="M19.5 20.5L19.5 18.5" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <path d="M5.5 20.5L5.5 16.5" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <path d="M19.5 12.5L19.5 4.5" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <path d="M12.5 7.5L12.5 4.5" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <path d="M12.5 20.5L12.5 12.5" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <circle cx="5.5" cy="14.5" r="2" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <circle cx="12.5" cy="9.5" r="2" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            <circle cx="19.5" cy="15.5" r="2" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
                            </svg>

                </button>
               
            </div>
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
                <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                    <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <div class="flex items-center mb-2 text-[#FA8836]">
                            {/* <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i> */}
                            <div class="ml-auto flex gap-4">
                                <i class="far fa-paper-plane"></i>
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                        <p class="text-sm text-white">Italian Cuisine</p>
                        <button class="mt-4 bg-[#FA8836] text-white py-2 px-4 rounded hover:bg-orange-600">
                            Send Request
                        </button>
                    </div>
                </div>
                <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                    <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <div class="flex items-center mb-2 text-[#FA8836]">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <div class="ml-auto flex gap-4">
                                <i class="far fa-paper-plane"></i>
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                        <p class="text-sm text-white">Italian Cuisine</p>
                        <button class="mt-4 bg-[#FA8836] text-white py-2 px-4 rounded hover:bg-orange-600">
                            Send Request
                        </button>
                    </div>
                </div>
                <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                    <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <div class="flex items-center mb-2 text-[#FA8836]">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <div class="ml-auto flex gap-4">
                                <i class="far fa-paper-plane"></i>
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                        <p class="text-sm text-white">Italian Cuisine</p>
                        <button class="mt-4 bg-[#FA8836] text-white py-2 px-4 rounded hover:bg-orange-600">
                            Send Request
                        </button>
                    </div>
                </div>
                <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                    <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                    <div class="p-4">
                        <div class="flex items-center mb-2 text-[#FA8836]">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <div class="ml-auto flex gap-4">
                                <i class="far fa-paper-plane"></i>
                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                        <p class="text-sm text-white">Italian Cuisine</p>
                        <button class="mt-4 bg-[#FA8836] text-white py-2 px-4 rounded hover:bg-orange-600">
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Pagination --> */}
            <div class="flex justify-center mt-8">
                <ul class="flex items-center space-x-2">
                    <li>
                        <a href="#"
                            class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#"
                            class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#"
                            class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">3</a>
                    </li>
                    <li>
                        <span class="text-white px-2">...</span>
                    </li>
                    <li>
                        <a href="#"
                            class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">50</a>
                    </li>
                    <li>
                        <a href="#"
                            class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="h-[3px] bg-main-color mb-4 mt-16"></div>
        </div>
    </section>
    
    {/* <!-- Section 2: Chef's Event Menus (Mobile) --> */}
    <section class="block lg:hidden py-8">
        <div class="container mx-auto max-w-6xl px-8">
            <div class="bg-black rounded-xl p-6">
                <h2 class="text-center text-3xl sm:text-4xl font-bold text-[#FA8836] mb-8">
                    Chef's Event Menus
                </h2>
                <div class="flex items-center justify-center gap-4 mb-8 font-sans">
                    <div class="relative">
                        <input type="text"
                            class="rounded-lg bg-[#383838CC] py-2 px-4 w-64 sm:w-80 focus:outline-none text-white"
                            placeholder="Search" />
                        <button class="absolute end-3 top-2 text-main-color bg-transparent">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <img src="./iconfilter.png" alt="iconfilter" class="w-10 h-11" />
                </div>
                <div class="grid grid-cols-2 gap-6 text-white font-sans">
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-sm sm:text-base font-bold">Italian Delight</h3>
                            <p class="text-xs sm:text-sm">Italian Cuisine</p>
                            <button class="mt-3 bg-[#FA8836] text-white py-1 px-3 rounded hover:bg-orange-600 text-sm">
                                Send Request
                            </button>
                        </div>
                    </div>
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-sm sm:text-base font-bold">Italian Delight</h3>
                            <p class="text-xs sm:text-sm">Italian Cuisine</p>
                            <button class="mt-3 bg-[#FA8836] text-white py-1 px-3 rounded hover:bg-orange-600 text-sm">
                                Send Request
                            </button>
                        </div>
                    </div>
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-sm sm:text-base font-bold">Italian Delight</h3>
                            <p class="text-xs sm:text-sm">Italian Cuisine</p>
                            <button class="mt-3 bg-[#FA8836] text-white py-1 px-3 rounded hover:bg-orange-600 text-sm">
                                Send Request
                            </button>
                        </div>
                    </div>
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-40 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-sm sm:text-base font-bold">Italian Delight</h3>
                            <p class="text-xs sm:text-sm">Italian Cuisine</p>
                            <button class="mt-3 bg-[#FA8836] text-white py-1 px-3 rounded hover:bg-orange-600 text-sm">
                                Send Request
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Pagination --> */}
                <div class="flex justify-center mt-8">
                    <ul class="flex items-center space-x-2">
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">3</a>
                        </li>
                        <li>
                            <span class="text-white px-2">...</span>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">50</a>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="h-[3px] bg-orange-600 mb-4 mt-16"></div>
        </div>
    </section>
    {/* <!-- Chef's Gourmet Meals --> */}
    <section class="py-4 px-4 flex justify-center mt-8 mb-8">
        <div class="container mx-auto max-w-6xl px-4">
    
            <div class="bg-black rounded-xl p-6 w-full max-w-6xl">
                <h2 class="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#FA8836] mb-16 ">
                    Chef's Gourmet Meals
                </h2>
    
    
    
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                            <p class="text-sm text-white">Italian Cuisine</p>
                            <div class="mt-4">
                                <button class="bg-[#128000] hover:bg-green-900 text-white px-3 py-1 rounded">
                                    Send Request
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                            <p class="text-sm text-white">Italian Cuisine</p>
                            <div class="mt-4">
                                <button class="bg-[#128000] hover:bg-green-900 text-white px-3 py-1 rounded">
                                    Send Request
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                            <p class="text-sm text-white">Italian Cuisine</p>
                            <div class="mt-4">
                                <button class="bg-[#128000] hover:bg-green-900 text-white px-3 py-1 rounded">
                                    Send Request
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div class="bg-[#383838CC] rounded shadow-lg overflow-hidden">
                        <img src="./reciepimg.png" alt="Italian Delight" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <div class="flex items-center mb-2 text-[#FA8836]">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <div class="ml-auto flex gap-4">
                                    <i class="far fa-paper-plane"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <h3 class="text-lg font-bold text-white">Italian Delight</h3>
                            <p class="text-sm text-white">Italian Cuisine</p>
                            <div class="mt-4">
                                <button class="bg-[#128000] hover:bg-green-900 text-white px-3 py-1 rounded">
                                    Send Request
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* <!--(Pagination) --> */}
                <div class="flex justify-center mt-8">
                    <ul class="flex items-center space-x-2">
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                        </li>
    
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">3</a>
                        </li>
                        <li>
                            <span class="text-white px-2">...</span>
                        </li>
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">50</a>
                        </li>
    
                        <li>
                            <a href="#"
                                class="bg-white text-[#FA8836] px-3 py-1 border border-[#FA8836] rounded hover:bg-[#FA8836] hover:text-white">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="h-[3px] bg-orange-600 mb-4 mt-16"></div>
        </div>
    
    </section>
    
    {/* <!-- Section 3: Chef's forcast (Desktop) --> */}
    <section class="py-8 px-4">
        <div class="container mx-auto max-w-6xl px-4">
            <h2 class="hidden md:block text-center text-5xl  text-[#FA8836] font-bold mb-16">
                Chef's Showcase
              </h2>
        
              <div class="container mx-auto">
                <div class="hidden md:grid grid-rows-5 grid-cols-3 gap-2">
                  <div></div>
                  <div class="bg-[#100F0D] h-24"></div>
                  <div></div>
        
                  <div></div>
                  <div class="bg-[#100F0D] h-24"></div>
                  <div></div>
        
                  <div class="bg-[#100F0D] h-24"></div>
                  <div class="bg-[#100F0D] h-24"></div>
                  <div class="bg-[#100F0D] h-24"></div>
        
                  <div></div>
                  <div class="bg-[#100F0D] h-24"></div>
                  <div></div>
        
                  <div></div>
                  <div class="bg-[#100F0D] h-24"></div>
                  <div></div>
                </div>
        {/* <!--mobile--> */}
                <div class="md:hidden">
                  <div class="bg-black p-8 rounded-xl">
                    <h2 class="text-center text-3xl sm:text-4xl text-[#FA8836] font-bold mb-6">
                        Chef's Showcase
                      </h2>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="bg-[#100F0D] h-32 col-span-2"></div>
                      <div class="bg-[#100F0D] h-32"></div>
                      <div class="bg-[#100F0D] h-32"></div>
                      <div class="bg-[#100F0D] h-32 col-span-2"></div>
                      <div class="bg-[#100F0D] h-32"></div>
                      <div class="bg-[#100F0D] h-32"></div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </section>
    {/* <!-- Footer --> */}
    <footer class="bg-black text-white py-8 px-4 ">
        <div class="container mx-auto max-w-6xl px-4">
            <div class="h-[2px] bg-orange-600 mb-4"></div>
    
            <div class="container mx-auto max-w-3xl text-center">
                <h2 class="text-xl sm:text-2xl font-semibold mt-16 mb-8">
                    Ready to Experience Culinary Excellence?
                </h2>
                <p class="text-sm text-gray-400 mb-16">
                    Sign up to Book a Chef and Save Favorites
                </p>
                <button
                    class="bg-[#FA8836] hover:bg-orange-600 text-white text-lg font-bold py-4 px-32 rounded transition-colors mb-16">
                    Sign Up
                </button>
            </div>
        </div>
    </footer>
    
    </section>
  );
}

export default ChefProfile;
