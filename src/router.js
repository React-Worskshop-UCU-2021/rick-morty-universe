import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import DetailedCharacter from './pages/DetailedCharacter';
import Home from './pages/Home';
import DetailedEpisode from './pages/DetailedEpisode';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/search">
                    <Home />
                </Route>
                <Route exact path="*">
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/character/:id">
                                <DetailedCharacter />
                            </Route>
                            <Route exact path="/episode/:id">
                                <DetailedEpisode />
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
