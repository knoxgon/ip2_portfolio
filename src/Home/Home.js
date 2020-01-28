import React from 'react';

import {Content, GeneralContent} from '../__sharedStyles';
import CookieConsent from "react-cookie-consent";
import { HomePageContainer, HomePageImage, HomePageImageHeader, HomePageImageDescription } from './styledHome';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zona9: ''
    }
  }
  render() {
    return(
      <GeneralContent>
        <Content>
          <HomePageContainer>
            <HomePageImage src={require('../assets/hp/stairway.jpg')}></HomePageImage>
            <HomePageImageHeader>VolkanAPI</HomePageImageHeader>
            <HomePageImageDescription>Where information gathers</HomePageImageDescription>
          </HomePageContainer>
        </Content>
        <CookieConsent style={{'fontSize': '1.4rem'}}>
          This website uses cookies to enhance the user experience. Please read our Privacy Policy for more information
        </CookieConsent>
      </GeneralContent>
    );
  }

  streamPipeline = () => {
    fetch('https://volkanapi.com:2096/j579305u7uhrji927gja8259', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(of => {
      return of.json();
    }).then(text => {
      if (text.ju38419i03oek.substr(0, 7) === '::ffff:') {
        this.setState({zona9: text.ju38419i03oek.substr(7)})
      } else
      this.setState({zona9: text.ju38419i03oek})
    });
  }

  componentDidMount() {
    this.streamPipeline();
  }
}


export default Home;