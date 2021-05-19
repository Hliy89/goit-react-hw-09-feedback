import React from 'react';

import style from "./App.module.css";

import Feedback from "./components/Feedback";

const App = () => {
    return (
      <div className={style.container}>
        <Feedback />
      </div>
    )
};

export default App;