import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'

const Donate = (props) => {
  return (
    <>
      <div className="donate-container">
        <Head>
          <title>Donate - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Donate - FAIS IT" />
          <meta
            property="og:description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta
            property="og:image"
            content="https://www.faisit.com/newlogo.png"
          />
          <meta name="robots" content="noindex" />
          <link
            rel="canonical"
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/donate"
          />
        </Head>
        <section className="donate-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="donate-text10">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="donate-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="donate-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="donate-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="donate-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="donate-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="donate-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="donate-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="donate-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="donate-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="donate-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/5039702/5039702-hd_720_1366_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/5039702/pictures/preview-0.jpeg"
            preload="auto"
            autoPlay
            playsInline
            className="donate-video"
          ></video>
          <div className="donate-thq-hero-content-elm">
            <div className="donate-thq-header-container-elm">
              <div className="donate-thq-header-elm">
                <h1 className="donate-thq-heading-elm">Donate</h1>
              </div>            </div>
            <div className="donate-buttons-row">
              <a
                href="https://buy.stripe.com/4gM5kCdFj8Nsc6MaRt9R601"
                target="_blank"
                rel="noreferrer noopener"
                className="donate-btn donate-btn-stripe"
              >
                <svg width="24" height="24" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.3 7.2c0-1.2 1-1.7 2.6-1.7 2.3 0 5.2.7 7.5 2V2.3C35 1.2 32.6.7 30.1.7c-5.5 0-9.2 2.9-9.2 7.7 0 7.5 10.3 6.3 10.3 9.5 0 1.4-1.2 1.9-2.9 1.9-2.5 0-5.7-.9-8.2-2.4v5.3c2.8 1.2 5.6 1.7 8.2 1.7 5.7 0 9.6-2.8 9.6-7.7C37.9 8.8 27.3 10.2 27.3 7.2z" fill="#fff"/>
                </svg>
                <span>Donate via Stripe</span>
              </a>
            </div>
          </div>
        </section>
        <div className="donate-thq-body-elm">
          <span className="donate-text22">
            <span className="donate-text23">Case Studies:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="donate-text25">
              Read inspiring stories of students who have successfully
              confronted antisemitism in their schools. These case studies
              highlight the power of youth advocacy and the impact of informed
              action.
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
            <span className="donate-text29">
              David&apos;s Journey: From Student to Advocate
            </span>
            <br className="donate-text30"></br>
            <br className="donate-text31"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="donate-text33">
              After discovering antisemitic content in his school’s curriculum,
              David took action. His efforts led to the retraction of biased
              materials and increased awareness among students and parents.
              Learn how he did it and how you can too!
            </span>
            <br></br>
          </span>
          <a
            href="https://buy.stripe.com/4gM5kCdFj8Nsc6MaRt9R601"
            target="_blank"
            rel="noreferrer noopener"
            className="donate-link2 button"
          >
            DONATE NOW
          </a>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="donate-text35">
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
              <span className="donate-text36">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="donate-text37">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="donate-text38">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="donate-text39">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="donate-text40">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="donate-text41">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="donate-text42">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="donate-text43">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="donate-text44">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="donate-text45">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="donate-text46">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="donate-text47">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="donate-text48">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="donate-text49">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="donate-text50">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="donate-text51">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="donate-text52">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="donate-text53">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="donate-text54">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="donate-text55">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="donate-text56">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name5"
        ></Footer>
      </div>
      <style jsx>
        {`
          .donate-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .donate-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .donate-text10 {
            display: inline-block;
          }
          .donate-text11 {
            display: inline-block;
          }
          .donate-text12 {
            display: inline-block;
          }
          .donate-text13 {
            display: inline-block;
          }
          .donate-text14 {
            display: inline-block;
          }
          .donate-text15 {
            display: inline-block;
          }
          .donate-text16 {
            display: inline-block;
          }
          .donate-text17 {
            display: inline-block;
          }
          .donate-text18 {
            display: inline-block;
          }
          .donate-text19 {
            display: inline-block;
          }
          .donate-text20 {
            display: inline-block;
          }
          .donate-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .donate-thq-hero-content-elm {
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
          .donate-thq-header-container-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .donate-thq-header-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .donate-thq-heading-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-display);
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .donate-thq-caption-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-body-lg);
            max-width: 600px;
            line-height: 36px;
          }
          .donate-buttons-row {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          .donate-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 16px 28px;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 600;
            text-decoration: none;
            transition: opacity 0.2s;
          }
          .donate-btn:hover {
            opacity: 0.85;
          }
          .donate-btn-gofundme {
            background-color: #02a95c;
            color: #fff;
          }
          .donate-btn-stripe {
            background-color: #635bff;
            color: #fff;
          }
          @media (max-width: 479px) {
            .donate-buttons-row {
              flex-direction: column;
            }
          }
          .donate-thq-body-elm {
            flex: 0 0 auto;
            width: var(--dl-layout-size-xxlarge);
            display: none;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .donate-text22 {
            color: rgb(255, 255, 255);
            width: 100%;
            display: none;
            font-size: var(--fais-font-h2);
            max-width: var(--dl-layout-size-maxwidth);
          }
          .donate-text23 {
            font-weight: 700;
          }
          .donate-text25 {
            font-style: normal;
            font-weight: 300;
          }
          .donate-text29 {
            font-style: normal;
            font-weight: 700;
          }
          .donate-text30 {
            font-weight: 700;
          }
          .donate-text31 {
            font-weight: 700;
          }
          .donate-text33 {
            font-style: normal;
            font-weight: 300;
          }
          .donate-link2 {
            width: 100%;
            text-decoration: none;
          }
          .donate-text35 {
            display: inline-block;
          }
          .donate-text36 {
            display: inline-block;
          }
          .donate-text37 {
            display: inline-block;
          }
          .donate-text38 {
            display: inline-block;
          }
          .donate-text39 {
            display: inline-block;
          }
          .donate-text40 {
            display: inline-block;
          }
          .donate-text41 {
            display: inline-block;
          }
          .donate-text42 {
            display: inline-block;
          }
          .donate-text43 {
            display: inline-block;
          }
          .donate-text44 {
            display: inline-block;
          }
          .donate-text45 {
            display: inline-block;
          }
          .donate-text46 {
            display: inline-block;
          }
          .donate-text47 {
            display: inline-block;
          }
          .donate-text48 {
            display: inline-block;
          }
          .donate-text49 {
            display: inline-block;
          }
          .donate-text50 {
            display: inline-block;
          }
          .donate-text51 {
            display: inline-block;
          }
          .donate-text52 {
            display: inline-block;
          }
          .donate-text53 {
            display: inline-block;
          }
          .donate-text54 {
            display: inline-block;
          }
          .donate-text55 {
            display: inline-block;
          }
          .donate-text56 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .donate-thq-body-elm {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
          }
          @media (max-width: 1200px) {
            .donate-thq-body-elm {
              padding: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .donate-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .donate-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .donate-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .donate-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .donate-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .donate-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .donate-link1 {
              text-align: center;
            }
            .donate-thq-body-elm {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .donate-link2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Donate
