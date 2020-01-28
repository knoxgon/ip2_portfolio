import React from 'react';
import { GeneralContent, Content } from '../__sharedStyles';
import { ServiceListContainer, ServiceListItem } from './styledServiceList';
import { Link } from 'react-router-dom';
import { ServicePageDescription, ServiceMiscLine } from '../Services/styledServices';


class ServiceList extends React.Component {
  render() {
    return (
      <GeneralContent>
        <Content>
        <ServicePageDescription>Products</ServicePageDescription>
            <ServiceMiscLine></ServiceMiscLine>
          <ServiceListContainer>
            <Link to="/port-service">
              <ServiceListItem>Scan</ServiceListItem>
            </Link>
            <Link to="/encryption-service">
              <ServiceListItem>Encryption</ServiceListItem>
            </Link>
          </ServiceListContainer>
        </Content>
      </GeneralContent>
    );
  }
}

export default ServiceList;
