import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


import Papa from 'papaparse';
import projectsCSV from '../assets/data/projects.csv';
import workExpCSV from '../assets/data/work-exp.csv';
import leadershipExpCSV from '../assets/data/leadership-exp.csv';

function ProjectsSection() {

  useEffect(() => {
    AOS.init();

    Papa.parse(projectsCSV, {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: function (results) {
        setDevProjectsData(results.data.filter((proj) => proj.Type.includes("Development")));
        setDesignProjectsData(results.data.filter((proj) => proj.Type.includes("Design")));
        setCaseStudyProjectsData(results.data.filter((proj) => proj.Type.includes("Case Study")));
        setProjectsData(results.data.filter((proj) => proj.Type.includes("Development")));

      },
    });  

    // eslint-disable-next-line
  }, []);

  const [devProjectsData, setDevProjectsData] = useState([]);
  const [designProjectsData, setDesignProjectsData] = useState([]);
  const [caseStudyProjectsData, setCaseStudyProjectsData] = useState([]);
  const [projectsData, setProjectsData] = useState(devProjectsData);

  const [showDesignPortfolio, setShowDesignPortfolio] = useState(false);
  const [showCaseStudies, setShowCaseStudies] = useState(false);

  const [selectedProj, setSelectedProj] = useState({
    "TechnicalSkills": "",
    "Platforms": "",
    "Background": "",
    "Task": "",
    "Process": "",
    "Outcome": "",
    "Learnings": ""
  });

  const [showProjModal, setShowProjModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);

  function handleShow(proj) {
    console.log(proj)
    setSelectedProj(proj);
    setShowProjModal(true);
  }

  function openPortfolio() {
    console.log("open!")
    // setSelectedProj(proj);
    setShowPortfolioModal(true);
  }

  return (
    <section className="projects" id="projects">
    <Container bg="light">
    <Row className="align-items-center sh-row"
      data-aos="fade-down-left" data-aos-duration="900" >
          <Col className="text-end">
            <h1 className="display-1 sh-right">projects</h1>
          </Col>
    </Row>
    <Row className="mb-5"
    data-aos="fade-down-left" data-aos-duration="1000" >
      <ButtonGroup>
        <Button variant="light" onClick={() => {setProjectsData(devProjectsData); setShowDesignPortfolio(false); setShowCaseStudies(false)}}>development</Button>
        <Button variant="light" onClick={() => {setProjectsData(designProjectsData); setShowDesignPortfolio(true); setShowCaseStudies(false)}}>design</Button>
        <Button variant="light" onClick={() => {setProjectsData(caseStudyProjectsData); setShowDesignPortfolio(false); setShowCaseStudies(true)}}>case studies</Button>
    </ButtonGroup>          
    </Row>
      <Row>
        <Container>

        {(projectsData).map(
                (proj, idx) => (
                  <Container className={idx % 2 == 0 ? "entry shift-left" : "entry shift-right"} key={idx}
                  data-aos="fade-up-right"
                  data-aos-duration="1050">
                  <Card className="border-0">

                  <Card.Body>
                    <Row className="">
                      <Col xs={12} sm={7}>
                        <h5 className="fw-bold">{proj.Name}</h5>
                        <p className="mb-2">
                          <span className="fst-italic">{proj.Date}</span>
                        </p>
                        <p className="mb-2 fw-bold">
                          {proj.TechnicalSkills.split(",").map((skill) => (
                            <Badge pill bg="warning" className="me-2">{skill}</Badge>
                          ))}
                        </p>
                        <p className="desc-text">
                          {proj.ProblemStatement}
                          
                        </p>
                        <p>
                        <Card.Link onClick={() => handleShow(proj)} className="fw-bold fst-italic">
                          read more
                        </Card.Link>
                        </p>
                      </Col>
                      <Col xs={12} sm={5} className="border-start flex d-flex justify-content-center align-items-center">
                        <Image src={`/projects-photos/${proj.Tag}/cover.png`} fluid className="w-75 mx-auto d-block"></Image> 
                      </Col>
                    </Row>
                  </Card.Body>
                  </Card>
                  </Container>
                )
              )}
        
        </Container>
      
      </Row>

      {showDesignPortfolio ?
        <div className="float-end">
          <p>
          <Card.Link onClick={() => openPortfolio()} className="fw-bold fst-italic"
          data-aos="fade-up-left"
          data-aos-duration="1050">
            check out other graphics i've designed! 👉
          </Card.Link>
          </p>
        </div>
        
     : <></>}

{showCaseStudies ?
        <div
        data-aos="fade-up-right" data-aos-duration="1000">
          <p className="fst-italic text-center">
            coming soon!
          </p>
        </div>
        
     : <></>}
    </Container>

    <Modal
        // size="lg"
        fullscreen={true}
        // show={true}

        show={showProjModal}
        onHide={() => setShowProjModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="projectModal"
      >
        <Modal.Header closeButton className="border-0">
          {/* <Modal.Title id="example-modal-sizes-title-lg">
            <h5>{selectedProj.Name}</h5>
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Container className="p-5">
            <Container>
            <Image src={`/projects-photos/${selectedProj.Tag}/cover.png`} fluid className="w-75 mx-auto d-block"></Image> 
            </Container>
            <Container className="my-5">
              <h2>{selectedProj.Name}</h2>
              <h5 className="fst-italic">Recap and Retrospect</h5>
            </Container>
            <Container>
              <table className="table">
                <tbody>
                  <tr>
                    <td>{selectedProj.Date}</td>
                    <td>{selectedProj.Program}</td>
                    <td>{selectedProj.Type}</td>
                    <td><span className="highlight">Outcome: {selectedProj.ShortOutcome}</span></td>
                  </tr>
                  <tr>
                  <th>Technical Skills</th>
                    <td colspan="3">
                      <p className="mb-1 fw-bold">
                      {selectedProj.TechnicalSkills.split(",").map((skill) => (
                        <Badge pill bg="warning" className="me-2">{skill}</Badge>
                      ))}
                      </p>
                    </td>
                  </tr>
                  <tr>
                  <th>Platforms</th>
                    <td colspan="3">
                      <p className="mb-1 fw-bold">
                      {selectedProj.Platforms.split(",").map((skill) => (
                        <Badge pill bg="secondary" className="me-2">{skill}</Badge>
                      ))}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Container>
            <Container>
              <Container className="my-5">
                <h3>Background</h3>
                {selectedProj.Background.split(/\r?\n/).map((para) => (
                  <p>{para}</p>
                ))}
              </Container>
              
              <Container className="my-5">
                <h3>Task</h3>
                {selectedProj.Task.split(/\r?\n/).map((para) => (
                  <p>{para}</p>
                ))}
              </Container>

              <Container className="my-5">
                <h3>Process</h3>
                {selectedProj.Process.split(/\r?\n/).map((para) => (
                  <>
                  
                  {para.charAt(0) == "#" ? 
                    <>
                    <Container>
                      <Image src={`/projects-photos/${selectedProj.Tag}/${para.slice(1, para.indexOf(':'))}`} fluid className="w-75 mx-auto d-block"></Image> 
                      <caption className="text-center d-block fst-italic">{ para.indexOf(' ') == para.length ? "" : para.slice(para.indexOf(' '))}</caption>
                    </Container>
                    </>
                    : 
                    <p className={para.includes("Stage") ? "h6 fst-italic" : ""}> {para}</p>}
                  </>
                ))}
              </Container>

              <Container className="my-5">
                <h3>Outcome</h3>
                {selectedProj.Outcome.split(/\r?\n/).map((para) => (
                    // <p>{para}</p>
                    <>
                    {para.charAt(0) == "#" ? 
                    <>
                    <Container>
                      <Image src={`/projects-photos/${selectedProj.Tag}/${para.slice(1, para.indexOf(':'))}`} fluid className="w-75 mx-auto d-block"></Image> 
                      <caption className="text-center d-block fst-italic">{para.slice(para.indexOf(' '))}</caption>
                    </Container>
                    </>
                    : 
                    <p className={para.includes("Stage") ? "h6 fst-italic" : ""}> {para}</p>}
                  </>

                ))}
                <hr/>
              </Container>
              
              <Container className="my-5">
                <h3>Learnings</h3>
                {selectedProj.Learnings.split(/\r?\n/).map((para) => (
                  <p className={para.includes("Lesson") ? "h6 fst-italic" : ""}> {para}</p>
                ))}
              </Container>
              
        
            </Container>
          </Container>
        
        </Modal.Body>
      </Modal>

      <Modal
        // size="lg"
        fullscreen={true}
        show={showPortfolioModal}
        onHide={() => setShowPortfolioModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="projectModal"
      >
        <Modal.Header closeButton className="border-0">
        </Modal.Header>
        <Modal.Body>
          <Container className="p-5">
            <Container className="my-5">
              <h2>some past design work!</h2>
              {/* <h5 className="fst-italic">Recap and Retrospect</h5> */}
              <div>
                <span className="me-2">
                  <a href="https://bit.ly/jayebriannayap" target="_blank" className="fw-bold fst-italic">
                    view them in slide format here 👉 
                  </a>
                </span>
                (with some writeups too!)
              </div>
            </Container>
            <Container>
              <Row>
              {
              Array(6).fill().map((item, i) => (
                <Col sm={12} md={3} className="pb-3">
                  <Image src={`/projects-photos/misc-designs/${i + 1}.png`} className="w-100"></Image> 
                </Col>
                ))
              }
              </Row>              
            </Container>
          </Container>
        
        </Modal.Body>
      </Modal>
    </section>

    
  );
}

export default ProjectsSection;