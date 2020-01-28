import React from 'react';
import { EduContainer, EduContainerLeftSide, EduContainerRightSide } from './styledEducation.js';

class Education extends React.Component {
  render() {
    return (
      <span>
        <EduContainer>
          <EduContainerLeftSide>
            <h3>{this.props.eduPeriod}</h3>
          </EduContainerLeftSide>
          <EduContainerRightSide>
            <span>
              <img src={require('../images/svg/university.svg')} width="25" height="25" alt=""></img>
              <h4>{this.props.eduUni}</h4>
            </span>
            <span>
              <img src={require('../images/svg/educational-programs.svg')} width="25" height="25" alt=""></img>
              <p>{this.props.eduProgramme}</p>
            </span>
            <span>
              <img src={require('../images/svg/college.svg')} width="25" height="25" alt=""></img>
              <p>{this.props.eduLocation}</p>
            </span>
            <span>
              <img src={this.props.ifComp ? require('../images/svg/checkmark.svg') : require('../images/svg/pending.svg')} width="25" height="25" alt=""></img>
              <p>{this.props.unistatus}</p>
            </span>
          </EduContainerRightSide>
        </EduContainer>
      </span>
    );
  }
}

export default Education;
