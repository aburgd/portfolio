import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <p>Built with <Link href='https://nextjs.org'>Next.js</Link>, deployed on <Link href='https://zeit.co'>Now</Link>.</p>

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
