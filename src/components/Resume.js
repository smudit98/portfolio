import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Skills from './SkillsComponent'
import Exerience from './Experience'
import Education from './Education'
function Resume() {
    return (
        <div classname="container">
            <Grid >
                <Cell col={4}>

                </Cell>
                <Cell col={8} className="resumeRight">
                    <Skills />
                    <Exerience/>
                    <Education/>
                </Cell>
            </Grid>
        </div>
    );
}
export default Resume;