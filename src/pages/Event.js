import React from "react";
import "./Event.css";
import eventdata from "./eventData.json";
import hackathondata from "./hackathon.json";
import arnav from "../images/img10.JPG";
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
    // Format: "1 February 2024"
    return new Date(year, months[month], day);
  } else if (parts.length === 5) {
    // Format: "31 January - 1 February 2024"
    const endDay = parseInt(parts[2], 10);
    const endDate = new Date(year, months[parts[4]], endDay);
    return endDate;
  }

  // Default return
  return new Date();
};


export default function Event() {
  
  const sortedEventData = [...eventdata].sort((a, b) => {
    const dateComparison = parseDate(b.date) - parseDate(a.date);  // Compare dates
    if (dateComparison === 0) {
      return a.id - b.id;  // If dates are the same, compare IDs
    }
    return dateComparison;  // Otherwise, sort by dates
  });
  const sortedhackathon=[...hackathondata].sort((a,b)=>{
    const date_comparision=parseDate(b.date)-parseDate(a.date);
    if(date_comparision===0){
      return a.id-b.id;
    }
    return date_comparision;
  })


  return (
    <>
      <div className="heading event">Events</div>
      <div className="subHeading">
        Embrace Innovation, Collaborate and Celebrate
      </div>

      <div className="container">
        <div className="card">
          <div className="row row-cols-1 row-cols-md-3">
            {" "}
            {/* Use row-cols classes for responsive grid */}
            {sortedEventData.map((detail, index) => (
              
              <div className="col-md-4 col-12" key={index}>
                {" "}
                {/* Each grid will take 1 column on extra small devices and 3 columns on medium devices and above */}
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
                    <h5 className="card-title text-white">
                      {detail.eventName}
                    </h5>
                    <p className="card-text text-white">{detail.description}</p>
                    {/*---   <a href={detail.link} className="btn btn-outline-danger button1" style={{marginTop:'20px'}}>Learn more <i class="fa fa-arrow-right"></i></a>  --*/}
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
            {" "}
            {/* Use row-cols classes for responsive grid */}
            {sortedhackathon.map((detail, index) => (
              <div className="col-md-4 col-12" key={index}>
                {" "}
                {/* Each grid will take 1 column on extra small devices and 3 columns on medium devices and above */}
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
                    <h5 className="card-title text-white">
                      {detail.eventName}
                    </h5>
                    <p className="card-text text-white">{detail.description}</p>
                    {/*---   <a href={detail.link} className="btn btn-outline-danger button1" style={{marginTop:'20px'}}>Learn more <i class="fa fa-arrow-right"></i></a>  --*/}
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

{
  /*--
{
  "id": 1,
  "eventName": "Geek Insights",
  "date": "1 February 2024.",
  "description": "Geek Insights was organised by Geek Room on 19 April 2024 to enlighten beginner tech enthusiasts about the various tech domains and their scope in the field of technology..",
  "image_url": "img1.png",
  "link": " "

},  */
}
