import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import DetailedCharacter from './pages/DetailedCharacter';
import Home from './pages/Home';
import characters from './assets/json/stubCharacters.json';

const Router = () => {
    const constcharactersList = characters.results;
    const getCharacterById = (id) =>
        constcharactersList.find((character) => id === character.id);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/search">
                    <Home characters={constcharactersList} />
                </Route>
                <Route exact path="*">
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/character/:id">
                                <DetailedCharacter
                                    selectCharacter={getCharacterById}
                                />
                            </Route>
                            <Route exact path="*">
                                <Redirect to="/search" />
                            </Route>
                        </Switch>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
