import React from "react";
import Slider from "react-slick";
import "./styles.css";

function ChefSlider({ chefs }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Default for larger screens
    slidesToScroll: 5, // Default for larger screens
    responsive: [
      {
        breakpoint: 1024, // Tablets and below (1024px)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // Mobile phones and below (768px)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const handleChefClick = (index) => {};

  return (
    <div className="slider-container w-full mx-0">
      <Slider {...settings} className="slider mx-0">
        {chefs.map((chef, index) => (
          <div
            onClick={() => handleChefClick(index)}
            className="chef"
            key={index}
          >
            <img
              src={chef.image}
              alt="chef"
              className="rounded-full"
              loading="lazy"
            />
            <h3>{chef.name}</h3>
            <p>{chef.location}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ChefSlider;
