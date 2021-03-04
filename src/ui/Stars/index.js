import React from 'react';
import { RatingStarStyled } from './stars-styled';


const RatingStar = props => {
    const countStars = props.full ? 5 : props.rating;
    const starItems = [];
    for(let i = 1; i <= countStars; i++) {
        starItems.push(
        <RatingStarStyled 
            color={props.color} 
            small={props.small}
            style={i > props.rating ? {opacity: .3} : {}}
        >
            &#9733;
        </RatingStarStyled>);
    }
    return starItems;
}

export default RatingStar;