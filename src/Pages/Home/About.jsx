import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <img
            src="https://media.istockphoto.com/id/1394116286/vector/calendar-with-to-do-checklist-business-task-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=XBB67J91akfZ-0pxtNXxp-3yOBd7TVTST2kC7DONKXA="
            className=" "
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
