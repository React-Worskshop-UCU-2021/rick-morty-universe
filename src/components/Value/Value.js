import PropTypes from 'prop-types';

import './Value.scss';

// TODO: implementation here is pretty similar to Label.js
// think about making one reusable component
const Value = ({ value }) => {
    return <p className="Value">{value}</p>;
};

Value.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Value;
