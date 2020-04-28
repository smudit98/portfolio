import React from 'react';
import { Grid, Cell } from 'react-mdl'
import Fade from 'react-reveal/Fade'

function Home() {
    return (
        <Grid className="homepage">

            <Cell className="banner-text" col={12}>
                <Fade>
                    <h2>Mudit Sharma</h2>
                    <hr/>
                    <p>Java | ReactJS | C | HTML/CSS | Javascript | C# | XAMARIN.Forms</p>
                    <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    </div>
                </Fade>
            </Cell>


        </Grid>
    );
}
export default Home;
