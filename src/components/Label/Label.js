import { PropTypes } from "prop-types";

import "./Label.scss";

const Label = ({ className, label }) => {
    return <p className={`Label ${className}`}>{label}</p>;
};

Label.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
};

export default Label;
