import React from "react";

export default function Resume() {
  return (
    <>
    <div>
        <h2 className="pages mx-3 mt-4">Resume</h2>
    </div>

    <div className="row align-items-center">
        <div className="mx-auto p-auto col-lg-2 ms-auto">
            <h3>Technical Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>GraphQL</li>
                <li>Git</li>
                <li>Heroku</li>
                <li>Command Line</li>
            </ul>
        </div>

        <div className="mx-auto p-auto col-lg-2 ms-auto">
            <h3>Education</h3>
            <p>University Texas at San Antonio</p>
            <p>Full Stack Web Development Certificate</p>
            <p>Exp: 2023</p>
            <p>Angelo State University</p>
            <p>Bachelor of Arts, Psychology</p>
            <p>2016</p>
        </div>
        </div>

      <div className="text-center mt-4 mb-4">
        <a className="btn btn-xl btn-outline-light" href="https://docs.google.com/document/d/1kt0i73Lj83F1SQaoJgz18TyHZKkfzc6Y/edit?usp=sharing&ouid=118099630848561767079&rtpof=true&sd=true">
          Download My Resume!
        </a>
      </div>
    </>
    );
}