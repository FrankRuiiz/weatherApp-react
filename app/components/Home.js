var React = require('react');
var ZipCode = require('./ZipCode');

function Home(props) {
    return (
        <div className="home" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
            <div className="container d-flex h-100 justify-content-center">
                <div className="row justify-content-center align-self-center">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Enter a City and State</div>
                        <div className="card-body">
                            <ZipCode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Home;