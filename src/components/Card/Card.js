import './Card.scss';
import Photo from '../../assets/icons/image.svg';
import Tag from '../Tag';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className="Card">
            <div className="Card__imageHolder"> </div>
            <Link to="/character">
                <img src={Photo} />
            </Link>
            <div className="Card__content">
                <Link to="/character">
                    <h4 className="Card__name">Lucy</h4>
                </Link>
                <div className="Card__tags">
                    <Tag />
                </div>
            </div>
        </div>
    );
};

export default Card;
