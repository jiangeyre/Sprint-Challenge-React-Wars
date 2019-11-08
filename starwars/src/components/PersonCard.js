import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background: #ba9d79;
    color: white;
    height: 450px;
    border: 3px solid #968e83;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22), inset 0 15px 20px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.8;
`;

const PersonCard = (props) => {
    return (
        <Card>
            <h2>{props.name}</h2>
                <div>
                    {/* <p>Species: {props.species}</p> */}
                    <p>Gender: {props.gender.charAt(0).toUpperCase() + props.gender.slice(1)}</p>
                    {/* <p>Homeworld: {props.homeworld}</p> */}
                    <p>Year of Birth: {props.birthYear}</p>
                    <p>Height: {props.height} cm</p>
                    <p>Weight: {props.mass} kg</p>
                    <p>Hair Color: {props.hairColor}</p>
                    <p>Eye Color: {props.eyeColor}</p>
                    <p>Skin Color: {props.skinColor}</p>
                    {/* <p>Starships: {props.starships}</p>
                    <p>Vehicles: {props.vehicles}</p>
                    <p>Films: {props.films}</p> */}
            </div>
        </Card>
    )
}

export default PersonCard;