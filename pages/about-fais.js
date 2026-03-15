import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutFais = (props) => {
  return (
    <>
      <div className="aboutf-container1">
        <Head>
          <title>About - FAIS IT</title>
          <meta
            name="description"
            content="FAIS works to educate and empower teenagers—by teenagers—to recognize, speak up against, and change antisemitic and anti-Israel curriculum in their schools."
          />
          <meta property="og:title" content="About - FAIS IT" />
          <meta
            property="og:description"
            content="FAIS works to educate and empower teenagers—by teenagers—to recognize, speak up against, and change antisemitic and anti-Israel curriculum in their schools."
          />
        </Head>
        <section className="aboutf-thq-hero-elm">
          <Header
            text={<Fragment><span className="aboutf-nav-text">Our Story</span></Fragment>}
            login={<Fragment><span className="aboutf-nav-text">Get Involved</span></Fragment>}
            text1={<Fragment><span className="aboutf-nav-text">Resources</span></Fragment>}
            text2={<Fragment><span className="aboutf-nav-text">Get Involved</span></Fragment>}
            text3={<Fragment><span className="aboutf-nav-text">Need Help</span></Fragment>}
            text4={<Fragment><span className="aboutf-nav-text">Donate</span></Fragment>}
            text5={<Fragment><span className="aboutf-nav-text">Contact</span></Fragment>}
            text6={<Fragment><span className="aboutf-nav-text">FAIS IT</span></Fragment>}
            text8={<Fragment><span className="aboutf-nav-text">News</span></Fragment>}
            text61={<Fragment><span className="aboutf-nav-text">FAIS IT</span></Fragment>}
            register={<Fragment><span className="aboutf-nav-text">Donate Now</span></Fragment>}
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/4687388/4687388-hd_1280_720_24fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/4687388/pictures/preview-0.jpg"
            preload="auto"
            autoPlay
            playsInline
            className="aboutf-video"
          ></video>
          <div className="aboutf-thq-hero-content-elm">
            <div className="aboutf-thq-header-container-elm">
              <div className="aboutf-thq-header-elm">
                <h1 className="aboutf-thq-heading-elm">
                  <span>About</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <Link href="/contact">
              <a className="aboutf-link button">
                <span>Get Involved</span>
              </a>
            </Link>
          </div>
        </section>
        <div className="aboutf-thq-body-elm">
          <div className="aboutf-container3">
            <p className="aboutf-text">
              FAIS (Fighting Antisemitism in Schools) works to educate and empower teenagers—by teenagers—to recognize, speak up against, and change antisemitic and anti-Israel curriculum in their schools, communities, and online.
            </p>
            <p className="aboutf-text">
              We accomplish this by speaking directly with students, parents, and community members through school presentations, synagogue events, webinars, panels, and educational sessions. These events give students the knowledge and confidence to recognize antisemitism in curriculum and understand how they can take action.
            </p>
            <p className="aboutf-text">
              During our sessions, we share real examples of antisemitism in education, explain how it can appear in textbooks, assignments, and classroom discussions, and teach students how to respond constructively. We introduce the FAIS Method—Find, Assess, Initiate, Solution, a framework that helps students identify problematic material, research the facts, cooperate with their parents and Jewish organizations, and approach school leadership with informed and constructive solutions.
            </p>
            <p className="aboutf-text aboutf-text-goal">
              Our goal is simple: to give students the tools, knowledge, and confidence to stand up for historical truth and ensure that antisemitism has no place in education.
            </p>
          </div>
        </div>

        <div className="aboutf-successes-elm">
          <div className="aboutf-successes-inner">
            <h2 className="aboutf-successes-title">Successes</h2>

            <div className="aboutf-success-item">
              <h3 className="aboutf-success-heading">Marblehead High School Curriculum Review</h3>
              <p className="aboutf-success-desc">
                Advocated for the correction of antisemitic and historically inaccurate content in the curriculum at Marblehead High School.
              </p>
              <p className="aboutf-success-desc">
                A classroom handout used in a homework assignment contained historical inaccuracies that erased the historical and modern connection between Israel and Judea while replacing the references with Palestine. The handout also included a symbol resembling a distorted Star of David.
              </p>
              <p className="aboutf-success-desc">
                Working together with concerned parents, the issue was formally raised and reviewed. As a result:
              </p>
              <ul className="aboutf-success-list">
                <li>The inaccurate handout was retracted from the curriculum.</li>
                <li>School administrators committed to correcting the historical information and dates.</li>
                <li>The issue helped initiate broader review of instructional materials for accuracy and bias.</li>
              </ul>
              <p className="aboutf-success-desc">
                This effort ensured that curriculum materials reflect historical accuracy and respect for Jewish history and identity.
              </p>
            </div>

            <div className="aboutf-success-item">
              <h3 className="aboutf-success-heading">Accountability for Antisemitic Language</h3>
              <p className="aboutf-success-desc">
                Raised concerns regarding antisemitic rhetoric associated with Linda Sarsour and its impact on community discourse.
              </p>
              <p className="aboutf-success-desc">
                Participated in discussions and proceedings connected to the School Committee's review and investigative process, advocating for accountability and respectful public dialogue.
              </p>
            </div>

            <div className="aboutf-success-item">
              <h3 className="aboutf-success-heading">Ongoing and Future Projects</h3>
              <p className="aboutf-success-subheading">Educational Sessions and Community Engagement</p>
              <p className="aboutf-success-desc">
                Continuing to organize and participate in educational webinars and in-person sessions throughout New England focused on:
              </p>
              <ul className="aboutf-success-list">
                <li>Combating antisemitism</li>
                <li>Promoting historical accuracy</li>
                <li>Community dialogue and education</li>
              </ul>
              <p className="aboutf-success-desc">Activities include:</p>
              <ul className="aboutf-success-list">
                <li>Guest speaking on panels, webinars, and public forums</li>
                <li>Hosting community discussions and educational workshops</li>
                <li>Collaborating with educators and organizations to promote awareness</li>
              </ul>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .aboutf-container1 {
          width: 100%;
          display: flex;
          min-height: 100vh;
          align-items: center;
          flex-direction: column;
          background-color: var(--dl-color-gray-black);
        }
        .aboutf-thq-hero-elm {
          width: 100%;
          height: 100vh;
          display: flex;
          position: relative;
          align-items: center;
          padding-left: var(--dl-layout-space-fiveunits);
          flex-direction: column;
          justify-content: flex-start;
        }
        .aboutf-video {
          top: 0px;
          left: 0px;
          width: 100%;
          filter: opacity(0.6);
          height: 100%;
          position: absolute;
          object-fit: cover;
        }
        .aboutf-thq-hero-content-elm {
          gap: var(--dl-layout-space-fiveunits);
          flex: 1;
          width: 100%;
          display: flex;
          z-index: 100;
          max-width: var(--dl-layout-size-maxwidth);
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
        }
        .aboutf-thq-header-container-elm {
          gap: var(--dl-layout-space-oneandhalfunits);
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
        }
        .aboutf-thq-header-elm {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        .aboutf-thq-heading-elm {
          color: rgb(255, 255, 255);
          font-size: 100px;
          max-width: 790px;
          font-style: normal;
          font-weight: 500;
        }
        .aboutf-link {
          text-decoration: none;
        }
        .aboutf-thq-body-elm {
          flex: 0 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: var(--dl-layout-space-sixunits);
          padding-bottom: var(--dl-layout-space-sixunits);
          padding-left: var(--dl-layout-space-fiveunits);
          padding-right: var(--dl-layout-space-fiveunits);
        }
        .aboutf-container3 {
          width: 100%;
          max-width: var(--dl-layout-size-maxwidth);
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 0;
        }
        .aboutf-text {
          color: rgb(255, 255, 255);
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 1.4em;
        }
        .aboutf-text-goal {
          font-weight: 500;
          border-left: 4px solid #ffffff;
          padding-left: 24px;
          margin-top: 16px;
        }
        .aboutf-successes-elm {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 40px;
          border-top: 1px solid #222;
        }
        .aboutf-successes-inner {
          width: 100%;
          max-width: var(--dl-layout-size-maxwidth);
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .aboutf-successes-title {
          color: #ffffff;
          font-size: var(--fais-font-h1);
          font-weight: 700;
          margin: 0;
        }
        .aboutf-success-item {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 48px;
          border-bottom: 1px solid #222;
        }
        .aboutf-success-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .aboutf-success-heading {
          color: #ffffff;
          font-size: var(--fais-font-h3);
          font-weight: 600;
          margin: 0;
        }
        .aboutf-success-subheading {
          color: #aaaaaa;
          font-size: var(--fais-font-body);
          font-weight: 600;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 13px;
        }
        .aboutf-success-desc {
          color: #cccccc;
          font-size: var(--fais-font-body);
          font-weight: 300;
          line-height: 1.6;
          margin: 0;
        }
        .aboutf-success-list {
          color: #cccccc;
          font-size: var(--fais-font-body);
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          padding-left: 24px;
        }
        @media (max-width: 767px) {
          .aboutf-successes-elm {
            padding: 48px 20px;
          }
        }
        @media (max-width: 991px) {
          .aboutf-thq-hero-elm {
            padding-left: var(--dl-layout-space-oneandhalfunits);
          }
          .aboutf-thq-hero-content-elm {
            padding-right: var(--dl-layout-space-oneandhalfunits);
          }
          .aboutf-thq-body-elm {
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
          }
        }
        @media (max-width: 767px) {
          .aboutf-thq-heading-elm {
            font-size: 60px;
          }
          .aboutf-text {
            font-size: 16px;
          }
          .aboutf-thq-body-elm {
            padding-top: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
          }
        }
        @media (max-width: 479px) {
          .aboutf-thq-hero-content-elm {
            gap: var(--dl-layout-space-threeunits);
          }
          .aboutf-thq-heading-elm {
            font-size: 36px;
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

export default AboutFais
