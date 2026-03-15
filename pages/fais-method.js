import React, { Fragment } from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const FaisMethod = (props) => {
  return (
    <>
      <div className="fais-method-container">
        <Head>
          <title>F.A.I.S. Method - FAIS IT</title>
          <meta
            name="description"
            content="The FAIS Method is a student-led framework designed to help teenagers recognize antisemitism in school curriculum and take informed, effective action to correct it."
          />
          <meta property="og:title" content="F.A.I.S. Method - FAIS IT" />
          <meta
            property="og:description"
            content="The FAIS Method is a student-led framework designed to help teenagers recognize antisemitism in school curriculum and take informed, effective action to correct it."
          />
        </Head>
        <section className="fais-method-hero">
          <Header
            text={
              <Fragment>
                <span className="fais-method-nav-text">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="fais-method-nav-text">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="fais-method-nav-text">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="fais-method-nav-text">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="fais-method-nav-text">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="fais-method-nav-text">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="fais-method-nav-text">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="fais-method-nav-text">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="fais-method-nav-text">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="fais-method-nav-text">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="fais-method-nav-text">Donate Now</span>
              </Fragment>
            }
          ></Header>
        </section>

        <section className="fais-method-content">
          <div className="fais-method-inner">
            <h1 className="fais-method-title">The FAIS Method</h1>
            <p className="fais-method-intro">
              The FAIS Method is a student-led framework designed to help teenagers recognize antisemitism in school curriculum and take informed, effective action to correct it.
            </p>

            <div className="fais-method-block">
              <div className="fais-method-letter">F</div>
              <div className="fais-method-block-content">
                <h2 className="fais-method-block-title">F — Find</h2>
                <p className="fais-method-block-text">
                  The first step is to find antisemitic or historically inaccurate material within school curriculum. Students are encouraged to carefully review assignments, handouts, and lessons to identify content that misrepresents Jewish history, Israel, or the Jewish people.
                </p>
              </div>
            </div>

            <div className="fais-method-block">
              <div className="fais-method-letter">A</div>
              <div className="fais-method-block-content">
                <h2 className="fais-method-block-title">A — Assess</h2>
                <p className="fais-method-block-text">
                  Once students identify the material they have found, they are encouraged to share it with parents, trusted adults, and relevant organizations. During this stage, students assess the situation by researching the topic, gathering accurate information, and building the knowledge needed to understand and explain why the material is problematic.
                </p>
              </div>
            </div>

            <div className="fais-method-block">
              <div className="fais-method-letter">I</div>
              <div className="fais-method-block-content">
                <h2 className="fais-method-block-title">I — Initiate</h2>
                <p className="fais-method-block-text">
                  The next step is to initiate a plan for change. Students identify who has the authority to make curriculum decisions, determine the most effective way to approach them, and initiate respectful conversations with teachers, department heads, or administrators.
                </p>
              </div>
            </div>

            <div className="fais-method-block">
              <div className="fais-method-letter">S</div>
              <div className="fais-method-block-content">
                <h2 className="fais-method-block-title">S — Solution</h2>
                <p className="fais-method-block-text">
                  Finally, students work toward a solution. They present their findings, share factual information, and propose constructive solutions to those authorized to make changes. The goal is to empower students to speak up respectfully, take action, and help ensure that school curriculum reflects historical accuracy and fairness.
                </p>
              </div>
            </div>

            <div className="fais-method-closing">
              <p className="fais-method-closing-text">
                We accomplish this by speaking directly with students, parents, and community members through school clubs, community events, webinars, panels, and educational sessions. FAIS give students the knowledge and confidence to recognize antisemitism in curriculum and understand how they can take action.
              </p>
              <p className="fais-method-closing-text">
                During our sessions, we share real examples of antisemitism in education, explain how it can appear in textbooks, assignments, and classroom discussions, and teach students how to respond constructively. We introduce the FAIS Method—Find, Assess, Initiate, Solution, a framework that helps students identify problematic material, research the facts, cooperate with their parents and Jewish organizations, and approach school leadership with informed and constructive solutions.
              </p>
              <p className="fais-method-closing-text">
                Our goal is simple: to give students the tools, knowledge, and confidence to stand up for historical truth and ensure that antisemitism has no place in education.
              </p>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx global>{`
        .fais-method-container {
          width: 100%;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          background-color: #0d0d0d;
        }
        .fais-method-hero {
          width: 100%;
          position: relative;
        }
        .fais-method-content {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 40px;
        }
        .fais-method-inner {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        .fais-method-title {
          color: #ffffff;
          font-size: 64px;
          font-weight: 700;
          margin: 0;
        }
        .fais-method-intro {
          color: #cccccc;
          font-size: 22px;
          line-height: 1.6;
          margin: 0;
          border-left: 4px solid #ffffff;
          padding-left: 24px;
        }
        .fais-method-block {
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }
        .fais-method-letter {
          color: #ffffff;
          font-size: 80px;
          font-weight: 800;
          line-height: 1;
          min-width: 80px;
          opacity: 0.15;
        }
        .fais-method-block-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fais-method-block-title {
          color: #ffffff;
          font-size: 28px;
          font-weight: 600;
          margin: 0;
        }
        .fais-method-block-text {
          color: #cccccc;
          font-size: 18px;
          line-height: 1.7;
          margin: 0;
        }
        .fais-method-closing {
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-top: 1px solid #222;
          padding-top: 48px;
        }
        .fais-method-closing-text {
          color: #cccccc;
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }
        @media (max-width: 767px) {
          .fais-method-content {
            padding: 48px 20px;
          }
          .fais-method-title {
            font-size: 40px;
          }
          .fais-method-letter {
            font-size: 52px;
            min-width: 52px;
          }
          .fais-method-block-title {
            font-size: 22px;
          }
          .fais-method-block-text {
            font-size: 15px;
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

export default FaisMethod
