import {keyframes} from 'styled-components';

//I nullified the values. All of them are the same

const FadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeFromRight = keyframes`
  from {  
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const FadeFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export {
  FadeFromLeft,
  FadeFromRight,
  FadeFromTop,
  FadeFromBottom
}