import { useEffect, useState } from "react";
import { auth, db } from "../firebase"; // adjust path as needed
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user info from Firestore on load
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in.");
        navigate("/login");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const snapshot = await getDoc(userRef);
      if (snapshot.exists()) {
        setUserData(snapshot.data());
      } else {
        alert("No user data found.");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleBuyMembership = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        role: "member",
        isActive: true,
        activatedAt: new Date(),
      });

      setUserData((prev) => ({
        ...prev,
        role: "member",
        isActive: true,
        activatedAt: new Date(),
      }));

      alert("Membership activated! You're now a member.");
    } catch (error) {
      console.error("Membership activation failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  if (!userData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">User Dashboard</h2>

        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Role:</strong> {userData.role}</p>
          <p><strong>Membership Type:</strong> {userData.membershipType}</p>
          <p><strong>Fee Package:</strong> {userData.feePackage}</p>
          <p><strong>Status:</strong> {userData.isActive ? "Active" : "Inactive"}</p>
        </div>

        {userData.role === "user" && (
          <button
            onClick={handleBuyMembership}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Buy Membership
          </button>
        )}

        {userData.role === "member" && (
          <p className="text-green-600 text-center font-semibold">
            ✅ You are an active member!
          </p>
        )}

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
