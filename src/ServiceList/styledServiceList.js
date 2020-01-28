import styled from 'styled-components';


const ServiceListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin: 0 auto;
  margin-top: 5rem;
  & a {
    text-decoration: none;
  }
`;

const ServiceListItem = styled.div`
  font-size: 3rem;
  margin-right: 2rem;
  border: 1px solid;
  width: auto;
  width: 20rem;
  text-align: center;
  background-color: #4f4040;
  color: yellow;

  &:hover {
    transform: perspective(1000px) translate3d(0,0, 50px);
  }
`;

export {
  ServiceListContainer,
  ServiceListItem
}
