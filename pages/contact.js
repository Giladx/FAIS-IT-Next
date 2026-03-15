import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'
import PageLinks from '../components/page-links'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Contact - FAIS IT" />
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
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/contact"
          />
        </Head>
        <section className="contact-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="contact-text10">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="contact-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="contact-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="contact-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="contact-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="contact-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="contact-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="contact-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="contact-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="contact-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="contact-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/9050073/9050073-hd_2048_1080_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/9050073/pictures/preview-0.jpeg"
            preload="auto"
            autoPlay
            playsInline
            className="contact-video"
          ></video>
          <div className="contact-thq-hero-content-elm">
            <div className="contact-container2">
              <div className="contact-thq-header-container-elm">
                <div className="contact-thq-header-elm">
                  <h1 className="contact-thq-heading-elm">
                    <span>Contact</span>
                    <br></br>
                  </h1>
                </div>              </div>
              <Link href="/contact">
                <a className="contact-link button">
                  <span>Get Involved</span>
                </a>
              </Link>
            </div>
            <div className="contact-container3">
              <div className="contact-container4">
                <Script
                  html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
                ></Script>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-thq-body-elm">
          <span className="contact-body-text">
            <span className="contact-body-heading">Volunteer Opportunities:</span>
            {' '}
            <span className="contact-body-para">
              Join us in the fight against antisemitism! We are looking for passionate teens to help with advocacy, education, and event planning. Whether you want to lead a workshop, organize an event, or spread awareness on social media, there&apos;s a place for you at FAIS IT.
            </span>
            <br /><br />
            <span className="contact-body-heading">Advocacy Toolkit:</span>
            {' '}
            <span className="contact-body-para">
              Our Advocacy Toolkit provides step-by-step guidance on how to effectively address antisemitism in your school. Learn how to gather evidence, approach school officials, and propose changes to the curriculum.
            </span>
            <br /><br />
            <span className="contact-body-para">
              If you encountered antisemitism or know someone who has, please reach out to us for help.
            </span>
          </span>
        </div>
        <PageLinks />
        <Footer
          text={
            <Fragment>
              <span className="contact-text24">
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
              <span className="contact-text25">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-text26">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contact-text27">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="contact-text28">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="contact-text29">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="contact-text30">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="contact-text31">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="contact-text32">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="contact-text33">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="contact-text34">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="contact-text35">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="contact-text36">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="contact-text37">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="contact-text38">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="contact-text39">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="contact-text40">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="contact-text41">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="contact-text42">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="contact-text43">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="contact-text44">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="contact-text45">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name1"
        ></Footer>
      </div>
      <style jsx>
        {`
          .contact-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .contact-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .contact-thq-hero-content-elm {
            gap: var(--dl-layout-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .contact-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            gap: var(--dl-layout-space-twounits);
          }
          .contact-thq-header-container-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-thq-header-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-thq-heading-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-display);
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .contact-thq-caption-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-body-lg);
            max-width: 600px;
            line-height: 36px;
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .contact-link {
            text-decoration: none;
          }
          .contact-container3 {
            width: 100%;
          }
          .contact-container4 {
            display: contents;
          }
          .contact-thq-body-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding: 60px 80px;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
          }
          .contact-body-text {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 1.8;
            max-width: 900px;
          }
          .contact-body-heading {
            font-size: 20px;
            font-weight: 700;
          }
          .contact-body-para {
            font-style: normal;
            font-weight: 300;
          }
          .contact-text24 {
            display: inline-block;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-text26 {
            display: inline-block;
          }
          .contact-text27 {
            display: inline-block;
          }
          .contact-text28 {
            display: inline-block;
          }
          .contact-text29 {
            display: inline-block;
          }
          .contact-text30 {
            display: inline-block;
          }
          .contact-text31 {
            display: inline-block;
          }
          .contact-text32 {
            display: inline-block;
          }
          .contact-text33 {
            display: inline-block;
          }
          .contact-text34 {
            display: inline-block;
          }
          .contact-text35 {
            display: inline-block;
          }
          .contact-text36 {
            display: inline-block;
          }
          .contact-text37 {
            display: inline-block;
          }
          .contact-text38 {
            display: inline-block;
          }
          .contact-text39 {
            display: inline-block;
          }
          .contact-text40 {
            display: inline-block;
          }
          .contact-text41 {
            display: inline-block;
          }
          .contact-text42 {
            display: inline-block;
          }
          .contact-text43 {
            display: inline-block;
          }
          .contact-text44 {
            display: inline-block;
          }
          .contact-text45 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .contact-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
          }
          @media (max-width: 479px) {
            .contact-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .contact-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .contact-link {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
