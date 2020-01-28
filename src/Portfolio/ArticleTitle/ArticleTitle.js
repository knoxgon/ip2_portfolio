import React from 'react';
import { Title } from './styledArticleTitle';

class ArticleTitle extends React.Component {
  render() {
    return(
      <Title>
        {this.props.image ? <img src={this.props.image} width="25" height="25" alt=""></img> : null}
        <span>{this.props.title}</span>
      </Title>
    );
  }
}

export default ArticleTitle;
