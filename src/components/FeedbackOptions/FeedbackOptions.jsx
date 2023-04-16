import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//STYLEs
import theme from 'theme';
import { List, Button } from './FeedbackOptions.styles';
//CONSTS
const colors = {
  good: theme.colors.green,
  neutral: theme.colors.acent,
  bad: theme.colors.red,
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Button
            key={nanoid()}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            color={colors[option]}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Button>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
