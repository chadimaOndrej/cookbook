import styled from 'styled-components';

export const RecipeDetailStyle = styled.div`
    color: #444; 
`;

export const RecipeDetailSubTitle = styled.h4`
    margin-top: 30px;
    color: rgb(0, 0, 255);
`;

export const RecipeDetailTitle = styled.h1`
    
    color: white;
`;

export const RecipeDetailInfoBanner = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 20px;
    font-size: 1rem;
    color: white;
    background-color: rgb(255, 0, 255);
`;

export const RecipeDetailDuration = styled.div`
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

export const RecipeDetailContent = styled.div`
    padding: 20px;
`;
