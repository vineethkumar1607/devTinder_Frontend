import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="form-control w-full mb-4">
            {label && (
                <label htmlFor={props.id || props.name} className="label">
                    <span className="label-text">
                        {label}
                        {props.required && <span className="text-error"> *</span>}
                    </span>
                </label>
            )}
            <textarea
                {...field}
                {...props}
                className={`textarea textarea-bordered w-full ${meta.touched && meta.error ? 'textarea-error' : ''
                    }`}
                onBlur={(e) => {
                    field.onBlur(e);
                }}
            />
            {meta.touched && meta.error ? (
                <span className="mt-1 text-sm text-error">{meta.error}</span>
            ) : null}
        </div>
    );
};

TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    rows: PropTypes.number,
};

export default TextArea;