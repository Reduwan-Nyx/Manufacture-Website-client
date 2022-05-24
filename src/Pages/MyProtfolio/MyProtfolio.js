import React from "react";
import picture from "../../images/mypicture.jpg";
const MyProtfolio = () => {
  return (
    <div className="card  shadow-xl">
      <figure>
        <img className="w-48" src={picture} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name : <span className="text-xl font-bold">Tahsim Reduwan</span>
        </h2>
        <p className="card-title">
          Email Address:{" "}
          <span className="text-xl font-bold">tahsimreduwan112@gmail.com</span>
        </p>
        <p className="card-title">
          Education Background:{" "}
          <span className="text-xl font-bold">
            Honours 1st year at sylhet government college
          </span>
        </p>
        <p className="card-title">
          list of technologies or skills i have as a web developer:{" "}
          <span className="text-xl font-bold">
            •HTML/CSS skills, •Analytical skills,•bootstrap/tailwind skill,
            •Responsive design skills, •JavaScript skills,•Back-end
            basics,•React,Firebase,•MongoDb,
          </span>
        </p>
        <p className="card-title">
          links of three of my projects:{" "}
          <span>
            <a
              className="text-red-500"
              href="https://halal-food-2514a.web.app/"
            >
              Food Website
            </a>
          </span>{" "}
          <br />
          <span>
            <a
              className="text-red-500"
              href="https://brilliant-lollipop-38c785.netlify.app/"
            >
              gadget Freak
            </a>
          </span>{" "}
          <br />
          <span>
            <a
              className="text-red-500"
              href="https://aman-ullah-convention-center.netlify.app/"
            >
              Convention Center
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyProtfolio;
