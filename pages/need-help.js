import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'
import PageLinks from '../components/page-links'

const NeedHelp = (props) => {
  return (
    <>
      <div className="need-help-container1">
        <Head>
          <title>Need-Help - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Need-Help - FAIS IT" />
          <meta name="robots" content="noindex, nofollow" />
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
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/need-help"
          />
        </Head>
        <section className="need-help-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="need-help-text10">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="need-help-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="need-help-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="need-help-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="need-help-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="need-help-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="need-help-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="need-help-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="need-help-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="need-help-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="need-help-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/5267492/5267492-hd_1280_720_30fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/4043985/pictures/preview-0.jpg"
            preload="auto"
            autoPlay
            playsInline
            className="need-help-video"
          ></video>
          <div className="need-help-thq-hero-content-elm">
            <div className="need-help-thq-header-container-elm">
              <div className="need-help-thq-header-elm">
                <h1 className="need-help-thq-heading-elm">
                  <span>Need Help</span>
                  <br></br>
                </h1>
              </div>            </div>
            <Link href="/contact">
              <a className="need-help-link button">
                <span>
                  <span>Get Involved</span>
                  <br></br>
                </span>
              </a>
            </Link>
          </div>
        </section>
        <div className="need-help-thq-body-elm">
          <div className="need-help-container2">
            <div className="need-help-container3">
              <Script
                html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
              ></Script>
            </div>
          </div>
          <span className="need-help-text26">
            <span className="need-help-text27">Upcoming Events:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text29">
              Stay engaged and informed by participating in our upcoming events!
              From webinars to community gatherings, there are many
              opportunities to learn and connect with others who share your
              passion for combating antisemitism.
            </span>
            <br></br>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text33">Event Title:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text35">
              Webinar: Understanding Antisemitism in Education
            </span>
            <br className="need-help-text36"></br>
            <span className="need-help-text37">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text38">
              Date:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text39">[Insert Date]</span>
            <br className="need-help-text40"></br>
            <span className="need-help-text41">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text42">Description:</span>
            <span className="need-help-text43">
               Join us for an informative session where we discuss the impact of
              antisemitism in school curricula and how students can take action.
            </span>
            <br></br>
            <br></br>
            <span className="need-help-text46">Past Events:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="need-help-text48">
              Check out the highlights from our previous events, where students
              and community members came together to share experiences, learn,
              and advocate for change.
            </span>
          </span>
        </div>
        <PageLinks />
        <Footer
          text={
            <Fragment>
              <span className="need-help-text49">
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
              <span className="need-help-text50">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="need-help-text51">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="need-help-text52">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="need-help-text53">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="need-help-text54">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="need-help-text55">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="need-help-text56">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="need-help-text57">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="need-help-text58">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="need-help-text59">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="need-help-text60">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="need-help-text61">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="need-help-text62">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="need-help-text63">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="need-help-text64">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="need-help-text65">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="need-help-text66">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="need-help-text67">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="need-help-text68">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="need-help-text69">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="need-help-text70">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name6"
        ></Footer>
      </div>
      <style jsx>
        {`
          .need-help-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .need-help-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .need-help-text10 {
            display: inline-block;
          }
          .need-help-text11 {
            display: inline-block;
          }
          .need-help-text12 {
            display: inline-block;
          }
          .need-help-text13 {
            display: inline-block;
          }
          .need-help-text14 {
            display: inline-block;
          }
          .need-help-text15 {
            display: inline-block;
          }
          .need-help-text16 {
            display: inline-block;
          }
          .need-help-text17 {
            display: inline-block;
          }
          .need-help-text18 {
            display: inline-block;
          }
          .need-help-text19 {
            display: inline-block;
          }
          .need-help-text20 {
            display: inline-block;
          }
          .need-help-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .need-help-thq-hero-content-elm {
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
          .need-help-thq-header-container-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .need-help-thq-header-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .need-help-thq-heading-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-display);
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .need-help-thq-caption-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-body-lg);
            max-width: 600px;
            line-height: 36px;
          }
          .need-help-link {
            text-decoration: none;
          }
          .need-help-thq-body-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .need-help-container2 {
            width: 100%;
          }
          .need-help-container3 {
            display: contents;
          }
          .need-help-text26 {
            color: rgb(255, 255, 255);
            width: 100%;
            display: none;
            font-size: var(--fais-font-h2);
            max-width: var(--dl-layout-size-maxwidth);
          }
          .need-help-text27 {
            font-weight: 700;
          }
          .need-help-text29 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text33 {
            font-weight: 700;
          }
          .need-help-text35 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text36 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text37 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text38 {
            font-style: normal;
            font-weight: 700;
          }
          .need-help-text39 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text40 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text41 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text42 {
            font-style: normal;
            font-weight: 700;
          }
          .need-help-text43 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text46 {
            font-weight: 700;
          }
          .need-help-text48 {
            font-style: normal;
            font-weight: 300;
          }
          .need-help-text49 {
            display: inline-block;
          }
          .need-help-text50 {
            display: inline-block;
          }
          .need-help-text51 {
            display: inline-block;
          }
          .need-help-text52 {
            display: inline-block;
          }
          .need-help-text53 {
            display: inline-block;
          }
          .need-help-text54 {
            display: inline-block;
          }
          .need-help-text55 {
            display: inline-block;
          }
          .need-help-text56 {
            display: inline-block;
          }
          .need-help-text57 {
            display: inline-block;
          }
          .need-help-text58 {
            display: inline-block;
          }
          .need-help-text59 {
            display: inline-block;
          }
          .need-help-text60 {
            display: inline-block;
          }
          .need-help-text61 {
            display: inline-block;
          }
          .need-help-text62 {
            display: inline-block;
          }
          .need-help-text63 {
            display: inline-block;
          }
          .need-help-text64 {
            display: inline-block;
          }
          .need-help-text65 {
            display: inline-block;
          }
          .need-help-text66 {
            display: inline-block;
          }
          .need-help-text67 {
            display: inline-block;
          }
          .need-help-text68 {
            display: inline-block;
          }
          .need-help-text69 {
            display: inline-block;
          }
          .need-help-text70 {
            display: inline-block;
          }
          .need-help-container4 {
            width: 100%;
          }
          .need-help-container5 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .need-help-thq-body-elm {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
          }
          @media (max-width: 1200px) {
            .need-help-thq-body-elm {
              padding: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .need-help-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .need-help-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .need-help-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .need-help-thq-body-elm {
              width: 100%;
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .need-help-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .need-help-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .need-help-link {
              text-align: center;
            }
            .need-help-thq-body-elm {
              padding: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default NeedHelp
