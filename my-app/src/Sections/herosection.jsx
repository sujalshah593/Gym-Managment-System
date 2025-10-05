import { ScrollAnimation } from "../animations/ScrollAnimation";
import { Link } from "react-router-dom";

export default function VideoBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/gymvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <ScrollAnimation className="fade-in">
          <h1 className="text-7xl md:text-8xl font-bold header capitalize">
            Strength is
          </h1>
          <h1 className="text-7xl md:text-8xl font-bold header capitalize text-yellow-400">
            Built, Not Given
          </h1>
        </ScrollAnimation>
        <ScrollAnimation className="fade-in">
          <p className="mt-1 extra text-lg md:text-2xl">
            A space forged for warriors. Every rep counts, every set{" "}
            <span className="text-yellow-400">defines you</span>
          </p>
        </ScrollAnimation>
        <ScrollAnimation className="fade-in">
          <div className="mt-5  flex flex-wrap justify-center items-center space-y-4 md:space-y-0  md:space-x-4">
            <Link to="/login">
              <button className="bg-yellow-500 extra px-8 py-2 rounded-lg font-bold text-xl text-black box-border">
                Start the Journey
              </button>
            </Link>

            <button className="border-2 border-white extra px-8 py-2 rounded-lg font-bold text-xl text-white box-border">
              Watch Our Story
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
