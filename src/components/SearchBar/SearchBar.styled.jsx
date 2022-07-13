import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
width: 100%;
max-width: 400px;
margin-top: 15px;
padding: 8px;
`;
export const Button = styled.button`
display: inline-block;
border-radius: 8px;
width: 68px;
height: 46px;
opacity: 0.7;
cursor: pointer;
padding: 0;
background-color: rgb(158, 207, 219);
& :hover{
  opacity: 2;
}
`; 

export const Input = styled.input`
display: inline-block;
width: 100%;
height: 40px;
font: inherit;
font-size: 22px;
border-radius: 8px;
& ::placeholder{
  font: inherit;
  font-size: 22px;
}
`;