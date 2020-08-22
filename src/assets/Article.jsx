import React, { Component } from 'react';
import RichTextParagraph from './RichTextParagraph.jsx';

class Article extends Component {

  render() {
    var article = this.props.article;
    if(!article.timetoread){
      article.timetoread = '';
    }

    return (
      	<div className="content">
    			<div className="contentTitle">{article.title}</div>
    			<div className="contentType">{article.topic} - {article.date} ({article.timetoread})</div>
    			<div className="contentBody">
    				{article.paragraphs().map(function(object, i){
  			        return <p className="paragraph" key={i}>
                  <RichTextParagraph paragraph={object}/>
                </p>;
  			    })}
    			</div>
  		</div>
    );
  }
}
export default Article