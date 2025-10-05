import { Features } from "tailwindcss";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { animate } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutDialog from "../Sections/Dialogbox";

export default function PricingSection() {

  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      name: "Essential",
      price: "₹199",
      period: "/month",
      description: "Perfect for Begineers",
      features: [
        "24/7 gym access",
        "All cardio & strength equipment",
        "Locker room access",
        "Mobile app access",
      ],
      buttonText: "Get Started",
      popular: false,
      animation: "slide-in-left",
    },
    {
      name: "Elite",
      price: "₹599",
      period: "/month",
      features: [
        "Everything in Essential",
        "Group fitness classes",
        "Nutrition consultation",
        "Guest passes (2/month)",
        "Recover zone access",
      ],
      buttonText: "Go with Elite",
      popular: true,
      animation: "fade-in",
    },
    {
      name: "Champion",
      price: "₹999",
      period: "/month",
      description: "Ultimate performance package",
      features: [
        "Everything in Elite",
        "Personal training (4 sessions)",
        "Body composition analysis",
        "Priority class booking",
        "Unlimited guest passes",
      ],
      buttonText: "Be Champion",
      popular: false,
      animation: "slide-in-right",
    },
  ];
  return (
    <section id="membership" className="bg-gradient-to-b from-black to-[#0d1425] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollAnimation animationType="fade-in">
          <h2 className="text-5xl header md:text-7xl font-bold text-white">
            Choose Your <span className="text-orange-500">Path</span>
          </h2>
          <p className="text-gray-400 extra mt-2">
            Flexible membership options designed to fit your lifestyle and
            training goals.
          </p>
        </ScrollAnimation>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <ScrollAnimation key={plan.name} animationType={plan.animation}>
              <div
                key={plan.name}
                className={`relative rounded-xl hover:border-orange-500 bg-[#0f172a] p-8 shadow-lg border flex flex-col justify-between ${
                  plan.popular
                    ? "border-orange-500 min-h-[550px]"
                    : "border-gray-800 min-h-[510px]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <h3 className="text-2xl header md:text-3xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-3xl extra font-bold text-orange-500 mt-2">
                    {plan.price}
                    <span className="text-base extra font-normal text-gray-400">
                      {plan.period}
                    </span>
                  </p>
                  <p className="text-gray-400 mt-2 extra">{plan.description}</p>
                  <ul className="text-gray-300 mt-6 space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center extra gap-2">
                        <span className="text-orange-500">.</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                className={`w-full mt-8 py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.buttonText}
              </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
          {selectedPlan && (
          <CheckoutDialog
            plan={selectedPlan}
            onClose={() => setSelectedPlan(null)}
            onSuccess={() => {
              setSelectedPlan(null);
              navigate("/member/dashboard"); // redirect after purchase
            }}
          />
        )}
        <p className="text-gray-400 extra text-sm mt-10">
          All memberships include a 7-day free trial. No commitment required.
        </p>
        <p className="text-gray-500 text-xs extra mt-2">
          Cancel anytime. Student and military discounts available.
        </p>
      </div>
    </section>
  );
}
