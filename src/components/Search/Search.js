import './Search.scss';

const Search = ({ className, value, setValue }) => {
    // Search App_headerSearch
    // Search App_heroSearch
    const handleChange = ({ target: { value } }) => {
        setValue(value);
    };
    return (
        <div className={`Search ${className}`}>
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

export default Search;
