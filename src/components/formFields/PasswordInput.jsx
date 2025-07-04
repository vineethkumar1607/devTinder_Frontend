
import PropTypes from 'prop-types';

const PasswordInput = ({
    label,
    name,
    type = 'password',
    value,
    onChange,
    error,
    placeholder,
    required = false,
    ...props
}) => (
    <div className="form-control w-full mb-4">
        <label htmlFor={name} className="label">
            <span className="label-text">
                {label}
                {required && <span className="text-error"> *</span>}
            </span>
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            {...props}
        />
        {error && (
            <span id={`${name}-error`} className="mt-1 text-sm text-error">
                {error}
            </span>
        )}
    </div>
);

PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};

export default PasswordInput;