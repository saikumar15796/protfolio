import React from "react";

function Projects() {
  // Example project data
  const projects = [
    {
      title: "Employee Workforce Management System",
      description: "A web-based system to manage employees, track Timesheets,creating Invoices, and streamline workforce operations.",
     tech: "React, Node.js, Express, Mysql",
      link: "https://workforce.ceipal.com/pages/sign-in?_gl=1*1a19r32*_gcl_au*NzI1MDAxODcuMTc1Nzg1OTIwOQ.."
    },
    {
      title: "Applicate Tracking System ",
      description: "A recruitment management tool that helps track job applications, manage candidate profiles, and streamline the hiring process.",
      tech: "React, Node.js, Express, Mysql",
      link: "https://talenthire.ceipal.com/signin?_gl=1*b7erwc*_gcl_au*NzI1MDAxODcuMTc1Nzg1OTIwOQ.."
    },
    
  ];

  return (
    <div className="projects-container text-white p-4">
      <h2 className="mb-4">🚀 My Projects</h2>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 bg-dark text-light border-info">
              <div className="card-body">
                <h5 className="card-title text-info">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info text-white"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
