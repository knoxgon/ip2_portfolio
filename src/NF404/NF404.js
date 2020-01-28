import React from 'react';

import {GeneralContent, UnderView, Content} from '../__sharedStyles';

class NF404 extends React.Component {
  render() {
    return(
      <GeneralContent>
        <Content>
          <UnderView src={require('../assets/nf404.gif')} alt="cos"></UnderView>
        </Content>
      </GeneralContent>
    );
  }
}


export default NF404;