function FourImagesGroup({ img1, img2, img3, img4, className }) {
  return (
    <div
      className={`relative flex flex-wrap justify-center items-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 ${className}`}
    >
      {/* Top Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
        <img src={img1} alt="Image1" className="w-full h-full object-cover" />
      </div>

      {/* Left Image */}
      <div className="absolute top-1/2 left-0 transform translate-x-2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
        <img src={img2} alt="Image2" className="w-full h-full object-cover" />
      </div>

      {/* Right Image */}
      <div className="absolute top-1/2 right-0 transform -translate-x-2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
        <img src={img3} alt="Image3" className="w-full h-full object-cover" />
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
        <img src={img4} alt="Image4" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default FourImagesGroup;
