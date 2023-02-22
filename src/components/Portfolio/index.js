import React from "react";
import twilightImage from "../../assets/small/WhachaListening2.png";
import flowerImage from "../../assets/small/worout4u_screenshot.png";
import sphereImage from "../../assets/small/carbon_on_wheels.png";

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
              <a href="https://github.com/capriciouscalzone/Carbon_Footprint_Project_1">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Carbon-on-wheels"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
                A MERN application that lets the user log in and create an
                account. The user can receive daily affirmations. The user also
                has the ability to ask questions to receive an answer. The user
                also can receive a lucky number if they want. The user can
                donate money to the website if they want to.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Sweet-Pea-Flowers/">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sweet Pea Flowers</h4>
              <p>
                A HTMl, CSS, and Javascript application that lets the user shop
                for their favorite flowers.The user can sign in as a guest or as
                a user to add items to their cart. The user can manage their
                cart by using local storage. The user can checkout and validate
                their credit card.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Twilight_Ristorante/">
                {" "}
                <img
                  src={twilightImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Twilight_Ristorante"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Twilight Ristorante</h4>
              <p>
                A HTML and CSS application that lets the user explore a Sample
                Restaurant Design.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
