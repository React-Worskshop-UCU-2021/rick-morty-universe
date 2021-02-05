import PropTypes from 'prop-types';

import './Value.scss';

const Value = ({ value }) => {
    return <p className="Value">{value}</p>;
};

Value.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Value;
