import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { VANTA } from 'vanta';
import logo1 from './images/logo1.png';
import c from './images/c.png';
import cplus from './images/c++.png';
import python from './images/python.png';
import sql from './images/sql.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/javascript.png';
import react from './images/react.png';
import vscode from './images/vscode.png';
import netlify from './images/netlify.png';
import bootstrap from './images/bootstrap.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import arrow from './images/arrow.png';
import mongo from './images/mongo.png';
import nodejs from './images/nodejs.png';
import tailwind from './images/tailwind.png';
import git from './images/git.png';
import github2 from './images/github2.png';
import './Home.css';
import newshub from "./images/newshub.png";
import nutrifit from "./images/nutrifit.png"
import fd from "./images/fd.png"
import health from "./images/health.png"





function Home() {
    const [mode, setMode] = useState('light');
    const [bg, setBg] = useState('#f7f7f7');
    const el = window.innerWidth < 768 ? '.Home' : '#myid';
    const bdSize = window.innerWidth < 768 ? 0.5 : 1;
    const speedLimit = window.innerWidth < 768 ? 2 : 5;

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            setBg('#07192f');
        } else {
            setMode('light');
            setBg('#f7f7f7');
        }
    };

    const vantaRef = useRef(null);

    useEffect(() => {
        // Initialize VANTA.BIRDS effect
        vantaRef.current = VANTA.BIRDS({
            el: '#myid',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 400.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: bg,
            color1: 0xff35,
            birdSize: 1,
            speedLimit: 5
        });

        // Cleanup function
        return () => {
            // Destroy VANTA.BIRDS effect when component unmounts
            if (vantaRef.current) {
                vantaRef.current.destroy();
            }
        };
    }, [bg]);


    const location = useLocation();
    const section2Ref = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (location.hash === '#sec2') {
            section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    useEffect(() => {
        if (location.hash === '#sec4') {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);




    return (

        <div className="Home" style={{ background: (mode === "light" ? '#f7f7f7' : '#07192f') }}
        >
            <div  >

                <div className="Navbar">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="#">
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
                                        <a className="nav-link" href="#sec2">
                                            projects
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#sec4">
                                            contacts
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>




                <div className="section1" id='myid'>
                    <div id='box1'>
                        <h1>
                            MAYANK <span style={{ color: "#2978b5" }}>ASHTEKAR</span>
                        </h1>
                        <h2>Web Developer</h2>
                        <div className='box12'>
                            <p >
                                Hi, I’m Mayank Ashtekar, a self-taught programmer with a passion for web development and computer science. I love to learn new things and keep myself updated with the latest technologies.
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a className="btn content-download button-main button-scheme" href={`${process.env.PUBLIC_URL}/Mayank Ashtekar Resume.pdf`} download="Resume" >Download Resume</a>
                        </div>
                    </div>

                </div>
                <hr style={{ margin: "0px" }} />

                {/* //section2 started */}
                <div id='myid2'>

                    <div className="section2 " id='sec2' ref={section2Ref}>
                        <h1 style={{ textAlign: "center" }}>my <span style={{ color: "#2978b5" }}>projects</span></h1>

                        <div className='d-flex justify-content-center baseline' >
                            <div className="row ">
                                <div className="col-md-4 coln">
                                    <div className='box'>
                                        <img src={nutrifit} alt="" style={{ width: "100%", height: "50%" }} />
                                        <div>
                                            <h2>Nutri-fit</h2>
                                            <p>Nutri-Fit enables users to access the nutritional content of any food
                                                they input with seamless integration of the Nutrition API from API Ninjas. Additionally, users can also read
                                                health-related news on the website through the integration of the Bing News API</p>
                                            <div className='tempo'>
                                                <a href="https://nutrifitforyou.netlify.app" target='blank'>Web Link</a>
                                                <a href="https://github.com/Rising-entity/Nutrifit-Final" target='blank'>GitHub</a>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div className="col-md-4 coln">
                                    <div className='box'>
                                        <img src={fd} alt="" style={{ width: "100%", height: "50%" }} />
                                        <div>
                                            <h2>Frozen Delight</h2>
                                            <p>
                                                {/* "Frozen Delight" is an ice cream shop website created using the MERN stack . It allows users to browse a variety of ice cream flavors and purchase their favorite treats online. The site features a smooth user interface and secure payment options to provide an enjoyable shopping experience for ice cream lovers. */}
                                                work in progress
                                            </p>
                                            <div className='tempo'>
                                                <a href="#" target='blank'>Web Link</a>
                                                <a href="https://github.com/Rising-entity/Frozen-Delight.git" target='blank'>GitHub</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="col-md-4 coln" >
                                    <div className='box' >
                                        <img src={newshub} alt="" style={{ width: "100%", height: "50%" }} />
                                        <div>
                                            <h2>News Hub</h2>
                                            <p>News Hub is a dynamic and user-friendly website designed to deliver timely news and information to users. Powered by a robust Google News API, site aggregates news articles, headlines, and updates from diverse sources worldwide</p>
                                            <div className='tempo'>
                                                <a href="https://newshubforyou.netlify.app/" target='blank'>Web Link</a>
                                                <a href="https://github.com/Rising-entity/news-app" target='blank'>GitHub</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='d-flex justify-content-center' >
                            <div className="row ">
                                <div className="col-md-4 coln">
                                    <div className='box'>
                                        <img src={health} alt="" style={{ width: "100%", height: "50%" }} />
                                        <div>
                                            <h2>Health Monitoring Device</h2>
                                            <p>It's a device created using ESP32 module, it measures health parameters such as BPM,body temperature,ECG, spo2</p>
                                            <div className='tempo'>
                                                <a href="https://ieeexplore.ieee.org/document/10544910" target='blank'>published research paper</a>

                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                    <hr style={{ margin: "0px" }} />


                    <div className="section3">
                        <h1>skill-<span style={{ color: "#2978b5" }}>set</span></h1>

                        <div>
                            <div className="languages">
                                <h2>languages</h2>


                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={c} alt="c lang" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={cplus} alt="c++" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={python} alt="python" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={sql} alt="sql" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="webdev">
                                <h2>web development</h2>


                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={html} alt="HTML" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={css} alt="CSS" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={js} alt="JavaScript" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={react} alt="React" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={nodejs} alt="Node.js" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={mongo} alt="MongoDB" />
                                        </div>
                                    </div>
                                </div>


                            </div>



                            <div className="tools">
                                <h2>tools and libraries</h2>

                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={vscode} alt="vscode" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={bootstrap} alt="bootstrap" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={tailwind} alt="tailwind" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={netlify} alt="netlify" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={git} alt="git" />
                                        </div>
                                        <div className="col-2 col-sm-1 d-flex justify-content-center mb-2">
                                            <img src={github2} alt="github" />
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <hr style={{ margin: "0px" }} />

                    <div className="section4" id='sec4' ref={contactRef}>

                        <div>
                            <h1>contact</h1>
                            <a id='mail' href="mailto:ashtekarmayank@gmail.com" target='blank'>email me</a>
                            <h2>find me on</h2>
                            <div>
                                <a href="https://www.linkedin.com/in/ashtekarmayank/" target='blank'>  <img src={linkedin} alt="" /></a>

                                <a href="https://www.instagram.com/rising.entity/" target='blank'><img src={instagram} alt="" /></a>

                                <a href="https://github.com/Rising-entity" target='blank'> <img style={{ width: "39px", margin: "0px 0px 0px 3px" }} src={github} alt="" /></a>
                            </div>
                        </div>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{
                            margin: "auto", paddingLeft: "35px", marginTop: "31px",
                            color: "#02109d"
                        }}>Created By Mayank Ashtekar</span>
                        <a href="#myid">  <img src={arrow} alt="" style={{ width: "35px", marginTop: "20px" }} /></a>

                    </div>




                </div>

            </div>



        </div >
    );
}
export default Home;
