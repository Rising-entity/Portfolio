import React from 'react'
import logo1 from '../images/logo1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../about/About.css"
import dp from "../about/imgaes/DSC_0259.JPG"
import dp2 from "../about/imgaes/dp2.jpg"
import dp3 from "../about/imgaes/dp3.jpg"
import c from '../about/imgaes/c.png';
import cplus from '../about/imgaes/c++.png';
import python from '../about/imgaes/python.png';
import sql from '../about/imgaes/sql.png';
import html from '../about/imgaes/html.png';
import css from '../about/imgaes/css.png';
import js from '../about/imgaes/javascript.png';
import react from '../about/imgaes/react.png';
import vscode from '../about/imgaes/vscode.png';
import netlify from '../about/imgaes/netlify.png';
import bootstrap from '../about/imgaes/bootstrap.png';
import github from '../about/imgaes/github.png';
import arrow from '../images/arrow.png';

export default function About() {

    const navigate = useNavigate();

    const navigateToSection2 = () => {
        navigate('/#sec2');
    };
    const navigateToContact = () => {
        navigate('/#sec4');
    };
    return (<>

        <div>

            <div className="Navbar">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img className="logo1" src={logo1} alt="" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/about">
                                        about
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sec2" onClick={navigateToSection2}>
                                        projects
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#sec4" onClick={navigateToSection2}>
                                        contacts
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container-fluid About " id='ab'>
                <div className="row info " style={{ margin: "10px", minHeight: "457px" }}>
                    <div className=" col-md-8 col1" >
                        <h1 style={{ textAlign: "center" }}>about <span style={{ color: "rgb(41, 120, 181)" }}>me</span></h1>
                        <p>Hi Everyone, I am Mayank Ashtekar from Nagpur, India.
                            I am currently employed as a software developer at Persistent Systems.
                            I have completed my Btech in Electronics Engineering from YCCE Nagpur,Maharashtra.

                        </p>
                        <p> Apart from coding, some other activities that I love to do!</p>

                        <p>Playing Cricket</p>
                        <p>Travelling </p>

                        <p>"Strive to build things that make a difference!"

                            .. Mayank</p>
                    </div>
                    <div className=" col-md-4 col2">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade"  >
                            <div className="carousel-inner" style={{ borderRadius: "10px" }}>
                                <div className="carousel-item active">
                                    <img src={dp} className="d-block w-100 img-fluid " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={dp2} className="d-block w-100 img-fluid " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={dp3} className="d-block w-100 img-fluid " alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                </div>

                <div className='skillSet ' >
                    <h2 style={{ margin: "45px 0px" }}>professional <span style={{ color: "rgb(41, 120, 181)" }}>skillset </span></h2>
                    <div className="row r1 ">
                        <div className="col-md-2 col-5"><img src={c} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={cplus} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={python} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={sql} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={html} alt="" style={{ width: "60px" }} /></div>
                    </div>
                    <div className="row r2 ">
                        <div className="col-md-2 col-5"><img src={css} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={js} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={react} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5 "><img src={react} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={react} alt="" style={{ width: "60px" }} /></div>
                    </div>
                    <h2 style={{ margin: "20px 0px" }}>tools <span style={{ color: "rgb(41, 120, 181)" }}>I use </span></h2>
                    <div className="row r3 ">
                        <div className="col-md-2 col-5"><img src={vscode} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={bootstrap} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={netlify} alt="" style={{ width: "60px" }} /></div>
                    </div>


                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                        margin: "auto", paddingLeft: "35px", marginTop: "31px",
                        color: "#02109d"
                    }}>Created By Mayank Ashtekar</span>
                    <a href="#ab">  <img src={arrow} alt="" style={{ width: "35px", marginTop: "20px" }} /></a>

                </div>



            </div >



        </div >

    </>

    )
}
