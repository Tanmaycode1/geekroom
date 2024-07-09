import React from "react";
import "./Event.css";
import eventdata from "./eventData.json";
import hackathondata from "./hackathon.json";

const parseDate = (dateStr) => {
  const parts = dateStr.replace('.', '').split(' ');
  const day = parseInt(parts[0], 10);
  const month = parts[1];
  const year = parseInt(parts[2], 10);

  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
  };

  if (parts.length === 3) {
    return new Date(year, months[month], day);
  } else if (parts.length === 5) {
    const endDay = parseInt(parts[2], 10);
    const endDate = new Date(year, months[parts[4]], endDay);
    return endDate;
  }

  return new Date();
};

export default function Event() {
  const sortedEventData = [...eventdata].sort((a, b) => {
    const dateComparison = parseDate(b.date) - parseDate(a.date);
    if (dateComparison === 0) {
      return a.id - b.id;
    }
    return dateComparison;
  });

  const sortedhackathon = [...hackathondata].sort((a, b) => {
    const date_comparision = parseDate(b.date) - parseDate(a.date);
    if (date_comparision === 0) {
      return a.id - b.id;
    }
    return date_comparision;
  });

  return (
    <>
      <div className="heading event">Events</div>
      <div className="subHeading">
        Embrace Innovation, Collaborate and Celebrate
      </div>

      <div className="container">
        <div className="card">
          <div className="row row-cols-1 row-cols-md-3">
            {sortedEventData.map((detail, index) => (
              <div className="col-md-4 col-12" key={index}>
                <div className="grid grid-col-5">
                  <div className="card-body col-span-4">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src={require(`../images/eventpic/${detail.image_url}`)}
                        className="card-img-top"
                        alt={detail.eventName}
                      />
                    </div>
                    <p className="card-date text-danger">{detail.date}</p>
                    <h5 className="card-title text-white">{detail.eventName}</h5>
                    <p className="card-text text-white">{detail.description}</p>
                    <div className="button-container">
                      <a href={detail.link1} className="btn btn-outline-danger button2" style={{color:'white'}} target="_blank" rel="noopener noreferrer">Learn More</a>
                      <a href={detail.link2} className="btn btn-outline-danger button2" target="_blank" style={{color:'white'}} rel="noopener noreferrer">Report</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="heading event">Hackathons</div>
      <div className="subHeading">
        Innovate Boldly, Code Together, Create Solutions
      </div>

      <div className="container">
        <div className="card">
          <div className="row row-cols-1 row-cols-md-3">
            {sortedhackathon.map((detail, index) => (
              <div className="col-md-4 col-12" key={index}>
                <div className="grid grid-col-5">
                  <div className="card-body col-span-4">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src={require(`../images/eventpic/${detail.image_url}`)}
                        className="card-img-top"
                        alt={detail.eventName}
                      />
                    </div>
                    <p className="card-date text-danger">{detail.date}</p>
                    <h5 className="card-title text-white">{detail.eventName}</h5>
                    <p className="card-text text-white">{detail.description}</p>
                    <div className="button-container">
                      <a href={detail.link1} className="btn btn-outline-danger button2" style={{color:'white'}} target="_blank" rel="noopener noreferrer">Learn More</a>
                      <a href={detail.link2} className="btn btn-outline-danger button2" target="_blank" style={{color:'white'}} rel="noopener noreferrer">Report</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
