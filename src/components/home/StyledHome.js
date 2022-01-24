import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  padding: 2%;
  margin: 0 auto;
  max-height: 100%;
  align-items: center;

  img {
    max-width: 100%;
    margin-right: 3%;
    max-height: 100%;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 7%;
  }

  p {
    color: #bbb;
  }

  @media (max-width: 1280px) {
    display: block;

      img {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5%;
    }
    }
  }
`;
