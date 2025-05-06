import Form from "../utils/form";

const loginFields = [
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const Login = () => {
  const handleLogin = (data) => {
    console.log("Login form submitted:", data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="w-full max-w-[600px] rounded-xl p-8 bg-gradient-to-r from-red-300 to-red-500">
        <h1 className="text-white text-2xl font-bold mb-6">Log In</h1>
        <Form 
          fields={loginFields} 
          onSubmit={handleLogin} 
          buttonText="Log In" 
          successMessage="Login Successful!" // Custom success message
        />
      </div>
    </div>
  );
};

export default Login;
