import styled from '@emotion/styled';
import theme from 'theme';

export const List = styled.div({
  display: 'flex',
  gap: '20px',
});
export const Button = styled.button(
  {
    position: 'relative',
    padding: '4px',
    width: '120px',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    fontSize: '20px',
    cursor: 'pointer',
    borderColor: 'transparent',
    borderRadius: '8px',
    color: theme.colors.white,
    '&:hover': {
      color: theme.colors.white,
      cursor: 'pointer',
      borderColor: 'transparent',
    },
  },
  props => ({
    '&:hover': {
      cursor: 'pointer',
      color: props.color,
      boxShadow: `0 0 20px ${props.color}`,
    },
    '&:active': {
      transition: '0.2s',
      boxShadow: 'none',
    },
  })
);
