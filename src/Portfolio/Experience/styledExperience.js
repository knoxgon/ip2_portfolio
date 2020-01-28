import styled from 'styled-components';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-right: 5rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  width: 30rem;
  height: auto;

  font-size: 1.65rem;
  line-height: 2.5rem;

  font-weight: 700;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 3rem;
  }
`;

const ExperienceDescription = styled.div`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: #8c8888;
`;

const ExperienceDate = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #14a88a;
`;

export {
  ExperienceContainer,
  ExperienceCard,
  ExperienceDescription,
  ExperienceDate
}
