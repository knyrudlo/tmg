import { useState, useEffect } from "react";

import "./Input.scss";

const Input = ({ type, id, value, handleInputChange, label, modifier }) => {
  const [isActive, setIsActive] = useState(false);

  
  useEffect(() => {
    if (!value) return;

    setIsActive(true);
  }, [value]);

  const toggleFocus = () => {
    setIsActive(true);
  };

  const toggleBlur = (e) => {
    const value = e.target?.value;
    if (!value) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className={`form-groupe ${modifier ? "form-groupe_" + modifier : ""}`}>
      <label
        className={`form-groupe__label ${
          isActive ? "form-groupe__label_active" : ""
        } `}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="form-groupe__field"
        type={type}
        id={id}
        value={value}
        onChange={handleInputChange}
        onFocus={toggleFocus}
        onBlur={toggleBlur}
      />
    </div>
  );
};
export default Input;
