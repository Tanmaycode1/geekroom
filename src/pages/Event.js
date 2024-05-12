import React from 'react'
import './Event.css'
import data from './eventData.json'
import arnav from '../images/img10.JPG'

export default function Event() {
  return (
    <>
    <div className='heading event'>
        Events
    </div>
    <div className="subHeading">Embrace Innovation, Collaborate and Celebrate</div>


<div className='container'>
  <div className="card" >
    <div className='row row-cols-1 row-cols-md-3'> {/* Use row-cols classes for responsive grid */}
      {data.map((detail,index) => (
        <div className='col-md-4 col-12' key={index} > {/* Each grid will take 1 column on extra small devices and 3 columns on medium devices and above */}
          <div className='grid grid-col-5'>
            <div className="card-body col-span-4">

              <div style={{height:'200px',overflow:'hidden'}}>
              <img src={require(`../images/eventpic/${detail.image_url}`)} className="card-img-top" alt={detail.eventName}/>
              </div>
              <p className="card-date text-danger">{detail.date}</p>
              <h5 className="card-title text-white">{detail.eventName}</h5>
              <p className="card-text text-white">{detail.description}</p>
              <a href="#" className="btn btn-outline-danger button1" style={{marginTop:'20px'}}>Learn more <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </>
  )
}
