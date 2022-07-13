import styled from '@emotion/styled';

export const List = styled.ul`
    list-style:none;
    margin: -10px;
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.li`
text-align: center;
width: 100%;
flex-basis: calc(100% / 5 - 20px);
margin: 10px;
padding: 10px;
`;
export const Title = styled.p`
font-size: 18px;
color: darkblue;
`;

export const Img = styled.img`
height: 150px;
`;

export const Character = styled.p`
color: darkgoldenrod;
`;