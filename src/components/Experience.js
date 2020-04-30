import React from 'react'
import {Grid,Cell} from 'react-mdl'
function Experience(){
    return(
        <div>
            <h3>Experience</h3>
            <Grid>
                <Cell col={4}>
                    <p><br/>June 2019 - July 2019</p>
                </Cell>
                <Cell col={8}>
                    <h4>Vserve Solutions</h4>
                    Bed Bath and Beyond
                    <br/>
                    <h5>Intern</h5>
                    <p>Learned about technologies like Xamarin and Xaml and methodologies used in large scale app development.
                    Incorporated those using the MVVM design pattern to work on a food ordering app during the term of the internship.
                    </p>
                </Cell>
            </Grid>
        </div>
    );
}
export default Experience;