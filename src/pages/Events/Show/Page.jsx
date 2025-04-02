/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/Spinner/Component";
import "./styles.css";
import { getEventByEventIdService,SetMySelf ,AddHostprice,getChefOfferByEventIdService} from "../../../services/events/events";
import checkSignIn from "../../../utils/checkSignIn";
import { GetChefsService } from "../../../services/Chef/Chef";
import ChefList from "../../../components/ChefList/Component";
import ChefOfferTable from "../../../components/Table/ChefOffersTable";
import InvitationTable from "../../../components/Table/invitationTable";
import { getMyMenu } from "../../../services/menus/menus";
import ProfileTempImg from  "../../../assets/images/profileTemp.webp"  

function ShowEventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [chefs, setChefs] = useState([]);
  const[invitation,setInvitation]=useState([]);
  const [chefOffers,setChefOffers]=useState([]);
  const [copied, setCopied] = useState(false);
  const [myMenu, setMyMenu] = useState([]);
  const [isFree, setIsFree] = useState(false);
  const [UserData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const updateEvent = async (eventId) => {
    const res = await getEventByEventIdService(eventId);

    if (res && res.success) {
    

      setEvent(res.data);
      console.log(res.data,event);
    }
  };
  const ChefOfferByEventId = async (eventId) => {
    const res = await getChefOfferByEventIdService(eventId);

    if (res && res.success) {
    

      setChefOffers(res.data);
      console.log(res.data,"//////////////");
    }
  };
  useEffect(() => {
    checkSignIn();
   const user=  localStorage.getItem("user")
   setUserData(user)
   ChefOfferByEventId(eventId)
  },[eventId]);
  useEffect(() => {
    const getMeue = async () => {
      const res = await getMyMenu();
      console.log(res);
      if(res){
        setMyMenu(res.data);
      }
     
      
    }
    getMeue();
  },[])
  useEffect(() => {
    const getChefs = async () => {
      const res = await GetChefsService();
      
      console.log(res.data);


        setChefs(res.data);
      
    }
    getChefs();
   

     

    updateEvent(eventId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // Simulate API call
      setIsLoading(false);
    }, 2000);
  }, []);
  
  const handleCopyClick = async () => {
    try {
      const inviteLink = `${window.location.origin}/showRequest/${eventId}`;

      await navigator.clipboard.writeText(inviteLink);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleCopyClickInv = async () => {
    try {
      const inviteLink = `${window.location.origin}/showRequest/${eventId}`;

      await navigator.clipboard.writeText(inviteLink);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const AddPrice = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Get form data
    const price = isFree ? 0 : formData.get("price"); // If free, set price to 0
    const currency = isFree ? "" : formData.get("HostCurrancy"); // If free, remove currency

  const data = {
    price,
    currency,
    id: eventId,
  };

  console.log("Submitting:", data);
  AddHostprice(data) .then(response => {
    setEvent(prev => ({
      ...prev, 
      price: data.price // تحديث `price`
    }));
     
  })
  .catch(error => console.error("Error setting self as chef:", error));
  
  }

  const useMyMenu = (e) => {
    e.preventDefault();  
    const formData = new FormData(e.target); 
    const formValues = Object.fromEntries(formData.entries());

    const { MenuId, EventId } = formValues;

    if (!MenuId || !EventId) {
       
        return;
    }
    

   ;
    // Call SetMySelf with extracted values
    SetMySelf(MenuId, EventId)
        .then(response => {
          updateEvent(eventId)
        })
        .catch(error => console.error("Error setting self as chef:", error));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  
  return (
    <main
      className="min-h-[80dvh] md:flex md:gap-10 mt-0 p-0 fade-in"
      id="main-show-event"
    >
      <section className="min-h-screen  md:space-y-14 space-y-5 md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
      <div className="bg-[#000001] md:w-12/12 w-full flex flex-col plus-jakarta-sans text-[13px] md:text-[23px] p-8 space-y-5 rounded-[5px]">
      <h2 className="text-center font-bold text-white text-[25px]"> {event?.eventName}</h2>

      <div className="flex text-main-color text-[28px] font-semibold">
        Event details
      </div>

      <div className="flex items-center gap-2 text-white">
        <svg width="27" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6496 24.8967C19.6886 24.8967 24.5842 20.0011 24.5842 13.962C24.5842 7.92296 19.6886 3.02734 13.6496 3.02734C7.61051 3.02734 2.71489 7.92296 2.71489 13.962C2.71489 20.0011 7.61051 24.8967 13.6496 24.8967Z" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.6493 9.58789V13.9618" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.6493 18.3359H13.661" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>{event?.eventDescription}</span>
      </div>

      <div className="flex items-center gap-2 text-white">
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_10731_17267)">
          <path d="M23.491 11.39C23.491 19.0443 13.6498 25.6051 13.6498 25.6051C13.6498 25.6051 3.80861 19.0443 3.80861 11.39C3.80861 8.77998 4.84545 6.27683 6.69103 4.43125C8.53661 2.58567 11.0398 1.54883 13.6498 1.54883C16.2599 1.54883 18.763 2.58567 20.6086 4.43125C22.4542 6.27683 23.491 8.77998 23.491 11.39Z" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.6496 14.6702C15.4613 14.6702 16.93 13.2015 16.93 11.3898C16.93 9.57806 15.4613 8.10938 13.6496 8.10938C11.8378 8.10938 10.3692 9.57806 10.3692 11.3898C10.3692 13.2015 11.8378 14.6702 13.6496 14.6702Z" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_10731_17267">
          <rect width="26.2432" height="26.2432" fill="white" transform="translate(0.527878 0.455078)"/>
          </clipPath>
          </defs>
        </svg>

        <span>{event?.generalLocation}</span>
      </div>

      <div className="flex items-center gap-2 text-white">
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.3973 23.4085V21.2215C22.3973 20.0615 21.9365 18.949 21.1162 18.1287C20.296 17.3085 19.1834 16.8477 18.0234 16.8477H9.27569C8.11567 16.8477 7.00316 17.3085 6.1829 18.1287C5.36264 18.949 4.90182 20.0615 4.90182 21.2215V23.4085" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6493 12.4743C16.0649 12.4743 18.0232 10.516 18.0232 8.10043C18.0232 5.68481 16.0649 3.72656 13.6493 3.72656C11.2337 3.72656 9.27544 5.68481 9.27544 8.10043C9.27544 10.516 11.2337 12.4743 13.6493 12.4743Z" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
 
        <span>{event?.minNumberOfInvetation} to {event?.maxNumberOfInvetation} Guests</span>
      </div>

      <div className="flex items-center gap-2 text-white">
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.304 4.43555H5.99547C4.78766 4.43555 3.80853 5.41467 3.80853 6.62248V21.931C3.80853 23.1388 4.78766 24.118 5.99547 24.118H21.304C22.5118 24.118 23.4909 23.1388 23.4909 21.931V6.62248C23.4909 5.41467 22.5118 4.43555 21.304 4.43555Z" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.0236 2.25V6.62387" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.27536 2.25V6.62387" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.80853 10.998H23.4909" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

        <span className="tracking-wide">
          This event will take place on
          <span className="text-main-color ml-1">
            {event.date?.split("T")[0]}
          </span>
        </span>
      </div>

      <div className="flex items-center gap-2 text-white p-2">
        <svg width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6495 24.299C19.6885 24.299 24.5841 19.4034 24.5841 13.3644C24.5841 7.3253 19.6885 2.42969 13.6495 2.42969C7.61043 2.42969 2.71481 7.3253 2.71481 13.3644C2.71481 19.4034 7.61043 24.299 13.6495 24.299Z" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.6492 6.80273V13.3635L18.0231 15.5505" stroke="white" strokeWidth="1.87451" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>
        {" "} From{" "} <span className="text-main-color">{event.startTime?.split("T")[1]?.substring(0, 5)} PM</span>
          {" "} until{" "} <span className="text-main-color">{event.endTime?.split("T")[1]?.substring(0, 5)} PM</span>
        </span>
      </div>
  </div>
    <div className="w-full border-2 border-main-color p-5 rounded-[5px] font-bold flex flex-col">
        <p className="plus-jakarta-sans text-[15px] md:text-[26px] text-center w-full font-bold">
             Options for choosing chef
        </p>

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-5">
            <div className="flex flex-col items-center justify-between w-full md:w-4/12">
                  <i className="fa-solid fa-check text-main-color text-[40px]"></i>
                  <p className="plus-jakarta-sans text-[15px] md:text-[26px] text-center w-full font-bold">
                    Send a culinary request to our chefs
                  </p>
            </div>
            <div className="flex flex-col items-center justify-between w-full md:w-4/12">
                  <i className="fa-solid fa-check text-main-color text-[40px]"></i>
                  <p className="plus-jakarta-sans text-[15px] md:text-[26px] text-center w-full font-bold">
                  Invite chefs who are not listed
                  </p>
            </div>
            <div className="flex flex-col items-center justify-between w-full md:w-4/12 ">
                  <i className="fa-solid fa-check text-main-color text-[40px]"></i>
                  <p className="plus-jakarta-sans text-[15px] md:text-[26px] text-center w-full font-bold">
                      As a skilled chef, you may add one of your own menus to this event
                  </p>
            </div>
        </div>
    </div>
    {event.chef ? (
  <div className="w-full bg-[#D9D9D926] flex flex-col md:flex-row justify-between items-center text-xs md:text-3xl p-6 md:p-10 font-bold border-2 border-main-color rounded-xl">
    {/* Left Section - Text Content */}
    <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2 space-y-10">
      <h2 className="text-xl md:text-3xl text-main-color">
        Chef {event.chef?.firstName} {event.chef?.lastName}
      </h2>
      <p className="text-sm md:text-lg text-white">
        {console.log(event.chef?.description)}
       </p>
      {/* Buttons */}
      <div className="flex gap-4 justify-center w-full">
        <button className="bg-main-color text-white text-sm px-4 py-2 rounded-xl hover:bg-orange-600 transition w-1/3">
          Menu
        </button>
        <a   href={"/chat/"+event.chef?.id} className="bg-main-green-color text-white text-sm px-4 py-2 rounded-xl hover:bg-orange-600 transition w-1/3">
          Chat Now
        </a>
      </div>
    </div>

    {/* Right Section - Image */}
    <div className="w-full md:w-1/2 flex justify-center p-5">
      <img
       src={
        event.chef?.profileImageLink
          ?  event.chef?.profileImageLink.includes("http")
            ?  event.chef?.profileImageLink
            : `${process.env.REACT_APP_API_URL}/${ event.chef?.profileImageLink}`
          : ProfileTempImg
      }
        
        
        alt="Italian Delight"
        className="object-cover rounded-2xl border-2 border-main-color w-full md:w-[300px]"
      />
    </div>
  </div>
) : (
  
  <div className="w-full">
      <div className="h-[3px] bg-main-color mb-8"></div>
        <h2 className="text-center sm:text-4xl md:text-6xl font-bold text-[#FA8836] mb-16 mt-14">
          Chef's Event Menus
        </h2>
    <ChefList></ChefList>
    {/* Copy link Table */}
    <p className="plus-jakarta-sans text-[15px] md:text-[26px] border-t border-main-color w-full text-start pt-5 font-bold my-5 text-center">
      Invite your favorite chef to submit their offer via this link
    </p>
    <div className="relative w-full flex justify-center items-center my-2">
      <div className="border-2 border-[#FA883669] text-center p-0.5 bg-[#73737354] w-full lg:w-3/4 lg:h-16 h-[38px] rounded-[30px] flex justify-between items-center">
        <button
          className="md:mx-7 mx-2 mb-1 md:mb-0 bg-transparent"
          onClick={handleCopyClick}
        >
          <i className="fa-solid fa-link text-[#C9CED6] md:text-[20px] text-[10px]"></i>
        </button>

        <span className="hidden" id="linkToCopy">
          {`You have been invited to submit a culinary proposal for an exclusive venue. Please share your offer via this link:
          ${process.env.REACT_APP_API_URL}/Chef/OrderPage/d11453f6-3629-49b8-8bc7-08dd3fb439ca`}
        </span>

        <span className="lg:py-8 py-0 lg:h-[85px] h-[27px] md:text-[15px] text-[9px] text-[#CFCFCF] font-bold">
          Invite your favorite chefs to submit their culinary proposals
          through this link.
        </span>
        <button
          id="copyLinkButton"
          className="lg:h-[57px] h-[34px] w-[90px] md:w-[164px] bg-main-color text-white lg:p-2 p-0 lg:text-sm text-[0.5rem] font-bold hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent hover:border-[3px] hover:border-main-color hover:text-main-color rounded-[40px]"
          onClick={handleCopyClick}
        >
          {copied ? "Link Copied" : "Copy Link"}
        </button>
      </div>
    </div>
    {UserData.allrole?.some((role) => role.toLowerCase() === "chef") ? (
  // Form to submit menu
  <>
    <p className="plus-jakarta-sans text-[15px] md:text-[26px] border-t border-main-color pt-5 w-full font-bold">
      3- Showcase your talent by adding your own menu.
    </p>
    <form className="flex flex-col items-center justify-center w-full space-x-5 border-b border-main-color pb-5" onSubmit={useMyMenu}>
      <input type="hidden" name="EventId" value={event.eventId} />
      <div className="flex items-center justify-center w-full space-x-5">
        <label htmlFor="Menu" className="text-[0.7rem] md:text-2xl">
          Menu
        </label>
        <select
          id="Menu"
          name="MenuId"
          className="text-xs md:text-xl appearance-none md:w-5/12 w-2/3 px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px] border border-main-color bg-[#444444] form-control p-3 focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
        >
          { myMenu.length > 0 ? (
            myMenu.map((menu, index) => (
              <option key={index} value={menu.id} className="bg-white text-black">
                {menu.menuName}
              </option>
            ))
          ) : (
            <option disabled>No menus available</option>
          )}
        </select>
      </div>
      <div className="plus-jakarta-sans text-[12px] md:text-[20px] w-full text-start pt-5 font-bold">
        Please note:
        <br />
        Adding your own menu will override options 1 and 2.
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#6555FF] rounded-[15px] md:text-[30px] w-[273px] md:w-[390px] h-[42px] md:h-[60px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
        >
          Use My Menu
        </button>
      </div>
    </form>
  </>
) : null}

 
  </div>
)}


 {!event.price && event.price !== 0 && event.chef ? (
 
      <form method ="post" onSubmit={AddPrice}  asp-action="AddPrice" class="bg-[#D9D9D926]   w-full  flex flex-col plus-jakarta-sans p-3 md:p-10 py-6 space-y-12 border border-[#FA8836] rounded-[5px]">
      <div class="flex justify-around w-full space-y-10 md:space-y-0">

          <div class="flex md:flex-row flex-col  justify-between md:items-start items-center space-y-5 md:space-y-0 md:w-2/3">

              <label for="price" class="text-white font-semibold text-[15px] md:text-[27px] ">Shared Cost/Guest</label>
              <div class="flex items-center   justify-center md:w-6/12 w-full">
                

                  
                  <input disabled={isFree}  name="price" id="Price" type="number" min="1" class="   w-1/2 bg-[#D9D9D954] text-white border border-[#C0C0C0] rounded-none h-[35px] md:h-[34px] p-2 md:text-[15px] text-[10px]    focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                  
                  <select  disabled={isFree} name="HostCurrancy" id="currancy" class="md:w-1/2  focus:text-black bg-[#D9D9D954] border border-[#C0C0C0] ltr:border-l-0 rtl:border-r-0  text-white h-[35px] md:h-[34px] md:text-[15px] text-[10px]       p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                      
                    
                  </select>
              </div>
          </div>
        
        
          <div class="flex items-center justify-center gap-2 mr-4 md:w-1/3">
              <input id="forFree" type="checkbox" class="  text-orange-500 h-5 md:w-5 w-3" 
              checked={isFree}
              onChange={() => setIsFree(!isFree)}
              />
              <label for="forFree" class="ml-2 text-white text-[15px] md:text-[27px]"> For Free</label>
          </div>

      </div>
    
      

      <div class="flex justify-center items-center w-full">
          <button type="submit" class="hover:bg-[#CF5600] md:w-[330px] md:h-[57px] w-[130px] h-[27px] bg-[#FA8836] text-white md:p-2 p-0 md:text-3xl text-xs font-bold hover:bg-[#CF5600] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent  hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836] rounded-[40px] 	">AddPrice</button>

      </div>


    </form>
):("")}

{event.price || event.price==0 ?(
  <div className="relative w-full flex justify-center items-center my-2">
  <div className="border-2 border-[#FA883669] text-center p-0.5 bg-[#73737354] w-full lg:w-3/4 lg:h-16 h-[38px] rounded-[30px] flex justify-between items-center">
    <button
      className="md:mx-7 mx-2 mb-1 md:mb-0 bg-transparent"
      onClick={handleCopyClick}
    >
      <i className="fa-solid fa-link text-[#C9CED6] md:text-[20px] text-[10px]"></i>
    </button>

    <span className="hidden" id="linkToCopy">
      {`You have been invited to submit a culinary proposal for an exclusive venue. Please share your offer via this link:
      ${process.env.REACT_APP_API_URL}/Chef/OrderPage/d11453f6-3629-49b8-8bc7-08dd3fb439ca`}
    </span>

    <span className="lg:py-8 py-0 lg:h-[85px] h-[27px] md:text-[15px] text-[9px] text-[#CFCFCF] font-bold">
    Reach out to your favorite chefs and invite them to submit their culinary proposals via this link
    </span>
    <button
      id="copyLinkButton"
      className="lg:h-[57px] h-[34px] w-[90px] md:w-[164px] bg-main-color text-white lg:p-2 p-0 lg:text-sm text-[0.5rem] font-bold hover:bg-main-dark-color border-[3px] border-main-color drop-shadow-md shadow-main-color hover:bg-transparent hover:border-[3px] hover:border-main-color hover:text-main-color rounded-[40px]"
      onClick={handleCopyClick}
    >
      {copied ? "Link Copied" : "Copy Link"}
    </button>
  </div>
</div>
):("")}
        
      {/* <ChefList></ChefList> */}
        
   
        {/* Chefs request Table */}
        <div className="w-full flex justify-center items-center  m-4 font-bold">

        {!event.chef ? (
          chefOffers.length > 0 ? (
                <ChefOfferTable chefData={chefOffers} />
          ) : (
            <p className="text-xs md:text-3xl">
              Your request for a culinary offer has not been accepted by any chef yet.
            </p>
          )
        ) : (
          console.log(event,"sss"),
            invitation.length > 0 ? (
                 <InvitationTable></InvitationTable>
              ) : (
                <p className="text-xs md:text-3xl">
                  Your request for a culinary Invitation has not been accepted by any user yet.
                </p>
              )
               
        )}
       
      </div>


        
      </section>
    </main>
  );
}

export default ShowEventPage;
