import axiosInstance from "../utils/axiosInstance";
import Form from "../utils/form";

const signupFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Phone Number", name: "phone", type: "text" },
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
    <div className="flex justify-center items-center rounded-2xl m-[1%] bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600 p-4">
      <div className="w-[50%]  bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-xl font-extrabold text-center text-amber-500 mb-6">
  Your Journey on <span className="text-pink-500 text-2xl">Zing</span> Begins Now!
  <br />
  <span className="text-gray-700 text-base font-medium">
    Register to Find Your Spark <span className="text-red-500">❤️</span>
  </span>
</h1>
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
