import styled from 'styled-components';

export const RatingStarStyled = styled.span`
    font-size: ${props => props.small ? '1.5rem' : '2rem'};
    color: ${props => props.color ? props.color : 'white'};
`;
