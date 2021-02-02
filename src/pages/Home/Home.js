import './Home.scss';

import Select from '../../components/Select';
import Search from '../../components/Search';
import Header from '../../components/Header';
import Card from '../../components/Card';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

function Home() {
    return (
        <div className="Home">
            <h1 className="Home__header">
                <span>surf the</span>
                <Logo className="Home__logo" />
                <span>universe</span>
            </h1>
            <Search />
            {/* <Search className="App__heroSearch"/> */}

            <div className="Home__filters">
                <Select />
                <Select />
            </div>

            <div className="Home__resultContainer">
                <div className="Home__cardList">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Home;
