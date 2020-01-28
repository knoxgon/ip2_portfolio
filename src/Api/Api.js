import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Name from '../Name/Name';
import Joke from '../Joke/Joke';
import { Content, GeneralContent } from '../__sharedStyles';
import { ApiArea, Form, FadeParagraph, ContentA, ContentApi, CriticalInfo } from './styledApi';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ch = this.ch.bind(this);

    this.state = {
      email: '',
      status: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://volkanapi.com:2096/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: this.state.email}),
    })
    .then(jres => {
      if(!jres.ok)
        return { message: 'Slow down please...' };
      return jres.json()
    })
    .then(text => this.setState({status: text.message}))
  }

  ch = (e) => {
    this.setState({email: e.target.value})
  }
  render() {
    return(
      <Router>
        <GeneralContent>
          <Content>
            <ApiArea>
              <CriticalInfo>Following API are for test purposes only</CriticalInfo>
              <h1>Get your API key</h1>
              <Form onSubmit={this.handleSubmit}>
                <input onChange={this.ch} type="email" name="email" placeholder="Enter your email here" autoComplete="off" spellCheck="false" />
                <button>Get Key!</button>
              </Form>
              {this.state.status && (<FadeParagraph>{this.state.status}</FadeParagraph>)}
            </ApiArea>
          </Content>
        <ContentApi>
          <ContentA><Link to="/api/joke">Joke Teller API</Link></ContentA>
          <ContentA><Link to="/api/name">Name Generator API</Link></ContentA>
        </ContentApi>
        <Switch>
          <Route path="/api/joke" component={Joke} />
          <Route path="/api/name" component={Name}/>
        </Switch>
        </GeneralContent>
      </Router>
    );
  }
}


export default Api;
