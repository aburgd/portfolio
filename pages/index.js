import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head>
      <title>Alec Burgdorf</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Hi, I'm Alec Burgdorf.</h1>
      <p className='description'>
        I've got a Bachelor's in CMIS, from Southern Illinois University Edwardsville.
      </p>

      <div className='row'>
        <Link href='https://github.com/aburgd/chksm_rs'>
          <a className='card'>
            <h3>chksm_rs</h3>
            <p><code>Rust</code> A command-line utility for calculating file checksums.</p>
          </a>
        </Link>
        <Link href='https://github.com/aburgd/new_vegas'>
          <a className='card'>
            <h3>new_vegas</h3>
            <p><code>Rust</code> A command-line application that generates a player character for Obsidian's 2010 installment
            in the <i>Fallout</i> franchise, <i>Fallout: New Vegas</i></p>
          </a>
        </Link>
        <Link href='https://github.com/aburgd/DHKE-py'>
          <a className="card">
            <h3>DHKE-py</h3>
            <p><code>Python</code> An oversimplified command-line demonstration of the DHKE algorithm.</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #3E4156;
        background-color: #FFF4DD;
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
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 14px;
        color: #333;
      }
    `}</style>

    <Footer />

  </div>
)

export default Home
