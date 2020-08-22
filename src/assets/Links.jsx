import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//http://codepen.io/MightyShaban/pen/CIfdj
//http://codepen.io/gantit/pen/eCrbk

class Links extends Component {

  render() {
    return (
      <nav>
        <ul className="nav">
          <li><Link to="/" className="link" >front page</Link></li>
          <li><Link to="/all" className="link">articles</Link></li>
          <li><Link to="/all" className="link">i want to read nonsense</Link></li>
        </ul>
      </nav>
    );
  }
}
export default Links