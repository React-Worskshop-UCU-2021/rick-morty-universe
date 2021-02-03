import './Home.scss';

import Hero from '../../components/Hero';
import UserList from '../../components/UserList';

function Home({ characters }) {
    return (
        <div className="Home">
            <Hero />
            <div className="Home__resultContainer">
                <UserList characters={characters} />
            </div>
        </div>
    );
}

export default Home;
