import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import PageLinks from '../components/page-links'

const groups = [
  {
    org: 'Hadassah',
    items: [
      {
        title: 'Israel and Zionist Education',
        url: 'https://my.hadassah.org/myhadassah/resources/zionist-israel-education.html',
      },
    ],
  },
  {
    org: 'ADL (Anti-Defamation League)',
    items: [
      {
        title: 'From the River Explainer',
        url: 'https://my.hadassah.org/myhadassah/resource-files/zionist-education/additional-programs/from-the-river-explainer.pdf',
      },
      {
        title: 'Israel in the Curriculum',
        url: 'https://www.adl.org/resources/tools-and-strategies/israel-curriculum',
      },
      {
        title: 'Report an Antisemitic, Biased, or Discriminatory Incident',
        url: 'https://www.adl.org/report-incident',
      },
      {
        title: 'Helpline: Free Legal Advice for MA & NY Parents Whose K–12 Children Experience Antisemitism in School',
        url: 'https://www.adl.org/resources/press-release/adl-brandeis-center-standwithus-launch-antisemitism-helpline-ma-and-ny-k-12',
      },
    ],
  },
  {
    org: 'StandWithUs',
    items: [
      {
        title: "Israel's Story & Zionism",
        url: 'https://www.standwithus.com/israels-story-and-zionism',
      },
      {
        title: 'Combating Antisemitism in High Schools',
        url: 'https://www.standwithus.com/hs-education-activism',
      },
      {
        title: 'Resources to Address the Hamas–Israel War in the Classroom',
        url: 'https://www.flipsnack.com/59DEA577C6F/israel-resources/full-view.html',
      },
    ],
  },
  {
    org: 'AJC – American Jewish Committee',
    items: [
      {
        title: 'Toolkit for Parents of Jewish Middle and High School Students',
        url: 'https://www.ajc.org/ConfrontingAntisemitismToolkitParents',
      },
      {
        title: 'AJC Educational Programs for Middle and High School Spaces',
        url: 'https://www.ajc.org/education',
      },
      {
        title: 'Antisemitism',
        url: 'https://www.ajc.org/issues/antisemitism',
      },
    ],
  },
  {
    org: 'ICS – Institute for Curriculum Services',
    items: [
      {
        title: 'Israel–Hamas War Resources',
        url: 'https://icsresources.org/israel-hamas-war-resources/',
      },
    ],
  },
  {
    org: 'Learning for Justice (formerly Teach Tolerance)',
    items: [
      {
        title: 'Resisting Hate in Education',
        url: 'https://www.learningforjustice.org/the-learning-center/resisting-hate-in-education',
      },
      {
        title: 'Resources for Educators and Families to Discuss the Events in Israel and Gaza with Students',
        url: 'https://www.learningforjustice.org/the-learning-center/resisting-hate-in-education',
      },
    ],
  },
]

const Resources = (props) => {
  return (
    <>
      <div className="resources-container1">
        <Head>
          <title>Resources - FAIS IT</title>
          <meta
            name="description"
            content="Curated articles, guides, and sources to help students and families recognize and respond to antisemitism in school curriculum."
          />
          <meta property="og:title" content="Resources - FAIS IT" />
          <meta
            property="og:description"
            content="Curated articles, guides, and sources to help students and families recognize and respond to antisemitism in school curriculum."
          />
          <link
            rel="canonical"
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/resources"
          />
        </Head>

        <section className="resources-thq-hero-elm">
          <Header
            text={<Fragment><span className="resources-text100">About</span></Fragment>}
            login={<Fragment><span className="resources-text101">Get Involved</span></Fragment>}
            text1={<Fragment><span className="resources-text102">Resources</span></Fragment>}
            text2={<Fragment><span className="resources-text103">Get Involved</span></Fragment>}
            text3={<Fragment><span className="resources-text104">Need Help</span></Fragment>}
            text4={<Fragment><span className="resources-text105">Donate</span></Fragment>}
            text5={<Fragment><span className="resources-text106">Contact</span></Fragment>}
            text6={<Fragment><span className="resources-text107">FAIS IT</span></Fragment>}
            text8={<Fragment><span className="resources-text108">News</span></Fragment>}
            text61={<Fragment><span className="resources-text109">FAIS IT</span></Fragment>}
            register={<Fragment><span className="resources-text110">Donate Now</span></Fragment>}
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/6214666/6214666-hd_2048_1080_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/6214666/pictures/preview-0.jpg"
            preload="auto"
            autoPlay
            playsInline
            className="resources-video"
          ></video>
          <div className="resources-thq-hero-content-elm">
            <div className="resources-thq-header-container-elm">
              <div className="resources-thq-header-elm">
                <h1 className="resources-thq-heading-elm">Resources</h1>
              </div>
              <p className="resources-thq-caption-elm">
                Curated articles, guides, and sources to help students and families recognize and respond to antisemitism in school curriculum.
              </p>
            </div>
            <Link href="/contact">
              <a className="resources-link10 button">
                <span>Get Involved</span>
              </a>
            </Link>
          </div>
        </section>

        <section className="res-body">
          <div className="res-inner">
            <h2 className="res-section-title">Articles &amp; Sources</h2>
            <p className="res-section-subtitle">
              Explore our collection of resources from trusted organizations designed to help students, parents, and educators identify and address antisemitism and anti-Israel bias in education.
            </p>

            {groups.map((group, gi) => (
              <div key={gi} className="res-group">
                <h3 className="res-org-name">{group.org}</h3>
                <div className="res-cards">
                  {group.items.map((item, ii) => (
                    <a
                      key={ii}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="res-card"
                    >
                      <span className="res-card-title">{item.title}</span>
                      <span className="res-card-cta">Visit resource →</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <PageLinks />
        <Footer
          text={<Fragment><span className="resources-text185">© 2025 FAIS IT</span></Fragment>}
          text2={<Fragment><span className="resources-text186">About</span></Fragment>}
          text3={<Fragment><span className="resources-text187">Contact</span></Fragment>}
          text4={<Fragment><span className="resources-text188">Get Involved</span></Fragment>}
          text6={<Fragment><span className="resources-text189">News</span></Fragment>}
          text7={<Fragment><span className="resources-text190">Articles</span></Fragment>}
          text8={<Fragment><span className="resources-text191">Blog</span></Fragment>}
          text9={<Fragment><span className="resources-text192">Privacy</span></Fragment>}
          header={<Fragment><span className="resources-text193">Organization</span></Fragment>}
          text10={<Fragment><span className="resources-text194">Terms</span></Fragment>}
          text11={<Fragment><span className="resources-text195">Legal</span></Fragment>}
          text12={<Fragment><span className="resources-text196">Press</span></Fragment>}
          text13={<Fragment><span className="resources-text197">LinkedIn</span></Fragment>}
          text14={<Fragment><span className="resources-text198">Twitter</span></Fragment>}
          text15={<Fragment><span className="resources-text199">Instagram</span></Fragment>}
          text16={<Fragment><span className="resources-text200">Facebook</span></Fragment>}
          text17={<Fragment><span className="resources-text201">TikTok</span></Fragment>}
          text31={<Fragment><span className="resources-text202">Donate</span></Fragment>}
          text41={<Fragment><span className="resources-text203">Need Help</span></Fragment>}
          text61={<Fragment><span className="resources-text204">FAIS IT</span></Fragment>}
          header1={<Fragment><span className="resources-text205">Extern</span></Fragment>}
          header2={<Fragment><span className="resources-text206">Social</span></Fragment>}
          rootClassName="footerroot-class-name4"
        ></Footer>
      </div>

      <style jsx>{`
        .resources-container1 {
          width: 100%;
          display: flex;
          min-height: 100vh;
          align-items: center;
          flex-direction: column;
          background-color: var(--dl-color-gray-black);
        }
        .resources-thq-hero-elm {
          width: 100%;
          height: 100vh;
          display: flex;
          position: relative;
          align-items: center;
          padding-left: var(--dl-layout-space-fiveunits);
          flex-direction: column;
          justify-content: flex-start;
        }
        .resources-video {
          top: 0px;
          left: 0px;
          width: 100%;
          filter: opacity(0.5);
          height: 100%;
          position: absolute;
          object-fit: cover;
        }
        .resources-thq-hero-content-elm {
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
        .resources-thq-header-container-elm {
          gap: var(--dl-layout-space-oneandhalfunits);
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        .resources-thq-header-elm {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        .resources-thq-heading-elm {
          color: rgb(255, 255, 255);
          font-size: 100px;
          max-width: 790px;
          font-style: normal;
          font-weight: 500;
        }
        .resources-thq-caption-elm {
          color: rgb(255, 255, 255);
          font-size: var(--fais-font-body-lg);
          max-width: 600px;
          line-height: 36px;
        }
        .resources-link10 {
          text-decoration: none;
        }

        /* Body */
        .res-body {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 40px;
        }
        .res-inner {
          width: 100%;
          max-width: var(--dl-layout-size-maxwidth);
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .res-section-title {
          color: #ffffff;
          font-size: var(--fais-font-h1);
          font-weight: 700;
          margin: 0;
        }
        .res-section-subtitle {
          color: #aaaaaa;
          font-size: var(--fais-font-body);
          line-height: 1.6;
          margin: -48px 0 0 0;
          max-width: 720px;
        }
        .res-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .res-org-name {
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0;
          opacity: 0.5;
          padding-bottom: 12px;
          border-bottom: 1px solid #222;
        }
        .res-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .res-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #161616;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 20px 24px;
          text-decoration: none;
          transition: border-color 0.2s, background-color 0.2s;
          gap: 24px;
        }
        .res-card:hover {
          border-color: #555;
          background-color: #1e1e1e;
        }
        .res-card-title {
          color: #ffffff;
          font-size: var(--fais-font-body-sm);
          font-weight: 500;
          line-height: 1.4;
        }
        .res-card-cta {
          color: #888;
          font-size: 13px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .res-card:hover .res-card-cta {
          color: #ffffff;
        }

        /* inline-block helpers kept for footer */
        .resources-text100, .resources-text101, .resources-text102,
        .resources-text103, .resources-text104, .resources-text105,
        .resources-text106, .resources-text107, .resources-text108,
        .resources-text109, .resources-text110, .resources-text185,
        .resources-text186, .resources-text187, .resources-text188,
        .resources-text189, .resources-text190, .resources-text191,
        .resources-text192, .resources-text193, .resources-text194,
        .resources-text195, .resources-text196, .resources-text197,
        .resources-text198, .resources-text199, .resources-text200,
        .resources-text201, .resources-text202, .resources-text203,
        .resources-text204, .resources-text205, .resources-text206 {
          display: inline-block;
        }

        @media (max-width: 991px) {
          .resources-thq-hero-elm {
            padding-left: var(--dl-layout-space-oneandhalfunits);
          }
          .resources-thq-hero-content-elm {
            padding-right: var(--dl-layout-space-oneandhalfunits);
          }
        }
        @media (max-width: 767px) {
          .res-body {
            padding: 48px 20px;
          }
          .res-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
        @media (max-width: 479px) {
          .resources-thq-hero-content-elm {
            gap: var(--dl-layout-space-threeunits);
          }
          .resources-thq-caption-elm {
            font-size: 16px;
            line-height: 24px;
          }
          .resources-link10 {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}

export default Resources
