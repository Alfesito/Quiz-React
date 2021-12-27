import React from 'react';
import Shortcut from "./Shortcut";

export default class Numquiz extends React.Component {

    render() {
        return (
            <div className='buttonShortcut'>

                {this.props.quizzes.map((quiz, i) => {
                    return (

                        <Shortcut
                            onChangeQuiz={this.props.onChangeQuiz}
                            num={i + 1}
                            currentQuiz={this.props.currentQuiz}
                            quizzes={this.props.quizzes}
                            icon={i + 1} />


                    );

                })}
            </div>
        );
    }
}
