import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  keySkills,
  securityTools,
  education,
  certifications,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        {/* Profile Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        {/* Resume Download Section */}
        <Row className="sec_sp">
          <Col lg="12" className="text-center">
                         <a 
               href="/resume.pdf" 
               download="athul_resume.pdf"
               className="btn btn-primary btn-lg me-3"
               style={{ textDecoration: 'none' }}
             >
              📄 Download My Resume
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg"
              style={{ textDecoration: 'none' }}
            >
              👁️ View Resume
            </a>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education & Qualifications</h3>
          </Col>
          <Col lg="7">
            {education.map((edu, i) => {
              return (
                <div key={i} className="education-item mb-4">
                  <h5 className="education-degree">{edu.degree}</h5>
                  <h6 className="education-institution text-muted">{edu.institution}</h6>
                  <p className="education-year">
                    <span className="badge bg-secondary me-2">{edu.year}</span>
                    <span className={`badge ${edu.status === 'In Progress' ? 'bg-warning' : 'bg-success'}`}>
                      {edu.status}
                    </span>
                  </p>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Work Experience Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {worktimeline.map((data, i) => {
              return (
                <div key={i} className="work-experience-item mb-4">
                  <h5 className="work-title">{data.jobtitle}</h5>
                  <h6 className="work-company text-muted">{data.where}</h6>
                  <p className="work-date">
                    <span className="badge bg-primary">{data.date}</span>
                  </p>
                  {data.description && (
                    <p className="work-description">{data.description}</p>
                  )}
                  {data.achievements && (
                    <div className="work-achievements">
                      <strong>Key Achievements:</strong>
                      <ul>
                        {data.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Technical Skills Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Security Tools & Technologies Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Security Tools & Technologies</h3>
          </Col>
          <Col lg="7">
            {securityTools.map((category, i) => {
              return (
                <div className="security-tools-category mb-4" key={i}>
                  <h5 className="security-tools-title">{category.category}</h5>
                  <div className="security-tools-list">
                    {category.tools.map((tool, idx) => (
                      <span key={idx} className="badge bg-info me-2 mb-2 security-tool-badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Key Skills Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Key Skills</h3>
          </Col>
          <Col lg="7">
            {keySkills.map((skill, i) => {
              return (
                <div className="key-skill-item mb-4" key={i}>
                  <h5 className="key-skill-title">{skill.category}</h5>
                  <p className="key-skill-desc">{skill.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Certifications Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            {certifications.map((cert, i) => {
              return (
                <div key={i} className="certification-item mb-3">
                  <h5 className="certification-name">{cert.name}</h5>
                  <p className="certification-year">
                    <span className="badge bg-success">{cert.year}</span>
                  </p>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
