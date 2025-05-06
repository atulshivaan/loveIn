import { Link } from "react-router-dom";


const Navbar = () => {
  return <div className="flex justify-between rounded-xl items-center h-6 mt-[1%] bg-red-300 p-4 text-white">
 <div>
    <h1 className="text-2xl font-bold">LoveIn</h1>
  </div>
  <div className="flex gap-4">
   <Link to={"/register"} className="text-lg font-semibold hover:text-red-600">Signup</Link>
    <Link to={"/login"} className="text-lg font-semibold hover:text-red-600">Login</Link>
 </div>
  </div>;
};

export default Navbar;
