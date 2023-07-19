import React from "react";
import { membersInfo } from "./Members"

export default function Card(props) {
    //index into object, grab one info
    const {name, graphic, bio} = membersInfo[props.step];

    return(
        <div className="card">
            <div className="graphic">{graphic}</div>
            <div className="name">{name}</div>
            <div className="bio-text">{bio}</div>
        </div>
    )
}

