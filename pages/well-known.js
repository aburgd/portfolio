import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const files = [
  { href: '/.well-known/keybase.txt', filename: 'keybase.txt'},
  { href: '/.well-known/alec-gpg.txt', filename: 'alec-gpg.txt'},
  { href: '/.well-known/brave-rewards-verification.txt', filename: 'brave-rewards-verification.txt'}
].map(file => {
  file.key = `nav-link-${file.href}-${file.filename}`
  return file
})

const WellKnown = () => (
  <wellknown>
    <Head>
      <title>.well-known</title>
    </Head>
    
    <Nav />

    <div className="hero">
      <h1 className="title">.well-known</h1>
      <p className="description">Contents of the <code>.well-known/</code> directory.</p>
      
      <div className="row">

        <ul>
          {files.map(({ key, href, filename }) => (
            <li key={key} className='card file'>
              <a href={href}>{filename}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <style>{`
      .hero {
        width: 100%;
        color: #3E4156;
        background-color: #FFF4DD;
      }
      li {
        list-style-type: none;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 15px;
        width: 440px;
        text-align: left;
        text-decoration: none;
        font-size: 15px;
        color: #434343;
        background-color: #EDEDED;
      }
      .file {
        font-family: monospace;
      }
    `}</style>
    
    <Footer />

  </wellknown>
)

export default WellKnown