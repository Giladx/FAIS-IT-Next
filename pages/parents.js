import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'
import PageLinks from '../components/page-links'

const Parents = (props) => {
  return (
    <>
      <div className="parents-container">
        <Head>
          <title>Parents - FAIS IT</title>
          <meta
            name="description"
            content="Resources and information for parents on antisemitism in school curriculum and how to take action."
          />
          <meta property="og:title" content="Parents - FAIS IT" />
          <meta
            property="og:description"
            content="Resources and information for parents on antisemitism in school curriculum and how to take action."
          />
          <meta property="og:image" content="https://www.faisit.com/newlogo.png" />
        </Head>

        <section className="parents-hero">
          <Header
            text={<Fragment><span>About</span></Fragment>}
            login={<Fragment><span>Get Involved</span></Fragment>}
            text1={<Fragment><span>Resources</span></Fragment>}
            text2={<Fragment><span>Get Involved</span></Fragment>}
            text3={<Fragment><span>Need Help</span></Fragment>}
            text4={<Fragment><span>Donate</span></Fragment>}
            text5={<Fragment><span>Contact</span></Fragment>}
            text6={<Fragment><span>FAIS IT</span></Fragment>}
            text8={<Fragment><span>News</span></Fragment>}
            text61={<Fragment><span>FAIS IT</span></Fragment>}
            register={<Fragment><span>Donate Now</span></Fragment>}
          ></Header>
        </section>

        <section className="parents-content">
          <div className="parents-inner">
            <h1 className="parents-title">For Parents</h1>

            <p className="parents-text">
              Students are often the first line of defense against antisemitic or anti-Israel content in education. Parents frequently do not see the materials their children are taught, while students encounter them directly in classrooms and assignments. Yet many students lack the tools to recognize bias, understand why it is harmful, and take effective action.
            </p>

            <div className="parents-divider"></div>

            <h2 className="parents-subtitle">Students Can Be the First Defense</h2>
            <p className="parents-text">
              Students can be the first defense in anti-Semitic/anti-Israel curriculum. As parents to teenagers do not know what their children are being taught. It is the students who are confronted with the curriculum but often they do not have the tools to recognize, understand and take action against the anti-Semitic/anti-Israel curriculum.
            </p>

            <div className="parents-cta">
              <Link href="/contact">
                <a className="parents-link button">Get Involved</a>
              </Link>
              <Link href="/fais-method">
                <a className="parents-link-secondary">Learn the FAIS Method →</a>
              </Link>
            </div>
          </div>
        </section>

        <PageLinks />
        <Footer></Footer>
      </div>

      <style jsx global>{`
        .parents-container {
          width: 100%;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          background-color: #0d0d0d;
        }
        .parents-hero {
          width: 100%;
        }
        .parents-content {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 40px;
        }
        .parents-inner {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .parents-title {
          color: #ffffff;
          font-size: 64px;
          font-weight: 700;
          margin: 0;
        }
        .parents-subtitle {
          color: #ffffff;
          font-size: 32px;
          font-weight: 600;
          margin: 0;
        }
        .parents-text {
          color: #cccccc;
          font-size: 20px;
          line-height: 1.8;
          margin: 0;
        }
        .parents-divider {
          width: 100%;
          height: 1px;
          background-color: #222;
        }
        .parents-cta {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .parents-link {
          text-decoration: none;
        }
        .parents-link-secondary {
          color: #aaaaaa;
          font-size: 16px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .parents-link-secondary:hover {
          color: #ffffff;
        }
        @media (max-width: 767px) {
          .parents-content {
            padding: 48px 20px;
          }
          .parents-title {
            font-size: 40px;
          }
          .parents-text {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  }
}

export default Parents
