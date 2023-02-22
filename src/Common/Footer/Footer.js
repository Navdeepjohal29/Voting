import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/images/logo.png";
import Social from './Social';
import './Footer.scss'
import { Link } from 'react-scroll'


function Footer() {
  const d = new Date();
  return (
    <React.Fragment>
      <Container fluid className='footerSecTop' >
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footerInfo">
                <img src={logo} alt="logo" width="164px" />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae</p>
              </div>
            </Col>
            <Col lg={8} className="footerLinks">
              <h2>Company</h2>
              <div className="footerLink">
                <nav>
                  <Link activeclassName="active" className="/" to="/" spy={true} smooth={true} duration={500} >Home</Link>
                  <Link activeclassName="active" className="about" to="about" spy={true} smooth={true} duration={500} >About Us</Link>
                  <Link activeclassName="active" className="Tokenomics" to="Tokenomics" spy={true} smooth={true} duration={500} >Tokenomics</Link>
                </nav>
                <nav>
                  <Link activeclassName="active" className="Roadmap" to="Roadmap" spy={true} smooth={true} duration={500} >Roadmap</Link>
                  <Link activeclassName="active" className="Team" to="Team" spy={true} smooth={true} duration={500} >Team</Link>
                  <Link activeclassName="active" className="faq" to="faq" spy={true} smooth={true} duration={500} >FAQ</Link>
                </nav>
                <nav>
                  <Link activeclassName="active" className="Contact" to="Contact" spy={true} smooth={true} duration={500} >Contact</Link>
                  <Link activeclassName="active" className="#" to="#" spy={true} smooth={true} duration={500} >Privacy Policy</Link>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="CopyRight">
        <Container className="CopyRightIn">
          <p>©{d.getFullYear()} Reit Coin - All rights reserved.</p>
          <Social />
        </Container>
      </Container>
    </React.Fragment>
  )
}

export default Footer