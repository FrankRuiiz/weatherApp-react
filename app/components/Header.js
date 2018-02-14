var React = require('react');

function Header(props) {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Weather Check</a>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

module.exports = Header;