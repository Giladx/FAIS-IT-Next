import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'

const GetInvolved = (props) => {
  return (
    <>
      <div className="get-involved-container1">
        <Head>
          <title>Get-Involved - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Get-Involved - FAIS IT" />
          <meta
            property="og:description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8044f0cb-2f2e-424b-b592-50f4b4990f60/e4cab4ba-abdc-4395-87c7-fb65f74fdd7c?org_if_sml=1&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/get-involved"
          />
        </Head>
        <section className="get-involved-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="get-involved-text10">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="get-involved-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="get-involved-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="get-involved-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="get-involved-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="get-involved-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="get-involved-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="get-involved-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="get-involved-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="get-involved-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="get-involved-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/8088612/8088612-hd_2048_1080_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/8088612/pictures/preview-0.jpeg"
            preload="auto"
            autoPlay
            playsInline
            className="get-involved-video"
          ></video>
          <div className="get-involved-thq-hero-content-elm">
            <div className="get-involved-thq-header-container-elm">
              <div className="get-involved-thq-header-elm">
                <h1 className="get-involved-thq-heading-elm">
                  <span>Get Involved</span>
                  <br></br>
                </h1>
              </div>            </div>
            <Link href="/contact">
              <a className="get-involved-link button">
                <span>Get Involved</span>
              </a>
            </Link>
          </div>
        </section>
        <div className="get-involved-thq-body-elm">
          <div className="get-involved-container2">
            <div className="get-involved-container3">
              <Script
                html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
              ></Script>
            </div>
          </div>
          <span className="get-involved-text24">
            <span className="get-involved-text25">
              Volunteer Opportunities:
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involved-text27">
              Join us in the fight against antisemitism! We are looking for
              passionate teens to help with advocacy, education, and event
              planning. Whether you want to lead a workshop, organize an event,
              or spread awareness on social media, there’s a place for you at
              FAIS-IT.
            </span>
            <br></br>
            <br></br>
            <span className="get-involved-text30">Advocacy Toolkit:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="get-involved-text32">
              Our Advocacy Toolkit provides step-by-step guidance on how to
              effectively address antisemitism in your school. Learn how to
              gather evidence, approach school officials, and propose changes to
              the curriculum.
            </span>
          </span>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="get-involved-text33">
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
              <span className="get-involved-text34">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="get-involved-text35">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="get-involved-text36">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="get-involved-text37">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="get-involved-text38">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="get-involved-text39">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="get-involved-text40">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="get-involved-text41">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="get-involved-text42">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="get-involved-text43">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="get-involved-text44">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="get-involved-text45">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="get-involved-text46">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="get-involved-text47">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="get-involved-text48">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="get-involved-text49">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="get-involved-text50">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="get-involved-text51">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="get-involved-text52">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="get-involved-text53">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="get-involved-text54">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name3"
        ></Footer>
      </div>
      <style jsx>
        {`
          .get-involved-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .get-involved-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .get-involved-text10 {
            display: inline-block;
          }
          .get-involved-text11 {
            display: inline-block;
          }
          .get-involved-text12 {
            display: inline-block;
          }
          .get-involved-text13 {
            display: inline-block;
          }
          .get-involved-text14 {
            display: inline-block;
          }
          .get-involved-text15 {
            display: inline-block;
          }
          .get-involved-text16 {
            display: inline-block;
          }
          .get-involved-text17 {
            display: inline-block;
          }
          .get-involved-text18 {
            display: inline-block;
          }
          .get-involved-text19 {
            display: inline-block;
          }
          .get-involved-text20 {
            display: inline-block;
          }
          .get-involved-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .get-involved-thq-hero-content-elm {
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
          .get-involved-thq-header-container-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .get-involved-thq-header-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .get-involved-thq-heading-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-display);
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .get-involved-thq-caption-elm {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .get-involved-link {
            text-decoration: none;
          }
          .get-involved-thq-body-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .get-involved-container2 {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .get-involved-container3 {
            display: contents;
          }
          .get-involved-text24 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: var(--fais-font-body);
            line-height: var(--fais-lh-body);
            max-width: var(--dl-layout-size-maxwidth);
          }
          .get-involved-text25 {
            font-size: var(--fais-font-h3);
            font-weight: var(--fais-weight-semibold);
          }
          .get-involved-text27 {
            font-size: var(--fais-font-body);
            font-style: normal;
            font-weight: var(--fais-weight-light);
          }
          .get-involved-text30 {
            font-size: var(--fais-font-h3);
            font-weight: var(--fais-weight-semibold);
          }
          .get-involved-text32 {
            font-size: var(--fais-font-body);
            font-style: normal;
            font-weight: var(--fais-weight-light);
          }
          .get-involved-text33 {
            display: inline-block;
          }
          .get-involved-text34 {
            display: inline-block;
          }
          .get-involved-text35 {
            display: inline-block;
          }
          .get-involved-text36 {
            display: inline-block;
          }
          .get-involved-text37 {
            display: inline-block;
          }
          .get-involved-text38 {
            display: inline-block;
          }
          .get-involved-text39 {
            display: inline-block;
          }
          .get-involved-text40 {
            display: inline-block;
          }
          .get-involved-text41 {
            display: inline-block;
          }
          .get-involved-text42 {
            display: inline-block;
          }
          .get-involved-text43 {
            display: inline-block;
          }
          .get-involved-text44 {
            display: inline-block;
          }
          .get-involved-text45 {
            display: inline-block;
          }
          .get-involved-text46 {
            display: inline-block;
          }
          .get-involved-text47 {
            display: inline-block;
          }
          .get-involved-text48 {
            display: inline-block;
          }
          .get-involved-text49 {
            display: inline-block;
          }
          .get-involved-text50 {
            display: inline-block;
          }
          .get-involved-text51 {
            display: inline-block;
          }
          .get-involved-text52 {
            display: inline-block;
          }
          .get-involved-text53 {
            display: inline-block;
          }
          .get-involved-text54 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .get-involved-thq-body-elm {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
          }
          @media (max-width: 1200px) {
            .get-involved-thq-body-elm {
              padding: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .get-involved-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .get-involved-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .get-involved-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .get-involved-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .get-involved-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .get-involved-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .get-involved-link {
              text-align: center;
            }
            .get-involved-thq-body-elm {
              padding: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default GetInvolved
