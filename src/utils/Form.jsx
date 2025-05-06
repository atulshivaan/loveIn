import { useState } from "react";

const Form = ({ fields, buttonText, onSubmit, successMessage }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show loading spinner

    try {
      await onSubmit(formData);
      setLoading(false);  // Hide loading spinner after submission
    } catch (error) {
      setLoading(false);  // Hide loading spinner if error occurs
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <label className="block text-sm font-semibold">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border rounded-xl focus:ring-2 focus:ring-pink-500"
          />
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}  // Disable button while loading
          className={`w-full py-3 mt-4 bg-pink-500 text-white rounded-xl transition duration-300 transform ${loading ? 'cursor-wait opacity-50' : 'hover:opacity-80'}`}
        >
          {loading ? "Loading..." : buttonText}
        </button>
      </div>
    </form>
  );
};

export default Form;
