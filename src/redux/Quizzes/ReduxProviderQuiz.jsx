import GlobalState from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import Quiz from '../../routes/Quiz';
import {SCORE, FINISHED, CURRENTQUIZ, QUIZZES} from './constants';

export default class ReduxProviderQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: SCORE,
            finished: FINISHED,
            currentQuiz: CURRENTQUIZ,
            quizzes: QUIZZES
        };
        this.store = this.configureStore();
    }

    render(){
        return (
            <Provider store={ this.store}>
                <div style={{ height: '100%' }} >
                    <Quiz store={ this.store}/>
                </div>
            </Provider>
        );
    }

    configureStore(){
        return createStore(GlobalState, this.initialState);
    }
}
