import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";  // For a more engaging icon

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-amber-400 to-amber-600 flex flex-col justify-center items-center text-white">
      
      {/* Hero Section with Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}></div>
      
      {/* Content Section */}
      <div className="relative z-10 text-center max-w-3xl p-8">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Welcome to <span className="text-pink-500">Zing</span>
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Start your journey with Zing. Discover new opportunities, connect with the best, and ignite your spark.
        </p>
        
        {/* Call to Action Button */}
        <Link to="/register">
          <button className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-full text-xl transition duration-300 transform hover:scale-105">
            Join the Journey
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="w-full py-16 bg-white text-black">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Zing?</h2>
          <p className="text-lg text-gray-600">Your gateway to new opportunities, meaningful connections, and a future full of potential.</p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center p-6 bg-amber-100 rounded-xl shadow-lg max-w-xs">
            <FaRocket className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exciting Opportunities</h3>
            <p className="text-center text-gray-700">Find new opportunities that will elevate your career, skills, and life.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-amber-100 rounded-xl shadow-lg max-w-xs">
            <FaRocket className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Connections</h3>
            <p className="text-center text-gray-700">Connect with like-minded individuals who share your passion and vision.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-amber-100 rounded-xl shadow-lg max-w-xs">
            <FaRocket className="text-5xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-center text-gray-700">Our platform is simple, intuitive, and designed for everyone.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-amber-50 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-black font-bold mb-4">What People Are Saying</h2>
        </div>
        <div className="flex justify-center gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md max-w-sm">
            <p className="text-gray-700 mb-4">"Zing helped me connect with incredible opportunities that I never thought were possible. My career has soared thanks to this amazing platform!"</p>
            <p className="text-gray-900 font-semibold">John Doe</p>
            <p className="text-gray-500">Software Engineer</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md max-w-sm">
            <p className="text-gray-700 mb-4">"The connections I've made on Zing are life-changing. It's more than just a platform—it's a community that cares."</p>
            <p className="text-gray-900 font-semibold">Jane Smith</p>
            <p className="text-gray-500">Designer</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
