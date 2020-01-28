import styled from 'styled-components';
import { FadeFromRight, FadeFromTop, FadeFromBottom } from '../../__shared';

const ProfileStartArt = styled.span`
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex-basis: 100%;
    width: 15rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-left: auto;
    width: 0;
  }
`;


const ProfileStartArtImgStyle = styled.img`
  border-radius: 50%;
  margin: 1rem;
  margin-left: 5rem;
  padding: 2rem;
  z-index: 0;
  animation: ${FadeFromTop} ease 2.5s;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ProfileStartDescDescription = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: italic;
  padding: 2rem;
  line-height: 2.6rem;
  font-size: 1.6rem;
  margin: 2rem 5rem 4rem 5rem;

  animation: ${FadeFromBottom} ease 3.5s;


  @media (max-width: 768px) {
    max-width: 50rem;
    text-align: center;
    margin: 2rem 1rem 4rem 1rem;
  }
`;



const ProfileStartArtGroup = styled.span`
  display: flex;
  flex-direction: column;
  font-family: 'Merriweather Sans', sans-serif;
  margin-left: 5rem;
  align-content: flex-start;

  & h1 {
    height: 1rem;
    width: 25rem;
    font-size: 3.5rem;
    animation: ${FadeFromRight} ease 1.5s;

    @media (max-width: 900px) {
      margin-top: 1rem;
      margin-bottom: 4rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 3.5rem; 
    }

    @media (max-width: 768px) {
      margin-right: 5rem;
    }
  } 
  
  & h3 {
    font-size: 1.5rem;
    color: #1F95AC;
    animation: ${FadeFromRight} ease 2.5s;


    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;
      justify-content: center;
      align-items: center; 
    }
    @media (max-width: 768px) {
      margin-right: 5rem;
    }
  }
`;




const ProfileStartContactInfo = styled.span`
  animation: ${FadeFromRight} ease 3.5s;

  & a {
    font-size: 1.5rem;
    text-decoration: none;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 1rem;
    }

    @media (max-width: 768px) {
      margin-right: 5rem;
    }

    &::after {
      content: '|';
      color: #CCC;
      margin: 0px 0.5rem;

      @media (max-width: 900px) {
        content: '|';
        color: #CCC;
        margin: 0px 0.5em; 
      }
    }
  }

  & img {
    margin-right: 0.2rem;
    vertical-align: middle;

    @media (max-width: 900px) {
      margin-right: 0.2rem; 
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;


export {
  ProfileStartArt,
  ProfileStartArtGroup,
  ProfileStartArtImgStyle,
  ProfileStartContactInfo,
  ProfileStartDescDescription
}
