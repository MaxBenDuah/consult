import {
  Envelope,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

function InfoHeader() {
  return (
    <div className="hidden lg:flex justify-between items-center py-4 px-16 bg-slate-950">
      <div className="flex space-x-8">
        <div className="flex space-x-2 cursor-pointer items-center">
          <Envelope color="#336AEA" size={24} />
          <p className="text-white text-sm hover:text-[#336AEA] transition-all duration-300 ease-out">
            needhelp@sotech.com
          </p>
        </div>
        <div className="flex space-x-2 cursor-pointer items-center">
          <MapPin color="#336AEA" size={24} />
          <p className="text-white text-sm hover:text-[#336AEA] transition-all duration-300 ease-out">
            88 Brooklyn Street. New York
          </p>
        </div>
      </div>
      <div className="flex space-x-6 text-white text-sm">
        {/* Fix this styling so that the / have equal spacing */}
        <div className="flex space-x-4 items-center">
          <p className="cursor-pointer space-x-3">
            <span className="hover:text-[#336AEA] transition-all duration-300 ease-out">
              Help
            </span>
            <span className="text-slate-500">/</span>
          </p>
          <p className="cursor-pointer space-x-3">
            <span className="hover:text-[#336AEA] transition-all duration-300 ease-out">
              Support
            </span>
            <span className="text-slate-500">/</span>
          </p>
          <p className="cursor-pointer hover:text-[#336AEA] transition-all duration-300 ease-out">
            Contact
          </p>
        </div>
        <div className="flex space-x-4 items-center">
          <FacebookLogo
            className="cursor-pointer hover:text-[#336AEA] transition-all duration-300 ease-out"
            size={22}
          />
          <InstagramLogo
            className="cursor-pointer hover:text-[#336AEA] transition-all duration-300 ease-out"
            size={22}
          />
          <LinkedinLogo
            className="cursor-pointer hover:text-[#336AEA] transition-all duration-300 ease-out"
            size={22}
          />
          <XLogo
            className="cursor-pointer hover:text-[#336AEA] transition-all duration-300 ease-out"
            size={22}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoHeader;
