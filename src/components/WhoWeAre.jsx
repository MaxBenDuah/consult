import { CheckCircle, Medal } from "@phosphor-icons/react";

function WhoWeAre() {
  return (
    <div className="flex flex-col lg:flex-row space-x-8 px-16 items-center space-y-8 lg:space-y-0 bg-[url('/decoration-star.svg')] bg-no-repeat">
      <div className="basis-1/2 relative">
        <div className="flex flex-col justify-center space-y-6">
          <div className="md:flex md:justify-center overflow-hidden">
            <img
              src="https://demo.sandamedia.net/sotech/wp-content/uploads/2024/05/image-banner-home11.webp"
              className="w-full md:w-3/4 rounded-xl hover:scale-110 transition-all duration-300 ease-in"
            />
          </div>
          <div className="md:absolute md:top-12 md:right-[-8rem] lg:left-[20rem] xl:left-[45rem] border border-[#336AEA] rounded-lg md:border-none xl:hidden">
            <img
              src="https://demo.sandamedia.net/sotech/wp-content/uploads/2024/05/image-banner-home12.webp"
              className="w-full md:w-3/4 lg:w-[12rem] xl:w-[22rem]"
            />
          </div>
          <div className="md:absolute px-8 py-3 bg-[#336AEA] text-white rounded-xl md:bottom-10 md:-left-1 flex items-center gap-3">
            <Medal size={42} color="white" weight="fill" />
            <div className="space-y-2 flex gap-4 md:flex-col md:gap-0">
              <h5 className="text-3xl font-bold text-center">30+</h5>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 self-center">
        <div className="flex space-x-4 justify-center lg:justify-start items-center mb-4">
          {/* i will change the color of the text to this color #336AEA */}
          <h3 className="uppercase text-lg text-[#336AEA]">Who we are</h3>
          <div className="border-t-2 border-[#336AEA] w-12"></div>
        </div>
        <div className="space-y-10">
          <h4 className="text-2xl lg:text-5xl sm:text-3xl font-extrabold text-wrap text-center lg:text-start lg:leading-snug">
            We provide best design Solution in town
          </h4>
          <p className="text-wrap text-base text-center lg:text-start leading-snug">
            System is a term used to refer to an organized collection symbols
            and processes that may be used to operate on such symbols.
            Perspiciatis omnis natus error voupems accusa
          </p>

          {/* Once you change the background the check mark should change to white */}
          {/* <CheckCircle size={28} weight="fill" color="#336AEA" /> */}
          <div className=" flex justify-center lg:justify-start">
            <div className="space-y-4">
              <div className="flex space-x-4 items-center">
                {/* <div className="w-8 h-8 bg-[#336AEA] rounded-full flex justify-center items-center space-x-3">
                <Check size={16} color="white" weight="bold" />
              </div> */}
                <CheckCircle size={32} color="#336AEA" weight="fill" />
                <p className="text-xl font-bold">
                  Deliver Perfect Solution for business
                </p>
              </div>
              <div className="flex space-x-4 items-center">
                {/* <div className="w-8 h-8 bg-[#336AEA] rounded-full flex justify-center items-center space-x-3">
                <Check size={16} color="white" weight="bold" />
              </div> */}
                <CheckCircle size={32} color="#336AEA" weight="fill" />
                <p className="text-xl font-bold">
                  Readily Work With Global Brands solutions.
                </p>
              </div>
              <div className="flex space-x-4 items-center">
                {/* <div className="w-8 h-8 bg-[#336AEA] rounded-full flex justify-center items-center space-x-3">
                <Check size={16} color="white" weight="bold" />
              </div> */}
                <CheckCircle size={32} color="#336AEA" weight="fill" />
                <p className="text-xl font-bold">
                  Residential Business Installation.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-start">
            <button className="uppercase font-medium text-xl py-3 px-8 bg-[#336AEA] hover:bg-[#3965ca] transition-all duration-100 ease-in text-white rounded-xl">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
