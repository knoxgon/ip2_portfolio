import React from 'react';
import { Document } from '../Api/styledApi';


class Name extends React.Component {
  render() {
    return (
      <Document>
        <section>
          <h2>What is <i>Name Generator</i> API?</h2>
          <p>This is yet another API beside Joke Teller. The purpose of this API is to provide</p>
          <p>the requester a set of random names on demand.</p>
          <p>The API, through a valid key, streams random name(s) back to the requester.</p>
          <p>The user can later use the names for other purposes.</p>
          <h2>How to obtain the key?</h2>
          <p>The key can obtained from the top menu. Entering a valid email will send you the key.</p>
          <p>After obtaining your API key, you can start requesting data from the API.</p>
          <p>The API server is at <a href="https://volkanapi.com:2096/api">volkanapi.com:2096/api</a></p>
          <p>Without authorization, the API is unusable and will reject any request.</p>
          <p>Only one key per email is allowed. If you lose your key, entering your email will</p>
          <p>resend your original key back to your address.</p>
          <p>For more information contact me <b style={{'color': 'blue'}}>@slack - Volkan Güven</b></p>
          <h2>How to use?</h2>
          <p>I've made the backend flexible to accept more than one way to provide the API key.</p>
          <p>The key can be provided in</p>
          <ul>
            <li>Inside header as key, value pair </li>
            <li>As query parameter</li>
          </ul>
          <h2>Example usage</h2>
          <h1>As query parameter</h1>
            <pre><code>http://volkanapi.com:2096/api/name<b style={{'color': 'red'}}>?key=your-api-key-xxxxx-xxxxxx</b><b style={{'color': 'blue'}}>&amp;amount=5</b></code></pre>
          <h1>Inside header</h1>
          <p>Put inside fetch() JS function <b>header</b></p>
          <pre><code>
          'key': 'Your Api Key',
          <br></br>
          'amount': 'Desired amount'
          </code></pre>
          <h1>Data structure</h1>
          <p>Json is used for data structuring. The structure is different from Joke Teller API.</p>
          <p>Instead of providing one field within successful exchange, it provides different key:</p>
          <p><span style={{'color': 'green', 'fontWeight': 'bold'}}>name, names</span> and <span style={{'color': 'red', 'fontWeight': 'bold'}}>error</span></p>
          <br></br>
          <pre><code>
          <p style={{'color': 'green'}}><b>On success</b></p>
          <p>&#123;</p>
          &nbsp;&nbsp;&nbsp;&nbsp; <b>name</b>: "A single name"
          <p>&#125;</p>
          </code></pre>
          <pre><code>
          <p style={{'color': 'green'}}><b>On success</b></p>
          <p>&#123;</p>
          &nbsp;&nbsp;&nbsp;&nbsp; <b>names</b>: ["A set of names", "..."]
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

export default Name;
