import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-control w-full mb-4">
      <label htmlFor={id } className="label">
        <span className="label-text">
          {label}
          {props.required && <span className="text-error"> *</span>}
        </span>
      </label>
      <input
        id={id}
        {...field}
        {...props}
        className={`input input-bordered w-full ${meta.touched && meta.error ? 'input-error' : ''
          }`}
      />
      {meta.touched && meta.error ? (
        <span className="mt-1 text-sm text-error">{meta.error}</span>
      ) : null}
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