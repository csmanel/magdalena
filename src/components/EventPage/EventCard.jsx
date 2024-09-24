import './event_page.css';
import { Link } from 'react-router-dom';
import { eventInfo } from './Event';

export default function EventCard({ step }) {
  const {
    season = '',
    title = '',
    subTitle = '',
    graphic = null,
    dateTime = '',
    location = '',
    locationLink = '',
    details = [],
    guestInfo = [],
    donation = '',
  } = eventInfo[step] || {};

  return (
    <div className="event-page-content">
      {graphic ? (
        <div className="event-image-container">
          <img src={graphic} className="event-image" alt="event" />
        </div>
      ) : null}
      <div className="event-text">
        <h1 className="season-header">{season}</h1>
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
        {donation.text && (
          <p>
            <br />
            {donation.text}

            {donation.link && (
              <a href={donation.link} target="_blank" rel="noopener noreferrer">
                click here
              </a>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
