import React, { useEffect } from 'react';
import { useState } from "react";
import { VANTA } from 'vanta';
import BIRDS from './images/vanta.birds.min.js';
import RINGS from './images/vanta.rings.min.js';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import img1 from './images/img1.png';
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
import './Home.css';

function Home() {
    
    useEffect(() => {
        VANTA.BIRDS({
            el: "#myid",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xf7f7f7,
            color1: 0xff35
        });

    }, []);


    return (
        <div className="Home" >
            <div id='myid'>
                <div className="Navbar">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img className="logo1" src={logo1} alt="" />
                            </a>
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
                                        <a className="nav-link" aria-current="page" href="#">
                                            about
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            projects
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            edu.
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            contacts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Night Mode
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="section1">
                    <div id='box1'>
                        <h1>
                            MAYANK <span style={{ color: "#2978b5" }}>ASHTEKAR</span>
                        </h1>
                        <h2>Software Engineer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab reprehenderit culpa atque exercitationem.
                            Distinctio, exercitationem, libero, doloremque magnam non quibusdam facilis maiores dicta ut dolorem iusto
                            laborum! Eaque, dolorem.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="">Download Resume</a>
                        </div>
                    </div>

                </div>
                <hr style={{ margin: "0px" }} />

            </div>

            <div className="section2">
                <h1 style={{ textAlign: "center" }}>Projects</h1>
                <div className="row">
                    <div className="col-md-3">
                        <div className='box'>
                            <h2>project1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quis sapiente beatae esse laborum voluptatibus, animi voluptatem eligendi excepturi quisquam consequuntur repellat harum quaerat, eaque rerum praesentium ad enim. Sapiente.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='box'>
                            <h2>project2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quis sapiente beatae esse laborum voluptatibus, animi voluptatem eligendi excepturi quisquam consequuntur repellat harum quaerat, eaque rerum praesentium ad enim. Sapiente.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='box'>
                            <h2>project3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quis sapiente beatae esse laborum voluptatibus, animi voluptatem eligendi excepturi quisquam consequuntur repellat harum quaerat, eaque rerum praesentium ad enim. Sapiente.</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr style={{ margin: "0px" }} />


            <div className="section3">
                <h1>skillset</h1>

                <div>
                    <div className="languages">
                        <h2>languages</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={c} alt="" /> <img src={cplus} alt="" /><img src={python} alt="" /><img src={sql} alt="" />
                        </div>

                    </div>
                    <div className="webdev">
                        <h2>web development</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={html} alt="" /> <img src={css} alt="" /><img src={js} alt="" /><img src={react} alt="" />
                        </div>
                    </div>
                    <div className="tools">
                        <h2>tools and libraries</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={vscode} alt="" /> <img src={bootstrap} alt="" /><img src={netlify} alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <hr style={{ margin: "0px" }} />

            <div className="section4">

                <div>
                    <h1>Contact</h1>
                    <a href="">email me</a>
                    <h2>find me on</h2>
                    <div><img src={linkedin} alt="" /> <img src={instagram} alt="" /> <img style={{ width: "39px", margin: "0px 0px 0px 3px" }} src={github} alt="" /> </div>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f7f7f7" }}>
                <span style={{
                    margin: "auto", paddingLeft: "35px", marginTop: "31px",
                    color: "#1565C0"
                }}>Created By Mayank Ashtekar</span>
                <img src={arrow} alt="" style={{ width: "35px", marginTop: "20px" }} />
            </div>





        </div >
    );
}
export default Home;
