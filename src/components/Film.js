import React from "react";

const Film = ({name, url}) => {

    return (
        <>
            <li><a href={url} target="_blank" id="movie">{name}</a></li>
        </>
    )
}

export default Film;