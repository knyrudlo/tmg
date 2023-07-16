import ReactSelect, { components } from "react-select";

import { useState, useEffect } from "react";

import "./Select.scss";
import { ReactComponent as SelectArrow } from "../../assets/images/select-arrow.svg";

const Select = ({ options, value, handleChange, id, label }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const optionsFormatted = options.map((o) => ({ value: o, label: o.name }));

  useEffect(() => {
    setIsActive(!!value);
  }, [value]);

  return (
    <div className="select-groupe">
      <label
        className={`select-groupe__label ${
          isActive || isOpened ? "select-groupe__label_active" : ""
        } `}
        htmlFor={id}
      >
        {label}
      </label>
      <ReactSelect
        components={{ DropdownIndicator }}
        unstyled
        placeholder=""
        defaultValue={value}
        onChange={handleChange}
        options={optionsFormatted}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "#6CEEC7" : "#ffffff",
          }),
          dropdownIndicator: (baseStyles, state) => ({
            transform: `rotate(${isOpened ? 180 : 0}deg)`,
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            background: "#FFFFFF",
          }),
        }}
        classNames={{
          control: (state) =>
            isOpened
              ? "select-groupe__select select-groupe__select_active"
              : `select-groupe__select ${
                  isActive ? "select-groupe__select_active" : ""
                }`,
          input: () => "select-groupe__input",
          dropdownIndicator: () => "select-groupe__select-arrow",
          placeholder: () => "select-groupe__placeholder",
          menuList: () => "select-groupe__menu-list",
          option: () => "select-groupe__option",
        }}
        onMenuOpen={() => {
          setIsOpened(true);
        }}
        onMenuClose={() => {
          setIsOpened(false);
        }}
      />
    </div>
  );
};

// https://github.com/JedWatson/react-select/issues/3493
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrow />
    </components.DropdownIndicator>
  );
};
export default Select;
