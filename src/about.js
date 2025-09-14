import React from "react";

function About() {

  return (
    <>

    <div className=" p-1 text-white main-about">
      <h2 className="mb-4"> About Me</h2>
      
      <div className="row align-items-left">

        {/* About Text */}
        <div className="col-md-8">
          <h3> Hello! 👋 I'm Sai Kumar</h3>
          <p>
            I am a <span className="text-info">Full stack Developer</span> with 
            experience in building responsive, user-friendly web applications 
            using <strong>HTML, CSS, Bootstrap, JavaScript, React.js</strong> 
            and backend skills in <strong>Node.js, Express.js</strong>.
          </p>
          <p>
            My passion is crafting modern web solutions that provide seamless 
            user experiences and elegant UI design. I love learning new 
            technologies and improving my coding skills every day.
          </p>

          <ul>
            <li>⚡ Strong knowledge in React & Redux</li>
            <li>⚡ Skilled in REST APIs integration</li>
            <li>⚡ Experience with NodeJS and ExpressJS</li>
            <li>⚡ Interested in Full-Stack Development</li>
          </ul>

          <a href="/resume.pdf" className="btn btn-info mt-3" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
