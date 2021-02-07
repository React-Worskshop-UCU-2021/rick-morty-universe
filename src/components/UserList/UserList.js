import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import { getCharacters } from '../../api';
import Pagination from '../../components/Pagination';

import './UserList.scss';

const UserList = ({ gender, status, name }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [characters, setCharacters] = useState();

    const loadCharacters = async (page = 0, params) => {
        setIsLoading(true);
        const items = await getCharacters(page + 1, params);
        setIsLoading(false);
        if (items.error) {
            console.log(items.error);
        } else {
            setCharacters(items?.results);
            setPages(items?.info?.pages || 0);
        }
    };

    useEffect(() => {
        loadCharacters(currentPage, {
            ...(name && { name }),
            ...(gender && { gender }),
            ...(status && { status }),
        });
    }, [name, gender, status, currentPage]);

    useEffect(() => {
        setCurrentPage(0);
    }, [name, gender, status]);

    const renderCharacter = (character) => (
        <Card key={character.id} {...character} />
    );

    return (
        <div className="UserList">
            <div className="UserList__cardList">
                {characters?.map(renderCharacter)}
            </div>
            <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

UserList.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['alive', 'dead', 'unknown', '']).isRequired,
    gender: PropTypes.oneOf(['male', 'female', 'unknown', 'genderless', ''])
        .isRequired,
};

export default UserList;
