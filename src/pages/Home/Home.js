import { useState, useCallback } from 'react';
import _ from 'lodash';

import Hero from '../../components/Hero';
import UserList from '../../components/UserList';

import './Home.scss';

function Home() {
    const [name, setName] = useState('');
    const [queryName, setQueryName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    const delayedQuery = useCallback(_.debounce(setQueryName, 1000), [
        setQueryName,
    ]);

    const onNameChange = (value) => {
        setName(value);
        delayedQuery(value);
    };

    return (
        <div className="Home">
            <Hero
                characterName={name}
                setCharacterName={onNameChange}
                gender={gender}
                setGender={setGender}
                status={status}
                setStatus={setStatus}
            />
            <UserList gender={gender} status={status} name={queryName} />
        </div>
    );
}

export default Home;
