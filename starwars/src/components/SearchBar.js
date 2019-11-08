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
            const matchresults = dataFetched.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(matchresults);
        }).catch((error) => {
            console.log(`There is an {error}.`);
        })
    }, [searchTerm])

    // useEffect(() => {
    //     const dataFetched = axios.get("https://swapi.co/api/people/");

    //     const matchresults = dataFetched.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
    //     setSearchResults(matchresults);
    // }, [searchTerm]);

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