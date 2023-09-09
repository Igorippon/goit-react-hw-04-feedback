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

  const handleClick = (evt) => {
    setState(prevState => ({
      ...prevState, [evt]: prevState[evt] + 1,
    }));
  };

  const total = Object.values(state).reduce((prevValue, value) => {
    return prevValue + value;
  }, 0);

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    if (good !== 0) {
      return Math.round(100 / total * good);
    };
    return 0;
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? <Notification message="There is no feedback" /> : <Statistics
          {...state}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
