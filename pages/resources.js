import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Footer from '../components/footer'

const Resources = (props) => {
  return (
    <>
      <div className="resources-container1">
        <Head>
          <title>Resources - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Resources - FAIS IT" />
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
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/resources"
          />
        </Head>
        <section className="resources-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="resources-text100">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="resources-text101">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="resources-text102">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="resources-text103">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="resources-text104">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="resources-text105">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="resources-text106">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="resources-text107">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="resources-text108">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="resources-text109">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="resources-text110">Donate Now</span>
              </Fragment>
            }
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
                Our mission is to educate and empower teenagers, by teenagers,
                to recognize, speak up and change anti-Semitic curriculum in
                their schools, community and online.  
              </p>
            </div>
            <Link href="/contact">
              <a className="resources-link10 button">
                <span>Get Involved</span>
              </a>
            </Link>
          </div>
        </section>
        <div className="resources-thq-body-elm">
          <span className="resources-text112">
            <span className="resources-text113">Educational Materials:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="resources-text115">
              Explore our collection of resources designed to help you recognize
              and address antisemitism in your school. From guides on
              identifying biased curriculum to toolkits for effective advocacy,
              we provide the knowledge you need to make a difference.
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
            <span className="resources-text119">Downloadable Guides:</span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="resources-text122">
              Recognizing Antisemitism in Curriculum
            </span>
            <br className="resources-text123"></br>
            <span className="resources-text124">
              How to Approach School Officials
            </span>
            <br className="resources-text125"></br>
            <span className="resources-text126">
              Creating a Support Network
            </span>
            <br></br>
            <br></br>
            <span className="resources-text129">Curriculum Review Tools:</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="resources-text131">
              Use our curriculum review tools to assess the materials being
              taught in your school. Share your findings with parents and
              community organizations to initiate meaningful discussions about
              educational content.
            </span>
          </span>
          <div className="resources-container2">
            <span className="resources-text132">Hadassah</span>
            <span className="resources-text133">
              Israel and Zionist education
            </span>
            <a
              href="https://my.hadassah.org/myhadassah/resources/zionist-israel-education.html?t"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link11"
            >
              LINK
            </a>
            <span className="resources-text134">From the River Explainer</span>
            <span className="resources-text135">ADL</span>
            <a
              href="https://my.hadassah.org/myhadassah/resource-files/zionist-education/additional-programs/from- the-river-explainer.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link12"
            >
              LINK
            </a>
            <span className="resources-text136">Israel in the Curriculum</span>
            <a
              href="https://www.adl.org/resources/tools-and-strategies/israel-curriculum"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link13"
            >
              LINK
            </a>
            <span className="resources-text137">
              Report an antisemitic, biased, or discriminatory incident
            </span>
            <a
              href="https://www.adl.org/report-incident"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link14"
            >
              LINK
            </a>
            <span className="resources-text138">
              <span>
                Helpline: free legal advice for MA,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>NY parents whose K-12 children experience</span>
              <br></br>
              <span>antisemitism on school</span>
              <br></br>
            </span>
            <a
              href="https://www.adl.org/resources/press-release/adl-brandeis-center-standwithus-launch-antisemitism-helpline-ma-and-ny-k-12"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link15"
            >
              LINK
            </a>
            <span className="resources-text145">Stand With Us</span>
            <span className="resources-text146">
              Israel’s Story &amp; Zionism
            </span>
            <a
              href="https://www.standwithus.com/israels-story-and-zionism"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link16"
            >
              LINK
            </a>
            <span className="resources-text147">
              <span>Combating Antisemitism in High Schools</span>
              <br></br>
            </span>
            <a
              href="https://www.standwithus.com/hs-education-activism"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link17"
            >
              LINK
            </a>
            <span className="resources-text150">
              <span>Resources to address</span>
              <br></br>
              <span> the Hamas-Israel war in the classroom</span>
              <br></br>
            </span>
            <a
              href="https://www.flipsnack.com/59DEA577C6F/israel-resources/full-view.html"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link18"
            >
              LINK
            </a>
            <span className="resources-text155">
              <span>AJC – American Jewish Committee</span>
              <br></br>
            </span>
            <span className="resources-text158">
              <span>Toolkit for Parents of Jewish Middle</span>
              <br></br>
              <span> and High School Students</span>
              <br></br>
            </span>
            <a
              href="https://www.ajc.org/ConfrontingAntisemitismToolkitParents"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link19"
            >
              LINK
            </a>
            <span className="resources-text163">
              <span>AJC Educational Programs for Middle</span>
              <br></br>
              <span> and High School Spaces</span>
            </span>
            <a
              href="https://AJC Educational Programs for Middle and High School Spaces"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link20"
            >
              LINK
            </a>
            <span className="resources-text167">Antisemitism</span>
            <a
              href="https://www.ajc.org/issues/antisemitism"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link21"
            >
              LINK
            </a>
            <span className="resources-text168">
              <span>ICS (Institute for Curriculum Services)</span>
              <br></br>
            </span>
            <span className="resources-text171">
              Israel-Hamas War resources
            </span>
            <a
              href="https://icsresources.org/israel-hamas-war-resources/"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link22"
            >
              LINK
            </a>
            <span className="resources-text172">
              <span>
                Learning for Justice
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>(formerly Teach Tolerance)</span>
              <br></br>
            </span>
            <span className="resources-text177">
              Resisting hate in education
            </span>
            <a
              href="https://www.learningforjustice.org/the-learning- center/resisting-hate-in-education"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link23"
            >
              LINK
            </a>
            <span className="resources-text178">
              <span>Resources for educators and families</span>
              <br></br>
              <span> to discuss the events in Israel and Gaza with</span>
              <br></br>
              <span>Students</span>
              <br></br>
            </span>
            <a
              href="https://www.learningforjustice.org/the-learning- center/resisting-hate-in-education"
              target="_blank"
              rel="noreferrer noopener"
              className="resources-link24"
            >
              LINK
            </a>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="resources-text185">
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
              <span className="resources-text186">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="resources-text187">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="resources-text188">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="resources-text189">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="resources-text190">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="resources-text191">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="resources-text192">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="resources-text193">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="resources-text194">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="resources-text195">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="resources-text196">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="resources-text197">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="resources-text198">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="resources-text199">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="resources-text200">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="resources-text201">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="resources-text202">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="resources-text203">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="resources-text204">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="resources-text205">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="resources-text206">Social</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name4"
        ></Footer>
      </div>
      <style jsx>
        {`
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
          .resources-text100 {
            display: inline-block;
          }
          .resources-text101 {
            display: inline-block;
          }
          .resources-text102 {
            display: inline-block;
          }
          .resources-text103 {
            display: inline-block;
          }
          .resources-text104 {
            display: inline-block;
          }
          .resources-text105 {
            display: inline-block;
          }
          .resources-text106 {
            display: inline-block;
          }
          .resources-text107 {
            display: inline-block;
          }
          .resources-text108 {
            display: inline-block;
          }
          .resources-text109 {
            display: inline-block;
          }
          .resources-text110 {
            display: inline-block;
          }
          .resources-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
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
            justify-content: center;
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
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .resources-link10 {
            text-decoration: none;
          }
          .resources-thq-body-elm {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .resources-text112 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 50px;
            max-width: var(--dl-layout-size-maxwidth);
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .resources-text113 {
            font-weight: 700;
          }
          .resources-text115 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-text119 {
            font-weight: 700;
          }
          .resources-text122 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-text123 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-text124 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-text125 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-text126 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-text129 {
            font-weight: 700;
          }
          .resources-text131 {
            font-style: normal;
            font-weight: 300;
          }
          .resources-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .resources-text132 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            font-size: 5em;
          }
          .resources-text133 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link11 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: none;
          }
          .resources-text134 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-text135 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            font-size: 5em;
          }
          .resources-link12 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: none;
          }
          .resources-text136 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link13 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
          }
          .resources-text137 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link14 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text138 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link15 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: none;
          }
          .resources-text145 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            font-size: 5em;
          }
          .resources-text146 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link16 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text147 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link17 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text150 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link18 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text155 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            font-size: 5em;
          }
          .resources-text158 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link19 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text163 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link20 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text167 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link21 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text168 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            font-size: 5em;
          }
          .resources-text171 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link22 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text172 {
            fill: var(--dl-color-gray-white);
            color: rgb(255, 255, 255);
            font-size: 5em;
          }
          .resources-text177 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link23 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text178 {
            color: rgb(255, 255, 255);
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-layout-space-unit);
          }
          .resources-link24 {
            fill: var(--dl-color-primary-100);
            color: var(--dl-color-primary-100);
            cursor: pointer;
            font-size: 50px;
            text-decoration: underline;
          }
          .resources-text185 {
            display: inline-block;
          }
          .resources-text186 {
            display: inline-block;
          }
          .resources-text187 {
            display: inline-block;
          }
          .resources-text188 {
            display: inline-block;
          }
          .resources-text189 {
            display: inline-block;
          }
          .resources-text190 {
            display: inline-block;
          }
          .resources-text191 {
            display: inline-block;
          }
          .resources-text192 {
            display: inline-block;
          }
          .resources-text193 {
            display: inline-block;
          }
          .resources-text194 {
            display: inline-block;
          }
          .resources-text195 {
            display: inline-block;
          }
          .resources-text196 {
            display: inline-block;
          }
          .resources-text197 {
            display: inline-block;
          }
          .resources-text198 {
            display: inline-block;
          }
          .resources-text199 {
            display: inline-block;
          }
          .resources-text200 {
            display: inline-block;
          }
          .resources-text201 {
            display: inline-block;
          }
          .resources-text202 {
            display: inline-block;
          }
          .resources-text203 {
            display: inline-block;
          }
          .resources-text204 {
            display: inline-block;
          }
          .resources-text205 {
            display: inline-block;
          }
          .resources-text206 {
            display: inline-block;
          }
          @media (max-width: 1600px) {
            .resources-thq-body-elm {
              padding-top: var(--dl-layout-space-fiveunits);
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .resources-text112 {
              font-size: 50px;
            }
          }
          @media (max-width: 1200px) {
            .resources-thq-body-elm {
              padding: var(--dl-layout-space-fourunits);
            }
            .resources-text112 {
              font-size: 40px;
            }
          }
          @media (max-width: 991px) {
            .resources-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .resources-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .resources-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .resources-thq-heading-elm {
              font-size: 60px;
            }
            .resources-thq-body-elm {
              padding: var(--dl-layout-space-threeunits);
            }
            .resources-text112 {
              font-size: 25px;
            }
            .resources-text132 {
              font-size: 2em;
            }
            .resources-text133 {
              font-size: 25px;
            }
            .resources-text134 {
              font-size: 25px;
            }
            .resources-text135 {
              font-size: 2em;
            }
            .resources-text136 {
              font-size: 25px;
            }
            .resources-text137 {
              font-size: 25px;
            }
            .resources-text138 {
              font-size: 25px;
            }
            .resources-text145 {
              font-size: 2em;
            }
            .resources-text146 {
              font-size: 25px;
            }
            .resources-text147 {
              font-size: 25px;
            }
            .resources-text150 {
              font-size: 25px;
            }
            .resources-text155 {
              font-size: 2em;
            }
            .resources-text158 {
              font-size: 25px;
            }
            .resources-text163 {
              font-size: 25px;
            }
            .resources-text167 {
              font-size: 25px;
            }
            .resources-text168 {
              font-size: 2em;
            }
            .resources-text171 {
              font-size: 25px;
            }
            .resources-text172 {
              font-size: 2em;
            }
            .resources-text177 {
              font-size: 25px;
            }
            .resources-text178 {
              font-size: 25px;
            }
          }
          @media (max-width: 479px) {
            .resources-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .resources-thq-heading-elm {
              font-size: 36px;
            }
            .resources-thq-caption-elm {
              font-size: 16px;
              line-height: 24px;
            }
            .resources-link10 {
              text-align: center;
            }
            .resources-thq-body-elm {
              padding: var(--dl-layout-space-twounits);
            }
            .resources-text112 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Resources
