import React from 'react'
import {Grid,Cell} from 'react-mdl'
import Progress from './Progress'
function Skills(){
    return(
        <div classname="container">
            <h3>Skills</h3>
            <p>Java</p>
            <Progress percent="90"/>
            <p>ReactJS</p>
            <Progress percent="70"/>
            <p>C</p>
            <Progress percent="70"/>
            <p>HTML/CSS/Javascript</p>
            <Progress percent="70"/>
            <p>Xamarin</p>
            <Progress percent="55"/>
            <p>C#</p>
            <Progress percent="50"/>

        </div>
    );
}
export default Skills;