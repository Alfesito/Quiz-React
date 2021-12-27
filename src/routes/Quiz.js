import React from 'react';
import Game from '../components/Quizzes/Game';
import { connect } from 'react-redux'
import {changeQuiz, initQuizzes, questionAnswer, submit} from "../redux/Quizzes/actions";

const TU_TOKEN = "72dfbad36c2571dae715";

class Quiz extends React.Component {
  constructor(props){
      super(props);
      this.quizzes = [];
      this.download = this.download.bind(this);
      this.submit = this.submit.bind(this);
      this.reset = this.reset.bind(this);
  }

  download(quizzes){
      fetch("https://core.dit.upm.es/api/quizzes/random10wa?token="+TU_TOKEN)
          .then((res) => {
              return res.json();
          })
          .then((json) => {
              json.map((q) => {
                  if(q.question) {
                       quizzes.push(q);
                  }
                  return -1;
              });
              this.props.dispatch(initQuizzes(quizzes));
          })
  }

  componentDidMount(){
      this.download(this.quizzes);
  }

  submit(){
      this.props.dispatch(submit(this.props.quizzes));
  }

  reset(){
    this.quizzes = [];
    this.download(this.quizzes);
  }

  render() {
    let currentQuiz = this.props.currentQuiz;
    let q9=false;
    let q0=false;

      if(this.props.quizzes.length<=0){
        return (
            <div className="quiz">
                <h1>Cargando preguntas</h1>
            </div>
        );
          
      }else{
          if(currentQuiz === 0){
            q0=true;
          }
          if(currentQuiz === 9){
            q9=true;
          }
          return (
            <div className="quiz">
                <h2>Quiz</h2>
                <div className="mainContainer">
                    <Game quizzes={this.props.quizzes}
                          currentQuiz = {this.props.currentQuiz}
                          onQuestionAnswer={(answer) => {
                              this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))}
                          }
                          onChangeQuiz={(indexQuiz) => {
                              this.props.dispatch(changeQuiz(indexQuiz))}
                          }
                          reset={this.reset}
                          submit = {this.submit}
                          q9 = {q9}
                          q0 = {q0}
                          score = {this.props.score}
                          finished = {this.props.finished}
                    />

                </div>

            </div>
        );
      }

  }
}

function mapStateToProps(state){
  return{...state};
}

export default connect(mapStateToProps)(Quiz);