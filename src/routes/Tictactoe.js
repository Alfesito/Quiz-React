import * as React from 'react';
import Header from '../components/Tictactoe/Header.jsx';
import Board from '../components/Tictactoe/Board.jsx';
import Reset from '../components/Tictactoe/Reset.jsx';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { playPosition, reset } from '../redux/Tictactoe/actions';

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.appClick = this.appClick.bind(this); 
    this.resetClick = this.resetClick.bind(this); 
  }
  appClick(rowNumber, columnNumber) {
        this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn, this.props.values));
  }
  resetClick(){
          this.props.dispatch(reset());
  }
  render() {
    let text = "Turn of " + this.props.turn;
            return (
                <div className='tictactoe'>
                  <main>
                    <h2><FormattedMessage 
                      id="menu.tictactoe"
                        />
                    </h2>
                  </main>
                  <div className='tictactoeGame'>
                    <Header className='headerT' text={text}/>
                    <Board className="boardT" values={this.props.values}  appClick={this.appClick}/>
                      <h3><FormattedMessage 
                        id="moves"
                        />{this.props.moves}</h3>
                      <div className="resetT">
                        <Reset resetClick={this.resetClick}/>
                      </div>
                      
                  
                  </div>
                </div>
            );

  } 
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(Tictactoe);