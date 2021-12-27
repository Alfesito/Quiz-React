import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/Home.js';
import ReduxProviderTictactoe from './redux/Tictactoe/ReduxProviderTictactoe.jsx';
import { Lang } from './components/Lang';
import {FormattedMessage} from 'react-intl';
import ReduxProviderQuiz from './redux/Quizzes/ReduxProviderQuiz'

export default function App() {
  return (
    <>
    <header>
      <h1 className='mainTitle'>
        <FormattedMessage id="app.title" defaultMessage="Mis Juegos"/>
        <div className='langSelector'>
          {<Lang />}
        </div>
      </h1>
      </header>

      <div className='navBar'>
        <nav style={{paddingBottom: '1rem' }}>
          <ul>
            <li>
            <Link to="/">
              <FormattedMessage 
                id="app.home"
                defaultMessage="Inicio"
              /></Link>
            </li>
            <li>
              <Link to="/tictactoe">
                <FormattedMessage 
                      id="menu.tictactoe"
              /></Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tictactoe" element={<ReduxProviderTictactoe />} />
          <Route path="quiz" element={<ReduxProviderQuiz />} />
        </Routes>
      </div>
    </>
  );
}