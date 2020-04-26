import React from 'react'
import { Card, CardText, CardTitle, CardActions, Grid, Cell, Button } from 'react-mdl'
function RenderCard({ title, text, tech }) {
    return (
        <Card shadow={5} style={{ width: '100%', margin: 'auto', height: '250px' }}>
            <CardTitle >{title}</CardTitle>
            <CardText>
                <p>
                    {text}
                </p>
                <p>
                    Tech-Stack: {tech}
                </p>
            </CardText>
            <CardActions border>
                <Button colored>GITHUB</Button>
            </CardActions>
        </Card>
    );
}
function Projects() {
    return (
        <div>
            <Grid style={{ padding: '20px' }}>
                <Cell col={1} />
                <Cell expand col={5}>
                    <RenderCard title="Portfolio" text="I took up this website as a project to leverage my front end development skills"
                    tech="ReactJS, HTML, CSS" />
                </Cell>
                <Cell expand col={5}>
                    <RenderCard title="FoodKart" text="A Cross-Platform Mobile Application built using the Model-View-ViewModel Design pattern"
                    tech="XAMARIN.Forms, Xaml, C#, Firebase"
                    />
                </Cell>
                <Cell col={1} />
                <Cell col={1} />
                <Cell expand col={5}>
                    <RenderCard title="BookIt" text="A 12 hour code sprint to create a movie booking system with an attached database capable of making reservations checking availability of seats and browing movies"
                    tech="JAVA (Netbeans), Oracle SQLite" />
                </Cell>
                <Cell expand col={5}>
                    <RenderCard title="Color Game" text="An interactive game to test your knowledge of color mixing. Toggle between easy and hard difficulty modes. Get Guessing!"
                    tech="HTML, CSS, Bootstrap, JavaScript" />
                </Cell>
                <Cell col={1} />
            </Grid>
        </div>
    );
}
export default Projects;