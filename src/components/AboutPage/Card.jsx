import React from 'react';
import { membersInfo } from './Members';

export default function Card({ step }) {
  //index into object, grab one info
  const { name, graphic, instrument, bio } = membersInfo[step];

  return (
    <div className="card-content">
      <div className="graphic-container">
        <img src={graphic} className="graphic" alt={`${name}-about_page`} />
      </div>
      <div className="bio-text">
        <h1 className="name-text">{name}</h1>
        {instrument && <h4 className="instrument-text">{instrument}</h4>}
        {bio}
      </div>
    </div>
  );
}
