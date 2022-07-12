import React, { Component } from "react";
import Statistic from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/section";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  
  handleIncrement=selected=>{
    this.setState(prevState=>{
      return {[selected]:prevState[selected]+1}
    })
  };

 
  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(100 / this.countTotalFeedback() * this.state.good);
   };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">

        <FeedbackOptions
          options={['good','neutral','bad']}
          onClickFeedback={this.handleIncrement}>
          </FeedbackOptions>
          </Section>
        <Section title="Statistics">
          <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section>
      </>
    )
  }
}

