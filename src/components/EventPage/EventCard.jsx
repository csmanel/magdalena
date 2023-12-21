import './event_page.css';
import { Link } from 'react-router-dom';
import { eventInfo } from './Event';

export default function EventCard({ step }) {
  const {
    title,
    subTitle,
    graphic,
    dateTime,
    location,
    locationLink,
    details,
    guestInfo,
    donation,
  } = eventInfo[step];

  return (
    <div className="event-page-content">
      <div className="event-image-container">
        <img src={graphic} className="event-image" alt="event" />
      </div>
      <div className="event-text">
        <h2 className="event-header">{title}</h2>
        <p className="sub-header">{subTitle}</p>
        <p>
          {dateTime}
          <a
            className="map-link"
            href={locationLink}
            target="_blank"
            rel="noreferrer"
          >
            {location}
          </a>
        </p>
        {details.map((ele) => (
          <p>{ele}</p>
        ))}
        {guestInfo.map((ele) => {
          return (
            <>
              {ele[2] && <p>{ele[2]}</p>}
              {
                <a href={ele[1]} target="_blank" rel="noreferrer">
                  Learn more about {ele[0]}!
                </a>
              }
            </>
          );
        })}
        <p className="donation-text"> {donation} </p>
      </div>
    </div>
  );
}
