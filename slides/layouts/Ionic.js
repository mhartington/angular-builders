
import React from 'react';
import styled from '@emotion/styled';

const IonicLayout = styled.div({
  width: '100vw',
  height: '100vw',
  backgroundColor: '#3880FF',
  color: "white",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export default props => <IonicLayout {...props} />;

