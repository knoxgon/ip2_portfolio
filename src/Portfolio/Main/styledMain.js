import styled, {keyframes} from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


const MainContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #ffffff;
  margin-top: 5rem;
  animation: ${FadeIn} ease 2s;
  transition: all 1s linear;

  @media (max-width: 768px) {
    width: 50rem;
    transition: all 1s linear;
  }
  @media (max-width: 500px) {
    width: 37rem;
    transition: all 1s linear;
  }
`;

const MainHeader = styled.section`
  width: 100rem;
  background-color: #eeeeee;
  margin-top: 3rem;
  transition: all 1s linear;

  @media (max-width: 900px) {
    transition: all 1s linear;
  }

  @media (max-width: 768px) {
    transition: all 1s linear;
    width: 50rem;
    
  }
  @media (max-width: 500px) {
    transition: all 1s linear;
    width: 37rem;
    
  }
`;

export {
  MainContainer,
  MainHeader
}