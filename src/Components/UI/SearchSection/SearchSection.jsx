import React, { useState } from 'react';
import classes from './SearchSection.module.css';

const SearchSection = ({ icon, onClick }) => {
    const [searchText, setSearctText] = useState("");
    const onClickHandler = () => {
        onClick(searchText);
    }
    return (
        <div className={classes.searchContainer}>
            <input
                type="text"
                placeholder="Search.."
                name="search"
                id="searchText"
                value={searchText}
                onChange={(e) => {setSearctText(e.target.value)}} />
            <button
                type="submit"
                id="searchButton"
                onClick={onClickHandler}>
                <img src={icon} alt="" width="28px" height="28px"/>
            </button>
        </div>
    );
};

export default SearchSection;