import styled from "styled-components";

const backgroundImage = './images/star.png';

const MainContent = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: pink;
    background-image: url(${backgroundImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    img, iframe {
        width: 80%;
        height: 50%;
        object-fit: cover;
    }
`;

export { MainContent };