const InputField = ({ label, name, type, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-white mb-1">{label}</label>
    <input
      id={name}
      name={name}             // ✅ Must match field.name
      type={type}
      value={value}           // ✅ Controlled input
      onChange={onChange}     // ✅ Triggers handleChange
      className="w-full p-2 rounded"
    />
  </div>
);

export default InputField;
