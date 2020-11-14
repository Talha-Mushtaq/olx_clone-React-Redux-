import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
// import {InputGroup,FormControl} from "react-bootstrap";
import Logo from "../Images/olxLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Header.css";
import Login from "./Login";
const nav = [
      {ID:1,label:"Mobiles"},
      {ID:2,label:"Cars"},
      {ID:3,label:"Motorcycles"},
      {ID:4,label:"Mouses"},
      {ID:5,label:"TV"},
      {ID:6,label:"Tablets"},
      {ID:7,label:"Lands"}
];


function Header(props) {

    return (    
        <>  
        <Login />
          <Container fluid className="header fixed flex">
               <Container style={{paddingTop:"1%"}}>
                <Row>
                    <Col xl={1} lg={1} md={1} sm={2} xs={2}><img src={Logo} alt="Logo" className="logoIcon"/></Col>
                    <Col xl={3} lg={3} md={3} sm={10} xs={10}>

                      <div className="location rel flex aic">
                            <span className="icon-search ico s24">
                                <FontAwesomeIcon icon={faSearch}/>
                            </span>
                             <input type="text" placeholder="Your Location" value="Pakistan" className="label s15 font"/>
                             <button className="arrow">
                                <FontAwesomeIcon icon={faChevronDown}/>
                             </button>
                      </div>

                    {/* <InputGroup style={{border:"2px solid red",padding:"5px 1px"}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text  style={{backgroundColor:'white',border:"none",padding:"5px 1px"}}><FontAwesomeIcon icon={faSearch} style={style.seachIcon} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup1" placeholder="Pakistan" className="locationSearchTextField" />
                        <InputGroup.Append>
                        <InputGroup.Text  style={{backgroundColor:'white',border:"none",padding:"5px 1px"}}>
                            <button style={{border:"none",backgroundColor:"white",padding:"1px",margin:"0px",outline:"none"}}>
                            <FontAwesomeIcon icon={faChevronUp} style={style.seachIcon} />
                            </button>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup> */}
            </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>

                      <div className="search flex aic">
                             <input type="text" placeholder="Find Cars , Mobile Phones and many more ..." className="query s25 font"/>
                             <button className="go">
                                <FontAwesomeIcon icon={faSearch} />
                             </button>
                      </div>

                    {/* <InputGroup style={style.dataSearch} className="dataSearch">
                        <InputGroup.Prepend>
                        <InputGroup.Text  style={{backgroundColor:'white',border:"none"}}><FontAwesomeIcon icon={faSearch} style={style.seachIcon} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup1" placeholder="Pakistan" className="locationSearchTextField" />
                        <InputGroup.Append>
                        <InputGroup.Text  style={{backgroundColor:'#002f34',border:"none"}}>
                            <button style={{border:"none",backgroundColor:"#002f34",padding:".55% 0%",margin:"0px",outline:"none",height:"5px"}}>
                            <FontAwesomeIcon icon={faSearch} style={style.seachIcon} />
                            </button>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup> */}
                    </Col>
                    <Col xl={1} lg={1} md={1} sm={6} xs={6}>
                        <div className="actions flex aic">
                             <Link to="/" className="fontb link " style={{fontSize:"18px"}} >Login</Link>
                        </div>    
                    </Col>
                    <Col xl={1} lg={1} md={1} sm={6} xs={6}>
                        <div className="actions flex aic">
                            <button className="sell flex aic">
                               <FontAwesomeIcon icon={faPlus} className="ico s24"/>
                               <h2 className="s15 fontb" style={{marginTop:"5px"}} >Seller</h2>
                            </button>
                        </div>
                        </Col>                   
                </Row>
              </Container>
          </Container>
          <Container fluid>
            <Row>
               <Col xl={1} lg={1} md={1} sm={2} xs={1}>
                    <div className="hnav fixed flex aic">
                        <button className="view-crates flex aic">
                            <h2 className="s24 font">All Categories</h2>
                                <FontAwesomeIcon icon={faChevronDown} className="arrow s24" />
                        </button>
                        {nav.map(item => <Link to={"/browser/"+item.ID} className="noul noulh font s14">{item.label}</Link>)}
                    </div>
               </Col>       
            </Row>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </>  
    );
}

export default Header;