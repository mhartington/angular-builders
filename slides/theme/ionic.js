export default {
  font: 'system-ui, sans-serif',
  monospace: '"Victor Mono", Menlo, monospace',
  colors: {
    text: '#151D34',
    background: '#f6f8fa',
    link: '#07c',
    pre: '#f0f',
    preBackground: '#011627',
    code: '#434C6C'
  },
  css: {
    fontSize: '16px',
    textAlign: 'center',
    boxSizing: 'border-box',
    '@media screen and (min-width:56em)': {
      fontSize: '32px'
    },
    'p.cs-subtitle, .cs-title': {
      fontSize: '50px'
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
    letterSpacing: 30
  },
  h2: {
    fontSize: '3.5em',
    fontWeight: 900,
    marginBottom: 0,
    marginTop: 0,
    textTransform: 'uppercase',
    wordSpacing: 20
  },
  h3: {
    fontSize: '2em',
    marginBottom: 10,
    fontWeight: 900,
    marginTop: 10,
    textTransform: 'uppercase',
    wordSpacing: 10
  }
};

// primary: 'white',
// secondary: '#1b2b34', // almost black w/ blueish tint
// tertiary: '#3880FF', // bright red
// quaternary: '#CECECE' // pale gray'
