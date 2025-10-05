import CountUp from "../animations/Couter";

export default function Stat() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-extrabold text-orange-500">
              <CountUp
                from={0}
                to={500}
                separator=","
                className="text-5xl"
                direction="up"
                duration={2.3}
              />+
            </h2>
            <p className="text-gray-400 tracking-wider text-sm mt-1">MEMBERS</p>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-orange-500">
                <CountUp
                from={0}
                to={70}
                separator=","
                className="text-5xl"
                direction="up"
                duration={2.3}
              />+
            </h2>
            <p className="text-gray-400 tracking-wider text-sm mt-1">
              WORKOUTS
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-orange-500">
                <CountUp
                from={0}
                to={98}
                separator=","
                className="text-5xl"
                direction="up"
                duration={2.3}
              />%</h2>
            <p className="text-gray-400 tracking-wider text-sm mt-1">
              SUCCESS RATE
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-orange-500">24/7</h2>
            <p className="text-gray-400 tracking-wider text-sm mt-1">SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
