import styled from 'styled-components';


const Title = styled.h1`
  text-align: center;
  justify-content: center;
  margin: 2.5rem 0 2rem;
  font-size: 2.5rem;
  color: rgb(131, 131, 187);
  margin-left: 2rem;
  margin-right: 2rem;

  & span {
    display: inline-flex;
    vertical-align: middle;
    background-color: #eeeeee;
    font-family: 'Montserrat', sans-serif;
  }

  & img {
    display: inline-flex;
    vertical-align: middle;
    padding:0 1rem;
  }
`;

export {
  Title
}