import PropTypes from 'prop-types';

const GenderSelect = ({ id, value, onChange, error }) => {
    const genderOptions = [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
        { value: 'prefer not to say', label: 'Prefer not to say' }
    ];

    return (
        <div className="form-control w-full mb-4">
            <label htmlFor={id} className="label">
                <span className="label-text">Gender</span>
            </label>
            <select
                name="gender"
                id={id}
                value={value}
                onChange={onChange}
                className={`select select-bordered w-full ${error ? 'select-error' : ''}`}
            >
                {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}
                        className="bg-gray-800  text-white ">
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <span className="mt-1 text-sm text-error">{error}</span>
            )}
        </div>
    );
};

GenderSelect.propTypes = {
    id: PropTypes.string.isRequired, 
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default GenderSelect;