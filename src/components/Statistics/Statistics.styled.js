import styled from '@emotion/styled';

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
