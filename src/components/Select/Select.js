import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Arrow } from '../../assets/icons/chevron-down.svg';

import './Select.scss';

const Select = ({ label, value, handleSelect, options }) => {
    const [isOpened, setIsOpened] = useState(false);
    const handleIsOpened = () => setIsOpened(!isOpened);

    const renderOption = (option) => (
        <li
            key={option.value}
            value={option.value}
            className="Select__option"
            // TODO: no arrow functions in render/return, use currying
            onClick={() => onOptionClick(option)}
        >
            {option.label}
        </li>
    );

    const onOptionClick = (option) => {
        handleSelect(option.value);
        setIsOpened(false);
    };

    const selectedOption = options?.find((option) => option.value === value);

    return (
        <div className="Select">
            <div className="Select__selectedOption" onClick={handleIsOpened}>
                <div>
                    <span className="Select__label">{label}: </span>
                    <span className="Select__value">
                        {selectedOption?.label}
                    </span>
                </div>
                <Arrow />
            </div>
            {isOpened && (
                <ul className="Select__options">
                    {options?.map(renderOption)}
                </ul>
            )}
        </div>
    );
};

Select.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};

export default Select;
