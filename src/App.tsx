import React from 'react';
import './App.css';
import Countdown from "react-countdown";
// import {Helmet} from "react-helmet"; not working on heroku

// const TITLE = 'odliczanko'

var countDownDate = new Date("Oct 15, 2021 00:00:00").getTime();

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          pozostało (d/h/m/s)
        </p>
          <div className="rainbow">
              <Countdown date={countDownDate}>
                  <a href={"https://youtu.be/dQw4w9WgXcQ"}>click meeee</a>
              </Countdown>
          </div>
          <div>
              <h6>ciekawe co sie wtedy stanie...</h6>
          </div>
      </header>
    </div>
  );
}

export default App;
