import { Provider } from "react-redux";
import React from 'react';
import { createStore } from "redux";
import Tictactoe from "../../routes/Tictactoe";
import { PLAYERX, VALUES } from "./constants";
import GlobalState from "./Reducers/reducers";

export default class ReduxProviderTictactoe extends React.Component{
    constructor(props){
        super(props);
        this.initialState = {values: VALUES, turn: PLAYERX, moves: 0}
        this.store = createStore(GlobalState, this.initialState)
    }
    render(){
        return(
            <Provider store={this.store}>
                <div style={{height:'100%'}}>
                    <Tictactoe store={this.store}/>
                </div>
            </Provider>
        );
    }
}