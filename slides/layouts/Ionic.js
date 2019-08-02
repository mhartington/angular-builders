import React from 'react';
export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: '#3880FF',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        backgroundImage: 'url("../imgs/ionic-light-icon.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat no-repeat',
        backgroundPosition: ' center center',
        width: '500px',
        height: '500px',
        position: 'absolute',
        zIndex: 0,
        opacity: 0.2
      }}
    />
    <div style={{ zIndex: 1 }}>{children}</div>
  </div>
);
