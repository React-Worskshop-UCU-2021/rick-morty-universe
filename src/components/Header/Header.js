import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                {/*TODO: If you have empty tag, you can write it <Logo />*/}
                <Logo className="Header__logo"></Logo>
            </Link>
            <Search className="Header__search" />
        </div>
    );
};

export default Header;
