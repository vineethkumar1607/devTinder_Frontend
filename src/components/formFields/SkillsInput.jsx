import { useState } from 'react';
import PropTypes from 'prop-types';

const SkillsInput = ({ id, skills = [], setSkills }) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (["Enter", "Tab", ","].includes(e.key)) {
            e.preventDefault();
            const newSkill = inputValue.trim();
            if (newSkill && !skills.includes(newSkill)) {
                setSkills([...skills, newSkill]);
                setInputValue('')
            }
        }
    }

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills)
    }
    return (
        <div className="form-control">
            <label className="label" htmlFor={id}>
                <span className="label-text">Skills</span>
            </label>
            <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
                {skills.map((skill, index) =>
                    <span key={index} className='badge badge-primary'>{skill}
                        <button
                            type='button'
                            onClick={() => handleRemoveSkill(index)}
                            className='text-xs cursor-pointer'
                            aria-label={`remove ${skill}`}
                        >x</button>
                    </span>)}
                <input
                    type="text"
                    id={id}
                    value={inputValue}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type and press Enter"
                    className="flex-1 min-w-[100px] outline-none bg-transparent"
                />
            </div>
        </div >
    );
};


SkillsInput.propTypes = {
    id: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    setSkills: PropTypes.func.isRequired,
};

export default SkillsInput;