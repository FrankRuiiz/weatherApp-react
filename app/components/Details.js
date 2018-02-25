var React = require('react');

class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <div>asdf</div>;
  }
}

module.exports = Details;
