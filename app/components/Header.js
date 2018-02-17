var React = require('react');
var ZipCode = require('./ZipCode');

function Header(props) {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Weather Check</a>
            <ZipCode />
        </nav>
    )
}

module.exports = Header;