import { useField } from "formik";
import PropTypes from "prop-types";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const showError = meta.touched && meta.error;

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="form-control w-full">
      {label && (
        <label htmlFor={props.id || props.name} className="label">
          <span className="label-text">
            {label}
            {props.required && <span className="text-error"> *</span>}
          </span>
        </label>
      )}

      <div className="relative">
        <input
          id={props.id || props.name}
          {...field}
          {...props}
          type={showPassword ? "text" : "password"}
          className={`input input-bordered w-full ${showError ? "input-error" : ""}`}
        />

        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 z-10 focus:outline-none"
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Reserve space for error whether it exists or not */}
      <span className="mt-1 text-sm text-error min-h-[1.25rem] block">
        {showError ? meta.error : "\u00A0"}
      </span>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default PasswordInput;
