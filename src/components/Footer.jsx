import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/img/Logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
             <a href="#"><img src={logo} alt="Icon" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <div className="social-icon">
              <button onClick={() => window.open('mailto:aishwaryahiyer@u.nus.edu?subject=Subject&body=Body%20goes%20here')}>
                <h5 style={{ color: 'white' }}>Let's Connect!</h5>
                </button>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
