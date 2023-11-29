import "./event_page.css"
import church from "../../assets/dc_church.jpg"
import { Link } from "react-router-dom";

export const EventPage = () => {
    return ( 
      <div className="event-page-content">
        <div className="event-image-container">
          <img src={church} className="event-image" alt="event"/>
        </div>
        <div className="event-text">
          <h2 className="event-header">Óró’ Mhór a Mhórín</h2> 
          <p className="sub-header">Songs from Ireland and Scotland</p>

          <p>Sunday, January 7, 2024 | 2:30pm St. Mark’s Episcopal Church 
            <a className="map-link"href="https://www.google.com/maps/place/St+Mark's+Capitol+Hill/@38.8886333,-77.0059307,16z/data=!4m14!1m7!3m6!1s0x89b7b82ef5f9d9ad:0xe10b53b60fe94675!2sSt+Mark's+Capitol+Hill!8m2!3d38.8885086!4d-77.0017451!16s%2Fm%2F06_8bb9!3m5!1s0x89b7b82ef5f9d9ad:0xe10b53b60fe94675!8m2!3d38.8885086!4d-77.0017451!16s%2Fm%2F06_8bb9?entry=ttu" target="_blank" rel="noreferrer">(301 A Street, SE Washington, DC 20003)</a>
          </p>
          

          <p>Magdalena is coming to DC! Join the ensemble in-person on January 7, 2024, at 2:30pm in St. Mark’s Episcopal Church (301 A Street, SE Washington, DC) for “Óró Mhór a Mhóirín: Songs of Ireland and Scotland." Immerse yourself in the unique sonic tapestry of period instruments playing Irish and Scottish tunes, from heart-rending ballads to raucous dances.</p>
          <p>This program features special guest performer Niccolo Seligmann.
          </p>
            <a href="https://www.niccoloseligmann.com/" target="_blank" rel="noreferrer"> 
            Learn more about Niccolo! 
            </a>
            <Link to="../about"> Learn more about us! </Link>
          <p className="donation-text"> Pay what you can; $20 suggested donation per person </p>
        </div>
      </div>);
  };
  