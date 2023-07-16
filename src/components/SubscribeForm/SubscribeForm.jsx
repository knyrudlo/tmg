import Select from "../Select/Select";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

import './SubscribeForm.scss';

import { useState } from "react";

import countries from "../../assets/countries.json";

const SubscribeForm = () => {
  const [currentCountry, setCurrentCountry] = useState();
  const [formState, setFormState] = useState({
    name: "",
    secondName: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const value = e?.value;

    if (!value) return;

    setCurrentCountry(value.name);
    setFormState((prevState) => ({
      ...prevState,
      country: value,
      phone: value.dial_code,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={submitForm} className="subscribe-form">
      <Input
        type="text"
        id="name"
        value={formState.name}
        handleInputChange={handleInputChange}
        label="First Name"
        modifier="name"
      />
      <Input
        type="text"
        id="secondName"
        value={formState.secondName}
        handleInputChange={handleInputChange}
        label="Second Name"
        modifier="second-name"
      />

      <Select
        options={countries}
        id="country"
        value={currentCountry}
        handleChange={handleSelectChange}
        label="Country"
        modifier="country"
      />
      <Input
        type="phone"
        id="phone"
        value={formState.phone}
        handleInputChange={handleInputChange}
        label="Phone"
        modifier="phone"
      />
      <Input
        type="password"
        id="password"
        value={formState.password}
        handleInputChange={handleInputChange}
        label="Password"
        modifier="password"
      />
      <Input
        type="password"
        id="confirmPassword"
        value={formState.confirmPassword}
        handleInputChange={handleInputChange}
        label="Confirm password"
        modifier="confirm-password"
      />
      <Input
        type="email"
        id="email"
        value={formState.email}
        handleInputChange={handleInputChange}
        label="Email"
        modifier="email"
      />
      <Checkbox />
      <button className="button" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SubscribeForm;
