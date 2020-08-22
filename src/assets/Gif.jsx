import React, { Component } from 'react';

class Gif extends Component {

  render() {
    var url = this.props.url;
    var caption = this.props.caption;
    url = url.replace('.gif', '.gifv');
    return (
      <span>
  			<video autoPlay loop muted className="gif">
          <source src={url} type="video/mp4"></source>
        </video>
        <span className="gifCaption">{caption}</span>
      </span>
    );
  }
}
export default Gif