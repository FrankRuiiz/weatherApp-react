import React from 'react';
import api from '../utils/api';

class ZipCode extends React.Component {
  state = {
    location: ''
  };

  handleSubmit = event => {
    this.props.onSubmitLocation(this.state.location);

    this.setState(function() {
      return {
        location: ''
      };
    });
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(() => {
      return {
        location: value
      };
    });
  };

  render() {
    const location = this.state.location;
    const match = this.props.match;

    return (
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          autoComplete="off"
          placeholder="City, State"
          value={location}
          onChange={e => this.handleChange(e)}
        />
        <button
          className="btn btn-outline-warning my-2 my-sm-0"
          disabled={!this.state.location}
          onClick={() => this.handleSubmit()}
        >
          Get Weather
        </button>
      </div>
    );
  }
}

export default ZipCode;
