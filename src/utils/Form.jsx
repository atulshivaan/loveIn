import { useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Import the axiosInstance
import InputField from "./inputfields";

const Form = ({ fields, onSubmit, buttonText = "Submit", apiEndpoint, successMessage = "Form Submitted!" }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(null); // For handling form errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    if (Object.values(formData).some((value) => !value)) {
      setError("All fields are required!");
      return;
    }
  
    try {
      await onSubmit(formData); // Call parent's onSubmit
      setFormData(fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    }
  };
  

  return (
    <div className="w-full px-8">
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <InputField
            key={field.name}
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <button
          type="submit"
          className="bg-white text-red-500 font-bold py-2 px-4 mt-4 rounded"
        >
          {buttonText}
        </button>
      </form>

      {/* Success Toast */}
      {showToast && (
        <div className="toast-message bg-pink-500 text-white p-2 rounded mt-4">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Form;
