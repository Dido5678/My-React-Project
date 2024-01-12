import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/king-rem.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/icons8-github-128.svg";

export const Footer = () => {
    return (
            <footer className="footer">
                <Container>
                    <Row className="align-items-center">
                        <MailchimpForm />
                        <Col size={12} sm={6}>
                            <img src={logo} alt="Logo" />
                        </Col>
                        <Col size={12} sm={6} className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/aida-mkrtchyan-9b1a5324b/"><img src={navIcon1} alt="Icon" /></a>
                                <a href="https://www.facebook.com/aida.mkrtchyan2"><img src={navIcon2} alt="Icon" /></a>
                                <a href="https://github.com/Dido5678"><img src={navIcon3} alt="Icon" /></a>
                            </div>
                            <p>Copyright 2022. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}
