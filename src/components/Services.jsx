import {
  DesktopTower,
  ArrowCircleUpRight,
  ChartLineUp,
  Database,
  Handshake,
} from "@phosphor-icons/react";

function Services() {
  return (
    <>
      <div className="px-16 py-36">
        <div className="flex space-x-4 justify-center items-center mb-4">
          {/* i will change the color of the text to this color #336AEA */}
          <h3 className="uppercase text-lg text-[#336AEA]">What we offering</h3>
          <div className="border-t-2 border-[#336AEA] w-12"></div>
        </div>
        <h4 className="font-extrabold text-4xl text-center mb-12 max-w-xl mx-auto">
          We offer premium services Exclusively for you.
        </h4>

        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
          {/* First */}
          {/* hover:-translate-y-2 */}
          {/* group-hover:-translate-y-2 transition-all duration-300 ease-out */}
          {/* hover:-translate-y-4 transition-all duration-300 ease-out */}
          {/* bg-base */}
          {/* justify-between space-y-6 lg:flex-row  lg:space-x-6  lg:space-y-0 space-x-0 relative */}

          <div
            className="relative card w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] bg-[url('https://techadgroup.com/images/tagwebsite/c10.png')] bg-center bg-contain bg-no-repeat max-w-xl mx-auto lg:max-w-none"
            style={{
              backfaceVisibility: "hidden",
              willChange: "transform",
              perspective: "1500px",
            }}
          >
            <div className="absolute inset-0 bg-[#336AEA] opacity-70 rounded-xl"></div>
            <div className="flex justify-center mt-6">
              <DesktopTower
                size={62}
                color="#336AEA"
                weight="fill"
                className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360 fill-white z-30"
              />
            </div>
            <p className="text-center mt-4 group-hover:text-white z-30 text-white">
              ICT HARDWARE & SOFTWARE SOLUTIONS
            </p>
            <div className="card-body">
              <button
                className="btn glass group-hover:bg-[#336AEA] text-white invisible group-hover:visible"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Read more</span>
                  <span>
                    <ArrowCircleUpRight size={26} color="white" weight="fill" />
                  </span>
                </div>
              </button>
            </div>
            <div className="absolute bg-[#336AEA] bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out -z-10 rounded-xl"></div>
          </div>

          {/* Second */}

          <div
            className="relative card w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] bg-[url('https://techadgroup.com/images/tagwebsite/c8.png')] bg-center bg-contain bg-no-repeat max-w-xl mx-auto lg:max-w-none"
            style={{
              backfaceVisibility: "hidden",
              willChange: "transform",
              perspective: "1500px",
            }}
          >
            <div className="absolute inset-0 bg-[#336AEA] opacity-70 rounded-xl"></div>
            <div className="flex justify-center mt-6">
              <ChartLineUp
                size={62}
                color="#336AEA"
                weight="fill"
                className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360 fill-white z-30"
              />
            </div>
            <p className="text-center mt-4 group-hover:text-white z-30 text-white">
              I.C.T PROJECT MANAGEMENT
            </p>
            <div className="card-body">
              <button
                className="btn glass group-hover:bg-[#336AEA] text-white invisible group-hover:visible"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Read more</span>
                  <span>
                    <ArrowCircleUpRight size={26} color="white" weight="fill" />
                  </span>
                </div>
              </button>
            </div>
            <div className="absolute bg-[#336AEA] bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out -z-10 rounded-xl"></div>
          </div>

          {/* Third */}

          <div
            className="relative card w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] bg-[url('https://techadgroup.com/images/tagwebsite/c18.png')] bg-center bg-contain bg-no-repeat max-w-xl mx-auto lg:max-w-none"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 bg-[#336AEA] opacity-70 rounded-xl"></div>
            <div className="flex justify-center mt-6">
              <Database
                size={62}
                color="#336AEA"
                weight="fill"
                className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360 fill-white z-30"
              />
            </div>
            <p className="text-center mt-4 group-hover:text-white z-30 text-white">
              DATA CENTER DESIGN & CONSULTING
            </p>
            <div className="card-body">
              <button
                className="btn glass group-hover:bg-[#336AEA] text-white invisible group-hover:visible"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Read more</span>
                  <span>
                    <ArrowCircleUpRight size={26} color="white" weight="fill" />
                  </span>
                </div>
              </button>
            </div>
            <div className="absolute bg-[#336AEA] bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out -z-10 rounded-xl"></div>
          </div>

          {/* Fourth */}

          <div
            className="relative card w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] bg-[url('https://techadgroup.com/images/tagwebsite/c12.jpg')] bg-center bg-contain bg-no-repeat max-w-xl mx-auto lg:max-w-none"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 bg-[#336AEA] opacity-70 rounded-xl"></div>
            <div className="flex justify-center mt-6">
              <Handshake
                size={62}
                color="#336AEA"
                weight="fill"
                className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360 fill-white z-30"
              />
            </div>
            <p className="text-center mt-4 group-hover:text-white z-30 text-white">
              TECHNOLOGY BROKERAGE (PARTNERSHIPS)
            </p>
            <div className="card-body">
              <button
                className="btn glass group-hover:bg-[#336AEA] text-white invisible group-hover:visible"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Read more</span>
                  <span>
                    <ArrowCircleUpRight size={26} color="white" weight="fill" />
                  </span>
                </div>
              </button>
            </div>
            <div className="absolute bg-[#336AEA] bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out -z-10 rounded-xl"></div>
          </div>
        </div>
      </div>
      <div
        className="h-96 bg-red-500 relative "
        style={{ backfaceVisibility: "hidden" }}
      >
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="absolute inset-0 bg-[#336AEA] bg-opacity-60 flex justify-center items-center">
          <div className="space-y-14 max-w-xl">
            <p className="text-white text-4xl font-extrabold text-center">
              IT Solutions & Services Right At Your Fingertips
            </p>
            <div className="text-center">
              <button className="uppercase font-medium text-xl py-3 px-8 bg-[#336AEA] hover:bg-[#3965ca] transition-all duration-100 ease-in text-white rounded-xl">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
