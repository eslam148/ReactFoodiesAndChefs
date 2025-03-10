import CustomePagination from "../CustomePagination/Component";
function ChefOfferTable(chefData){
    const handleSendInviteToChef = () => {
        console.log("Send Invite to Chef");
      };
    

    return (
         <div className="w-full">
          <table className="w-full rounded-[5px] overflow-hidden">
          <thead className="bg-[#D89D7240]  rounded-t-[5px]">
              <tr className="grid md:grid-cols-5 grid-cols-5 gap-2 md:gap-1 my-5 text-center">
                <th className="md:text-[22px] text-[0.5rem] w-full mx-3 md:text-start text-start">
                Chefs offers
                </th>

                <th className="md:text-xl text-[0.5rem]">Cost / Guest</th>
                <th className="md:text-xl text-[0.5rem]">Chat Now</th>
                <th className="md:text-xl text-[0.5rem] col-span-2 md:col-span-1">
                  Social links
                </th>
                <th className="md:text-xl text-[0.5rem]">Offer Status</th>
               
              </tr>
            </thead>
            <tbody className="bg-[#D9D9D926]">
           
            </tbody>

            <tfoot className="bg-[#D9D9D926] rounded-b-[5px]">
              <tr>
                <td colSpan="7">
                 <CustomePagination></CustomePagination>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
    )
}
export default ChefOfferTable;


// {chefs.map((chef, ind) => (
//     <tr
//       key={ind}
//       className="grid md:grid-cols-5 grid-cols-6 gap-2 md:gap-2 my-5 text-center"
//     >
//       <td className="text-start md:text-start md:text-[22px] mx-3 font-semibold text-[0.5rem] w-full">
//         <a href={`/chef/${chef.id}`} className="text-main-color">
//           {chef.firstName} {chef.lastName}  
//         </a>
//       </td>
//       <td className="md:text-[22px] text-[0.5rem] font-semibold text-center ">
//       {chef.facebookAccount ?(
//         `${chef.country}, ${chef.city}`
//       ):(" ")}
      
//       </td>

//       <td className="md:text-[22px] text-[0.5rem] font-semibold col-span-2 md:col-span-1">
//         <div className="flex rounded-[10px]  p-1 md:p-3 px-2 justify-center items-center w-9/12 m-auto border border-[#949494] bg-[#222222]">
//           {chef.facebookAccount ? (
//             <a href={chef.facebookAccount}>
//               <img
//                 className="w-1/2 m-auto"
//                 src={FacebookImg}
//                 alt="Facebook"
//               />
//             </a>
//           ) : (
//             <div>
//               <img
//                 className="w-1/2 m-auto"
//                 src={DisFacebookImg}
//                 alt="Facebook"
//               />
//             </div>
//           )}

//           {chef.instagramAccount ? (
//             <a href={chef.instagramAccount}>
//               <img
//                 className="w-1/2 m-auto"
//                 src={InstagramImg}
//                 alt="Instagram"
//               />
//             </a>
//           ) : (
//             <div>
//               <img
//                 className="w-1/2 m-auto"
//                 src={DisInstagramImg}
//                 alt="Instagram"
//               />
//             </div>
//           )}

//           {chef.xAccount ? (
//             <a href={chef.xAccount}>
//               <img className="w-1/2 m-auto" src={XImg} alt="X" />
//             </a>
//           ) : (
//             <div>
//               <img className="w-1/2 m-auto" src={DisXImg} alt="X" />
//             </div>
//           )}
//         </div>
//       </td>

//       <td className="flex justify-end md:justify-center ">
//         <button
//           className="block text-white bg-[#6555FF] w-[45px] md:w-[113px] h-[16px] md:h-[36px] md:text-xl text-[0.5rem] text-center font-medium rounded-[15px] border-[3px] border-[#6555FF] drop-shadow-md shadow-[#6555FF]"
//           onClick={handleSendInviteToChef}
//         >
//           Send
//         </button>
//       </td>
//       <td
//         className="flex justify-center cursor-pointer"
//         onClick={handleFavoriteClick}
//       >
//         <i
//           id="fav-Icone"
//           className={`text-main-color fa-heart md:text-3xl ${
//             chef.isFavorite ? "fas" : "far"
//           }`}
//         ></i>
//       </td>
//     </tr>
//   ))}