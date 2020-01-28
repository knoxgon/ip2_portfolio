import React from 'react';

import ProfileStart from '../ProfileStart/ProfileStart';
import ProfileLinkage from '../ProfileLinkage/ProfileLinkage';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import Education from '../Education/Education';
import { MainContainer, MainHeader } from './styledMain';
import Thesis from '../Thesis/Thesis';
import Skill from '../Skill/Skill';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educInfo: [
        {
          eduPeriod: "2015-2018",
          eduUni: "Blekinge Institute of Technology",
          eduProgramme: "Software Engineering",
          eduLocation: "Karlskrona - Sweden",
          ifComp: true,
          unistatus: 'Graduated'
        },
        {
          eduPeriod: "2017-2018",
          eduUni: "Chulalongkorn University",
          eduProgramme: "Computer Engineering",
          eduLocation: "Bangkok - Thailand",
          ifComp: true,
          unistatus: 'Graduated'
        },
        {
          eduPeriod: "2019-2021",
          eduUni: "KYH",
          eduProgramme: "Frontend Engineering",
          eduLocation: "Stockholm - Sweden",
          ifComp: false,
          unistatus: 'In progress'
        }
      ]
    }
  }

  render() {
    return (
      <MainContainer>
        <MainHeader style={{  'borderRadius': '15px'}}>
          <ProfileStart portImage={require('../images/profpic.jpg')}
                 imgWidth="150rem"
                 imgHeight="150rem"
                 portName="Volkan Güven"
                 portJobTitle="Software Engineer"
                 portDescription="I am a graduated software engineer who likes to travel and bike. One of my big dreams is to create a fully automated buying platform where you can trade with anyone anywhere regardless of the industry without paying for the middle man. Currently studying Frontend Engineering @KYH (Higher Vocational Education)."
                 phoneInfo="+46 73 905 38 78"
                 emailInfo="volkan.guven@hotmail.se"
                 >
          </ProfileStart>
          </MainHeader>
          <MainHeader>
            <ArticleTitle image={require('../images/svg/social.svg')} title="Social"></ArticleTitle>
            <ProfileLinkage
              githubLink="http://www.github.com/knoxgon"
              linkedinLink="https://www.linkedin.com/in/volkan-g%C3%BCven-108883133/"
              stackoverflowLink="https://stackoverflow.com/users/4393935/volkan-g%c3%bcven"
              facebookLink="https://www.facebook.com/jktujozvjizqhrlyfhpdwhhwdhjjrepwsohdlqadlxgjtv"
              instagramLink="https://www.instagram.com/volkan._guven/"
            >
            </ProfileLinkage>
          </MainHeader>
          <MainHeader>
            <ArticleTitle image={require('../images/output-onlinepngtools.png')} title="Education"></ArticleTitle>
            
            {this.state.educInfo.map((item, index) => {
              return <Education key={index}
                eduPeriod={item.eduPeriod}
                eduUni={item.eduUni}
                eduProgramme={item.eduProgramme}
                eduLocation={item.eduLocation}
                ifComp={item.ifComp}
                unistatus={item.unistatus}
              ></Education>
            })}
          </MainHeader>
          <MainHeader>
            <ArticleTitle image={require('../images/svg/thesis.svg')} title="Bachelor Thesis"></ArticleTitle>
            <Thesis></Thesis>
          </MainHeader>
          <MainHeader>
            <ArticleTitle image={require('../images/svg/skill.svg')} title="Skills"></ArticleTitle>
            <Skill></Skill>
          </MainHeader>
          <MainHeader>
            <ArticleTitle image={require('../images/svg/experience.svg')} title="Experience"></ArticleTitle>
            <Experience></Experience>
          </MainHeader>
          <MainHeader>
            <ArticleTitle image={require('../images/svg/analytics.svg')} title="Projects"></ArticleTitle>
            <Project></Project>
          </MainHeader>
      </MainContainer>
    );
  }
}

export default Main;
