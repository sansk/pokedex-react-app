import React from 'react';
import './SearchContainer.css'

const SearchContainer = (props) => {
    return(
        <div className="searchContainer">
            <input type="search" placeholder={props.placeholder} />
            <button type="submit">Go!</button>
        </div>
    );
}

export default SearchContainer;