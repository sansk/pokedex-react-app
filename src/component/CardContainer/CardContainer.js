import React from 'react';
import Card from '../Card/Card';

import './CardContainer.css'

const CardContainer = (props) => {
    return (
        <div className="cardContainer">
            {
                props.pokes.map((poke, i) => (
                        <Card key={i + 1} poke={poke} pokeId={i + 1} />
                ))
            }
        </div>
    );
}

export default CardContainer;