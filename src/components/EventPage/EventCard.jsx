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
    <div className="mt-8 flex flex-row max-w-[440px] min-h-[500px]">
      {graphic && (
        <div className="flex-grow basis-0 min-w-0 mr-8 flex items-center">
          <img
            src={graphic}
            alt="event"
            className="rounded-[10px] shadow-[0_0_15px_#222] max-h-[95%] max-w-full"
          />
        </div>
      )}
      <div className="flex flex-col items-center flex-grow basis-0 min-w-0 font-poppins text-base">
        {season && <h1 className="m-0">{season}</h1>}
        <h2 className="m-0">{title}</h2>
        <p className="m-0 mb-8 italic leading-[0.5rem] text-[0.875rem]">
          {subTitle}
        </p>
        <p className="m-0 mb-4">
          {dateTime}{' '}
          <a
            href={locationLink}
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            {location}
          </a>
        </p>
        {details.map((ele, index) => (
          <p key={index} className="m-0 mb-4">
            {ele}
          </p>
        ))}
        {guestInfo.map((ele, index) => (
          <div key={index}>
            {ele[2] && <p className="m-0">{ele[2]}</p>}
            <a
              href={ele[1]}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fff5e9] italic"
            >
              Learn more about {ele[0]}!
            </a>
          </div>
        ))}
        {donation.text && (
          <p className="mt-3 italic text-base">
            {donation.text}{' '}
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
