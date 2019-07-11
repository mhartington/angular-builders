export default {
  font: 'system-ui, sans-serif',
  monospace: '"SF Mono", Menlo, monospace',

  colors: {
    text: '#000',
    background: 'white',
    link: '#07c',
    pre: '#f0f',
    preBackground: '#333',
    code: '#1b2b34'
  },
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:56em)': {
      fontSize: '32px'
    },
    '@media screen and (min-width:64em)': {
      fontSize: '48px'
    },
    '@media print': {
      fontSize: '40px'
    },
    'li > p': {
      margin: 0
    }
  },
  '*' : {
    boxSizing: 'border-box'
  },
  pre: {
    textAlign: 'left',
    fontWeight: 500
  },
  ol: {
    textAlign: 'left'
  },
  ul: {
    textAlign: 'center',
    listStyle: 'none',
    lineHeight: 1.6,
  },
  h1: {
    color: '#3880FF',
    fontSize: '5em',
    fontWeight: 900,
    textTransform: 'uppercase',
    marginTop: 0,
    marginBottom: 0,
  },
  h2: {
    fontSize: '3.5em',
    fontWeight: 900,
    marginBottom: 0,
    marginTop: 0,
    textTransform: 'uppercase'
  },
  h3: {
    fontSize: '2em',
    marginBottom: 0,
    marginBottom: 0,
    fontWeight: 900,
    marginTop: 0,
    textTransform: 'uppercase'
  }
};

// primary: 'white',
// secondary: '#1b2b34', // almost black w/ blueish tint
// tertiary: '#3880FF', // bright red
// quaternary: '#CECECE' // pale gray'
