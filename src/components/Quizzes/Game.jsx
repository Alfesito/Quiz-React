import React from 'react';
import Actionbar from "./Actionbar";
import Score from './Score'
import Image from './Image';
import Question from './Question';
import Answer from './Answer';
import Author from "./Author";
import Numquiz from './Numquiz';
import Button from './Button';
import { FormattedMessage } from 'react-intl';

export default class Game extends React.Component {
    render() {
        if (this.props.finished) {
            return (
                <div>
                    <div>
                        <Score
                            score={this.props.score}
                            isFinished={this.props.finished}
                            quizzes={this.props.quizzes}
                        />
                    </div>
                    <div className="buttonReplay">
                        <Button click={this.props.reset} Name={<FormattedMessage id="quiz.restart" defaultMessage='Vuelve a jugar' />} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="gameContainer">
                    <div className="numquizController">
                        <Numquiz
                            quizzes={this.props.quizzes}
                            currentQuiz={this.props.currentQuiz}
                            onChangeQuiz={this.props.onChangeQuiz}
                            isFinished={this.props.finished}
                        />
                    </div>

                    <Score
                        quizzes={this.props.quizzes}
                        score={this.props.score}
                        isFinished={this.props.finished}
                    />

                    <div className="quizContainer">
                        <div className='imgqaaControler'>
                            <div className="imageContainer">
                                <Image att={this.props.quizzes[this.props.currentQuiz].attachment}
                                    question={this.props.quizzes[this.props.currentQuiz].question}
                                />
                            </div>
                            <div className='qaaControler'>
                                <Question
                                    question={this.props.quizzes[this.props.currentQuiz].question}
                                />
                                <Answer
                                    userAnswer={this.props.quizzes[this.props.currentQuiz].userAnswer}
                                    onQuestionAnswer={this.props.onQuestionAnswer}
                                />
                                <Author
                                    author={this.props.quizzes[this.props.currentQuiz].author}
                                    isFinished={this.props.finished}
                                />
                                <Actionbar className='actionbarControler'
                                    currentQuiz={this.props.currentQuiz}
                                    onChangeQuiz={this.props.onChangeQuiz}
                                    q9={this.props.q9}
                                    q0={this.props.q0}
                                    submit={this.props.submit}
                                    reset={this.props.reset}
                                    isFinished={this.props.finished} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
