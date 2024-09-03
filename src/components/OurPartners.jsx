const logos = [
  "https://techadgroup.com/images/tagwebsite/p5.png",
  "https://techadgroup.com/images/tagwebsite/p2.png",
  "https://www.abtt.org.uk/wp-content/uploads/2024/03/wasp_logo_hires_black.jpg",
  "https://images.credly.com/images/a2487615-8e9f-407b-9497-8f86451ad1a1/blob.png",
  "https://techadgroup.com/images/tagwebsite/ckrlogo.png",
];

function OurPartners() {
  return (
    <div className="px-16 py-36 bg-[url('/Hexagon-dotted-connect-line-background.jpg')] bg-center bg-no-repeat bg-cover ">
      <div className="flex space-x-4 justify-center items-center mb-4 ">
        {/* i will change the color of the text to this color #336AEA */}
        <h3 className="uppercase text-lg text-center -mt-24 text-[#336AEA] tracking-wider">
          Industries we serve
        </h3>
        <div className="border-t-2 border-[#336AEA] w-12 -mt-24"></div>
      </div>
      <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-40 h-40 group overflow-hidden">
            {/* <!-- Grayscale Logo --> */}
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain filter grayscale"
            />
            {/* <!-- Colored Logo (hidden by default) --> */}
            <img
              src={logo}
              alt={`Colored Logo ${index + 1}`}
              className="absolute bottom-[-100%] w-full h-full object-contain group-hover:bottom-0 transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
