import React from "react";

export default function Project(props) {
    return (
        <>
        <div className="mb-5">
            <img src={`${props.img}`} alt={`${props.name}`} className="img-fluid rounded-4"/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div >
            <a className="btn btn-xl btn-outline-light mx-1" href={`${props.github}`}>GitHub</a>
            <a className="btn btn-xl btn-outline-light mx-1" href={`${props.deployed}`}>Go to deployed app</a>
           </div>
        </div>
        </>
    )
}