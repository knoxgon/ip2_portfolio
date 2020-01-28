import React from 'react';
import { ServiceContainer, ServiceElement, ServiceElementImage, ServiceElementTitle, ServiceElementDescription } from './styledServices';
import { GeneralContent } from '../__sharedStyles';

class ServiceComp extends React.Component {
  render() {
    return(
      <GeneralContent>
        <ServiceContainer>
          <ServiceElement dur="1s">
            <ServiceElementImage src={require('../assets/pri/mail.svg')} alt="srvc" width="100" height="100"></ServiceElementImage>
            <ServiceElementTitle>Safe encryption</ServiceElementTitle>
            <ServiceElementDescription>With the latest technology, your files will be safer than ever. With over 5 different encryption methods, you have access to all available tools to protect your files. New encryption methods are built over time to meet your needs.</ServiceElementDescription>
          </ServiceElement>
          <ServiceElement dur="2s">
            <ServiceElementImage src={require('../assets/pri/positions.svg')} alt="srvc" width="100" height="100"></ServiceElementImage>
            <ServiceElementTitle>Geolocational IP</ServiceElementTitle>
            <ServiceElementDescription>Upon calling our API, you have access to a variety range of detailed information of IP addresses. Our database is frequently updated to keep the customers at bay.</ServiceElementDescription>
          </ServiceElement>
          <ServiceElement dur="2.5s">
          <ServiceElementImage src={require('../assets/pri/process.svg')} alt="srvc" width="100" height="100"></ServiceElementImage>
          <ServiceElementTitle>Server misc</ServiceElementTitle>
          <ServiceElementDescription>With our developed tools, you are able to stress-test your servers for potential attacks and break-in.</ServiceElementDescription>
          </ServiceElement>
          <ServiceElement dur="3s">
            <ServiceElementImage src={require('../assets/pri/bundle.svg')} alt="srvc" width="100" height="100"></ServiceElementImage>
            <ServiceElementTitle>New products</ServiceElementTitle>
            <ServiceElementDescription>A variety of services are built and added into the VolkanAPI every month. New services are shipped to the customers who had subscribed to our Gold, Jadeite or Diamond plan.</ServiceElementDescription>
          </ServiceElement>
        </ServiceContainer>
      </GeneralContent>
    );
  }

}


export default ServiceComp;
