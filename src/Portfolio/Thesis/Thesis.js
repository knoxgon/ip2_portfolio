import React from 'react';
import { ThesisText, ThesisHeader, ThesisLink } from './styledThesis';

class Thesis extends React.Component {
  
  render() {
    return (
      <>
        <ThesisLink>
          <a href="http://www.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=1&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=volkan+guven&language=sv&pid=diva2%3A1214154&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=author_sort_asc&onlyFullText=false&noOfRows=50&dswid=8633">&#171; Thesis Link	&#187;</a>
        </ThesisLink>
        <ThesisHeader>Patterns of ransomware and digital attacks</ThesisHeader>
        <ThesisText>In today's era, many things are dependent on the internet thus the devices and applications that are using it proliferates. Every day, countless amounts of devices are targeted by malevolent computer virus authors. To protect the data from malicious factors becomes a preposterous dispute. A malware named CryptoLocker has caused many individuals thousands if not millions of dollars in damage due to encrypting the computer files thus demanding a ransom in return. Once the ransomware strikes a system, the recoverability is almost non-existent. Research is conducted to reveal unique methods ransomware may use to strike a system and disclose protection policies for the casual computer users as well as for the security experts.</ThesisText>
      </>
    );
  }
}

export default Thesis;
