import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button
                className='buttonsFormat'
                onClick={this.props.click}
                disabled={this.props.shutdown}
                style={{ cursor: this.props.shutdown ? 'not-allowed' : 'pointer' }}
            >
                {this.props.Name}
            </button>

        );
    }
}
