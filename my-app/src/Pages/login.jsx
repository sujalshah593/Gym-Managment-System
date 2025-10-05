import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch Firestore user data
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        if (userData.role === "member") {
          e.preventDefault()
          navigate("/member/dashboard");
        } else if (userData.role === "user") {
          navigate("/#membership");
        } else {
          navigate("/admin/dashboard");
        }
      } else {
        alert("No user data found in Firestore.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white header mb-2">
            Welcome <span className="text-amber-500">Back</span>
          </h1>
          <p className="text-gray-400 extra">
            Sign in to your Warrior Gym account
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-white mb-2 header text-lg block"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 extra py-2 rounded-md bg-black border border-gray-700 text-white focus:border-amber-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-white mb-2 block text-lg header"
              >
                Password
              </label>
              <div className="relative">
              <input
                id="password"
                type={showPassword? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 extra rounded-md bg-black border border-gray-700 text-white focus:border-amber-500 focus:outline-none"
                placeholder="Enter your password"
                required
                />
                <button type="button"  onClick={() => setShowPassword((prev) => !prev)}  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-amber-500">
                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/> }
                </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-400">
                <input type="checkbox" className="mr-2 accent-amber-500" />
                <span className="extra">Remember me</span>
              </label>
              <Link
                to="#"
                className="text-sm text-amber-500 hover:text-amber-400"
              >
                <span className="extra">Forgot password?</span>
              </Link>
            </div>
            <div className="text-white extra">
              For Admin Login: Email : bhumika9682@gmail.com && Pass:bhumi001
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 extra hover:text-white hover:cursor-pointer hover:bg-amber-600 text-black font-semibold py-3 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 extra">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-amber-500 hover:text-amber-400 font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-400 extra hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
      </div>
    </div>
  );
}
