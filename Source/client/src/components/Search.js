import React, { useState } from 'react'
import icons from '../ultis/icons'


const Search = () => {
    const { BiSearchAlt2 } = icons

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div className={`flex justify-center items-center search-button relative  cursor-pointer  px-2 py-1 ${isSearchOpen ? `w-[300px] border border-white bg-[#141414]` : ''}`}>
            <button onClick={toggleSearch} className=" mr-2 ">
                <span >
                    <BiSearchAlt2 size={25} />
                </span>

            </button>
            {isSearchOpen && (
                <input
                    type="text"
                    className="w-full bg-transparent outline-none"
                    placeholder="Phim, diễn viên, thể loại..."
                    value={searchValue}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};


export default Search
