import './Search.scss';

const Search = ({ className  }) => {
    // Search App_headerSearch
    // Search App_heroSearch

    return  <div className={`Search ${className}`}>
                <input className="Search__input" placeholder="search by name"></input>
                <button className="Search__button">Find Character</button>
            </div>
} 

export default Search;