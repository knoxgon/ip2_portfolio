import React from 'react';
import { LinkageContainer } from './styledProfileLinkage';

class ProfileLinkage extends React.Component {
  render() {
    return(
      <LinkageContainer>
          {this.props.githubLink ?
            <a href={this.props.githubLink}>
              <img src={require("../images/ico/github-logo.ico")} alt="github"></img>
              &nbsp;GitHub Profile
            </a> : null}
          {this.props.linkedinLink ?
          <a href={this.props.linkedinLink}>
            <img src={require("../images/ico/linkedin-logo.ico")} alt="linkedin"></img>
            &nbsp;Linkedin Profile
          </a> : null}
          {this.props.facebookLink ?
          <a href={this.props.facebookLink}>
            <img src={require("../images/ico/facebook-logo.ico")} alt="facebook"></img>
            &nbsp;Facebook Profile
          </a> : null}
          {this.props.twitterLink ?
          <a href={this.props.twitterLink}>
            <img src={require("../images/ico/twitter-logo.ico")} alt="twitter"></img>
            &nbsp;Twitter Profile
          </a> : null}
          {this.props.stackoverflowLink ?
          <a href={this.props.stackoverflowLink}>
            <img src={require("../images/ico/stackoverflow-logo.ico")} alt="stackoverflow"></img>
            &nbsp;StackOverflow Profile
          </a> : null}
          {this.props.instagramLink ?
          <a href={this.props.instagramLink}>
            <img src={require("../images/ico/instagram-logo.ico")} alt="instagram"></img>
            &nbsp;Instagram Profile
          </a> : null}
        </LinkageContainer>
      );
  }
}

export default ProfileLinkage;