import { Btn, List } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <List>
            {options.map(option => (
                <li key={option}><Btn type="button" onClick={() => onLeaveFeedback(option)}>{option}</Btn></li>
            ))}
        </List>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,

}