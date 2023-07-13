import React from "react"

export default function Movie(props) {
    return(
        <div className="movie">
            <div>
                <h3>Movie: {props.title}</h3>
            </div>
            <div>
                <h3>Director: {props.director}</h3>
            </div>
            <div>
                <h3>Year: {props.year}</h3>
            </div>
            <div>
                <img src={props.image} className="movie--image"/>
            </div>
        </div> 
    )
}