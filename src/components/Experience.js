import React from 'react'
import {Grid,Cell} from 'react-mdl'
function Experience(){
    return(
        <div>
            <h3>Experience</h3>
            <Grid>
                <Cell col={4}>
                    <p>June 2019 - July 2019</p>
                </Cell>
                <Cell col={8}>
                    <h5>Vserve Solutions</h5>
                    <h6>Bed Bath and Beyond</h6>
                    <br/>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Cell>
            </Grid>
        </div>
    );
}
export default Experience;