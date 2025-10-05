import { ScrollAnimation } from "../animations/ScrollAnimation";

export default function EquipmentSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#0d1425] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-9 items-center">
        <ScrollAnimation animationType="slide-in-left">
        <div>
          <h2 className="text-5xl header md:text-7xl font-bold text-white leading-tight">
            Elite Equipment.
            <br />
            <span className="text-orange-500">Unmatched Atmosphere</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg extra text-justify leading-relaxed">
            State-of-the-art equipment from industry leaders. Every machine
            calibrated for precision, every weight plate engineered for
            performance. This is where champions are forged.
          </p>
          <ul className="mt-6 space-y-3 text-gray-300 extra">
            <li className="flex items-center">
                <span className="h-2 w-2 bg-orange-500 rounded-full mr-3"></span>
                Olympic-grade barbells and plates
            </li>
            <li className="flex items-center">
                <span className="h-2 w-2 bg-orange-500 mr-3 rounded-full"></span>
                Commerical-grade cardio equipment
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full mr-3"></span>
              Functional training zones
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 bg-orange-500 rounded-full mr-3"></span>
              Recovery and mobility areas
            </li>
          </ul>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animationType="slide-in-right">
        <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzrpGyZimDGQ5dYSjEdfFCXa2N_y8hyUoTA&s" alt="Gym" className="w-full h-full object-cover" />
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
