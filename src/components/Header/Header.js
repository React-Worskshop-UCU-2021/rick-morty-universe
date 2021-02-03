import './Header.scss';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <Logo className="Header__logo"></Logo>
            </Link>
            <Search className="Header__headerSearch" />
        </div>
    );
};

export default Header;
