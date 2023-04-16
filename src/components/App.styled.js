import styled from '@emotion/styled';
import theme from 'theme';

export const Container = styled.div({
  margin: '20px auto',
  padding: '0 8px',
  height: '100%',
  width: '80%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '12px',
  color: theme.colors.white,
});
