import styled from 'styled-components';

import {FadeFromLeft} from '../../__shared/';

const LinkageContainer = styled.div`
  padding-bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  animation: ${FadeFromLeft} ease 2.5s;

  & a {
    font-size: 1.5rem;
    line-height: 3.5rem;
    text-decoration: none;
    margin-left: 5rem;
    
    vertical-align: middle;
  }

  & img {
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
  }

  @media (max-width: 970px) {
    flex-direction: column;
    text-align: center;
    & a {
    }

    & img {
    }
    
  }
`;

export {
  LinkageContainer
}