import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="portfolio-intro">
              Explore my GitHub repositories showcasing expertise in cybersecurity, 
              API development, and full-stack solutions. Each project demonstrates 
              practical skills and innovative problem-solving approaches.
            </p>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <div className="po_item_img">
                  <img src={data.img} alt={data.title} />
                  <div className="po_item_overlay">
                    <span className="po_category_badge">{data.category}</span>
                    {data.status && (
                      <span className="po_status_badge">{data.status}</span>
                    )}
                  </div>
                </div>
                <div className="content">
                  <h4 className="po_title">{data.title}</h4>
                  <p className="po_description">{data.description}</p>
                  <div className="po_technologies">
                    {data.technologies.map((tech, idx) => (
                      <span key={idx} className="tech_badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="po_actions">
                    <a 
                      href={data.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="po_link"
                    >
                      <i className="fab fa-github"></i> View Repository
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Row className="mt-5">
          <Col lg="12" className="text-center">
            <p className="github_cta">
              <strong>Want to see more?</strong>{" "}
              <a 
                href="https://github.com/Tbx4210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github_profile_link"
              >
                Visit my complete GitHub profile
              </a>{" "}
              to explore all 13+ repositories and contributions.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
