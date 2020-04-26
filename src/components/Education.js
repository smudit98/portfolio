import React from 'react'
import { Grid, Cell } from 'react-mdl'
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
                        <h5>Manipal Institute of Technology</h5>
                        <h6>BTech: Computer Science</h6>
                        <br />
                        <br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={4}>
                        <p>2015 - 2017 </p>
                    </Cell>
                    <Cell col={8}>
                        <h5>Amity International School</h5>
                        <h6>PCM</h6>
                        <br />
                        <br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Cell>
                </Grid>
            </Grid>
        </div>
    );
}
export default Education;