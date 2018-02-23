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
    this.props.onSubmitLocation(this.state.location);

    this.setState(function() {
      return {
        location: ''
      };
    });
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
    var location = this.state.location;
    var match = this.props.match;

    return (
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          autoComplete="off"
          placeholder="City, State"
          value={location}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-outline-warning my-2 my-sm-0"
          disabled={!this.state.location}
          onClick={this.handleSubmit}
        >
          Get Weather
        </button>
      </div>
    );
  }
}

module.exports = ZipCode;
