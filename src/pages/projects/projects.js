import React from 'react'
import Card from '../../components/card/card';

import './projects.css'

function projects() {
    return (
        <div className="projects-container">
            <h1 style={{marginTop: 2 + 'em'}}><a href="/">Projects</a></h1>
            <Card></Card>
        </div>

    )
}

export default projects
