import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Fade from 'react-reveal/Fade';
function Education() {
    return (
        <div>
            <h3>Education</h3>
            <Grid>
                <Grid>
                    <Cell col={4}>
                        <p>June 2017 - current </p>
                    </Cell>
                    <Cell col={8}>
                        <h4>Manipal Institute of Technology</h4>
                        <h6>BTech: Computer Science</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={4}>
                        <p>2015 - 2017 </p>
                    </Cell>
                    <Cell col={8}>
                        <h4>Amity International School</h4>
                        <h6>PCM</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Cell>
                </Grid>
            </Grid>
        </div>
    );
}
export default Education;