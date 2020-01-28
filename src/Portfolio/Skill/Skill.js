import React from 'react';
import { SkillContainer, SkillCard, SkillNames } from './styledSkill';



class Skill extends React.Component {
  render() {
    return (
      <SkillContainer>
        <SkillCard>Development/Environment Tools/Techniques
          <SkillNames>Linux system miscellaneous: Postfix, Dovecot, Apache, Nginx[...]</SkillNames>
          <SkillNames>Version Control: Mercurial, GitHub, BitBucket, git-flow</SkillNames>
          <SkillNames>Software Developement Plan: Agile, Kanban, Scrum</SkillNames>
          <SkillNames>Collaboration platform: Swagger, Postman</SkillNames>
          <SkillNames>File API: JSON, BSON, XML, CSV</SkillNames>
          <SkillNames>Test tools: JUnit, Googletest, Mockito, Jest, React Testing Library</SkillNames>
        </SkillCard>
        <SkillCard>Databases
          <SkillNames>Firebase</SkillNames>
          <SkillNames>MongoDB</SkillNames>
          <SkillNames>Google Cloud SQL</SkillNames>
          <SkillNames>Microsoft SQL</SkillNames>
          <SkillNames>MySQL</SkillNames>
          <SkillNames>MariaDB</SkillNames>
          <SkillNames>NoSQL</SkillNames>
        </SkillCard>
        <SkillCard>Programming Languages
          <SkillNames>C, C++ (SFML, Boost, SDL), C#</SkillNames>
          <SkillNames>PHP, Scala, Java, Golang</SkillNames>
          <SkillNames>JavaScript, ReactJS</SkillNames>
        </SkillCard>
        <SkillCard>Domain Specific Languages (DSL) / Formal Languages
          <SkillNames>HTML5</SkillNames>
          <SkillNames>CSS, SASS, SCSS, Style Components, Flexbox</SkillNames>
          <SkillNames>sed, awk, gawk, grep</SkillNames>
          <SkillNames>Regular expression (regex)</SkillNames>
        </SkillCard>
        <SkillCard>Frameworks
          <SkillNames>Javascript - NodeJS: ExpressJS, JSX, socketIO, SailsJS, Polymer</SkillNames>
          <SkillNames>Scala - Akka, Play</SkillNames>
          <SkillNames>C# - .NET CORE/MVC</SkillNames>
        </SkillCard>
        <SkillCard>Game Engines
          <SkillNames>SFML, SDL</SkillNames>
          <SkillNames>Unreal Engine, Unity</SkillNames>
          <SkillNames>HTML5 Canvas</SkillNames>
        </SkillCard>
        <SkillCard>Business Management
          <SkillNames>Visual ERP .NET</SkillNames>
          <SkillNames>Odoo</SkillNames>
          <SkillNames>ERPNext</SkillNames>
          <SkillNames>Dolibarr</SkillNames>
          <SkillNames>Visma</SkillNames>
        </SkillCard>

      </SkillContainer>
    );
  }
}

export default Skill;
