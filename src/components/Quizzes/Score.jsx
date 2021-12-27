import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Score extends React.Component {

    render() {
        return (
            <div className="scoreContainer" style={{ display: this.props.isFinished ? 'flex' : 'none' }}>
                <div>
                    <h2>{(this.props.score) > 4 ?
                        <FormattedMessage
                            id="quiz.congrat1"
                            default="Enhorabuena"
                        /> :
                        <FormattedMessage
                            id="quiz.congrat2"
                            default="Otra vez será" />},
                        <FormattedMessage
                            id="quiz.notification"
                            default="has acertado" /> {this.props.score} quizzes</h2>

                    {this.props.quizzes.map((quiz, i) => {
                        return <div className='listContainer' key={i}>
                            <FormattedMessage
                                id="quiz.question"
                                default="Pregunta"
                            /> {i + 1}: {quiz.question} - {quiz.userAnswer === undefined ?
                                <span style={{ color: 'yellow' }} >
                                    <FormattedMessage id="quiz.no.answer" default="Sin responder" />
                                </span>
                                : quiz.answer.toLowerCase() === quiz.userAnswer.toLowerCase() ?
                                    <span style={{ color: 'green' }} >
                                        <FormattedMessage
                                            id="quiz.correct"
                                            default="Correcta"
                                        />
                                    </span> :
                                    <span style={{ color: 'red' }} >
                                        <FormattedMessage
                                            id="quiz.incorrect"
                                            default="Sin responder"
                                        />
                                    </span>
                            }
                        </div>
                    })}
                </div>
            </div>


        );
    }
}
