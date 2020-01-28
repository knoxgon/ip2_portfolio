import styled from 'styled-components';

const NFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #74DEED;

  @media (max-width: 1080px) {
    right: initial;
  }
  @media (max-width:800px) and (min-width: 700px) {
    right: 0;
  }
`;

const NFooterLinks = styled.ul`
  display: inline-flex;
  list-style-type: none;
  font-size: 1.4rem;
  
  & nav {
    display: inline-flex;
  }
`;

const NFooterItem = styled.li`
  margin-right: 4rem;
  margin-left: 15rem;

  & a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const NFooterItemLink = styled.a`
`;

export {
  NFooter,
  NFooterLinks,
  NFooterItem,
  NFooterItemLink
}
