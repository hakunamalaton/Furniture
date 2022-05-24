import React from "react";

const SearchBar = () => {
    return (
        <div>
            <form className="form-inline my-1 justify-content-end">
                <input
                    className="form-control mr-sm-2 w-100"
                    type="search"
                    placeholder="Search ..."
                    aria-label="Search"
                />
                <button
                    className="btn bg-light text-dark my-2 my-sm-0 position-absolute mr-sm-2"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
