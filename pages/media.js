import React, { Fragment } from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const articles = [
  {
    outlet: 'Jewish Journal',
    title: 'Marblehead High student peacefully resolves contested curriculum on Israel',
    url: 'https://jewishjournal.org/2024/05/30/marblehead-high-student-peacefully-resolves-contested-curriculum-on-israel/',
    image: '/media-jewish-journal-1.jpg',
    summary:
      'This article explains how David identified inaccurate material in a class assignment and worked with school leadership to change the curriculum. The department head ultimately agreed that the wording about "Palestine" during the biblical time period was historically inaccurate and removed the handout.',
  },
  {
    outlet: 'Jewish Journal',
    title: 'A Marblehead teen continues to lead the fight against anti-Israel bias',
    url: 'https://jewishjournal.org/2025/04/03/a-marblehead-teen-continues-to-lead-the-fight-against-anti-israel-bias/',
    image: '/media-jewish-journal-2.jpg',
    summary:
      'This article discusses how David identified anti-Israel bias in a homework assignment, researched the history, and successfully convinced the school department to change the curriculum after presenting evidence.',
  },
  {
    outlet: 'CBS Boston (WBZ)',
    title: 'Helpline launched for Massachusetts students experiencing antisemitism',
    url: 'https://www.cbsnews.com/boston/news/helpline-massachusetts-students-antisemitism/',
    image: '/media-cbs-boston.jpg',
    summary:
      'A helpline has been launched in K-12 schools in Massachusetts to provide legal assistance to parents whose children are experiencing antisemitism. In this CBS News story, David speaks about discovering antisemitic classroom material and writing a counter-statement that led to the curriculum being removed from the school.',
  },
  {
    outlet: 'Marblehead Current',
    title: 'Locals express relief after Israeli hostages released',
    url: 'https://marbleheadcurrent.org/2025/10/13/locals-express-relief-after-israeli-hostages-released/',
    image: '/media-marblehead-current.jpg',
    summary:
      'The release of the Israeli hostages prompted relief in the Marblehead Jewish community and beyond. This article mentions David\'s activism and notes that he helped start the nonprofit Fighting Antisemitism in Schools (FAIS) and organized community events supporting Israeli hostages.',
  },
  {
    outlet: 'Times of Israel',
    title: 'Massachusetts parents say public school teachers union sowing anti-Israel bias',
    url: 'https://www.timesofisrael.com/massachusetts-parents-say-public-school-teachers-union-sowing-anti-israel-bias/',
    image: '/times-of-israel.webp',
    summary: null,
  },
  {
    outlet: 'Jewish Boston',
    title: "Lessons Learned: One Family's Approach to Anti-Israel Bias in the Classroom",
    url: 'https://www.jewishboston.com/events/lessons-learned-one-familys-approach-to-anti-israel-bias-in-the-classroom/',
    image: '/jewish-boston-lessons.png',
    summary: null,
  },
]

const Media = (props) => {
  return (
    <>
      <div className="media-container">
        <Head>
          <title>Media - FAIS IT</title>
          <meta
            name="description"
            content="FAIS in the news — media coverage of Fighting Antisemitism in Schools."
          />
          <meta property="og:title" content="Media - FAIS IT" />
          <meta
            property="og:description"
            content="FAIS in the news — media coverage of Fighting Antisemitism in Schools."
          />
        </Head>

        <section className="media-hero">
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

        <section className="media-content">
          <div className="media-inner">
            <h1 className="media-page-title">In the Media</h1>
            <p className="media-page-subtitle">
              News coverage and features about FAIS and our work fighting antisemitism in schools.
            </p>

            <div className="media-grid">
              {articles.map((article, i) => (
                <a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="media-card"
                >
                  <div className="media-card-image-wrap">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="media-card-image"
                      />
                    ) : (
                      <div className="media-card-image-placeholder">
                        <span className="media-card-outlet-icon">{article.outlet.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="media-card-body">
                    <span className="media-card-outlet">{article.outlet}</span>
                    <h2 className="media-card-title">{article.title}</h2>
                    {article.summary && (
                      <p className="media-card-summary">{article.summary}</p>
                    )}
                    <span className="media-card-cta">Read article →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx global>{`
        .media-container {
          width: 100%;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          background-color: #0d0d0d;
        }
        .media-hero {
          width: 100%;
        }
        .media-content {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 40px;
        }
        .media-inner {
          width: 100%;
          max-width: var(--dl-layout-size-maxwidth);
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .media-page-title {
          color: #ffffff;
          font-size: 64px;
          font-weight: 700;
          margin: 0;
        }
        .media-page-subtitle {
          color: #aaaaaa;
          font-size: 20px;
          margin: -32px 0 0 0;
          line-height: 1.5;
        }
        .media-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .media-card {
          display: flex;
          flex-direction: column;
          background-color: #161616;
          border: 1px solid #222;
          border-radius: 10px;
          overflow: hidden;
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
        }
        .media-card:hover {
          border-color: #555;
          transform: translateY(-3px);
        }
        .media-card-image-wrap {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: #1e1e1e;
          flex-shrink: 0;
        }
        .media-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .media-card-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .media-card-outlet-icon {
          color: #ffffff;
          font-size: 56px;
          font-weight: 800;
          opacity: 0.1;
        }
        .media-card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 24px;
          flex: 1;
        }
        .media-card-outlet {
          color: #888888;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .media-card-title {
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          margin: 0;
        }
        .media-card-summary {
          color: #aaaaaa;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }
        .media-card-cta {
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          opacity: 0.5;
          margin-top: 8px;
        }
        .media-card:hover .media-card-cta {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .media-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .media-content {
            padding: 48px 20px;
          }
          .media-page-title {
            font-size: 40px;
          }
          .media-grid {
            grid-template-columns: 1fr;
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

export default Media
