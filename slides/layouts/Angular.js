import React from 'react';

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundImage: 'radial-gradient(circle, #c23237 0%, #651C1B 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff'
    }}
  >
    <div
      style={{
        backgroundImage:
          'url("https://angular.io/assets/images/logos/angular/angular_whiteTransparent.svg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat no-repeat',
        backgroundPosition: ' center center',
        width: '800px',
        height: '800px',
        position: 'absolute',
        zIndex: 0,
        opacity: 0.2
      }}
    />
    <div style={{ zIndex: 1 }}>{children}</div>
  </div>
);
