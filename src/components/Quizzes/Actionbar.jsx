import React from 'react';
import Button from "./Button";
import { FormattedMessage } from 'react-intl';

export default class Actionbar extends React.Component {

    render() {
        return (
            <div className="actionBarContainer" >

                <div className="buttons" style={{ display: this.props.isFinished ? 'none' : 'flex' }}>

                    <Button click={this.props.reset}
                        Name={<FormattedMessage id='quiz.reset' defaultMessage='Reset' />}

                    />
                    <Button Name={<FormattedMessage id='quiz.back' defaultMessage='Anterior' />}
                        shutdown={this.props.q0}
                        click={() => {
                            this.props.onChangeQuiz(this.props.currentQuiz-1);
                        }}
                    />
                    <Button Name={<FormattedMessage id='quiz.next' defaultMessage='Siguiente' />}
                        shutdown={this.props.q9}
                        click={() => {
                            this.props.onChangeQuiz(this.props.currentQuiz+1);
                        }}
                    />
                    <Button click={this.props.submit}
                        Name={<FormattedMessage id='quiz.submit' defaultMessage='Terminar' />}
                        shutdown={false}
                    />

                </div>


            </div>


        );
    }
}
