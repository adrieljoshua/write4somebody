import React, { useState } from 'react';

const SearchBox = ({ setSearchValue }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchValue(inputValue);
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search name"
                className="w-3/4 p-4 text-lg border mt-10 text-primary bg-secondary border-primary-dark focus:outline-none focus:ring-0 focus:text-primary rounded-lg"
            />
            <button 
                onClick={handleSearchClick}
                className="bg-primary text-secondary border-primary border-2 hover:bg-secondary hover:border-primary hover:text-primary  w-32 p-4 rounded-lg mt-10">
                Search
            </button>
        </>
    );
};

export default SearchBox;
