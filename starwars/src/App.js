import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import './App.css';

import PersonCard from "./components/PersonCard";

const Header = styled.h1`
  text-shadow: 5px 5px 50px #fff;
  font-size: 5rem;
  font-family: 'ZCOOL XiaoWei', serif;
  margin: 2% 0 2%;

  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #443e3e);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 20s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`;

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
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value)
  }

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then((response) => {
      setPerson(response.data.results);
      //console.log(response.data.results);
    }).catch((error) => {
      console.log("The data was not returned.", error);
    })
  }, [])

  return (
    <>
    <div className="App">
      <Header>React Wars</Header>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <PersonContainer>
        {person.map((char, index) => {
          console.log(char);
          for (var item in char){
            let itemStr = char[item] + "";
            if(itemStr.toLowerCase().includes(search.toLowerCase())){
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
            }else if (search === ""){
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
            }
          }             
          return null;
        })
      }
      </PersonContainer>
    </div>
    </>
  );
}

export default App;
