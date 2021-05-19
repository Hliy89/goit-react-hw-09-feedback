import React from 'react';

import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onBtnGood, onBtnNeutral, onBtnBad }) => (
  <div className={style.pointer}>
    <button type="button" className={style.btn} onClick={onBtnGood}>
      Good
    </button>
    <button type="button" className={style.btn} onClick={onBtnNeutral}>
      Neutral
    </button>
    <button type="button" className={style.btn} onClick={onBtnBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
