import {React}  from "react";
const SearchBar = () => {
    function handleClick(e) {
        e.preventDefault()
        console.log(document.getElementById("form-search").value)
        window.location.href = `/menu/${document.getElementById("form-search").value}`
    }
    return (
        <div>
            <form className="form-inline my-1 justify-content-end">
                <input
                    className="form-control mr-sm-2 w-100 rounded-0"
                    type="search"
                    id="form-search"
                    placeholder="Search ..."
                    aria-label="Search"
                />
                <button
                    className="btn btn-primary text-white rounded-0 my-2 my-sm-0 position-absolute mr-sm-2"
                    type="submit"
                    onClick = {(e)=> {handleClick(e)}}
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
