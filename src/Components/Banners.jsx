import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import phoneApp from "../Images/phone-app.png";
import "../Styles/Banners.css";
import AppStoreImg from "../Images/appstore.png";
import PlaytoreImg from "../Images/playstore.png";
import topBanner from "../Images/topBanner.png"
function BannersHeader(){
    return (
        <div>
            <Container fluid>
                <Row>
                     <Col>
                       <img src={topBanner} alt="topBanner" style={{width:"100%",height:"200px"}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
function BannersFooter() {
    return (
        <div>
            <br/>
            <Container fluid>
                <Row  className="FooterBanner">
                     <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                     <div className="imgClass">
                          <img src={phoneApp} alt="Mobile Phone"/>
                           
                           </div> 
                     </Col>
                     <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <br/>
                        <h2> TRY THE OLX APP </h2>
                        <p>
                            Buy, sell and find just about anything using the app on your mobile.
                        </p>

                     </Col>
                     <Col xl={2} lg={2} md={2} sm={12} xs={12}>
                            <br/>
                            <br/>
                            <h6>GET YOUR APP TODAY</h6>
                            <img src={AppStoreImg} alt="App Store" style={{width:"100px",height:"100px"}}/>
                            <img src={PlaytoreImg} alt="App Store" style={{width:"100px",height:"50px"}}/>
                     </Col>
                </Row>
            </Container>            
        </div>
    )
}
export {BannersHeader,BannersFooter};