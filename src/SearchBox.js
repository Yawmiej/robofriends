import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <input
            type="text"
            placeholder="Search"
            className="pa3 ba b--green bg-lightest-blue"
            onChange = {searchChange}
        />
    )
}

export default SearchBox