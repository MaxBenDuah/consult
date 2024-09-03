import { Star } from "@phosphor-icons/react";

const carouselLength = [
  "Fisrt",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
];

function Testimonial() {
  return (
    <div className="px-16 py-36">
      <div className="flex space-x-4 justify-center items-center mb-4">
        {/* i will change the color of the text to this color #336AEA */}
        <h3 className="uppercase text-lg text-[#336AEA]">
          Client Testimonials
        </h3>
        <div className="border-t-2 border-[#336AEA] w-12"></div>
      </div>
      <h4 className="font-extrabold text-4xl text-center mb-12 max-w-xl mx-auto">
        Here are some clients Feedbacks
      </h4>

      {/* Carousel */}
      <div className="flex justify-center">
        <div className="carousel carousel-center shadow-xl rounded-box max-w-4xl space-x-4 p-4">
          {carouselLength.map((carousel) => (
            <div key={carousel} className="carousel-item group">
              <div>
                <div className="relative">
                  <div className="flex justify-center bg-[#336AEA] group-hover:bg-white px-8 py-3 rounded-lg mb-8 absolute translate-x-1/4 -translate-y-1/2 space-x-2">
                    <Star size={24} weight="fill" color="orange" />
                    <Star size={24} weight="fill" color="orange" />
                    <Star size={24} weight="fill" color="orange" />
                    <Star size={24} weight="fill" color="orange" />
                    <Star size={24} weight="fill" color="orange" />
                  </div>
                  <p className="text-center p-10 group-hover:bg-[#336AEA] transition-all duration-300 ease-out rounded-lg mt-6 group-hover:text-white">
                    IT Solutions excels with
                    <br /> comprehensive services, user-
                    <br />
                    friendly website, and dedication to
                    <br /> customer satisfaction
                  </p>
                  <p className="bg-[#336AEA] w-8 h-8 absolute left-1/2 -translate-x-1/2 tooltip hidden group-hover:block transition-all duration-300 ease-out"></p>
                </div>
                <div className="flex justify-center mt-10">
                  <div className="block w-16 h-16 rounded-full overflow-hidden group-hover:border-2 group-hover:border-[#336AEA]">
                    <img src="/testimonial-img.webp" className="rounded-box" />
                  </div>
                </div>
                <div className="flex flex-col space-y-2 text-center mt-10">
                  <p>PM Assistant</p>
                  <h5 className="font-bold text-2xl">Esther Howard</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
