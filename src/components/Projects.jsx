import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WorkCard } from "./WorkCard";

import projImg1 from "../assets/img/modplanus.png";
import projImg2 from "../assets/img/devenable.png";
import projImg3 from "../assets/img/dukeaemon.png";
import projImg4 from "../assets/img/prism.png";
import workImg from "../assets/img/workexp-bg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
    {
      title: "ModPlaNUS",
      description: "ModPlaNUS is a web app that helps automate module planning for different semesters and calculates the CAP for each semester.",
      imgUrl: projImg1,
      githubLink: "https://github.com/ModPlaNUS/ModPlaNUS",
      infoLink:"https://www.youtube.com/watch?v=-U2PXGpWD5U",
    },
    {
      title: "DevEnable",
      description: "DevEnable is as a desktop application that helps developers manage multiple projects, track clients and repositories.",
      imgUrl: projImg2,
      githubLink: "https://github.com/AY2223S1-CS2103-F13-1/tp",
      infoLink: "https://ay2223s1-cs2103-f13-1.github.io/tp/",
    },
    {
      title: "Duke Aemon",
      description: "Duke Aemon is a desktop application which is a task management app that packs task management with a storyline and unique Duke personality.",
      imgUrl: projImg3,
      githubLink:"https://github.com/Aishwarya-Hariharan-Iyer/ip",
      infoLink: "https://aishwarya-hariharan-iyer.github.io/ip/",
    },
    {
      title: "PRISM Report Automation",
      description: "The PRISM software automates the generation of customizable reports, in the form of PowerPoint presentations, from the data compiled in spreadsheets.",
      imgUrl: projImg4,
      githubLink: "https://github.com/Aishwarya-Hariharan-Iyer/Automated-Report-Generation",
    },
  ];

  const jobs = [
    {
      imgUrl: workImg,
      role: "Software Development Intern",
      company: "Ashok Leyland",
      description: "Worked with the Business Analytics Team to automate generation of reports with an estimated increase in efficiency by 8-10 man-days",
      infoLink: "https://www.ashokleyland.com/in/en/about-us"
    }, 
    {
      imgUrl: workImg,
      role: "Student Developer",
      company: "Source Academy",
      description: "Worked in the Game Development Team of Source Academy to make changes that incentivize gameplay in learning to code.",
      infoLink: "https://about.sourceacademy.org/"
    },
    {
      imgUrl: workImg,
      role: "Research Intern",
      company: "Amrita Vishwa Vidyapeetham",
      description: "Analyzed Bangalore's COVID-19 database to monitor the spread of the pandemic and developed skills in data analysis using MATLAB and Excel",
      infoLink: "https://www.amrita.edu/about/"
    },
    {
      imgUrl: workImg,
      role: "Research Intern",
      company: "CEiBa Trust",
      description: "Documented nutritional values of wild, uncultivated food crops and wrote in organization's newsletters",
      infoLink: "https://ceibatrust.org/"
    },
    {
      imgUrl: workImg,
      role: "NUSC Peer Mentor",
      company: "NUS",
      description: "Guided and mentored incoming Year 1 students enrolled in the School of Computing and NUSC/USP",
      infoLink: "https://nus.edu.sg/osa/pioneerhouse/residential-life/peer-mentorship-programme"
    },
    {
      imgUrl: workImg,
      role: "Chief Editor",
      company: "Salt and Sugar Magazine",
      description: "Founded and headed an e-magazine that aimed to be a platform for creative catharis during the pandemic",
      infoLink: "https://saltandsugarmagazine.wixsite.com/website"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={16}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Glimpses</h2>
                <p>
                From my time working in the Game Development Team at Source Academy to building a module planner with my teammate, every opportunity that I have been given has been an incredible learning experience for me. Each experience has enriched my coding skills through the use of Java, Python, JavaScript, and React, amongst others, strengthened my knowledge of various software designs and architectures, and enhanced my collaboration and communication abilities.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" fluid={true}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Know More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row xs='4' sm='4' md='4' lg='4' xl='4' xxl='4'>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row xs='4' sm='4' md='4' lg='4' xl='4' xxl='4'>
                        {
                          jobs.map((job, index) => {
                            return (
                              <WorkCard
                                key={index}
                                {...job}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row xs='1' sm='1' md='1' lg='1' xl='1' xxl='1'>
                      <p>While I hope you have glimpsed at the footsteps behind, I wish to share more of my journey with you! Head over to my Resume to get to know me better.</p>
                      <button onClick={() => window.open('https://drive.google.com/file/d/1cjeZNZI_RDkuGDf2zFqC7-WVs2oNAMsJ/view?usp=sharing')}>
                        <h5 style={{ color: 'white' }}>Resume</h5>
                        </button>
                      
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
