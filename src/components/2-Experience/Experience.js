 import React, { Component } from 'react';

const Exp = ({exp}) => {
   return(
     <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
       <div class="resume-content">
         <h3 class="mb-0">{exp.title}</h3>
         <div class="subheading mb-3">{exp.heading}</div>
         <p>{exp.description}</p>
       </div>
       <div class="resume-date text-md-right">
         <span class="text-primary">{exp.dates}</span>
       </div>
     </div>
   )

}

const experiences = [
  {
    title: 'Quality Assurance / Scrum Master',
    heading: 'Qognitiv Technologies',
    description: 'Execute test cases (manual or automated) and analyze results.Report bugs and errors to development teams.Collaborate with developers to develop effective strategies and test plans.Manage continuous source code quality with SonarQube.',
    dates: 'April 2019 - May 2020'
  },
  {
    title: 'Penetration Tester',
    heading: 'Cyberix - All Safe',
    description: 'Protection of information against unauthorized access.Testing and correction of weaknesses in an information system.Vulnerability testing and updating defensive protocols and systems accordingly.',
    dates: 'February 2018 - November 2018'
  },
  {
    title: 'Network and Administrator',
    heading: 'Kerthan Clinic',
    description: 'Network maintenance.IT Park Management.IT - Support',
    dates: 'september 2017 - January 2018'
  },
  {
    title: 'Intern',
    heading: 'Camerounian Ministry of Defence',
    description: 'participating in an Internet and IT network reorganisation project',
    dates: 'June 2017 - August 2017'
  },
  {
    title: 'Intern - IT Support',
    heading: 'Bocom Petroleum',
    description: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    dates: 'October 2016 - January 2017'
  }
]


export default class Experience extends Component {
  render() {
    return ( 
   <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
   <div class="w-100">
    {experiences.map(exp => {
     return (<Exp exp={exp}/>) 
    })}
    </div>

</section>
      )
  }
}
