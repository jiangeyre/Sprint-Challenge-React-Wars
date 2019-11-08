import React, {useState, useEffect} from "react";
import axios from "axios";

// const randomSearches = [ "Luke", "Kylo Ren", "Darth Maul", "Leia", "Male"];

function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        axios.get("https://swapi.co/api/people/").then((response) => {
            const dataFetched = (response.data.results);
            // const dataFetchedArr = Object.entries(dataFetched);
            const dataFetchedKeyArr = Object.keys(dataFetched);
            const dataFetchedValueArr = Object.values(dataFetched);
            const keymatchresults = dataFetchedKeyArr.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
            const valuematchresults = dataFetchedValueArr.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(keymatchresults, valuematchresults);
        }).catch((error) => {
            console.log(`There is an ${error}.`);
        })
    }, [searchTerm])

    return (
        <div className="searchbar">
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            <ul>
                {searchResults.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    );

}

export default Search;