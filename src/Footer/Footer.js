import React from 'react';

import {NFooter, NFooterLinks, NFooterItem} from './styledFooter';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

class Footer extends React.Component {
  render() {
    return (
      <NFooter>
        <NFooterLinks>
          <nav>
            <NFooterItem><Link to="/terms">Terms and conditions</Link></NFooterItem>
            <NFooterItem><Link to="/privacy">Privacy Policy</Link></NFooterItem>
            <NFooterItem>Business Inquiry: info@volkanapi.com</NFooterItem>
          </nav>
        </NFooterLinks>
      </NFooter>
    );
  }
}

export default withRouter(Footer);
