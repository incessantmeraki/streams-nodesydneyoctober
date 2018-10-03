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
  css: {
    h1: {
      textTransform: 'uppercase'
    },
    h2: {
      color: 'white',
    },
    li: {
      marginBottom:'15px'
    }
  },
  prism: {
    style: okaidia
  }
}
