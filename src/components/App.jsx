import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from "./Section/Section.js";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions.js";
import { Statistics } from "./Statistics/Statistics.js";
import { Notification } from "./Notification/Notification.js"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (evt) => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((prevValue, value) => {
      return prevValue + value
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (good !== 0) {
      return Math.round(100 / total * good);
    };
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
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
  }

};
