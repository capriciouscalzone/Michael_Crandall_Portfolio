import React from "react";
import listeningImage from "../../assets/small/WhachaListening2.png";
import workoutImage from "../../assets/small/worout4u_screenshot.png";
import carbonImage from "../../assets/small/carbon_on_wheels.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/capriciouscalzone/WorkoutForYou">
                {" "}
                <img
                  src={workoutImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WorkoutForYou"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Workout4U</h4>
              <p>
                A full MERN stack app with a place for users to login, track their workouts, post about their motivations, 
                and leave comments on other users motivations.  After you logged into your profile it also spit out three random workouts 
                for you to do for the day.  {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/capriciouscalzone/WhatchaListeningTo">
                {" "}
                <img
                  src={listeningImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WhatchaListeningTo"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>WhatchaListeningTo</h4>
              <p>
                A social media type app that uses databases to track and store user data and the login auth process. 
                 A site where you can post the songs you are listening too in that moment.  
                 It allows for all the users to see everyones posts and comment/interact with the posts.  {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/capriciouscalzone/Carbon_Footprint_Project_1">
                {" "}
                <img
                  src={carbonImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Carbon-on-wheels"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Carbon on Wheels</h4>
              <p>
                A simple carbon foot print calculator for road trips using two apis.  
                One of the apis used address information to determine the trip length 
                and the second api took that data and 
                spit back your total carbon foot print produced.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
