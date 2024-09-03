import { Check } from "@phosphor-icons/react";

function WhyUs() {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto space-y-8 lg:space-y-0 bg-[url('/decoration-star.svg')] bg-no-repeat">
      <div className="flex-1">
        <div className="flex justify-center overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7734593/pexels-photo-7734593.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-2/3 rounded-xl hover:scale-110 transition-all duration-300 ease-in"
          />
        </div>
      </div>
      <div className=" flex-1 self-center">
        <div className="flex justify-center lg:justify-start">
          <div className="flex space-x-4 items-center mb-4">
            {/* i will change the color of the text to this color #336AEA */}
            <h3 className="uppercase text-lg text-[#336AEA]">Why choose us</h3>
            <div className="border-t-2 border-[#336AEA] w-12"></div>
          </div>
        </div>
        <div className="space-y-12">
          <h4 className="font-extrabold text-4xl text-center lg:text-start max-w-xl mx-auto lg:max-w-none">
            Our mission is provide Widespread access.
          </h4>
          <p className="text-center lg:text-start">
            Our passionate professionals craft tailored, high-quality systems to
            meet your unique needs and deliver effective solutions.
          </p>
          <div className="flex justify-center">
            <div className="flex space-x-3">
              <img
                src="https://demo.sandamedia.net/sotech/wp-content/uploads/2024/05/light-1.png"
                className="w-8 h-8"
              />
              <p className="font-semibold text-2xl text-center lg:text-start">
                For Your Specific Industry We Have Smart Idea For Business goal.
              </p>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-start">
            <div className="space-y-4">
              <div className="flex space-x-4 items-center">
                <div className="w-8 h-8 bg-[#336AEA] rounded-full flex justify-center items-center space-x-3">
                  <Check size={16} color="white" weight="bold" />
                </div>
                <p className="text-xl font-bold">
                  Mounting System for Technology Installation
                </p>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="w-8 h-8 bg-[#336AEA] rounded-full flex justify-center items-center space-x-3">
                  <Check size={16} color="white" weight="bold" />
                </div>
                <p className="text-xl font-bold">
                  Making this the first true generator on the Internet
                </p>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="w-8 h-8 bg-[#336AEA] rounded-full flex justify-center items-center space-x-3">
                  <Check size={16} color="white" weight="bold" />
                </div>
                <p className="text-xl font-bold">
                  Various versions have evolved over the years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
