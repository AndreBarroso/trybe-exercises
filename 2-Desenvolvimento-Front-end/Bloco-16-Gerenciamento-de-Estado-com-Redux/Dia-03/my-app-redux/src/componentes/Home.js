import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Sitema de cadastro
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    )
  }
}

export default Home;