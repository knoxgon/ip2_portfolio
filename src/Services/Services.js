import React from 'react';
import {ServicePageDescription, ServiceMiscLine } from './styledServices';
import { GeneralContent } from '../__sharedStyles';
import ServiceComp from './ServiceComp';

class Services extends React.Component {
  render() {
    return(
      <GeneralContent>
        <ServicePageDescription>Our Services</ServicePageDescription>
        <ServiceMiscLine></ServiceMiscLine>
        <ServiceComp></ServiceComp>
      </GeneralContent>
    );
  }
}


export default Services;
