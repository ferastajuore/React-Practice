import React from 'react';

const SearchInput = () => {
    return (
        <form className="search">
            <input type="search" placeholder="Search" className="search__input"/>
            <button className="search__button">
                <i className="fas fa-search search__icon"></i>
            </button>
        </form>
    )
}

export default SearchInput;
