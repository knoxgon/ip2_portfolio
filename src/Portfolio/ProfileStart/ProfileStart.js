import React from 'react';
import { 
  ProfileStartArt,
  ProfileStartArtGroup,
  ProfileStartArtImgStyle,
  ProfileStartContactInfo,
  ProfileStartDescDescription
} from './styledProfileStart';

class ProfileStart extends React.Component {
  render() {
    return (
      <span>
        <ProfileStartArt>
          <ProfileStartArtImgStyle src={this.props.portImage} width={this.props.imgWidth} height={this.props.imgHeight} alt="Profile"></ProfileStartArtImgStyle>
          <ProfileStartArtGroup>
            <h1>{this.props.portName}</h1>
            <h3>{this.props.portJobTitle}</h3>
            <ProfileStartContactInfo>
              {this.props.phoneInfo ?
                <a href={"tel: " + this.props.phoneInfo}>
                  <img src={require("../images/ico/telephone.ico")} alt="phone" width="20" height="20"></img>
                  &nbsp;{this.props.phoneInfo}
                </a> : null}
              {this.props.emailInfo ?
                <a href={"mailto: " + this.props.emailInfo}>
                  <img src={require("../images/ico/email.ico")} alt="email" width="20" height="20"></img>
                  &nbsp;{this.props.emailInfo}
                </a> : null}
            </ProfileStartContactInfo>
          </ProfileStartArtGroup>
        </ProfileStartArt>
        <span>
          <ProfileStartDescDescription>{this.props.portDescription}</ProfileStartDescDescription>
        </span>
      </span>
    )
  }
}

export default ProfileStart;