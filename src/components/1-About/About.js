import React, {Component} from 'react';

export default class About extends Component {
  
  constructor() {
    super()
   this.state = {
     first: 'Thierry',
     last: 'Mballa',
     address: 'Logbessou · Douala,Cameroon · (237) 694-429-113 ·',
     email: 'thierrymballa@gmail.com',
     bio: 'As an ambitious, dependable and hard-working individual, i engage with commitment and creativity in problem solving.',
     socials: {
       twitter:'https://twitter.com/shownofear?s=09',
       github: 'https://github.com/Atilean',
       linkedin: 'https://wwww.linkedin.com/in/thierry-mballa-821b37134'
     }
   }


  }

    render() {
        return(  <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100"> 
          <h1 className="mb-0">{this.state.first}
        <span className="text-primary"> {this.state.last}</span>
          </h1>
        <div className="subheading mb-5">{this.state.address}
        <a href="mailto:name@email.com">{this.state.email}</a>
          </div>
          <p className="lead mb-5">{this.state.bio}</p>
          <div className="social-icons">
            <a href={this.state.socials.linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={this.state.socials.github}>
              <i className="fab fa-github"></i>
            </a>
            <a href={this.state.socials.twitter}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>)
    }
}