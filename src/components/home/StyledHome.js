import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  padding: 60px;
  margin: 0 auto;
  max-height: 100%;
  align-items: center;

  img {
    width: 50%;
    margin-right: 50px;
    object-fit: contain;
    max-height: 80vh;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 30px;
  }

  p {
    color: #bbb;
  }

  @media (max-width: 1280px) {
    display: block;

    img {
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;
