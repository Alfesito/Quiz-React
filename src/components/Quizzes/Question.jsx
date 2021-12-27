import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
            <h1 className='question'>{this.props.question}</h1>
        );
    }
}
