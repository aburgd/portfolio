import React from 'react'

const Footer = () => (
  <footer>
    <p>Built with <a href='https://nextjs.org'>Next.js</a>, deployed on <a href='https://zeit.co'>Now</a>.</p>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      footer {
        text-align: center;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }

    `}</style>
  </footer>
)

export default Footer
