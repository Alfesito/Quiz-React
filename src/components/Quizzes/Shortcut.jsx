import React from 'react';

export default class Shortcut extends React.Component {

    render() {
        return (
            <li>
                <ul>
                    <button
                        className="buttonsFormat"
                        onClick={() => {
                            this.props.onChangeQuiz(this.props.num-1);
                        }}>
                            {this.props.num}
                    </button>
                </ul>
            </li>
        );
    }
}
