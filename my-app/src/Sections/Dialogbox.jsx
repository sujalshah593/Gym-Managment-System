import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CheckoutDialog({ plan, onClose, onSuccess }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleConfirm() {
    if (!currentUser) return;

    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, {
      membershipDetails: {
        plan: plan.name,
        price: plan.price,
        startDate: new Date().toISOString(),
      },
    });

    const revenueRef = collection(db, "revenues");
    await addDoc(revenueRef, {
      userId: currentUser.uid,
      plan: plan.name,
      amount: parseInt(plan.price.replace("₹", "")),
      createdAt: serverTimestamp(),
    })

     navigate("/member/dashboard"); // redirect after success
  }

  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-6 rounded-xl shadow-2xl max-w-md w-full text-white transform transition-all duration-300 scale-100 max-h-[85vh] overflow-y-auto">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold  text-amber-500 header mb-1">Confirm Membership</h2>
          <p className="text-gray-400 text-sm extra">Complete your gym membership purchase</p>
        </div>
        <div className="space-y-3 mb-5">
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <p className="text-sm text-gray-400 header">Member Email</p>
            <p className="text-white extra font-medium text-sm">{currentUser?.email}</p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <p className="text-sm header text-gray-400">Selected Plan</p>
            <p className="text-amber-500 extra font-bold text-lg">{plan.name}</p>
            <p className="text-white extra font-semibold text-sm">
              {plan.price} <span className="text-gray-400">/ {plan.period}</span>
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
            <p className="text-sm header text-gray-400 mb-2">Plan Features</p>
            <ul className="space-y-1 extra">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm">
                  <svg
                    className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 extra py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 extra py-2 hover:text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-amber-500/25 text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
