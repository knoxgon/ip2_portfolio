import React from 'react';
import { ExperienceContainer, ExperienceCard, ExperienceDescription, ExperienceDate } from './styledExperience';

class Experience extends React.Component {

  render() {
    return (
      <ExperienceContainer>
        <ExperienceCard> Herbalife - website developer
          <ExperienceDate>2018-2019</ExperienceDate>
          <ExperienceDescription>
           A senior executive working for Herbalife in Germany asked of a website preferably done in WordPress for later maintenance and development. The website consisted of products, product information, the shop center for each product as well as the contact information etc. The website is done in 3 months and delivered in early March 2019.
          </ExperienceDescription>
          <ExperienceDescription>Frontend: WordPress, HTML/SASS</ExperienceDescription>
          <ExperienceDescription>Database: MySQL</ExperienceDescription>
        </ExperienceCard>

        <ExperienceCard> Subtonomy - fullstack developer
        <ExperienceDate>2018</ExperienceDate>
          <ExperienceDescription>
            Subtonomy AB, a company oriented in handling telecommunication data and process thus visualize them back to the customer (telecom company) via a web UI. I worked in the backend, frontend, and database compartments, i.e., full-stack engineering. The primary duties varied from bug fixing,  documentation, implementation, and creating testing tools. In the backend, the Scala, Apache Spark, and Marathon with Apache Mesos are used. In the frontend API, the Webcomponent's Polymer is used for the interface design. The PHP is used for fetching, storing, and authenticating users from the database to the frontend. The software version control is maintained in BitBucket using Mercurial instead of Git. The Kanban is used for setting up tasks for respective users and Jira is used for issue tracking. The database for both frontend and backend is MariaDB (MySql).
          </ExperienceDescription>
          <ExperienceDescription>Development method: Kanban, Jira </ExperienceDescription>
          <ExperienceDescription>Version control: Mercurial via BitBucket</ExperienceDescription>
          <ExperienceDescription>Backend: Spark [Scala], Marathon, Apache Mesos</ExperienceDescription>
          <ExperienceDescription>Frontend: Polymer, PHP, HTML/CSS</ExperienceDescription>
          <ExperienceDescription>Database: MariaDB (MySql)</ExperienceDescription>
        </ExperienceCard>
      </ExperienceContainer>
    );
  }
}




export default Experience
