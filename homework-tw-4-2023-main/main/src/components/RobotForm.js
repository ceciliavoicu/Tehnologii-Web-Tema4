import { useState } from "react";

function RobotForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    mass: ""
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const massNumber = Number(formData.mass);
    onAdd({
      name: formData.name,
      type: formData.type,
      mass: massNumber >= 500 ? massNumber : ""
    });
    setFormData({ name: "", type: "", mass: "" }); // Reset form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="type"
        id="type"
        value={formData.type}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="mass"
        id="mass"
        value={formData.mass}
        onChange={handleChange}
      />
      <button type="submit">
        add
      </button>
    </form>
  );
}

export default RobotForm;
