import React from 'react';

export default ({ bgColor, children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: bgColor? bgColor : 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff'
    }}
  >
    {children}
  </div>
);
