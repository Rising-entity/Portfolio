import React, { useEffect } from 'react';
import logo1 from '../images/logo1.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../about/About.css"
import dp3 from "../about/imgaes/dp2.jpg"
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
import nodejs from '../images/nodejs.png';
import mongo from '../images/mongo.png';
import git from '../images/git.png';
import github2 from '../images/github2.png';
import tailwind from '../images/tailwind.png';
import arrow from '../images/arrow.png';

export default function About() {

    useEffect(() => {
        // Scroll to the .about element when the component mounts
        const aboutSection = document.querySelector('.About');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

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
                        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>about <span style={{ color: "rgb(41, 120, 181)" }}>me</span></h1>
                        <p>Hi ,I'm Mayank Ashtekar from Nagpur, India, with a B.Tech in Electronics Engineering from Yeshwantrao Chavan College of Engineering, Nagpur. I have a strong interest in computer science and programming, and I’ve developed skills in C, C++, Python, and SQL through various online courses.

                            I am passionate about web development and eager to learn about new technologies. I aim to use my skills and knowledge to create innovative solutions that solve real-world problems."
                        </p>


                        <p style={{ color: "#2978b5" }}>"Strive to build things that make a difference!" <span style={{ color: "black" }}>.....Mayank</span></p>
                    </div>
                    <div className=" col-md-4 col2">

                        <div>
                            <img src={dp3} alt="" style={{ width: "100%", margin: "0px 0px 10px 0px" }} />

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
                        <div className="col-md-2 col-5 "><img src={nodejs} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={mongo} alt="" style={{ width: "60px" }} /></div>
                    </div>
                    <h2 style={{ margin: "20px 0px" }}>tools <span style={{ color: "rgb(41, 120, 181)" }}>I use </span></h2>
                    <div className="row r3 ">
                        <div className="col-md-2 col-5"><img src={vscode} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={bootstrap} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={tailwind} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={netlify} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={git} alt="" style={{ width: "60px" }} /></div>
                        <div className="col-md-2 col-5"><img src={github2} alt="" style={{ width: "60px" }} /></div>
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
