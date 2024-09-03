import {
  Target,
  ArrowCircleUpRight,
  SealCheck,
  GearFine,
} from "@phosphor-icons/react";

function Features() {
  return (
    <div className="py-36 px-16">
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-6 space-y-6 lg:space-y-0 relative group-hover">
        {/* First */}
        <div className="card bg-base-100 w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] max-w-xl mx-auto lg:max-w-none">
          <div className="flex justify-center mt-6">
            <Target
              size={62}
              color="#336AEA"
              weight="fill"
              className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360"
            />
          </div>
          <div className="card-body group-hover:text-white">
            <h2 className="card-title text-center justify-center mb-6 text-2xl">
              Analyze
            </h2>
            <div className="flex justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    // className="group-hover:text-white"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Identify Process Scope</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Determine Business Drivers</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Identify Improvement Opportunities</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>GAP Analysis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#336AEA] group-hover:-z-10 rounded-xl bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out"></div>
        </div>

        {/* Second */}

        <div className="card bg-base-100 w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] max-w-xl mx-auto lg:max-w-none">
          <div className="flex justify-center mt-6">
            <SealCheck
              size={62}
              color="#336AEA"
              weight="fill"
              className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360"
            />
          </div>
          <div className="card-body group-hover:text-white">
            <h2 className="card-title text-center justify-center mb-6 text-2xl">
              Select
            </h2>
            <div className="flex justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    // className="group-hover:text-white"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Select Appriopriate Solutions</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Check Scalability</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Assess Against Business Drivers</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>GAP Analysis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#336AEA] group-hover:-z-10 rounded-xl bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out"></div>
        </div>

        {/* Third */}

        <div className="card bg-base-100 w-full shadow-xl hover:-translate-y-4 transition-all duration-300 ease-out group border-t-4 border-[#336AEA] max-w-xl mx-auto lg:max-w-none">
          <div className="flex justify-center mt-6">
            <GearFine
              size={62}
              color="#336AEA"
              weight="fill"
              className="group-hover:fill-white group-hover:stroke-white transition-transform duration-1000 group-hover:animate-rotate360"
            />
          </div>
          <div className="card-body group-hover:text-white">
            <h2 className="card-title text-center justify-center mb-6 text-2xl">
              Implement
            </h2>
            <div className="space-y-4 flex justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    // className="group-hover:text-white"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Create Implementation Model</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Establish Governance Structure</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Manage organizational Change</p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowCircleUpRight
                    size={32}
                    color="#336AEA"
                    weight="fill"
                    className="group-hover:fill-white group-hover:stroke-white group-hover:rotate-45 duration-500 ease-in-out"
                  />
                  <p>Roll Out</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#336AEA] group-hover:-z-10 rounded-xl bottom-0 h-0 group-hover:h-full left-0 right-0 transition-all duration-300 ease-out"></div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 items-center justify-center mt-20 space-x-6">
        <p className="text-lg text-center">
          IT Technology services built specifically for your business.
        </p>
        <button className="py-2 px-8 bg-[#336AEA] text-white uppercase font-semibold text-sm transition-all duration-100 ease-in hover:bg-[#3965ca] rounded-xl">
          Find your solution
        </button>
      </div>
    </div>
  );
}

export default Features;
