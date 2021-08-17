import React from 'react'
import {  Divider , Button } from 'semantic-ui-react';

export default function Skills() {
   
    const DownloadButton = () => {
        const downloadFile = () => {
            window.location.href = "https://drive.google.com/file/d/1dGwmYaPP0yuCvnju4guNbfXeJclBGwC2/view?usp=sharing"
        }
        return (
            <Button
                onClick={downloadFile}
                inverted color='red'>Download Resume
            </Button>
        )
    }
    return (
        <div className="skills-card-main">
            <div className="skills-section">
                <p className="more-about-me">More about me</p>
                <p className="skill-text">I build projects to learn how code works.</p>
                <p className="skill-text">And while I am not coding, I enjoy reading tech and playing computer games.</p>
               <Divider/>
                <p className="expertise">TOP EXPERTISE</p>
                <p className="expertise-body">Front-End Developer with primary focus on Software Development, Progressive Web Applications, Web Applications and API's.</p>

                <DownloadButton />
                <Divider />
                <div className="skills-container">
                    <p>Technologies I use : </p>
                <p>HTML5, CSS3, SASS, JavaScript(ES6), ReactJS, Redux, Webpack, NPM, Git, Bootstrap, Restful API, Fetch API, Redux-Thunk, CSS-in-JS.</p>
                <p>Currently working with Typescript.</p>
                </div>
            </div>
            
            <div className="links-section"></div>
        </div>
    )
}
