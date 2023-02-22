import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Well Hello! My name is Michael Crandall.  I am currently 31 living in Dallas, TX 
            but I started off at Carmel High School in Carmel, Indiana graduating with a High School Diploma. 
            I then moved on to Cincinnati, Ohio to gain my Bachelors of Business Administration with a focus in Marketing. 
            After working in social media marketing for about four years, I went on to work for the local theatre union that led to me moving to Dallas, TX.
            I have been working in the area doing high level event and theatrical work while pursuing my software developer ambitions on the side.
            Now that I have graduated with some experience in Javacript, Mern stack apps, and React apps I plan on pursuing and furthing my experince with everything software development.  
            When I'm not working toward my goals I am out hiking, keeping active, trying new food, rock climbing, or even bindging some of my favorite shows.     
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
