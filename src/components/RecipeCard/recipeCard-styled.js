import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeCardStyled = styled(Link)`
    display: flex; 
    padding: 20px;
    text-decoration: none;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
`;

export const RecipeCardImage = styled.img`
    border-radius: 20px;

`;

export const RecipeCardContent = styled.div`
    padding: 0 15px;
`; 

export const RecipeCardName = styled.h3`
    font-weight: bold; 
    text-decoration: none; 
    color: rgb(0, 0, 255);
    
    &:hover {
        text-decoration: underline; 
    }
`;

export const RecipeCardDuration = styled.div`
    position: relative;
    padding-right: 30px;
    font-size: 1rem;
    color: black;


    &::before {
        content: '';
        position: absolute;
        top: 5px; 
        left: 10px;
        width: 10px; 
        height: 10px;
        background-image: url("../../assets/icons/clock.png");
        background-position: center;
        background-repeat: no-repeat;
    }
`;
