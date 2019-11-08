import React from "react";

const PersonCard = (props) => {
    return (
        <div className="card-cont">
            <h2>{props.name}</h2>
                <div>
                    {/* <p>Species: {props.species}</p> */}
                    <p>Gender: {props.gender}</p>
                    {/* <p>Homeworld: {props.homeworld}</p> */}
                    <p>Year of Birth: {props.birthYear}</p>
                    <p>Height: {props.height}cm</p>
                    <p>Weight: {props.mass}kg</p>
                    <p>Hair Color: {props.hairColor}</p>
                    <p>Eye Color: {props.eyeColor}</p>
                    <p>Skin Color: {props.skinColor}</p>
                    {/* <p>Starships: {props.starships}</p>
                    <p>Vehicles: {props.vehicles}</p>
                    <p>Films: {props.films}</p> */}
            </div>
        </div>
    )
}

export default PersonCard;