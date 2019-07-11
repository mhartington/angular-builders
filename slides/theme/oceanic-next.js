export default {
  colors: {
    text: '#ffffff',
    background: '#1b2b34',
    link: '#8dc891',
    pre: '#ffffff',
    code: '#ffffff',
    preBackground: '#1b2b34'
  },
  codeSurfer: {
    styles: [
      {types: ['comment','prolog','doctype','cdata'], style:{color: '#65737E'}},
      {types: ['punctuation'], style: { color: '#C0C5CE'}},
      {types: ['namespace'], style: {opacity: 0.7}},
      {types: [ 'operator', 'boolean','number' ], style: {color: '#F99157'}},
      {types: ['property'], styel: { color: '#FAC863'}},
      {types: ['entity','url'], style: { color: '#5FB3B3'}},
      {types:[ 'tag' ], style: {color: '#6699CC'}},
      {types:[ 'string' ], style: {color: '#5FB3B3'}},
      {types:[ 'selector' ], style: {color: '#C594C5'}},
      {types:[ 'attr-name' ], style: { color: '#F99157'}},
      {types:[ 'attr-value','keyword','control','directive','unit' ], style: {color: '#99C794'}},
      {types:[ 'statement','regex','atrule' ], style: { color: '#5FB3B3'}},
      {types:[ 'placeholder','variable' ], style: { color: '#6699CC'}},
    ],
    title: { background: '#1b2b34', color: 'white' },
    subtitle: { color: '#d6deeb', background: 'rgba(10,10,10,0.9)' },
    pre: { color: '#ffffff', background: '#1b2b34' },
    code: { color: '#ffffff', background: '#1b2b34' }
  }
};
