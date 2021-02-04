import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Tag from '../Tag';

import './Card.scss';

const Card = ({ id, name, image, status, gender }) => {
    return (
        <div className="Card">
            <div className="Card__imageHolder"> </div>
            <Link to={`character/${id}`}>
                <img className="Card__image" src={image} />
            </Link>
            <div className="Card__content">
                <Link to={`character/${id}`}>
                    <h4 className="Card__name">{name}</h4>
                </Link>
                <div className="Card__tags">
                    <Tag className="Card__tag">{status}</Tag>
                    <Tag className="Card__tag">{gender}</Tag>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    // .oneOf(['unknown', 'alive', 'dead']),
    gender: PropTypes.string.isRequired,
    // .oneOf(['male', 'female', 'unknown', 'genderless']),
    location: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    origin: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Card;
