import React from 'react';
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



    return (<>




        <div className="container-fluid About " id='ab' style={{ background: "#161616" }}>

            <div className="row info container " >
                <div className=" col-md-8 col1" >
                    <h1 style={{ textAlign: "center", marginBottom: "1.5rem", marginTop: "10px" }}>about <span style={{ color: "#ffc107" }}>me</span></h1>
                    <p>Hi ,I'm Mayank Ashtekar from Nagpur, India, with a B.Tech in Electronics Engineering from Yeshwantrao Chavan College of Engineering, Nagpur. I have a strong interest in computer science and programming, and I’ve developed skills in C, C++, Python, and SQL through various online courses.

                        I am passionate about web development and eager to learn about new technologies. I aim to use my skills and knowledge to create innovative solutions that solve real-world problems."
                    </p>


                    <p style={{ color: "#ffc107" }}>"Strive to build things that make a difference!" <span style={{ color: "#ffc107" }}>.....Mayank</span></p>
                </div>
                <div className=" col-md-4 col2">

                    <div>
                        <img loading="lazy" src={dp3} alt="" style={{ width: "100%", margin: "0px 0px 10px 0px" }} />

                    </div>

                </div>

            </div>

            <div className='skillSet ' >
                <h2 style={{ margin: "45px 0px" }}>professional <span style={{ color: "#ffc107" }}>skillset </span></h2>
                <div className="row r1 ">
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={c} alt="" style={{ width: "60px" }} />
                            <p>C</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={cplus} alt="" style={{ width: "60px" }} />
                            <p>C++</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={python} alt="" style={{ width: "60px" }} />
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={sql} alt="" style={{ width: "60px" }} />
                            <p>SQL</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={html} alt="" style={{ width: "60px" }} />
                            <p>HTML</p>
                        </div>
                    </div>


                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={css} alt="" style={{ width: "60px" }} />
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={js} alt="" style={{ width: "60px" }} />
                            <p>Java Script</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={react} alt="" style={{ width: "60px" }} />
                            <p>React</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">

                        <div>
                            <img loading="lazy" src={nodejs} alt="" style={{ width: "60px" }} />
                            <p>Node Js</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">

                        <div>
                            <img loading="lazy" src={mongo} alt="" style={{ width: "60px" }} />
                            <p>Mongo DB</p>
                        </div>

                    </div>
                  

                </div>

               

                <h2 style={{ margin: "20px 0px" }}>tools <span style={{ color: "#ffc107" }}>I use </span></h2>
                <div className="row r3 ">
                    <div className="col-md-2 col-5 sd">

                        <div>
                            <img loading="lazy" src={vscode} alt="" style={{ width: "60px" }} />
                            <p>VS Code</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">

                        <div>
                            <img loading="lazy" src={bootstrap} alt="" style={{ width: "60px" }} />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">

                        <div>
                            <img loading="lazy" src={tailwind} alt="" style={{ width: "60px" }} />
                            <p>Tailwind</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">

                        <div>
                            <img loading="lazy" src={netlify} alt="" style={{ width: "60px" }} />
                            <p>Netlify</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={git} alt="" style={{ width: "60px" }} />
                            <p>Git</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 sd">
                        <div>
                            <img loading="lazy" src={github2} alt="" style={{ width: "60px" }} />
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#161616" }}>
                    <span style={{
                        margin: "auto", paddingLeft: "35px", marginTop: "31px", marginBottom: "10px"
                    }}>Created By Mayank Ashtekar</span>
                    <a href="#ab">  <img loading="lazy" src={arrow} alt="" style={{ width: "29px", marginTop: "20px", marginRight: "6px" }} /></a>

                </div>



            </div >



        </div>
    </>

    )
}
