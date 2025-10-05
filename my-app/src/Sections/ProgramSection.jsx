import { animations } from "framer-motion";
import { ScrollAnimation } from "../animations/ScrollAnimation";

export default function ProgarmSection() {
  const programs = [
    {
      title: "Strength Training",
      description:
        "Build raw power with compound movements and progressive overload",
      image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/12/muscular-man-lifting-barbell.jpeg?quality=82&strip=1",
      animation: "slide-in-left",
    },
    {
      title: "HIIT Training",
      description:
        "Maximize fat burn and cardiovascular fitness with intense intervals",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl79WKww9Eg7IoMiIZR9vve8VyzP2JlYmAvHb9kjUGIpQuPTlggkkV3rXrxn4OZfD2uZs&usqp=CAU",
      animation: "fade-in",
    },
    {
      title: "Personal Training",
      description:
        "One-to-one coaching with certified trainers for optimal results.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfcBT56CJCcZWgUJ1wbOV6XvtqayKF3LMaQ&s",
      animation: "slide-in-right",
    },
  ];
  return (
    <section className="bg-black py-25">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <ScrollAnimation className="fade-in">
          <h2 className="text-5xl header md:text-7xl font-bold text-white">
            Programs Designed that gives{" "}
            <span className="text-orange-500">Result</span>
          </h2>
          <p className="mt-3 extra text-gray-400">
            Personalized workout plans crafted to help you achieve peak
            performance
          </p>
        </ScrollAnimation>
      </div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 p-4">
        {programs.map((program, index) => {
          return (
            <ScrollAnimation animationType={program.animation} key={index}>
              <div className="bg-[#0a0f1c] rounded-2xl hover:border hover:border-orange-500 overflow-hidden shadow-lg flex flex-col h-ful group">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-3xl text-white header group-hover:text-orange-500 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="mt-2 extra text-gray-400 flex-grow">
                    {program.description}
                  </p>
                  <button className="mt-4 extra border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 rounded transition">
                    Learn more
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
}
