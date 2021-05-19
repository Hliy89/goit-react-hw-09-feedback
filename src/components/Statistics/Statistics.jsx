import React from 'react';

import style from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div className={style.feedback}>
    <p className={style.value}>
      <span className={style.elem}>Good:</span> {good}
    </p>
    <p className={style.value}>
      <span className={style.elem}>Neutral:</span> {neutral}
    </p>
    <p className={style.value}>
      <span className={style.elem}>Bad:</span> {bad}
    </p>
    <p className={style.value}>
      <span className={style.elem}>Total:</span> {countTotalFeedback()}
    </p>
    <p className={style.value}>
      <span className={style.elem}>Positive feedback: </span>
      {countPositiveFeedbackPercentage()}%
    </p>
  </div>
);

export default Statistics;
