import "./Checkbox.scss";

const Checkbox = () => (
  <div className="checkbox-groupe">
    <input type="checkbox" id="termsCheckbox" className="checkbox-groupe__input" />
    <label htmlFor="termsCheckbox" className="checkbox-groupe__label">
        I agree to the <a href="#" className="checkbox-groupe__link">Terms & Conditions</a>
    </label>
  </div>
);

export default Checkbox;
