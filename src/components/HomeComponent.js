import React from 'react';
import { Grid, Cell, Button } from 'react-mdl'
import Fade from 'react-reveal/Fade'
import {useHistory} from 'react-router-dom'

function Home() {
    let history=useHistory();
    function handleClick(){
        history.push("/resume");
    }
    return (
        <Grid className="homepage">

            <Cell className="banner-text" col={12}>
                <Fade>
                    <h2>Hello,</h2>
                    <p>
                        I'm Mudit Sharma
                    </p>
                    <hr/>
                    {/* <span className="subline">Java | ReactJS | C | HTML/CSS | Javascript | C# | XAMARIN.Forms</span>
                    <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    </div> */}
                    <div className="description">
                        Front End Web-Developer | Java programmer <br/>
                        A 3rd year student pursuing Computer Science along with a minor in Machine <br/>Learning and Artificial Intelligence from MIT, Manipal.
                    </div>
                    <Button className="knowmoreButton" raised onClick={handleClick}>Know More</Button>

                </Fade>
            </Cell>


        </Grid>
    );
}
export default Home;
