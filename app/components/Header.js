import React from 'react';
import { withRouter } from 'react-router-dom';

import ZipCode from './ZipCode';

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Weather Check
      </a>
      <ZipCode
        onSubmitLocation={function(location) {
          props.history.push({
            pathname: '/forecast',
            search: '?city=' + location
          });
        }}
      />
    </nav>
  );
}
