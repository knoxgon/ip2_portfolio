import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 10rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const SkillCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-right: 5rem;
  margin-top: 5rem;
  width: 30rem;
  height: auto;

  font-size: 1.65rem;

  font-weight: 700;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 3rem;
  }
`;

const SkillNames = styled.div`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: #8c8888;
`;

export {
  SkillContainer,
  SkillCard,
  SkillNames
}
