import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

// const randomSearches = [ "Luke", "Kylo Ren", "Darth Maul", "Leia", "Male"];

const Searchbar = styled.div`
    width: 10%;
`;


function Search(){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        axios.get("https://swapi.co/api/people/").then((response) => {
            const dataFetched = (response.data.results);
            //console.log(dataFetched);

            const birth =  dataFetched.map(item => item.birth_year);
            const eye = dataFetched.map(item => item.eye_color);
            const gender = dataFetched.map(item => item.gender);
            const hair = dataFetched.map(item => item.hair_color);
            const height = dataFetched.map(item => item.height);
            const mass = dataFetched.map(item => item.mass);
            const name = dataFetched.map(item => item.name);
            const skin = dataFetched.map(item => item.skin_color);

            //console.log(birth, eye, gender, hair, height, mass, name, skin);

            const new1 = birth.concat(eye);
            const new2 = new1.concat(gender);
            const new3 = new2.concat(hair);
            const new4 = new3.concat(height);
            const new5 = new4.concat(mass);
            const new6 = new5.concat(name);
            const alldata = new6.concat(skin);

            //console.log(alldata);

            const matchresults = alldata.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
            setSearchResults(matchresults);
        }).catch((error) => {
            console.log(`There is an ${error}.`);
        })
    }, [searchTerm])

    return (
        <Searchbar>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            <ul>
                {searchResults.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </Searchbar>
    );

}

export default Search;