import './UserList.scss';
import Card from '../Card';

const UserList = ({ characters }) => {
    const renderCharacter = (character) => (
        <Card key={character.id} {...character} />
    );
    return <div className="UserList">{characters?.map(renderCharacter)}</div>;
};

export default UserList;
