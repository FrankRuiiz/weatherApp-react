var React = require('react');

function ZipCode() {
    return (
        <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Get Weather</button>
        </div>
    )
}

module.exports = ZipCode;