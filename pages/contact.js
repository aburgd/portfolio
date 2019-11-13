import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Contact = () => (
  <contact>
    <Head>
      <title>Contact Me</title>
    </Head>

    <Nav />

    <div className="hero">
      <h1 className='title'>Contact Me.</h1>

      <div className="row">
        <Link href='mailto:alec@aburgd.me'>
          <a className="card">
            <h3>Email</h3>
            <p>alec at aburgd dot me</p>
          </a>
        </Link>
        <Link href='https://keybase.io/aeburgd'>
          <a className="card">
            <h3>Keybase</h3>
            <p>keybase/aeburgd</p>
          </a>
        </Link>
        <a className="card">
          <h3>Signal Number</h3>
          <p>+1 (872) 228-7410</p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
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
        font-size: 13px;
        color: #333;
      }
    `}</style>

  </contact>
)

export default Contact
