import { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

import Hero from '../../components/Hero';
import UserList from '../../components/UserList';
import { getCharacters } from '../../api';

import './Home.scss';

function Home() {
    const [name, setName] = useState('');
    const [queryName, setQueryName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [characters, setCharacters] = useState();

    const delayedQuery = useCallback(_.debounce(setQueryName, 500), [
        setQueryName,
    ]);

    useEffect(() => {
        loadCharacters({
            ...(queryName && { name: queryName }),
            ...(gender && { gender }),
            ...(status && { status }),
        });
    }, [queryName, gender, status]);

    const loadCharacters = async (params) => {
        const items = await getCharacters(params);
        if (items.error) {
            console.log('Error: ', items.error);
        } else {
            setCharacters(items?.results);
        }
    };

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
            <UserList characters={characters} />
        </div>
    );
}

export default Home;
