import React from 'react';
import { Grid, Cell } from 'react-mdl'
import { Jumbotron } from 'reactstrap'

function Home() {
    return (
        <div classname="container" style={{margin:10}}>
            <Jumbotron classname="jumbo">
                <h1>Mudit Sharma</h1>
                <p>An inquisitive learner seeking to leverage skills by working on projects</p>
            </Jumbotron>
        </div>
    );
}
export default Home;
