import React from "react";
import profilepic from "../../assets/profilepic.jpg";

export default function About() {
  return (
    <div className="lh-lg text-center mx-5 p-5 ">
      <img src={profilepic} alt="profilepic" className="img-fluid rounded-circle" />
      <p>
        I initially graduated in 2016 with a degree in Psychology. After years
        of not pursuing anything with my degree and bouncing from job to job
        feeling unfulfilled, I decided to make a change. I enrolled in a coding
        bootcamp thru University of Texas San Antonio and started my path to a career change. Coding is a
        challenge but having the chance to collaborate with my peers and take
        part in creating or bettering something in the world will have great
        payoff.
      </p>
      <p>
        I am currently based in Dallas, TX. After graduating from the bootcamp,
        I hope to pursue a career as a full stack web developer and continue
        learning and growing as a developer. I enjoy walking, spoiling my dog, reading,
        and games.
      </p>
      <p>Have a look around and feel free to reach out and get in touch! </p>
    </div>
  );
}
