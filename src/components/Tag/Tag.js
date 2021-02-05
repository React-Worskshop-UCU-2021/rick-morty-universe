import PropTypes from 'prop-types';

import './Tag.scss';

const Tag = ({ children }) => {
    return <div className="Tag">{children}</div>;
};

Tag.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Tag;
