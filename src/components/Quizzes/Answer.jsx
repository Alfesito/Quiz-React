import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Answer extends React.Component {

    componentDidUpdate(){
        document.getElementById("answerUser").focus();
    }

    render() {
        return (
            <div>
                <FormattedMessage 
                    id="quiz.answer"
                    defaultMessage="Respuesta: "
                />
                <input
                    autoFocus={true}
                    id="answerUser"
                    type={"text"} value={this.props.userAnswer || ''}
                    onChange={(e) => {
                        this.props.onQuestionAnswer(e.target.value);
                    }}
                />
            </div>
        );
    }
}