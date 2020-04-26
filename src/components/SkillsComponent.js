import React from 'react'
import {Grid,Cell} from 'react-mdl'
import Progress from './Progress'
function Skills(){
    return(
        <div classname="container">
            <h3>Skills</h3>
            <p>Java</p>
            <Progress percent="80"/>
            <p>ReactJS</p>
            <Progress percent="50"/>
            <p>C</p>
            <Progress percent="60"/>
            <p>HTML/CSS/Javascript</p>
            <Progress percent="60"/>
            <p>Xamarin</p>
            <Progress percent="40"/>
            <p>C#</p>
            <Progress percent="40"/>

        </div>
    );
}
export default Skills;