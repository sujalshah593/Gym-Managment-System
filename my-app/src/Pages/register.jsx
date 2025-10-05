import { useState } from "react";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is user
  const [emergencyContact, setEmergencyContact] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Convert "member" to "pending_member" until payment is done
      let finalRole = role;
      if (role === "member") {
        finalRole = "pending_member";
      }

      const userData = {
        uid: user.uid,
        name,
        email,
        role: finalRole,
        emergencyContact,
        medicalConditions,
        phone,
        joinDate: new Date(),
        isActive: finalRole === "member", // only true if actual member
      };

      // Save to users collection
      await setDoc(doc(db, "users", user.uid), userData);

      // Save to members collection only if role is confirmed "member"
      if (finalRole === "member") {
        await setDoc(doc(db, "members", user.uid), userData);
      }

      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error.message);
      alert("Failed: " + error.message);
    }
  };

  return (
 <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleRegister}
        className="bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-800 space-y-6 w-full max-w-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-4xl font-serif font-bold text-white mb-2 header">Join Our Elite Gym</h2>
          <p className="text-gray-400 extra">Create your membership account</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          />

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          />

          <input
            type="text"
            placeholder="Emergency Contact"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            required
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          />
{/* 
          <select
            value={feePackage}
            onChange={(e) => setFeePackage(e.target.value)}
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="half-yearly">Half-Yearly</option>
            <option value="yearly">Yearly</option>
          </select> */}

          {/* <select
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
            className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          >
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select> */}

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <textarea
          placeholder="Medical Conditions"
          value={medicalConditions}
          onChange={(e) => setMedicalConditions(e.target.value)}
          rows={3}
          className="w-full p-4 extra bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
        />

        <button
          type="submit"
          className="w-full extra bg-amber-500 text-black font-semibold p-4 rounded-lg hover:bg-amber-400 transition-colors duration-200 transform hover:scale-[1.02]"
        >
          Register
        </button>

        <div className="text-center pt-4">
          <Link to="/login" className="text-amber-500 extra hover:text-amber-400 transition-colors text-sm">
            Already have an account? Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
