import React from 'react'
import Cards from './card'

import './cards.css';

function cardGrid() {
    return (
        <section className='cards'>
            {items.map((item) => (
                <Cards key={item.char_id} item={item}></Cards>
            ))}
        </section>
    )
}

export default cardGrid
