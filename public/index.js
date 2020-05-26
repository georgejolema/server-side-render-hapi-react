'use strict';
const React = require('react');
const PropTypes = require('prop-types');

class Index extends React.Component {
    render() {
        return (
            <html>
                <header>
                    <title>my react app</title>
                </header>
                <body>
                    <div className='container'>
                        <div id="app-mount"
                            dangerouslySetInnerHTML={{ __html: this.props.children }} />
                    </div>
                   
                    <script id="app-state"
                        dangerouslySetInnerHTML={{ __html: this.props.state }} />
                    <script src='public/bundle.js'></script> 
                </body> 
            </html>  
        );
    }   
}

Index.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.string.isRequired
};

module.exports = Index;