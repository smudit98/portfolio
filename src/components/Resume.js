import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Skills from './SkillsComponent'
import Exerience from './Experience'
import Education from './Education'
import Fade from 'react-reveal/Fade';
function Resume() {
    return (
        <div classname="container">
            <Grid className="resume">
                <Cell col={4} className="resumeLeft">
                    <Grid>
                        <Cell col={12} className="myPic">
                        </Cell>
                        <Cell col={12}>
                            <h2>Mudit Sharma</h2>
                            <h4>Student</h4>
                            <hr/>
                            <p>
                            An inquisitive learner seeking to leverage analytical,coding and leadership skills working on projects
                            </p>
                            <hr/>
                            <span><span className="fa fa-map-marker fa-lg"></span>  Gurgaon</span>
                            <br/>
                            <br/>
                            <span><span className="fa fa-mobile fa-lg"></span>  +91 9582519118</span>
                            <br/>
                            <br/>
                            <span><span className="fa fa-envelope fa-lg"></span>  muditsharma.work@gmail.com</span>
                            
                        </Cell>

                    </Grid>
                </Cell>
                <Cell col={8} className="resumeRight">
                    <Fade>
                    <Skills />
                    <hr/>
                    </Fade>
                    <Fade>
                    <Exerience/>
                    <hr/>
                    </Fade>
                    <Fade>
                    <Education/>
                    </Fade>
                </Cell>
            </Grid>
        </div>
    );
}
export default Resume;