import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser?.uid) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role || null);
        }
      }
    };
    fetchUser();
  }, [currentUser]);

  return (
    <nav className="absolute top-0 left-0 w-full   text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-4xl font-bold text-white header">Warrior</h1>
          </div>
          <div className="hidden md:flex gap-12 text-white/80 font-medium">
            <Link to="/" className="transition  text-lg extra hover:scale-150">
              Home
            </Link>
            <Link
              to="/about"
              className="transition extra text-lg hover:scale-150"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="transition extra hover:scale-150  text-lg"
            >
              Contact
            </Link>
            {role === "member" && (
              <Link
                to="/member/dashboard"
                className="transition extra hover:scale-150  text-lg"
              >
                Dashboard
              </Link>
            )}
            {role === "admin" && (
              <Link
                to="/admin/dashboard"
                className="transition extra hover:scale-150  text-lg"
              >
                Dashboard
              </Link>
            )}
          </div>
          <div className="hidden md:flex gap-4 items-center">
            {!currentUser ? (
              <>
                <Link to="/login">
                  <button className="px-5 py-2 border extra text-[15px] rounded-lg bg-white text-black font-bold hover:scale-110">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-5 py-2 border extra text-[15px] rounded-lg bg-white text-black font-bold hover:scale-110">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                {/* Avatar (fallback to first letter of name if no photoURL) */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white font-bold">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="avatar"
                      className="w-10 h-10 extra rounded-full"
                    />
                  ) : (
                    currentUser.name?.charAt(0).toUpperCase() || "U"
                  )}
                </div>
                <span className="font-semibold extra">
                  {currentUser.name || "User"}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 border extra rounded-2xl bg-white text-black extra hover:scale-110  font-semibold hover:cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black/40 pt-5 shadow-md">
          <Link to="/" className="hover:text-blue-500 block extra">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 block extra">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 block extra">
            Contact
          </Link>
          {role === "member" && (
            <Link
              to="/member/dashboard"
              className="hover:text-blue-500 block extra"
            >
              Dashboard
            </Link>
          )}
          <div className="flex gap-4 pt-3">
            {!currentUser ? (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 border text-white extra rounded-lg bg-blue-600">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 border text-white extra rounded-lg bg-blue-600">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white font-bold">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    currentUser.name?.charAt(0).toUpperCase() || "U"
                  )}
                </div>
                <span className="font-semibold">
                  {currentUser.name || "User"}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 border rounded-lg bg-white text-black"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
