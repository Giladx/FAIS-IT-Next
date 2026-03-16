import React, { Fragment } from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import PageLinks from '../components/page-links'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - FAIS IT</title>
          <meta
            name="description"
            content="Meet the team behind FAIS — Fighting Antisemitism in Schools."
          />
          <meta property="og:title" content="Team - FAIS IT" />
          <meta
            property="og:description"
            content="Meet the team behind FAIS — Fighting Antisemitism in Schools."
          />
        </Head>

        <section className="team-hero">
          <Header
            text={
              <Fragment>
                <span>About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span>Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span>Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span>Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span>Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span>Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span>Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span>FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span>News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span>FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span>Donate Now</span>
              </Fragment>
            }
          ></Header>
        </section>

        <section className="team-content">
          <div className="team-inner">
            <h1 className="team-page-title">Our Team</h1>

            <div className="team-member">
              <div className="team-member-photo-wrap">
                <img
                  src="/yael.png"
                  alt="Yael Magen"
                  className="team-member-photo"
                />
              </div>
              <div className="team-member-info">
                <h2 className="team-member-name">Yael Magen, Esq.</h2>
                <p className="team-member-title">Founder &amp; President</p>
                <p className="team-member-bio">
                  Yael Magen is a Massachusetts attorney focusing on municipal law, estate planning, and business law. Born in Israel to American parents, she has been a lifelong advocate for the State of Israel and against antisemitism. She works with local committees, state commissions, nonprofit organizations, and community initiatives, using her legal background and knowledge of international law to educate about Israel and the Jewish people.
                </p>
              </div>
            </div>

            <div className="team-divider"></div>

            <div className="team-member">
              <div className="team-member-photo-wrap">
                <img
                  src="/david%20magen%20(3)-400w.jpeg"
                  alt="David Magen"
                  className="team-member-photo"
                />
              </div>
              <div className="team-member-info">
                <h2 className="team-member-name">David Magen</h2>
                <p className="team-member-title">Founder &amp; VP of Operations</p>
                <p className="team-member-bio">
                  David Magen is the founder of FAIS (Fighting Antisemitism in Schools), a student-led initiative dedicated to empowering teenagers to recognize and challenge antisemitism in school curriculum. David launched FAIS in 2023 after encountering historically inaccurate and antisemitic material in a class at Marblehead High School. After researching the issue and presenting historical evidence to school leadership, he successfully advocated for the removal of the material and changes to the curriculum.
                </p>
                <p className="team-member-bio">
                  Following this experience, David began speaking publicly about antisemitism in education and the importance of student advocacy. He has spoken at synagogues, school board hearings, state legislative hearings, nonprofit webinars and seminars, the Israeli-American Council National Summit (2024), and the Hadassah Advocacy Panel.
                </p>
                <p className="team-member-bio">
                  Through FAIS, David works to equip students with the knowledge, strategy, and confidence to identify bias in education and take constructive action to ensure curriculum reflects historical accuracy and fairness.
                </p>
              </div>
            </div>

            <div className="team-divider"></div>

            <div className="team-member">
              <div className="team-member-photo-wrap">
                <img
                  src="/yosef.png"
                  alt="Joseph Noah Meltzer"
                  className="team-member-photo"
                />
              </div>
              <div className="team-member-info">
                <h2 className="team-member-name">Joseph Noah Meltzer</h2>
                <p className="team-member-title">VP of Technology</p>
                <p className="team-member-bio">
                  Joseph is a Sephardi Jewish teenage student, a content creator, a self-declared Zionist, and a progressing public speaker.
                </p>
                <p className="team-member-bio">
                  He is well-known among his local community as a political activist and educator for politics in the Middle East, and for the legitimacy of the existence of the State of Israel.
                </p>
                <p className="team-member-bio">
                  To create FAIS, Joseph spent countless hours of dedicated research, planning events, and website construction to turn the dream of FAIS into a reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageLinks />
        <Footer></Footer>
      </div>

      <style jsx global>{`
        .team-container {
          width: 100%;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          background-color: #0d0d0d;
        }
        .team-hero {
          width: 100%;
        }
        .team-content {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 80px 40px;
        }
        .team-inner {
          width: 100%;
          max-width: var(--dl-layout-size-maxwidth);
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .team-page-title {
          color: #ffffff;
          font-size: 64px;
          font-weight: 700;
          margin: 0;
        }
        .team-member {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }
        .team-member-photo-wrap {
          flex-shrink: 0;
          width: 220px;
          height: 280px;
          border-radius: 8px;
          overflow: hidden;
        }
        .team-member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-member-photo-placeholder {
          background-color: #1e1e1e;
          border: 2px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-member-initials {
          color: #ffffff;
          font-size: 48px;
          font-weight: 700;
          opacity: 0.4;
        }
        .team-member-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .team-member-name {
          color: #ffffff;
          font-size: 36px;
          font-weight: 700;
          margin: 0;
        }
        .team-member-title {
          color: #aaaaaa;
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 16px 0;
        }
        .team-member-bio {
          color: #cccccc;
          font-size: 18px;
          line-height: 1.7;
          margin: 0 0 12px 0;
        }
        .team-divider {
          width: 100%;
          height: 1px;
          background-color: #222;
        }
        @media (max-width: 767px) {
          .team-content {
            padding: 48px 20px;
          }
          .team-page-title {
            font-size: 40px;
          }
          .team-member {
            flex-direction: column;
            gap: 32px;
          }
          .team-member-photo-wrap {
            width: 160px;
            height: 200px;
          }
          .team-member-name {
            font-size: 28px;
          }
          .team-member-bio {
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

export default Team
