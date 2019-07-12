import React from 'react';

const Provider = props => (
  <>
    <div
      style={{
        height: 5,
        background: '#3880FF'
      }}
    />
    {props.children}
  </>
);

export default {
  Provider
};
