import React from 'react';
import RatingStar from '../../ui/Stars';
import {RatingBlock, RatingText} from './ratings-styled';

const Rating = ({rating}) => {

    return (
        <RatingBlock>
            <RatingText>Ohodnoťte tento recept</RatingText>
            <RatingStar rating={rating} full={true} />
        </RatingBlock>
    )
}

export default Rating;