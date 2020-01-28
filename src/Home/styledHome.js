import styled from 'styled-components';



const HomePageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const HomePageImage = styled.img`
  position: absolute;
  width: 100%;
  height: calc(100% - 10rem);
  filter: brightness(40%);
`;

const HomePageImageHeader = styled.div`
  position: absolute;
  font-size: 6rem;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 10rem;
`;

const HomePageImageDescription = styled.p`
  position: absolute;
  font-size: 4rem;
  color: white;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: 20rem;
`;

const HomePageImageButton = styled.button`
  position: absolute;
  border: none;
  height: 5rem;
  left: 40vw;
  right: 40vw;
  margin: 0 auto;
  margin-top: 30rem;
  background-color: #FF9933;
  cursor: pointer;
  font-family: 'Ubuntu', sans-serif;
  font-size: 2rem;
  border-radius: 5px;
  
  & a {
    text-decoration: none;
    color: #353e42;

    &:hover {
      color: #486875;
    }
  }

  &:hover {
    transform: perspective(500px) translate3d(0,0, 50px);
  }

  @media (max-width: 768px) {
    left: 35vw;
  }
  @media (max-width: 532px) {
    left: 25vw;
    margin-top: calc(35rem + 10rem);
  }
`;

export {
  HomePageContainer,
  HomePageImage,
  HomePageImageHeader,
  HomePageImageDescription,
  HomePageImageButton
}
