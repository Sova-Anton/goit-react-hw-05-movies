import styled from "styled-components";

export const Thumb = styled.ul`
padding: 20px 0;
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 15px;

`
export const Name = styled.p`
margin-top: 10px;
    color: red;
`
export const Character = styled.span`
    color: #079b00;
    
`
export const ImageSizes = styled.img`
    width: 100px;
    height: 150px;
`