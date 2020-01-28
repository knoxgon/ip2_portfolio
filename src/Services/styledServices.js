import  styled, {keyframes, css} from 'styled-components';

const AnimFR = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  margin-top: 10rem;
  margin-bottom: 5rem;
`;

const ServicePageDescription = styled.div`
  margin-top: 15rem;
  font-size: 6rem;
  color: black;
  font-family: 'Varela Round', sans-serif;
  text-align: center;
  justify-content: center;
  
`;

const ServiceMiscLine = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  width: 35%;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ServiceElement = styled.div`
  width: 30rem;
  height: auto;
  margin-right: 2rem;

  &:not(:last-child):after {
    @media (max-width: 657px) {
      content:"";
      background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
      display: block;
      height:1px;
      margin-bottom: 5rem;
    }
  }

  animation: ${props => css`${AnimFR} ease ${props.dur}`};
`;

const ServiceElementImage = styled.img`
  justify-content: center;
  text-align: center;
  size: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ServiceElementTitle = styled.div`
  justify-content: center;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #4f4f4f;
  margin-top: 1rem;
`;

const ServiceElementDescription = styled.div`
  font-size: 1.75rem;
  padding: 2rem;
  margin-top: 3rem;
  font-family: 'Varela Round', sans-serif;
`;

const DimSpan = styled.span`
  background-color: black;
  color: #B9F2FF;
  font-size: 1.4rem;
`;

const PlatSpan = styled.span`
  background-color: black;
  color: #D2D3D5;
  font-size: 1.4rem;
`;

const GoldSpan = styled.span`
  background-color: black;
  color: #CFA935;
  font-size: 1.4rem;
`;

export {
  ServiceContainer,
  ServiceElement,
  ServicePageDescription,
  ServiceElementImage,
  ServiceElementTitle,
  ServiceElementDescription,
  ServiceMiscLine,
  DimSpan,
  PlatSpan,
  GoldSpan
}
