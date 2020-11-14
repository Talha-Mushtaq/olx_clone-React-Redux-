import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import AppStoreImg from "../Images/appstore.png";
import PlaytoreImg from "../Images/playstore.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa fa-android } from '@fortawesome/free-solid-svg-icons';

import "../Styles/Footer.css";
function Footer() {
    return (
        <>
            <Container fluid className="Footer">
                
                <Row>
                    <Col xl={1} lg={1} md={1} sm={12} xs={12}></Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12}>
                        <h6>popular categories</h6>
                        <p><Link to="">Cars</Link></p>
                        <p><Link to="">Flats for rent</Link></p>
                        <p><Link to="">Jobs</Link></p>
                        <p><Link to="">Mobile Phones</Link></p>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12}>
                        <h6>TRENDING SEARCHES</h6>
                        <p><Link to="">Bikes</Link></p>
                        <p><Link to="">Watches</Link></p>
                        <p><Link to="">Books</Link></p>
                        <p><Link to="">Dogs</Link></p>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12}>
                        <h6>ABOUT US</h6>
                        <p><Link to="">About OLX Group</Link></p>
                        <p><Link to="">OLX Blog</Link></p>
                        <p><Link to="">Contact Us</Link></p>
                        <p><Link to="">OLX for Businesses</Link></p>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12}>
                        <h6>OLX</h6>
                        <p><Link to="">Help</Link></p>
                        <p><Link to="">Sitemap</Link></p>
                        <p><Link to="">Legal & Privacy information</Link></p>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={12}>
                        <h6>FOLLOW US</h6>
                        <p></p>
                        <p></p>
                        <p><Link to=""> <img src={AppStoreImg} alt="App Store"  width="70px"  height="70px"/> </Link>
                         <Link to=""> <img src={PlaytoreImg} alt="App Store"   width="70px"  height="34px" /> </Link> </p>
                    </Col>

                    <Col xl={1} lg={1} md={1} sm={12} xs={12}></Col>

                </Row>
            </Container>
            <Container fluid className="smallFooter">
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>Other Countries India - South Africa - Indonesia</Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}> <span style={{float:"right"}}>Free Classifieds in Pakistan. © 2006-2020 OLX</span></Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer;