import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Form from "../utils/form";
import { Link } from "react-router-dom";

const loginFields = [
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const Login = () => {
  const navigate = useNavigate();  // Get the navigate function from useNavigate

  const handleLogin = async (data) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", data);
      console.log("Login Successful:", response.data);

      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the homepage after login
      navigate("/");  // This redirects to the Home page

    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      // Show an error message to the user
    }
  };

  return (
    <div className="flex justify-center mt-[1%] rounded-2xl items-center h-screen bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl border-2 border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Welcome Back to <span className="text-pink-500">Zing</span> ❤️
        </h1>
        <h2 className="text-xl text-gray-700 text-center mb-8">Log in to continue your journey of love</h2>

        <Form 
          fields={loginFields} 
          onSubmit={handleLogin} 
          buttonText="Log In"
          successMessage="Login Successful!" 
        />
        
        <div className="mt-6 text-center text-gray-700">
          <p>Don&apos;t have an account? <Link to="/register" className="text-indigo-600 font-semibold hover:text-indigo-800">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
