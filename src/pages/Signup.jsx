import axiosInstance from "../utils/axiosInstance";
import Form from "../utils/form";

const signupFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Phone Number", name: "phone", type: "text" } // ✅ FIXED
  ];

const Signup = () => {
    const handleSignup = async (data) => {
        try {
          const response = await axiosInstance.post("/api/auth/signup", data);
          console.log(response.data); 
        } catch (error) {
          console.error(error.response?.data?.message || "Error during signup");
        }
      };
      

  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="w-full max-w-[600px] rounded-xl p-8 bg-gradient-to-r from-red-300 to-red-500">
        <h1 className="text-white text-2xl font-bold mb-6">Sign Up</h1>
        <Form 
          fields={signupFields} 
          onSubmit={handleSignup} 
          buttonText="Sign Up" 
          successMessage="Signup Successful!" 
        />
      </div>
    </div>
  );
};

export default Signup;
