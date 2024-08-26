import React from 'react';
import Image from 'next/image';
import hackathondata from "./JSON/hackathon.json";
import "../../Styles/Event.css";

const Hackathons = () => {
  return (
     <div className="event_page">
        <div className="event_heading event">Hackathons</div>
        <div className="event_subHeading">
          <p>&quot;Embrace Innovation, Collaborate and Celebrate&quot;</p>
        </div>

        <div className="event_card_container">
          {hackathondata.map((detail, index) => (
            <div className="event_card" key={index}>
              <Image
                src={`/Events/${detail.image_url}`}
                alt={detail.eventName}
                className="event_card__image"
                layout="responsive"
                width={400}
                height={220}
                objectFit="contain"
              />
              <div className="event_card__content">
                <div>
                  <p className="event_card__title">{detail.eventName}</p>
                  <p className="event_card__description">
                    {detail.description}
                  </p>
                </div>
                <div>
                {/*   <button className="event_card__button">Live Demo</button> */}
                  <button className="event_card__button event_secondary">
                    {detail.date}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default Hackathons