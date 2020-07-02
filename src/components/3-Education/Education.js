import React, { Component } from 'react';

const educations = [
  {
    school: 'Institut Universitaire de la Côte',
    degree: 'Bachelor in Software Engineering',
    subject: 'Computer Science - Web Development Track',
    dates: 'September 2013 - November 2016'
  },
  
  {
    school: 'Saint Francis College',
    degree: 'G.C.E Advanced Levels',
    subject: 'A1',
    dates: 'September 2002 - June 2010'
  }
]


const Ed = ({ed}) => {
return (
  <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
  <div class="resume-content">
    <h3 class="mb-0">{ed.school}</h3>
    <div class="subheading mb-3">{ed.degree}</div>
    <div>{ed.subject}</div>
  </div>
  <div class="resume-date text-md-right">
    <span class="text-primary">{ed.dates}</span>
  </div>
</div>
)
}

export default class Education extends Component {
  render() {
    return (<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
      {educations.map(ed => {
        return ( <Ed ed={ed}/>)
      })}
     
       
 
      </div>
    </section>)
  }
}
