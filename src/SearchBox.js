import React from "react";

const searchBox = ({searchField, searchChange}) => {
    return (
        <input 
            type='search'
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="Search"
            onChange = {searchChange}
        />
    )
}

export default searchBox;