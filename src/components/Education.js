import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Fade from 'react-reveal/Fade';
function Education() {
    return (
        <div>
            <h3>Education</h3>
            <Grid>
                    <Cell col={4}>
                        <p><br/>June 2017 - current </p>
                    </Cell>
                    <Cell col={8}>
                        <h4>Manipal Institute of Technology</h4>
                        <h6>BTech: Computer Science</h6>
                    </Cell>
                    <Cell col={4}>
                        <p><br/>2015 - 2017 </p>
                    </Cell>
                    <Cell col={8}>
                        <h4>Amity International School</h4>
                        <h6>PCM</h6>
                    </Cell>
            </Grid>
        </div>
    );
}
export default Education;