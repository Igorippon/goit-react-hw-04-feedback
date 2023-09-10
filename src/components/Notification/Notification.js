import { Title } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (<Title>
        {message}
    </Title>);
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};