import React, { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification/Notification';

import style from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = statName => {
    this.setState(prevState => {
      const value = prevState[statName];
      return {
        [statName]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / result);
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <div className={style.feedbackOptions}>
        <Section
          title="Please leave feedback"
          className={style.feedbackSection}>
          <FeedbackOptions
            onBtnGood={() => this.increase('good')}
            onBtnNeutral={() => this.increase('neutral')}
            onBtnBad={() => this.increase('bad')}
          />
        </Section>

        <Section title="Statistics" className={style.statisticSection}>
          {total ? (
            <Statistics
              {...this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
