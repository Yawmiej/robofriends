import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardArray = robots.map(card => {
            return <Card 
                        name = {card.name}
                        id = {card.id}
                        key = {card.id}
                        email = {card.email}
                    /> 
        } )

    return (
        <div>
            {cardArray};
        </div>
    )
}

export default CardList;