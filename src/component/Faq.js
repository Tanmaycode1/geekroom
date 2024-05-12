import React from 'react'
import './Faq.css'
export default function Faq() {
  return (
    <div className='faq'>
        <div className="section-heading " style={{    margin: '1rem'}}>
          <p className="about-us ">Have a Question?</p>
          <div className="underline"></div>
        </div>
      <div class="accordion accordion-flush dark" id="accordionFlushExample">
  <div className="accordion-item item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What is Geek Room ?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Geek Room is a widespread coding community with over 7500+ active coders nationwide. It was started by 3 1st year coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping other people is the main goal . Geek Room boasts of various hackathon winning teams , 6 independent institutes with Geek Room chapters and so much more.</div>
    </div>
  </div>
  <div className="accordion-item item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How to become a Community Partner for Geek Room events?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">To become a community partner for Geek Room , one will only need to fill up a Google form without any charging fee . Since we at Geek Room are committed to build a transparent and free community , community partnerships are greatly appreciated and one can expect the best experience.</div>
    </div>
  </div>
  <div className="accordion-item item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do i connect with Geek Room? Do i need to pay any fees?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can connect with Geek Room via our social media handles (Instagram , LinkedIn , Email , WhatsApp) etc . No , you dont need any fees to join Geek Room . You simply  fill the google form , give the interview and if considered applicable , you shall be selected in a free and fair manner.</div>
    </div>
  </div>

  <div className="accordion-item item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed text" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      What makes Geek Room unique?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our vast connections , a widespread community of over 7500+ coders nationwide , conduction of successful hackathons and events , boasting multi hackathon winning teams comprised purely of Geek Room members ,  a philosophy of "a community of the coders , for the coders and by the coders" and a transparent community where anyone can start coding easily  , Geek Room is a unique trendsetter that is built for the upliftment of the Indian coding community</div>
    </div>
  </div>
</div>
    </div>
  )
}
