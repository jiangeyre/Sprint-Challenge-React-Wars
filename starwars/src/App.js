import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import './App.css';

import Search from "./components/SearchBar";
import PersonCard from "./components/PersonCard";

const PersonContainer = styled.div`
  margin: 2% 2%;
  display: grid;
  grid-gap: 125px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [person, setPerson] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then((response) => {
      setPerson(response.data.results);
      console.log(response.data.results);
    }).catch((error) => {
      console.log("The data was not returned.", error);
    })
  }, [])

  return (
    <>
    <Search/>
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PersonContainer>
        {
          person.map((char, index) => {
            return (
              <PersonCard
                key={index}
                name={char.name}
                species={char.species}
                gender={char.gender}
                homeworld={char.homeworld}
                birthYear={char.birth_year}
                height={char.height}
                mass={char.mass}
                hairColor={char.hair_color}
                eyeColor={char.eye_color}
                skinColor={char.skin_color}
                starships={char.starships}
                vehicles={char.vehicles}
                films={char.films}
              />
            )
          })
        }
      </PersonContainer>
    </div>
    </>
  );
}

export default App;
