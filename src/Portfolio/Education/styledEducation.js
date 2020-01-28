import styled from 'styled-components';

import {FadeFromLeft, FadeFromRight} from '../../__shared/';

const EduContainer = styled.section`
  display: flex;
  font-family: 'Ubuntu', sans-serif;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const EduContainerLeftSide = styled.div`
  width: 20rem;
  color: rgb(106, 165, 136);
  margin: 2rem;
  margin-left: 12.5rem;

  animation: ${FadeFromLeft} ease 2.5s;

  & h3 {
    font-size: 1.7rem;

    &::after {
      font-size: 1.4rem;
      content: '🔵';
      text-align: right;
      position: relative;
      left: 10rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0rem;
    margin-left: 2rem;
    width: 9rem;
    & h3 {
      font-size: 1.7rem;

      &::after {
        font-size: 1.4rem;
        content: '';
        text-align: right;
        position: relative;
        left: 10rem;
      }
    }
    
  }
  @media (max-width: 500px) {
    margin-left: 2rem;
    width: 9rem;
    & h3 {
      font-size: 1.7rem;

      &::after {
        font-size: 1.4rem;
        content: '';
        text-align: right;
        position: relative;
        left: 10rem;
      }
    }
    
  }
`;

const EduContainerRightSide = styled.div`
  margin: 1.5rem;
  margin-left: 5rem;

  animation: ${FadeFromRight} ease 2.5s;


  & span {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    margin: 1.5rem;
    margin-left: 2rem;

    & h4 {
      font-size: 1.7rem;
      margin: 0.2rem;
      margin-left: 2rem;
    }

    & p {
      font-size: 1.6rem;
      margin: 0.2rem;
      margin-left: 2rem;
    }

    & img {
      display: flex;
      vertical-align: middle;
    }
    &:last-child{
      color: #6ac1bb;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {

  }
  @media (max-width: 500px) {
    margin: 1rem;
    margin-left: 1rem;
    
  }
`;

const LineSpan = styled(EduContainerRightSide)`
  position:relative;
  padding-bottom: 5px;
  
  &:after {
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:1px;
    border-bottom:1px solid #000;
    content:"";
  }
`;

export {
  EduContainer,
  EduContainerLeftSide,
  EduContainerRightSide,
  LineSpan
}
