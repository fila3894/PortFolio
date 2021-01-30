/* eslint-disable */
import React from 'react';
import './App.css';
// Transition
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// 라우터
import { Route, Switch } from 'react-router-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// 컴포넌트
import Home from "./Components/Home.js"
import PortFolio from "./Components/Portfolio.js"
import 자기소개 from "./Components/Introduce.js"

// 라우팅
function App() {
    return(
      <div className="App">
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition 
              key={location.key}
              timeout={{enter: 300, exit: 300}} 
              classNames="fade">
                <Switch>
                  <Route exact path="/"><Home/></Route>
                  <Route path="/portfolio"><PortFolio/></Route>
                  <Route path="/description"><자기소개/></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />  
      </div>
    )
}
// 컴포넌트 만들기(함수 -> HTML 태그 한단어(함수명)로 정리, 항상 이름은 대문자로 시작)
// exact = 경로 정확히 일치
export default App;
