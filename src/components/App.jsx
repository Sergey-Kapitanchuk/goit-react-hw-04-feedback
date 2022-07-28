import { useState } from "react";
import Statistic from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/section";

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option.toLowerCase()) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 / countTotalFeedback() * good);
  };

  return (
    <>
      <Section title="Please leave feedback">

        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClickFeedback={handleIncrement}>
        </FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistic good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      </Section>
    </>

  )
}

