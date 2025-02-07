// import "./styles.css";
// import Navbar from "../../components/Navbar/Navbar";
// import HeaderImg from "../../assets/images/HeaderImg.webp";
// import Footer from "../../components/Footer/Footer";
// import CallToAction from "../../components/CallToAction/CallToAction";
// import ChefImg from "../../assets/images/chef-cooking.webp";
// import Event1Img from "../../assets/images/event1.webp";
// import Event2Img from "../../assets/images/event2.webp";
// import ConnectingImg from "../../assets/images/connecting.webp";
// import OnlinePayment from "../../assets/images/online-payment.webp";
// import ChefTemp from "../../assets/images/chef-temp.png";
// import ChefSlider from "../../components/ChefSlider/ChefSlider";

// function HomePage() {
//   const chefs = [
//     { name: "Ahmed Hassan", location: "Alexandria, Egypt", image: ChefTemp },
//     { name: "Fatima Mahmoud", location: "Giza, Egypt", image: ChefTemp },
//     { name: "Omar Abdelrahman", location: "Luxor, Egypt", image: ChefTemp },
//     { name: "Sara Adel", location: "Aswan, Egypt", image: ChefTemp },
//     { name: "Nour Ebrahim", location: "Hurghada, Egypt", image: ChefTemp },
//     { name: "Layla Mostafa", location: "Mansoura, Egypt", image: ChefTemp },
//     { name: "Hassan Alaa", location: "Port Said, Egypt", image: ChefTemp },
//     { name: "Reem Khalil", location: "Ismailia, Egypt", image: ChefTemp },
//     { name: "Yasser Emam", location: "Cairo, Egypt", image: ChefTemp },
//     { name: "Ahmed Khaled", location: "Alexandria, Egypt", image: ChefTemp },
//     { name: "Magdy Mahmoud", location: "New Cairo, Egypt", image: ChefTemp },
//     { name: "Amgad Yasser", location: "Luxor, Egypt", image: ChefTemp },
//   ];

//   return (
//     <div>
//       <Navbar />

//       {/* Header */}
//       <header className="header">
//         <div className="header-content">
//           <h1>
//             Explore <span className="highlight">top</span> chefs, book
//             <span className="highlight"> personalized</span> dining events, and
//             create <span className="highlight">unforgettable</span> experiences.
//           </h1>
//           <CallToAction title="Get Started" />
//         </div>
//         <img src={HeaderImg} alt="img" className="img" />
//       </header>

//       {/* How It Works Section */}
//       <div className="how-it-works">
//         <h1>How It Works</h1>
//         <div className="container">
//           <div className="card">
//             <img src={Event1Img} alt="img" />
//             <h3>Personalize your events</h3>
//             <p>
//               Share the details like date, time, location, and any special
//               requests to start planning your perfect event.
//             </p>
//             <CallToAction title="Create Event" />
//           </div>
//           <div className="card">
//             <img src={Event2Img} alt="img" />
//             <h3>Choose Your Cuisine</h3>
//             <p>
//               Explore a variety of menus crafted by our top chefs and pick the
//               one that suits your taste.
//             </p>
//             <CallToAction title="Show Menus" />
//           </div>
//           <div className="card">
//             <img src={ConnectingImg} alt="img" />
//             <h3>Connect with Chefs</h3>
//             <p>
//               Chat directly with your chef to customize the menu, finalize
//               details, and agree on the cost.
//             </p>
//             <CallToAction title="Start Chatting" />
//           </div>
//           <div className="card">
//             <img src={OnlinePayment} alt="img" />
//             <h3>Book Your Experience</h3>
//             <p>
//               Once you're satisfied with your chef and menu, confirm your
//               booking by completing a secure payment.
//             </p>
//             <CallToAction title="Book Now" />
//           </div>
//           <div className="card">
//             <img src={ChefImg} alt="img" />
//             <h3>Enjoy</h3>
//             <p>All done! Get ready for an unforgettable experience!</p>
//             <CallToAction title="Create Event" />
//           </div>
//         </div>
//       </div>

//       {/* Chefs Section */}
//       <div className="chefs-section">
//         <h1>
//           Meet our <span className="highlight">Top</span> Chefs
//         </h1>

//         <div className="container">
//           <ChefSlider chefs={chefs} />
//           {/* <MySlider /> */}
//           {/* <MultipleItems /> */}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default HomePage;
