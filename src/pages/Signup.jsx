import { useNavigate } from "react-router-dom";
import Form from "../utils/form";
import { Link } from "react-router-dom";

const signupFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Phone Number", name: "phone", type: "text" },
];

const Signup = () => {
  const navigate = useNavigate();  // Get the navigate function from useNavigate

  const handleSignup = async (data) => {
    try {
      // Add your signup API call logic here
      const response = await axiosInstance.post("/api/auth/signup", data);
      console.log("Signup Successful:", response.data);

      // Store the token or any other necessary info
      localStorage.setItem("token", response.data.token);

      // Redirect to the homepage after successful signup
      navigate("/");  // This redirects to the Home page

    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message || error.message);
      // Show an error message to the user
    }
  };

  return (
    <div className="flex justify-center mt-[1%] rounded-2xl items-center h-screen bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 opacity-100 transition-opacity duration-500">
        <h1 className="text-xl font-extrabold text-center text-amber-500 mb-6">
          Your Journey on <span className="text-pink-500 text-2xl">Zing</span> Begins Now!
        </h1>

        <Form fields={signupFields} buttonText="Sign Up" onSubmit={handleSignup} />

        <div className="mt-6 text-center text-gray-700">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
              Log In Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
