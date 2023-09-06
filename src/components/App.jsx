import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from "./Section/Section.js";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions.js";
import { Statistics } from "./Statistics/Statistics.js";
import { Notification } from "./Notification/Notification.js"

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const options = Object.keys(state);
  const values = Object.values(state);
  const { good, neutral, bad } = state;

  const handleClick = (evt) => {
    setState(prevState => ({
      ...prevState, [evt]: prevState[evt] + 1,
    }));
  };

  const total = values.reduce((prevValue, value) => {
    return prevValue + value
  }, 0);

  const countPositiveFeedbackPercentage = () => {
    if (good !== 0) {
      return Math.round(100 / total * good);
    };
    return 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? <Notification message="There is no feedback" /> : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};






