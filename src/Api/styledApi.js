import  styled, {keyframes} from 'styled-components';


const ContentApi = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  
`;
const ContentA = styled(ContentApi)`
  & a {
    text-decoration: none;
    margin-left: 5rem;
    background-color: azure;
    font-size: 3rem;
    color: teal;
  }
`;

const Fade = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const FadeParagraph = styled.p`
  animation: ${Fade} 1s ease;
  font-size: 2rem;
`;

const ApiArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;
  margin-top: 5rem;

  & h1 {
    font-size: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  & input {
    height: 24px;
  }
  & button {
    height: 30px;
  }
`;

const Document = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-size: 2rem;
`;

const CriticalInfo = styled.div`
  font-size: 3rem;
  color: gray;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

export {
  ContentA,
  Document,
  Form,
  FadeParagraph,
  ApiArea,
  ContentApi,
  CriticalInfo
}
