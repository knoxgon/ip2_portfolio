import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const GeneralContent = styled.div`
  min-height: 100vh;
`;

const CompLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  z-index: -1;
`;

const CompLogo = styled.img`
  z-index: -1;
`;

const UnderView = styled.img`
  width: 50rem;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    width:  50rem;
  }
  @media (max-width: 500px) {
    width: 40rem;
  }
  @media (max-width: 400px) {
    width: 30rem;
  }
  @media (max-width: 300px) {
    width: 20rem;
  }
`;


export {
  Content,
  UnderView,
  GeneralContent,
  CompLogoContainer,
  CompLogo
};