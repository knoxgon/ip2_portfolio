import styled, {css} from 'styled-components';

import {FadeFromRight, FadeFromLeft} from '../__shared/';

const Header = styled.div`
  display: flex;
  position:fixed;
  left: 0;
  top: 0;
  right: 0;
  font-family: 'Varela Round', sans-serif;
  z-index: 1;
  margin-bottom: 10rem;
`;

const Logo = styled.div`
  background-color: white; 
  width: 100%;
  
  & img {
    margin-left: 5rem;
  }

  @media (max-width: 1020px) {
    & img {
      margin-left: 0;
    }
  }
`;

const Links = styled.div`
  display: flex;
  background-color: white;
  width: 100%;

  & nav {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-right: 15rem;
  }
  & a {
    text-decoration: none;
    font-size: 1.7rem;
    color: #0eb1b7;
    margin-left: 4rem;
  }

  @media (max-width: 1020px) {
    & nav {
      animation: ${props => props.isOpen ? css`${FadeFromRight} ease 1s` : css`${FadeFromLeft} ease 2s`};
      display: ${props => props.isOpen ? 'inline-block' : 'none'};
      position: absolute;
      top: 100%;
      right: -5rem;
      border: 1px solid #EAEAEB;
      background-color: #EAEAEB;
      border-bottom-left-radius: 2rem;
      margin-right: 5rem;
    }
    & div {
      margin: 2rem 5rem 2rem 5rem;
      animation: ${FadeFromRight} ease 1s;
    }

    & a {
      margin: 0;
      color: #917575;
      font-weight: 600;
    }
  }
`;

const NavAccount = styled.div`
  display: block;
  background-color: white;

  & a {
    position: absolute;
    right: 5rem;
    top: 4rem;
    font-size: 1.7rem;
    font-family: 'Varela Round', sans-serif;
    color: #0eb1b7;
    text-decoration: none;
    @media (max-width: 1020px) {
      font-weight: 600;
      margin-right: 5rem;
      margin-bottom: 1rem;
    }
  }
`;

const Ham = styled.div`
  display: none;
  background-color: white;
  
  @media (max-width: 1020px) {
    display: flex;
    position: absolute;
    right: 1rem;
    bottom: 45%;
  }
`;

export {
  Header,
  Links,
  Logo,
  Ham,
  NavAccount
};