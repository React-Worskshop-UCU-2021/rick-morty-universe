import { PropTypes } from 'prop-types';

import './Label.scss';

const Label = ({ label }) => {
    return <p className="Label">{label}</p>;
};

Label.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Label;
