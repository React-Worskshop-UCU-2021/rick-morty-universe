import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { useState, useEffect } from 'react';

import Search from '../Search';
import Select from '../Select';

import './Hero.scss';

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

export default Hero;
