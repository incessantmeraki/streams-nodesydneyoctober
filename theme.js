import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Quattrocento Sans, Roboto, sans-serif',
  // custom colors
  colors: {
    text: '#ffffff',
    background: '#1e272e',
    link: '#0ff',
    heading:'#05c46b',
    blockquote:'',
    pre:'',
    preBackground:'',
    code: '',
    codeBackground:'',
  },
  //root css object
  // css: {
  // },
  //css for other elements
  heading: {
  },
  h1: {
    marginTop: '-200px',
    textTransform: 'uppercase',
    fontSize: '150px'
  },
  h2: {
    color: 'white'
  },
  // h3: {},
  // h4: {},
  // h5: {},
  // h6: {},
  // paragraph: {},
  // link: {},
  // ul: {},
  // ol: {},
  // li: {},
  // img: {},
  // blockquote: {},
  // table: {}, 
  prism: {
    style: okaidia
  }
}
