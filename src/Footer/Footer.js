import React from 'react';

import {NFooter, NFooterLinks, NFooterItem} from './styledFooter';
import {withRouter} from 'react-router'

class Footer extends React.Component {
  render() {
    return (
      <NFooter>
        <NFooterLinks>
          <nav>
            <NFooterItem>Business Inquiry: info@volkanapi.com</NFooterItem>
          </nav>
        </NFooterLinks>
      </NFooter>
    );
  }
}

export default withRouter(Footer);
