import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>Our Story - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Our Story - FAIS IT" />
          <meta
            property="og:description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta
            property="og:image"
            content="https://www.faisit.com/newlogo.png"
          />
          <link
            rel="canonical"
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/about"
          />
        </Head>
        <section className="about-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="about-text10">Our Story</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="about-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="about-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="about-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="about-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="about-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="about-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="about-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="about-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="about-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="about-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/4687388/4687388-hd_1280_720_24fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/4687388/pictures/preview-0.jpg"
            preload="auto"
            autoPlay
            playsInline
            className="about-video"
          ></video>
          <div className="about-thq-hero-content-elm">
            <div className="about-thq-header-container-elm">
              <div className="about-thq-header-elm">
                <h1 className="about-thq-heading-elm">
                  <span>Our Story</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <Link href="/contact">
              <a className="about-link button">
                <span>Get Involved</span>
              </a>
            </Link>
          </div>
        </section>
        <div className="about-thq-body-elm">
          <div className="about-container2">
            <img
              alt="image"
              src="/david%20magen%20(3)-400w.jpeg"
              className="about-image"
            />
          </div>
          <div className="about-container3">
            <p className="about-text27">
              FAIS began in the winter of 2023 when David Magen, then a freshman at Marblehead High School, encountered antisemitic material in his school&#39;s curriculum. In a class handout discussing ancient biblical history, the words Israel and Judea were removed and replaced with the term Palestine. Recognizing that this was historically inaccurate and erased Jewish history, David brought the handout home and began researching the issue with his parents.
            </p>
            <p className="about-text27">
              Soon after, when assigned a homework question asking about the relationship between Palestine and the Jewish religion, David wrote a one-page response challenging the premise of the assignment. In his statement he explained that the name &ldquo;Palestine&rdquo; did not exist during the biblical time period, and he concluded his response with the words written in all capital letters: &ldquo;THIS IS ANTISEMITISM.&rdquo;
            </p>
            <p className="about-text27">
              David was later called to meet with the head of the department. During that meeting he presented historical evidence and explained why the material was inaccurate and harmful. He formally requested that the handout never be distributed again and that changes be made to the curriculum. Both requests were accepted.
            </p>
            <p className="about-text27 about-text-emphasis">
              That moment sparked something bigger.
            </p>
            <p className="about-text27">
              Following this experience, David began speaking publicly about antisemitism in education. He has since been invited to speak at synagogues, school board hearings, state legislative hearings, nonprofit webinars and seminars, the Israeli-American Council National Summit (2024), and the Hadassah Advocacy Panel.
            </p>
            <p className="about-text27">
              From this effort, F.A.I.S. &mdash; Fighting Antisemitism in Schools &mdash; was born.
            </p>
            <p className="about-text27">
              FAIS operates on a simple principle: the best way to reach a teenager is through another teenager. And the most powerful way to change someone&#39;s mind is through emotion supported by facts.
            </p>
            <p className="about-text27">
              Today, FAIS collaborates with Jewish and Israeli organizations including the Israeli-American Council, DiploAct, the Lappin Foundation, and Israeli hostage and survivor advocacy organizations. Together, we are building new ways to educate students about Israel, Judaism, and how to recognize and challenge antisemitism in school curricula and in everyday life.
            </p>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="about-text31">
                © 2025 FAIS IT
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-text32">Our Story</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-text33">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-text34">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-text35">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-text36">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-text37">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-text38">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="about-text39">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="about-text40">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-text41">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="about-text42">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="about-text43">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="about-text44">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="about-text45">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="about-text46">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="about-text47">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="about-text48">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="about-text49">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="about-text50">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="about-text51">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="about-text52">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .about-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text10 {
            display: inline-block;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
          }
          .about-text13 {
            display: inline-block;
          }
          .about-text14 {
            display: inline-block;
          }
          .about-text15 {
            display: inline-block;
          }
          .about-text16 {
            display: inline-block;
          }
          .about-text17 {
            display: inline-block;
          }
          .about-text18 {
            display: inline-block;
          }
          .about-text19 {
            display: inline-block;
          }
          .about-text20 {
            display: inline-block;
          }
          .about-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .about-thq-hero-content-elm {
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
          .about-thq-header-container-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-thq-header-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-thq-heading-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-display);
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .about-thq-caption-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-body-lg);
            max-width: 600px;
            line-height: 36px;
          }
          .about-link {
            text-decoration: none;
          }
          .about-thq-body-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .about-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
          }
          .about-image {
            width: 400px;
            object-fit: cover;
          }
          .about-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            max-width: var(--dl-layout-size-maxwidth);
          }
          .about-container3 p {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-body-lg);
          }
          .about-text24 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 50px;
            max-width: var(--dl-layout-size-maxwidth);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .about-text25 {
            font-weight: 700;
          }
          .about-text27 {
            font-style: normal;
            font-weight: 300;
            margin-bottom: 1.2em;
          }
          .about-text-emphasis {
            font-weight: 600;
            font-style: italic;
          }
          .about-text28 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 50px;
            max-width: var(--dl-layout-size-maxwidth);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .about-text31 {
            display: inline-block;
          }
          .about-text32 {
            display: inline-block;
          }
          .about-text33 {
            display: inline-block;
          }
          .about-text34 {
            display: inline-block;
          }
          .about-text35 {
            display: inline-block;
          }
          .about-text36 {
            display: inline-block;
          }
          .about-text37 {
            display: inline-block;
          }
          .about-text38 {
            display: inline-block;
          }
          .about-text39 {
            display: inline-block;
          }
          .about-text40 {
            display: inline-block;
          }
          .about-text41 {
            display: inline-block;
          }
          .about-text42 {
            display: inline-block;
          }
          .about-text43 {
            display: inline-block;
          }
          .about-text44 {
            display: inline-block;
          }
          .about-text45 {
            display: inline-block;
          }
          .about-text46 {
            display: inline-block;
          }
          .about-text47 {
            display: inline-block;
          }
          .about-text48 {
            display: inline-block;
          }
          .about-text49 {
            display: inline-block;
          }
          .about-text50 {
            display: inline-block;
          }
          .about-text51 {
            display: inline-block;
          }
          .about-text52 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .about-thq-body-elm {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .about-text24 {
              font-size: 50px;
            }
            .about-text25 {
              color: #ffffff;
              font-weight: 700;
            }
            .about-text26 {
              color: #ffffff;
            }
            .about-text27 {
              color: #ffffff;
              font-style: normal;
              font-weight: 300;
            }
            .about-text28 {
              font-size: 50px;
            }
          }
          @media (max-width: 1200px) {
            .about-thq-caption-elm {
              color: rgb(255, 255, 255);
              font-size: var(--fais-font-body-lg);
              max-width: 600px;
              line-height: 36px;
            }
            .about-thq-body-elm {
              padding: var(--dl-layout-space-fourunits);
            }
            .about-text24 {
              color: #ffffff;
              font-size: 40px;
              max-width: var(--dl-layout-size-maxwidth);
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .about-text25 {
              font-weight: 700;
            }
            .about-text27 {
              font-style: normal;
              font-weight: 300;
            }
            .about-text28 {
              font-size: 40px;
            }
          }
          @media (max-width: 991px) {
            .about-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .about-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .about-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
            .about-image {
              width: 350px;
            }
          }
          @media (max-width: 767px) {
            .about-container3 p {
              font-size: 16px;
            }
            .about-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
            .about-image {
              width: 250px;
            }
            .about-text24 {
              font-size: 25px;
            }
            .about-text28 {
              font-size: 25px;
            }
          }
          @media (max-width: 479px) {
            .about-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .about-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .about-link {
              text-align: center;
            }
            .about-thq-body-elm {
              padding: var(--dl-layout-space-twounits);
            }
            .about-image {
              width: 200px;
            }
            .about-text24 {
              color: #ffffff;
              font-size: 25px;
            }
            .about-text25 {
              font-weight: 700;
            }
            .about-text27 {
              font-style: normal;
              font-weight: 300;
            }
            .about-text28 {
              font-size: 25px;
            }
            .about-text29 {
              font-weight: 700;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
