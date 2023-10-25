import React from "react";

export default function Project(props) {
    return (
        <>
        <div>
            <img src={`${props.img}`} alt={`${props.name}`} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div >
            <a className="icon-link icon-link-hover" href={`${props.github}`}>GitHub
            <svg className="bi" aria-hidden="true">
                <use xlinkHref="#arrow-right"></use></svg></a>
            <a href={`${props.deployed}`}>Go to deployed app
            <svg className="bi" aria-hidden="true">
                <use xlinkHref="#arrow-right"></use></svg></a>
                
            </div>
        </div>
        </>
    )
}