import { ScrollAnimation } from "../animations/ScrollAnimation";

export default function ReviewSection(){

    const reviews = [
        {
            name: "Rohit Shah",
            role: "Powerlifter",
            text: "I've gained more progress in 6 months here than in 2 years anywhere else. The equipment, the atmosphere, the community – everything is designed for success.",
            image: "",
        },
        {
            name: "Aryan Panchal",
            role: "CrossFit Athlete",
            text: "The personal training here is exceptional. My trainer understands my goals and pushes me to achieve things I never thought possible.",
            image: "",
        }
    ]

    return(
        <section className="bg-black py-20">
            <div className="max-w-5xl mx-auto px-6">
                <ScrollAnimation animationType="fade-in">
                <h2 className="text-5xl header md:text-7xl font-bold text-center text-white mb-16">
                    What Our <span className="text-orange-500">Athletes</span> Say
                </h2>
                </ScrollAnimation>
                <ScrollAnimation animationType="fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((t, index) => (
                        <div key={index} className="bg-[#0a1121] p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition duration-300">
                            <p className="text-gray-200 mb-6 italic leading-relaxed extra">{t.text}</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} />
                            </div>
                            <h4 className="text-white header text-2xl md:text-xl font-semibold">{t.name}</h4>
                            <p className="text-gray-400 text-sm extra">{t.role}</p>
                        </div>
                    ))}
                </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}