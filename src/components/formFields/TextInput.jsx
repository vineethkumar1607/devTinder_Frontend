import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;

  return (
    <div className="form-control w-full">
      <label htmlFor={id} className="label">
        <span className="label-text">
          {label}
          {props.required && <span className="text-error"> *</span>}
        </span>
      </label>

      <input
        id={id}
        {...field}
        {...props}
        className={`input input-bordered w-full ${showError ? 'input-error' : ''}`}
      />

      {/* Always render the span, but show error only when it exists */}
      <span className="mt-1 text-sm text-error min-h-[1rem] block">
        {showError ? meta.error : '\u00A0'}
      </span>
    </div>
  );
};


TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default TextInput;