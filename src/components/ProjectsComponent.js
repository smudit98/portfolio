import React from 'react'
import { Card, CardText, CardTitle, CardActions, Grid, Cell, Button } from 'react-mdl'
import Zoom from 'react-reveal/Zoom';
function RenderCard({ title, text, tech, clas }) {
    return (
        <Card className="cardTrans" shadow={5} style={{ width: '90%', height: '300px'}} >
            <CardTitle expand className={clas} >{title}</CardTitle>
            <span  className="cardText">
                <CardText>
                    <p>
                    {text}
                    Tech-Stack: {tech}
                    </p>
            </CardText>
            </span>
            <CardActions border>
                <Button colored>GITHUB</Button>
            </CardActions>
        </Card>
    );
}
function Projects() {
    return (
        <div>
            
            <Grid style={{ padding: '20px' }} className="projectGrid">
                <Cell expand col={5}>
                    <RenderCard title="Portfolio" text="I took up this website as a project to leverage my front end development skills"
                    tech="ReactJS, HTML, CSS" />
                </Cell>
                <Cell expand col={5}>
                    <RenderCard title="FoodKart" text="A Cross-Platform Mobile Application built using the Model-View-ViewModel Design pattern"
                    tech="XAMARIN.Forms, Xaml, C#, Firebase"
                    clas="foodkart"
                    />
                </Cell>
                <Cell expand col={5}>
                    <RenderCard title="BookIt" text="A 12 hour code sprint to create a movie booking system with an attached database capable of making reservations checking availability of seats and browing movies"
                    tech="JAVA (Netbeans), Oracle SQLite"
                    clas="bookit" />
                </Cell>
                <Cell expand col={5}>
                    <RenderCard title="Color Game" text="An interactive game to test your knowledge of color mixing. Toggle between easy and hard difficulty modes. Get Guessing!"
                    tech="HTML, CSS, Bootstrap, JavaScript"
                    clas='colorgame' />
                </Cell>
            </Grid>
            
        </div>
    );
}
export default Projects;