import React from "react";
import { membersInfo } from "./Members"



export default function Card({step}) {
    //index into object, grab one info
    const {name,graphic, bio} = membersInfo[step];

    return(
        <div className="card-content">
            <div>
                <img src={graphic} className="graphic" alt={`${name}-about_page`}/>
            </div>
            <div className="name">{name}</div>
            <div className="bio-text">{bio}</div>
        </div>
    )
}

