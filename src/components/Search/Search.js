import { PropTypes } from "prop-types";

import { ReactComponent as LoopImage } from "../../assets/icons/search.svg";

import "./Search.scss";

const Search = ({ className, value, setValue }) => {
    const handleChange = ({ target: { value } }) => {
        setValue(value);
    };

    return (
        <div className={`Search ${className}`}>
            <LoopImage className="Search__loop" />
            {/*TODO: empty tag, collapse it*/}
            <input
                className="Search__input"
                placeholder="search by name"
                value={value}
                onChange={handleChange}
            ></input>
            <button className="Search__button">Find Character</button>
        </div>
    );
};

Search.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
};

export default Search;
