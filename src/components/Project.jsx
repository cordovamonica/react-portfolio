import React from "react";

export default function Project(props) {
    return (
        <>
        <div>
            <img src={`${props.img}`} alt={`${props.name}`} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={`${props.github}`}>GitHub</a>
            <a href={`${props.deployed}`}>Go to deployed app</a>
        </div>
        </>
    )
}