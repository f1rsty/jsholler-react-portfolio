import React from 'react';

import './home.css';

import Typewriter from '../../components/typewriter/typewriter';


function home() {
    return (

        <div class="content-wrapper">

            <div class="center">
                <Typewriter />
            </div>

            <ul class="fade-in">
                <li><a href="/projects" target="_top">Projects</a></li>
                <li><a href="https://github.com/f1rsty" target="_blank">Github</a></li>
                <li><a href="resume.html" target="_top">Resume</a></li>
                <li><a href="/certifications" target="_top">Certifications</a></li>
                <li><a href="mailto: itsjms@gmail.com">Contact Me</a></li>
            </ul>

        </div>


    )
}

export default home
