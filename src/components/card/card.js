import React from 'react'
import './cards.css';

function card() {
    return (
        <div className='card'>
            
            <div className='card-inner'>
                <div className='card-front'>
                    <img src='https://user-images.githubusercontent.com/26158226/38518394-9ee97306-3bf1-11e8-8df2-8c05fb75249a.png' alt='' />
                </div>
                <div className='card-back'>
                    <h1>Test</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> Test
                        </li>
                        <li>
                            <strong>Nickname:</strong> Test
                        </li>
                        <li>
                            <strong>Birthday:</strong> Test
                        </li>
                        <li>
                            <strong>Status:</strong> Test
                        </li>
                    </ul>
                </div>
            </div>

            
        </div>

        
    )
}

export default card
