import styled from 'styled-components';
import { FadeFromRight, FadeFromLeft } from '../../__shared';

const ThesisText = styled.article`
  display: flex;
  justify-content: center;
  text-align: initial;
  margin: 4rem 5rem 4rem 5rem;
  padding: 2rem;
  line-height: 2.6rem;
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  animation: ${FadeFromRight} ease 2.5s;

  @media (max-width: 768px) {
    margin: 4rem 1rem 4rem 0rem;
  }
`;

const ThesisHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-bottom: -2rem;
  margin-top: -2rem;
  font-size: 2rem;
  animation: ${FadeFromLeft} ease 2.5s;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const ThesisLink = styled.div`
  animation: ${FadeFromRight} ease 1.5s;
  margin-top: -2rem;
  & a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
    font-family: 'Open Sans', sans-serif;

    &:visited {
      color: black;
    }
    &:hover {
      color: #aeaeae;
    }
    &:link {
      color: purple;
    }
  }
`;

export {
  ThesisText,
  ThesisHeader,
  ThesisLink
}