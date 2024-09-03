import { ArrowRight } from "@phosphor-icons/react";

const projects = [
  {
    image:
      "https://demo.sandamedia.net/sotech/wp-content/uploads/2023/09/portfolio-4-450x600.webp",
    title: "Warranty Management",
    subTitle: "Seo Marketing",
  },
  {
    image:
      "https://demo.sandamedia.net/sotech/wp-content/uploads/2024/05/image-16-450x600.webp",
    title: "Internal Networking",
    subTitle: "Home making",
  },
  {
    image:
      "https://demo.sandamedia.net/sotech/wp-content/uploads/2023/11/service-single-image1-450x600.webp",
    title: "Property Simplified",
    subTitle: "Home making",
  },
  {
    image:
      "https://demo.sandamedia.net/sotech/wp-content/uploads/2023/09/project-10-450x600.webp",
    title: "Data Management",
    subTitle: "Home making",
  },
];

function Projects() {
  return (
    <>
      {/* i will change the color of the text to this color #336AEA */}
      <div className="flex mb-4 justify-center mt-24">
        <div className="flex items-center space-x-4">
          <h3 className="uppercase text-lg text-[#336AEA]">
            Recently completed work
          </h3>
          <div className="border-t-2 border-[#336AEA] w-12"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-16 mb-8 lg:max-w-7xl lg:mx-auto">
        <div className="flex flex-col space-y-6 mb-4 basis-1/2">
          <h4 className="font-bold text-5xl text-center leading-normal lg:leading-tight lg:text-start">
            Improve & Enhance the Business Projects
          </h4>
        </div>
        <div className="basis-1/2">
          <p className="text-center lg:text-start">
            Modern consumers heavily rely on digital platforms to research
            products before making purchasing decisions. Studies show that 51%
            of consumers use Google to research brands.
          </p>
        </div>
      </div>
      <ul className="flex flex-col justify-center lg:flex-row px-16 lg:space-x-4 space-y-6 lg:space-y-0">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-[#336AEA] opacity-50 rounded-xl z-20"></div>
            <img
              src={project.image}
              className="group-hover:scale-110 transition-all duration-300 ease-in w-full"
            />
            <div className="absolute bottom-4 left-4 group-hover:text-white text-white z-30">
              <h4 className="font-bold text-xl">{project.title}</h4>
              <p>{project.subTitle}</p>
            </div>
            <div className="hidden absolute top-6 right-6 -translate-y-6 group-hover:block group-hover:translate-y-6 transition-all delay-1000 duration-1000 ease-out z-20 group-hover:animate-rotate360">
              <div className="w-14 h-14 rounded-full border-2 border-white flex justify-center items-center ">
                <ArrowRight
                  size={24}
                  color="white"
                  weight="bold"
                  // className="hover:-rotate-45 duration-300 ease-in"
                />
              </div>
            </div>
            <div className="absolute left-0 right-0 top-0 h-0 group-hover:h-full transition-all duration-300 ease-in  bg-[#336AEA]"></div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Projects;
