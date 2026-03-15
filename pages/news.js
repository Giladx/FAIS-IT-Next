import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'
import PageLinks from '../components/page-links'

const News = (props) => {
  return (
    <>
      <div className="news-container1">
        <Head>
          <title>News - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:title" content="News - FAIS IT" />
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
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/news"
          />
        </Head>
        <section className="news-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="news-text10">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="news-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="news-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="news-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="news-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="news-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="news-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="news-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="news-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="news-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="news-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/9564066/9564066-hd_2048_1080_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/8088612/pictures/preview-0.jpeg"
            preload="auto"
            autoPlay
            playsInline
            className="news-video"
          ></video>
          <div className="news-thq-hero-content-elm">
            <div className="news-thq-header-container-elm">
              <div className="news-thq-header-elm">
                <h1 className="news-thq-heading-elm">
                  <span>In The News</span>
                  <br></br>
                </h1>
              </div>            </div>
            <Link href="/contact">
              <a className="news-link1 button">
                <span>Get Involved</span>
              </a>
            </Link>
          </div>
        </section>
        <div className="news-thq-body-elm">
          <div className="news-container2">
            <a
              href="https://www.msn.com/en-us/news/world/massachusetts-parents-say-public-school-teachers-unionsowing-anti-israel-bias/ar-BB1kKJsa"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link2"
            >
              <span>
                Massachusetts parents say public school teachers union sowing
                anti-Israel bias
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </a>
            <a
              href="https://jewishjournal.org/2024/05/30/marblehead-high-student-peacefully-resolves-contested-curriculum-on-israel/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link3"
            >
              <span>
                Marblehead High student peacefully resolves contested curriculum
                on Israel - Jewish Journal
              </span>
              <br></br>
            </a>
            <a
              href="https://www.masc.org/public-policy-updates-march-2024-board-of-elementary-and-secondary-education/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link4"
            >
              <span>
                Public Policy Updates: March 2024 Board of Elementary and
                Secondary Education - masc.org
              </span>
              <br></br>
            </a>
            <a
              href="https://www.jns.org/summit-focuses-on-rising-jew-hatred-in-k-12-schools/"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link5"
            >
              <span>
                Summit focuses on rising Jew-hatred in K-12 schools - JNS.org
              </span>
              <br></br>
            </a>
            <a
              href="https://www.lappinfoundation.org/wp-content/uploads/2024/04/Speakers.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link6"
            >
              <span>Speakers.pdf</span>
              <br></br>
            </a>
            <a
              href="https://www.youtube.com/watch?v=ggdIt5ZnjvM"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link7"
            >
              <span>SC Meets-Thursdays at 7-RECURRING</span>
              <br></br>
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/2hz7w7y48h4j4ratun30s/US-National-Strategy-to-Counter-Antisemitism-in-K-12-Schools.mp4?rlkey=kczy0nhx4tnz5hznf618jl7u9&amp;e=2&amp;dl=0"
              target="_blank"
              rel="noreferrer noopener"
              className="news-link8"
            >
              <span>
                US National Strategy to Counter Antisemitism in K-12 Schools.mp4
              </span>
              <br></br>
            </a>
          </div>
          <div className="news-container3">
            <img
              alt="image"
              src="/9853e976-0f12-4e8f-9a9b-5191fd8bdc31%20(1)%20(2)-1500w.jpg"
              className="news-image1"
            />
            <img
              alt="image"
              src="/img_6708%20(2)-1500w.jpg"
              className="news-image2"
            />
            <img
              alt="image"
              src="/img_4488%20(3)-1500w.jpg"
              className="news-image3"
            />
            <img
              alt="image"
              src="/b4e3c8a7-3773-4825-9da3-3c49db25b915%20(2)%20(2)-1500w.jpg"
              className="news-image4"
            />
          </div>
        </div>
        <PageLinks />
        <Footer
          text={
            <Fragment>
              <span className="news-text38">
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
              <span className="news-text39">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="news-text40">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="news-text41">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="news-text42">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="news-text43">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="news-text44">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="news-text45">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="news-text46">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="news-text47">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="news-text48">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="news-text49">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="news-text50">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="news-text51">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="news-text52">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="news-text53">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="news-text54">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="news-text55">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="news-text56">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="news-text57">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="news-text58">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="news-text59">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name7"
        ></Footer>
      </div>
      <style jsx>
        {`
          .news-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .news-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .news-text10 {
            display: inline-block;
          }
          .news-text11 {
            display: inline-block;
          }
          .news-text12 {
            display: inline-block;
          }
          .news-text13 {
            display: inline-block;
          }
          .news-text14 {
            display: inline-block;
          }
          .news-text15 {
            display: inline-block;
          }
          .news-text16 {
            display: inline-block;
          }
          .news-text17 {
            display: inline-block;
          }
          .news-text18 {
            display: inline-block;
          }
          .news-text19 {
            display: inline-block;
          }
          .news-text20 {
            display: inline-block;
          }
          .news-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .news-thq-hero-content-elm {
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
          .news-thq-header-container-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .news-thq-header-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-thq-heading-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-display);
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .news-thq-caption-elm {
            color: rgb(255, 255, 255);
            font-size: var(--fais-font-body-lg);
            max-width: 600px;
            line-height: 36px;
          }
          .news-link1 {
            text-decoration: none;
          }
          .news-thq-body-elm {
            gap: 10;
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .news-container2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
          }
          .news-link2 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-link3 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-link4 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-link5 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-link6 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-link7 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-link8 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            cursor: pointer;
            font-size: 25px;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            text-decoration: none;
          }
          .news-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .news-image1 {
            width: 320px;
            padding: var(--dl-layout-space-halfunit);
            object-fit: cover;
          }
          .news-image2 {
            width: 320px;
            padding: var(--dl-layout-space-halfunit);
            object-fit: cover;
          }
          .news-image3 {
            width: 320px;
            padding: var(--dl-layout-space-halfunit);
            object-fit: cover;
          }
          .news-image4 {
            width: 320px;
            padding: var(--dl-layout-space-halfunit);
            object-fit: cover;
          }
          .news-text38 {
            display: inline-block;
          }
          .news-text39 {
            display: inline-block;
          }
          .news-text40 {
            display: inline-block;
          }
          .news-text41 {
            display: inline-block;
          }
          .news-text42 {
            display: inline-block;
          }
          .news-text43 {
            display: inline-block;
          }
          .news-text44 {
            display: inline-block;
          }
          .news-text45 {
            display: inline-block;
          }
          .news-text46 {
            display: inline-block;
          }
          .news-text47 {
            display: inline-block;
          }
          .news-text48 {
            display: inline-block;
          }
          .news-text49 {
            display: inline-block;
          }
          .news-text50 {
            display: inline-block;
          }
          .news-text51 {
            display: inline-block;
          }
          .news-text52 {
            display: inline-block;
          }
          .news-text53 {
            display: inline-block;
          }
          .news-text54 {
            display: inline-block;
          }
          .news-text55 {
            display: inline-block;
          }
          .news-text56 {
            display: inline-block;
          }
          .news-text57 {
            display: inline-block;
          }
          .news-text58 {
            display: inline-block;
          }
          .news-text59 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .news-thq-body-elm {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
          }
          @media (max-width: 1200px) {
            .news-thq-body-elm {
              width: 100%;
              padding: var(--dl-layout-space-fourunits);
            }
            .news-image1 {
              width: 280px;
            }
            .news-image2 {
              width: 280px;
            }
            .news-image3 {
              width: 280px;
            }
            .news-image4 {
              width: 280px;
            }
          }
          @media (max-width: 991px) {
            .news-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .news-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .news-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
            .news-image1 {
              width: 200px;
            }
            .news-image2 {
              width: 200px;
            }
            .news-image3 {
              width: 200px;
            }
            .news-image4 {
              width: 200px;
            }
          }
          @media (max-width: 767px) {
            .news-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
            .news-container3 {
              flex-direction: column;
            }
            .news-image1 {
              width: 100%;
            }
            .news-image2 {
              width: 100%;
            }
            .news-image3 {
              width: 100%;
            }
            .news-image4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .news-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .news-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .news-link1 {
              text-align: center;
            }
            .news-thq-body-elm {
              padding: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default News
