import styled from '@emotion/styled';
import theme from 'theme';

export const List = styled.ul({
  display: 'flex',
  gap: '20px',
});
export const Item = styled.li(
  {
    fontSize: '22px',
  },
  props => ({
    color: props.color,
  })
);
