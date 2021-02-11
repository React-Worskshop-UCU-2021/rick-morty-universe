import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { PropTypes } from 'prop-types';

import Search from '../Search';
import Select from '../Select';

import './Hero.scss';

// TODO: reorder imports (absolute first - packages, relative last - your files)
// eslint could auto fix it, but you don't have it ;(

const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
];
const genderOptions = [
    { value: '', label: 'All Genders' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

const Hero = ({
    characterName,
    setCharacterName,
    gender,
    setGender,
    status,
    setStatus,
}) => {
    return (
        <div className="Hero">
            <h1 className="Hero__heading">
                <span>surf the</span>
                <Logo className="Hero__logo" />
                <span>universe</span>
            </h1>
            <Search
                className="Hero__search"
                value={characterName}
                setValue={setCharacterName}
            />
            <div className="Hero__filters">
                <Select
                    label={'Status'}
                    value={status}
                    handleSelect={setStatus}
                    options={statusOptions}
                />
                <Select
                    label={'Gender'}
                    value={gender}
                    handleSelect={setGender}
                    options={genderOptions}
                />
            </div>
        </div>
    );
};

Hero.propTypes = {
    characterName: PropTypes.string.isRequired,
    setCharacterName: PropTypes.func.isRequired,

    gender: PropTypes.string.isRequired,
    setGender: PropTypes.func.isRequired,

    status: PropTypes.string.isRequired,
    setStatus: PropTypes.func.isRequired,
};

export default Hero;
