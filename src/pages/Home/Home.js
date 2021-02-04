import { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import UserList from '../../components/UserList';

import { getCharacters } from '../../api';

import './Home.scss';

function Home() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [characters, setCharacters] = useState();

    useEffect(() => {
        loadCharacters({
            ...(name && { name }),
            ...(gender && { gender }),
            ...(status && { status }),
        });
    }, [name, gender, status]);

    const loadCharacters = async (params) => {
        const items = await getCharacters(params);
        if (items.error) {
            console.log('Error: ', items.error);
        } else {
            setCharacters(items?.results);
        }
    };

    return (
        <div className="Home">
            <Hero
                characterName={name}
                setCharacterName={setName}
                gender={gender}
                setGender={setGender}
                status={status}
                setStatus={setStatus}
            />
            <div className="Home__resultContainer">
                <UserList characters={characters} />
            </div>
        </div>
    );
}

export default Home;
