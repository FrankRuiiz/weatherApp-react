var React = require('react');

var api = require('../utils/api');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    api.fetchCurrentWeather(this.state.location);
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        location: value
      };
    });
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          autoComplete="off"
          placeholder="Corona, Ca"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-outline-warning my-2 my-sm-0"
          type="submit"
          disabled={!this.state.location}
        >
          Get Weather
        </button>
      </form>
    );
  }
}

module.exports = ZipCode;
