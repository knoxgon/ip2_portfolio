import React from 'react';
import { Document } from '../Api/styledApi';

class Joke extends React.Component {
  render() {
    return (
      <Document>
        <section>
          <h2>What is <i>Joke teller</i> API?</h2>
          <p>The purpose of this API is to provide the requester a random joke on demand.</p>
          <p>The API, through a valid key, streams a random joke back to the requester.</p>
          <p>The user can later use the joke phrase for many other purposes.</p>
          <h2>How to obtain the key?</h2>
          <p>The key can obtained from the top menu. Entering a valid email will send you the key.</p>
          <p>After obtaining your API key, you can start requesting data from the API.</p>
          <p>The API server is at <a href="https://volkanapi.com:2096/api">volkanapi.com:2096/api</a></p>
          <p>Without authorization, the API is unusable and will reject any request.</p>
          <p>Only one key per email is allowed. If you lose your key, entering your email will</p>
          <p>resend your original key back to your address</p>
          <p>For more information contact me <b style={{'color': 'blue'}}>@slack - Volkan Güven</b></p>
          <h2>How to use?</h2>
          <p>I've made the backend flexible to accept more than one way to provide the API key.</p>
          <p>The key can be provided in</p>
          <ul>
            <li>Through the authorization header</li>
            <li>Inside header as key, value pair </li>
            <li>As query parameter</li>
          </ul>
          <h2>Example usage</h2>
          <h1>As query parameter</h1>
            <pre><code>http://volkanapi.com:2096/api/joke<b style={{'color': 'red'}}>?key=your-api-key-xxxxx-xxxxxx</b></code></pre>
          <h1>Inside header</h1>
          <p>Put inside fetch() JS function <b>header</b></p>
          <pre><code>
           'Authorization': 'Your Api Key'
          </code></pre>
          <h1>Inside header</h1>
          <p>Put inside fetch() JS function <b>header</b></p>
          <pre><code>
          'key': 'Your Api Key'
          </code></pre>
          <h1>Data structure</h1>
          <p>Json is used for data structuring. For simplicity, only one field is</p>
          <p>provided within different exchange, <span style={{'color': 'green', 'fontWeight': 'bold'}}>text</span> and <span style={{'color': 'red', 'fontWeight': 'bold'}}>error</span>.</p>
          <pre><code>
          <p style={{'color': 'green'}}><b>On success</b></p>
          <p>&#123;</p>
          &nbsp;&nbsp;&nbsp;&nbsp; <b>text</b>: "Joke phrase"
          <p>&#125;</p>
          </code></pre>
          <pre><code>
          <p style={{'color': 'red'}}><b>On error</b></p>
          <p>&#123;</p>
          &nbsp;&nbsp;&nbsp;&nbsp; <b>error</b>: "Error message"
          <p>&#125;</p>
          </code></pre>
        </section>
      </Document>
    );
  }
}

export default Joke;
