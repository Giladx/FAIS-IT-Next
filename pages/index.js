import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="FAIS IT" />
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
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/"
          />
        </Head>
        <section className="home-thq-hero-elm">
          <Header
            text={
              <Fragment>
                <span className="home-text10">About</span>
              </Fragment>
            }
            login={
              <Fragment>
                <span className="home-text11">Get Involved</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text12">Resources</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text13">Get Involved</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text14">Need Help</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-text15">Donate</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="home-text16">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="home-text17">FAIS IT</span>
              </Fragment>
            }
            text8={
              <Fragment>
                <span className="home-text18">News</span>
              </Fragment>
            }
            text61={
              <Fragment>
                <span className="home-text19">FAIS IT</span>
              </Fragment>
            }
            register={
              <Fragment>
                <span className="home-text20">Donate Now</span>
              </Fragment>
            }
          ></Header>
          <video
            src="https://videos.pexels.com/video-files/4841989/4841989-hd_1366_720_25fps.mp4"
            loop
            muted
            poster="https://images.pexels.com/videos/4841989/pictures/preview-0.jpg"
            preload="auto"
            autoPlay
            playsInline
            className="home-video"
          ></video>
          <div className="home-thq-hero-content-elm">
            <div className="home-thq-header-container-elm1">
              <div className="home-thq-header-elm10"></div>
              <h1 className="home-thq-heading-elm10">
                Empowering Teens to Combat Antisemitism
              </h1>
              <p className="home-thq-caption-elm10">
                Our mission is to educate and empower teenagers, by teenagers,
                to recognize, speak up and change anti-Semitic curriculum in
                their schools, community and online.  
              </p>
            </div>
            <Link href="/contact">
              <a className="home-link1 button">
                <span>
                  <span>Get Involved</span>
                  <br></br>
                </span>
              </a>
            </Link>
          </div>
        </section>
        <section className="home-thq-note-elm">
          <h2 className="home-thq-caption-elm11">
            <span>
              The FAIS Method to combat Antisemitism/Anti-Israel in the
              curricula
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h2>
        </section>
        <section className="home-thq-statistics-elm">
          <div className="home-thq-content-elm10">
            <div className="home-thq-stat-elm1">
              <h3 className="home-thq-header-elm11">F</h3>
              <span className="home-thq-caption-elm12">
                Find- Help teenagers actively look and find
                anti-Semitic/anti-Israel curriculum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-thq-stat-elm2">
              <h3 className="home-thq-header-elm12">A</h3>
              <span className="home-thq-caption-elm13">
                Assess- Encourage teenagers to share their curriculum with their
                parents and organizations while they are assessing the situation
                and fueling themselves with knowledge.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-thq-stat-elm3">
              <h3 className="home-thq-header-elm13">I</h3>
              <span className="home-thq-caption-elm14">
                Initiate- Provide tools to initiate a plan for change. Who is
                the person that is authorized to make a change? How and when to
                approach them? What is the best strategy?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-thq-stat-elm4">
              <h3 className="home-thq-header-elm14">S</h3>
              <span className="home-thq-caption-elm15">
                Solution- Empower teenagers to speak up, take action and provide
                solutions to the authorized person to change the curriculum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </section>
        <section className="home-thq-slider-elm1">
          <div className="home-thq-header-elm15">
            <h2 className="home-thq-heading-elm11">We Believe</h2>
          </div>
          <div className="home-thq-selector-elm">
            <p className="home-thq-caption-elm16">
              That often the biggest change in schools can be made when students
              take action. We want to help them recognize antiemetic/anti-Israel
              material, plan to confront it and empower them to speak up.
            </p>
          </div>
        </section>
        <section className="home-thq-get-started-elm">
          <div className="home-thq-header-container-elm2">
            <div className="home-thq-header-elm16">
              <h2 className="home-thq-heading-elm12">
                Students can be the first defense in anti-Semitic/anti-Israel
                curriculum.
              </h2>
              <p className="home-thq-caption-elm17">
                As parents to teenagers do not know what their children are
                being taught. It is the students who are confronted with the
                curriculum but often they do not have the tools to recognize,
                understand and take action against the anti-Semitic/anti-Israel
                curriculum. 
              </p>
            </div>
            <div className="home-thq-button-elm1">
              <Link href="/contact">
                <a className="home-link2 button">
                  <span>Get Involved</span>
                </a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1538581746996-f1d586de2905?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDU5Mjk0OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=800"
            className="home-image1"
          />
        </section>
        <section className="home-thq-slides-elm">
          <div className="home-thq-slider-elm2 slider blaze-slider">
            <div className="home-thq-slider-container-elm blaze-container">
              <div className="home-thq-slider-track-container-elm blaze-track-container">
                <div className="home-thq-slider-track-elm blaze-track">
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image2"
                    />
                    <div className="home-thq-content-elm11">
                      <div className="home-thq-header-elm17">
                        <h3 className="home-thq-heading-elm13">Metaverse</h3>
                        <p className="home-thq-caption-elm18">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-thq-more-elm1">
                        <span className="home-thq-caption-elm19">
                          Read More
                        </span>
                        <svg viewBox="0 0 1024 1024" className="home-icon10">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image3"
                    />
                    <div className="home-thq-content-elm12">
                      <div className="home-thq-header-elm18">
                        <h3 className="home-thq-heading-elm14">Ecosystems</h3>
                        <p className="home-thq-caption-elm20">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-thq-more-elm2">
                        <span className="home-thq-caption-elm21">
                          Read More
                        </span>
                        <svg viewBox="0 0 1024 1024" className="home-icon12">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image4"
                    />
                    <div className="home-thq-content-elm13">
                      <div className="home-thq-header-elm19">
                        <h3 className="home-thq-heading-elm15">Development</h3>
                        <p className="home-thq-caption-elm22">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-thq-more-elm3">
                        <span className="home-thq-caption-elm23">
                          Read More
                        </span>
                        <svg viewBox="0 0 1024 1024" className="home-icon14">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/slider-ecosystems-400h.png"
                      className="home-image5"
                    />
                    <div className="home-thq-content-elm14">
                      <div className="home-thq-header-elm20">
                        <h3 className="home-thq-heading-elm16">Integration</h3>
                        <p className="home-thq-caption-elm24">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </p>
                      </div>
                      <div className="home-thq-more-elm4">
                        <span className="home-thq-caption-elm25">
                          Read More
                        </span>
                        <svg viewBox="0 0 1024 1024" className="home-icon16">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-thq-controls-elm1">
                <button
                  data-role="previous-banner-button"
                  className="home-thq-previous-elm1 blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-thq-next-elm1 blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container3">
              <Script
                html={`<script defer>
(function() {
  // Get the element with the class "blaze-slider"
  const el = document.querySelector('.blaze-slider');

  // Check if the element exists before initializing the slider
  if (el) {
    new BlazeSlider(el, {
      all: {
        slidesToShow: 3,
        slideGap: '80px',
        loop: true,
        enableAutoplay: true,
      },
    });
  }
})();
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <section className="home-thq-objectives-elm">
          <div className="home-thq-content-elm15">
            <span className="home-text27">Objectives</span>
            <div className="home-thq-objectives-list-elm">
              <div className="objective">
                <h3 className="home-text28">Growth</h3>
                <p className="home-text29">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-thq-objective-elm2">
                <h3 className="home-text30">Develop</h3>
                <p className="home-text31">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-thq-objective-elm3">
                <h3 className="home-text32">Optimize</h3>
                <p className="home-text33">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-growth-elm">
          <div className="home-thq-content-elm16">
            <div className="home-thq-header-elm21">
              <div className="home-thq-header-elm22">
                <h2 className="home-thq-heading-elm17">
                  <span>
                    Multiverse optimized for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text35">growth.</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-thq-caption-elm26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="home-thq-caption-elm27">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-thq-testimonial-elm1">
              <div className="home-thq-content-elm17">
                <span className="home-text37">Testimonial</span>
                <p className="home-text38">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
              <div className="home-thq-information-elm1">
                <div className="home-thq-author-elm1">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-thq-icon-elm1"
                  />
                  <span className="home-thq-name-elm1">Andrew Gonzales</span>
                </div>
                <img
                  alt="image"
                  src="/logoipsum.svg"
                  className="home-thq-from-elm1"
                />
              </div>
            </div>
          </div>
          <div className="home-thq-images-elm1">
            <div className="home-thq-square-elm1"></div>
            <img alt="image" src="/growth-1400w.png" className="home-image6" />
          </div>
        </section>
        <section className="home-thq-experience-elm">
          <div className="home-thq-images-elm2">
            <div className="home-thq-square-elm2"></div>
            <img
              alt="image"
              src="/experience-1400w.png"
              className="home-image7"
            />
          </div>
          <div className="home-thq-content-elm18">
            <div className="home-thq-header-elm23">
              <div className="home-thq-header-container-elm3">
                <div className="home-thq-header-elm24">
                  <h2 className="home-thq-heading-elm18">
                    <span>A worlds class </span>
                    <span className="home-text40">experience</span>
                  </h2>
                </div>
                <p className="home-thq-caption-elm28">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
              <div className="home-thq-checkmarks-elm">
                <div className="home-thq-check-elm1">
                  <div className="home-thq-mark-elm1">
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text41">
                    Duis aute irure dolor in reprehenderit
                  </span>
                </div>
                <div className="home-thq-check-elm2">
                  <div className="home-thq-mark-elm2">
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text42">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="home-thq-check-elm3">
                  <div className="home-thq-mark-elm3">
                    <svg viewBox="0 0 1024 1024" className="home-icon26">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text43">
                    Voluptate velit esse cillum dolore eu fugiat nulla
                  </span>
                </div>
                <div className="home-thq-check-elm4">
                  <div className="home-thq-mark-elm4">
                    <svg viewBox="0 0 1024 1024" className="home-icon28">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text44">
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                  </span>
                </div>
              </div>
            </div>
            <div className="home-thq-testimonial-elm2">
              <div className="home-thq-content-elm19">
                <span className="home-text45">Testimonial</span>
                <p className="home-text46">
                  “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.”
                </p>
              </div>
              <div className="home-thq-information-elm2">
                <div className="home-thq-author-elm2">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-thq-icon-elm2"
                  />
                  <span className="home-thq-name-elm2">Cory Smith</span>
                </div>
                <img
                  alt="image"
                  src="/logoipsum-2.svg"
                  className="home-thq-from-elm2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-create-elm">
          <div className="home-thq-content-elm20">
            <div className="home-thq-header-elm25">
              <h2 className="home-thq-heading-elm19">
                <span>
                  Create your own
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text48">environment</span>
                <span> now!</span>
                <br></br>
              </h2>
            </div>
            <button className="home-button1 button">
              <span>Get Involved</span>
            </button>
          </div>
        </section>
        <section className="home-thq-comparision-elm">
          <div className="home-thq-header-container-elm4">
            <div className="home-thq-header-elm26">
              <h2 className="home-thq-heading-elm20">
                <span>Environment c</span>
                <span className="home-text53">omparision</span>
                <br></br>
              </h2>
            </div>
            <p className="home-thq-caption-elm29">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod.
            </p>
          </div>
          <div className="home-thq-table-elm">
            <div className="home-thq-row-elm10">
              <div className="home-thq-headers-elm1">
                <span className="home-text55">Placeholder</span>
              </div>
              <div className="home-thq-plans-elm1">
                <div className="home-thq-row-elm11">
                  <span className="home-text56">TOGHTR</span>
                  <span className="home-text57">AGENCY</span>
                  <span className="home-text58">FRELLANCE</span>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm12">
              <div className="home-thq-headers-elm2">
                <span className="home-text59">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-thq-plans-elm2">
                <div className="home-thq-row-elm13">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm14">
              <div className="home-thq-headers-elm3">
                <span className="home-text60">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-thq-plans-elm3">
                <div className="home-thq-row-elm15">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm16">
              <div className="home-thq-headers-elm4">
                <span className="home-text61">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-thq-plans-elm4">
                <div className="home-thq-row-elm17">
                  <div className="value">
                    <span className="home-text62">Custom</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm18">
              <div className="home-thq-headers-elm5">
                <span className="home-text63">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-thq-plans-elm5">
                <div className="home-thq-row-elm19">
                  <div className="value">
                    <span className="home-text64">Unlimited</span>
                  </div>
                  <div className="value">
                    <span className="home-text65">Limited</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm20">
              <div className="home-thq-headers-elm6">
                <span className="home-text66">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-thq-plans-elm6">
                <div className="home-thq-row-elm21">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                  <div className="value">
                    <span className="home-text67">Limited</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm22">
              <div className="home-thq-headers-elm7">
                <span className="home-text68">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-thq-plans-elm7">
                <div className="home-thq-row-elm23">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-row-elm24">
              <div className="home-thq-headers-elm8">
                <span className="home-text69">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-thq-plans-elm8">
                <div className="home-thq-row-elm25">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <span className="home-text70">Limited</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-data-elm">
          <div className="home-thq-header-container-elm5">
            <div className="home-thq-header-elm27">
              <div className="home-thq-row-elm26">
                <h2 className="home-thq-heading-elm21">
                  <span>
                    Understand your data to manage all in one
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text72">platform</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <p className="home-thq-caption-elm30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-thq-content-elm21">
            <div className="home-thq-image-elm">
              <img alt="image" src="/data-1400w.png" className="home-image8" />
            </div>
            <div className="home-thq-accordion-elm">
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-thq-header-elm28">Management</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-thq-header-elm29">Integrations</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name1"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-thq-header-elm30">Customer Solutions</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name2"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-thq-header-elm31">Recruiting</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-containerroot-class-name3"></IconContainer>
              </div>
              <div>
                <div className="home-container5">
                  <Script
                    html={`<script>
 (function() {
  /*
    Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; // Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex";
  });

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none";
  });

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none";
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; // Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              });
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
})();
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-thq-customer-elm">
          <div className="home-thq-header-elm32">
            <h2 className="home-thq-heading-elm22">
              <span>
                Customer validation is an essential phase of the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text75">product development process</span>
              <br></br>
            </h2>
          </div>
          <div className="home-thq-quotes-elm">
            <div className="home-thq-quote-elm1">
              <p className="home-thq-quote-elm2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-thq-author-elm3">
                <span className="home-thq-name-elm3">Joanna Smith</span>
                <span className="home-thq-location-elm1">Briville</span>
              </div>
            </div>
            <div className="home-thq-quote-elm3">
              <p className="home-thq-quote-elm4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-thq-author-elm4">
                <span className="home-thq-name-elm4">Joanna Smith</span>
                <span className="home-thq-location-elm2">Briville</span>
              </div>
            </div>
            <div className="home-thq-quote-elm5">
              <p className="home-thq-quote-elm6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-thq-author-elm5">
                <span className="home-thq-name-elm5">Joanna Smith</span>
                <span className="home-thq-location-elm3">Briville</span>
              </div>
            </div>
            <div className="home-thq-quote-elm7">
              <p className="home-thq-quote-elm8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-thq-author-elm6">
                <span className="home-thq-name-elm6">Joanna Smith</span>
                <span className="home-thq-location-elm4">Briville</span>
              </div>
            </div>
          </div>
          <div className="home-thq-controls-elm2">
            <button className="home-thq-previous-elm2 button">
              <svg viewBox="0 0 1024 1024" className="home-icon30">
                <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
            </button>
            <button className="home-thq-next-elm2 button">
              <svg viewBox="0 0 1024 1024" className="home-icon32">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </button>
            <button className="button home-button2">
              <span>
                <span>View all cases</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-thq-faq-elm">
          <div className="home-thq-header-elm33">
            <h2 className="home-thq-heading-elm23">
              <span>Frequently asked </span>
              <span className="home-text81">questions</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
          <div className="home-thq-content-elm30">
            <div className="home-thq-column-elm1">
              <div className="home-thq-element-elm14">
                <h3 className="home-thq-header-elm34">
                  Lorem ipsum dolor sit ametetur elit?
                </h3>
                <p className="home-thq-content-elm31">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-thq-element-elm15">
                <h3 className="home-thq-header-elm35">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </h3>
                <p className="home-thq-content-elm32">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="home-thq-element-elm16">
                <h3 className="home-thq-header-elm36">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </h3>
                <p className="home-thq-content-elm33">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="home-thq-column-elm2">
              <div className="home-thq-element-elm17">
                <h3 className="home-thq-header-elm37">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </h3>
                <p className="home-thq-content-elm34">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="home-thq-element-elm18">
                <h3 className="home-thq-header-elm38">
                  Lorem ipsum dolor sit ametetur elit?
                </h3>
                <p className="home-thq-content-elm35">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-thq-element-elm19">
                <h3 className="home-thq-header-elm39">
                  Incididunt ut labore et dolore?
                </h3>
                <p className="home-thq-content-elm36">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer
          text={
            <Fragment>
              <span className="home-text83">
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
              <span className="home-text84">About</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text85">Contact</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text86">Get Involved</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text87">News</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text88">Articles</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text89">Blog</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text90">Privacy</span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="home-text91">Organization</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text92">Terms</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text93">Legal</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-text94">Press</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text95">LinkedIn</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-text96">Twitter</span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="home-text97">Instagram</span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="home-text98">Facebook</span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="home-text99">TikTok</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-text100">Donate</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="home-text101">Need Help</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="home-text102">FAIS IT</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="home-text103">Extern</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="home-text104">Social</span>
            </Fragment>
          }
        ></Footer>
        <div>
          <div className="home-container7">
            <Script
              html={`<script>
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // get the element with the "scroll-top" data-role
    const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

    // Check if the button exists before adding the event listener
    if (scrollTopBtn) {
      // when the element is clicked
      scrollTopBtn.addEventListener("click", function() {
        // smoothly scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  });
})();
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-thq-hero-elm {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-thq-hero-content-elm {
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
          .home-thq-header-container-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-header-elm10 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-heading-elm10 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-caption-elm10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-thq-note-elm {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-end;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-thq-caption-elm11 {
            color: rgb(124, 124, 128);
            font-size: 40px;
            max-width: 800px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            line-height: 52px;
          }
          .home-thq-statistics-elm {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-thq-content-elm10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-stat-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-thq-header-elm11 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-thq-caption-elm12 {
            color: rgb(124, 124, 128);
          }
          .home-thq-stat-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-thq-header-elm12 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-thq-caption-elm13 {
            color: rgb(124, 124, 128);
          }
          .home-thq-stat-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-thq-header-elm13 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-thq-caption-elm14 {
            color: rgb(124, 124, 128);
          }
          .home-thq-stat-elm4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-thq-header-elm14 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-thq-caption-elm15 {
            color: rgb(124, 124, 128);
          }
          .home-thq-slider-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: flex-start;
          }
          .home-thq-header-elm15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-heading-elm11 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
          }
          .home-thq-selector-elm {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-thq-caption-elm16 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-thq-get-started-elm {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
          }
          .home-thq-header-container-elm2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            z-index: 100;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-thq-header-elm16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-thq-heading-elm12 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-thq-caption-elm17 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-thq-button-elm1 {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link2 {
            text-decoration: none;
          }
          .home-image1 {
            top: 0px;
            right: 0px;
            width: 720px;
            bottom: 0px;
            margin: auto;
            overflow: hidden;
            position: absolute;
            object-fit: cover;
          }
          .home-thq-slides-elm {
            gap: var(--dl-layout-space-fourunits);
            display: none;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-thq-slider-elm2 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-thq-slider-container-elm {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-slider-track-container-elm {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-thq-slider-track-elm {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image2 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-thq-content-elm11 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-thq-header-elm17 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-thq-heading-elm13 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-caption-elm18 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-thq-more-elm1 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-more-elm1:hover {
            opacity: 0.5;
          }
          .home-thq-caption-elm19 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon10 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image3 {
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-thq-content-elm12 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-thq-header-elm18 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-thq-heading-elm14 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-caption-elm20 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-thq-more-elm2 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-more-elm2:hover {
            opacity: 0.5;
          }
          .home-thq-caption-elm21 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon12 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image4 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-thq-content-elm13 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-thq-header-elm19 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-thq-heading-elm15 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-caption-elm22 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-thq-more-elm3 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-more-elm3:hover {
            opacity: 0.5;
          }
          .home-thq-caption-elm23 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon14 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image5 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-thq-content-elm14 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-thq-header-elm20 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-thq-heading-elm16 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-caption-elm24 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-thq-more-elm4 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-more-elm4:hover {
            opacity: 0.5;
          }
          .home-thq-caption-elm25 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon16 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-thq-controls-elm1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-thq-previous-elm1 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon18 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-thq-next-elm1 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon20 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-container3 {
            display: contents;
          }
          .home-thq-objectives-elm {
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-thq-content-elm15 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
            border-top-width: 1px;
          }
          .home-text27 {
            color: #7c7c80;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-thq-objectives-list-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text28 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text29 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text31 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text32 {
            color: #ffffff;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text33 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-thq-growth-elm {
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
          }
          .home-thq-content-elm16 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-header-elm21 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-header-elm22 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-heading-elm17 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text35 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-thq-caption-elm26 {
            color: #7c7c80;
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-thq-caption-elm27 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-thq-testimonial-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-content-elm17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text37 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-text38 {
            color: rgb(255, 255, 255);
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 5%;
          }
          .home-thq-information-elm1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-author-elm1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            border-color: #7c7c80;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-thq-icon-elm1 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .home-thq-name-elm1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-thq-from-elm1 {
            width: 125px;
            object-fit: cover;
          }
          .home-thq-images-elm1 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-thq-square-elm1 {
            top: 64px;
            right: -35px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image6 {
            width: 640px;
            z-index: 100;
            margin-top: var(--dl-layout-space-sixunits);
            object-fit: cover;
          }
          .home-thq-experience-elm {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-thq-images-elm2 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-thq-square-elm2 {
            left: -35px;
            width: 180px;
            bottom: -35px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image7 {
            width: 575px;
            z-index: 100;
            object-fit: cover;
          }
          .home-thq-content-elm18 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-header-elm23 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-thq-header-container-elm3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-header-elm24 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-heading-elm18 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text40 {
            font-family: Playfair Display;
          }
          .home-thq-caption-elm28 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-thq-checkmarks-elm {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-check-elm1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-mark-elm1 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon22 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text41 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-thq-check-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-mark-elm2 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon24 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text42 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-thq-check-elm3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-mark-elm3 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon26 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text43 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-thq-check-elm4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-mark-elm4 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon28 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text44 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-thq-testimonial-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-thq-content-elm19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text45 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-text46 {
            color: rgb(255, 255, 255);
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 5%;
          }
          .home-thq-information-elm2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-thq-author-elm2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            border-color: #7c7c80;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-thq-icon-elm2 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .home-thq-name-elm2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-thq-from-elm2 {
            width: 100px;
            object-fit: cover;
          }
          .home-thq-create-elm {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-thq-content-elm20 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-thq-header-elm25 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-heading-elm19 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text48 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-button1 {
            background-color: #000000;
          }
          .home-thq-comparision-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-thq-header-container-elm4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-header-elm26 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-heading-elm20 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-thq-caption-elm29 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            text-align: center;
            line-height: 36px;
          }
          .home-thq-table-elm {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-thq-row-elm10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm1 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text55 {
            color: rgba(255, 255, 255, 0);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm11 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text56 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text57 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text58 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-thq-row-elm12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm2 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text59 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm13 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-thq-row-elm14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm3 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text60 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm15 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-thq-row-elm16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm4 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text61 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm17 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text62 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-thq-row-elm18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm5 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text63 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm19 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text64 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-text65 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-thq-row-elm20 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm6 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text66 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm6 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm21 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text67 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-thq-row-elm22 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm7 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text68 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm23 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-thq-row-elm24 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-headers-elm8 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text69 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-thq-plans-elm8 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-row-elm25 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text70 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-thq-data-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-thq-header-container-elm5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-header-elm27 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-row-elm26 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-thq-heading-elm21 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-thq-caption-elm30 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-thq-content-elm21 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-thq-image-elm {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image8 {
            width: 440px;
            object-fit: cover;
          }
          .home-thq-accordion-elm {
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-thq-header-elm28 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-header-elm29 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-header-elm30 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-header-elm31 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-container5 {
            display: contents;
          }
          .home-thq-customer-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .home-thq-header-elm32 {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            flex-direction: column;
          }
          .home-thq-heading-elm22 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
          }
          .home-text75 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-thq-quotes-elm {
            width: 100%;
            display: flex;
            position: relative;
            overflow-x: hidden;
            align-items: flex-start;
            margin-left: max(0px, (100% - 1240px)/2);
            padding-top: var(--dl-layout-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-quote-elm1 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-thq-quote-elm2 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-thq-author-elm3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-name-elm3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-thq-location-elm1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-thq-quote-elm3 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-thq-quote-elm4 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-thq-author-elm4 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-name-elm4 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-thq-location-elm2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-thq-quote-elm5 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-thq-quote-elm6 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-thq-author-elm5 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-name-elm5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-thq-location-elm3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-thq-quote-elm7 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-right-width: 1px;
          }
          .home-thq-quote-elm8 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-thq-author-elm6 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-name-elm6 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-thq-location-elm4 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-thq-controls-elm2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-thq-previous-elm2 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon30 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-thq-next-elm2 {
            display: flex;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon32 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-thq-faq-elm {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: none;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-thq-header-elm33 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-thq-heading-elm23 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text81 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-thq-content-elm30 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-thq-column-elm1 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-thq-element-elm14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-header-elm34 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-thq-content-elm31 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-thq-element-elm15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-header-elm35 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-thq-content-elm32 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-thq-element-elm16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-header-elm36 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-thq-content-elm33 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-thq-column-elm2 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-thq-element-elm17 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-header-elm37 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-thq-content-elm34 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-thq-element-elm18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-header-elm38 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-thq-content-elm35 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-thq-element-elm19 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-thq-header-elm39 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-thq-content-elm36 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-text83 {
            display: inline-block;
          }
          .home-text84 {
            display: inline-block;
          }
          .home-text85 {
            display: inline-block;
          }
          .home-text86 {
            display: inline-block;
          }
          .home-text87 {
            display: inline-block;
          }
          .home-text88 {
            display: inline-block;
          }
          .home-text89 {
            display: inline-block;
          }
          .home-text90 {
            display: inline-block;
          }
          .home-text91 {
            display: inline-block;
          }
          .home-text92 {
            display: inline-block;
          }
          .home-text93 {
            display: inline-block;
          }
          .home-text94 {
            display: inline-block;
          }
          .home-text95 {
            display: inline-block;
          }
          .home-text96 {
            display: inline-block;
          }
          .home-text97 {
            display: inline-block;
          }
          .home-text98 {
            display: inline-block;
          }
          .home-text99 {
            display: inline-block;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-container7 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .home-image1 {
              position: static;
            }
          }
          @media (max-width: 991px) {
            .home-thq-hero-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-hero-content-elm {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-content-elm10 {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-thq-stat-elm1 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-stat-elm2 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-stat-elm3 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-stat-elm4 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-selector-elm {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image1 {
              position: static;
            }
            .home-thq-slider-elm2 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-image2 {
              width: 100%;
              height: 120px;
            }
            .home-thq-content-elm11 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-thq-header-elm17 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-thq-heading-elm13 {
              font-size: 24px;
            }
            .home-thq-caption-elm18 {
              max-width: 600px;
            }
            .home-image3 {
              width: 100%;
              height: 120px;
            }
            .home-thq-content-elm12 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-thq-header-elm18 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-thq-heading-elm14 {
              font-size: 24px;
            }
            .home-thq-caption-elm20 {
              max-width: 600px;
            }
            .home-image4 {
              width: 100%;
              height: 120px;
            }
            .home-thq-content-elm13 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-thq-header-elm19 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-thq-heading-elm15 {
              font-size: 24px;
            }
            .home-thq-caption-elm22 {
              max-width: 600px;
            }
            .home-image5 {
              width: 100%;
              height: 120px;
            }
            .home-thq-content-elm14 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-thq-header-elm20 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
            }
            .home-thq-heading-elm16 {
              font-size: 24px;
            }
            .home-thq-caption-elm24 {
              max-width: 600px;
            }
            .home-thq-content-elm15 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-thq-objectives-list-elm {
              padding-right: 0px;
            }
            .home-thq-objective-elm2 {
              flex: 1;
            }
            .home-thq-objective-elm3 {
              flex: 1;
            }
            .home-thq-growth-elm {
              flex-direction: column;
            }
            .home-thq-testimonial-elm1 {
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text38 {
              max-width: 560px;
            }
            .home-thq-images-elm1 {
              padding-top: 0px;
            }
            .home-thq-square-elm1 {
              top: -20px;
              right: -20px;
            }
            .home-image6 {
              margin-top: 0px;
            }
            .home-thq-experience-elm {
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-thq-content-elm20 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-thq-heading-elm19 {
              font-size: 50px;
            }
            .home-thq-headers-elm1 {
              flex: 0;
            }
            .home-text55 {
              color: rgba(255, 255, 255, 0);
              width: 0px;
              font-style: normal;
              font-weight: 500;
              line-height: 32px;
            }
            .home-thq-row-elm11 {
              padding-right: 0px;
              justify-content: center;
            }
            .home-thq-row-elm12 {
              flex-direction: column;
            }
            .home-thq-headers-elm2 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text59 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm2 {
              width: 100%;
            }
            .home-thq-row-elm13 {
              padding-right: 0px;
            }
            .home-thq-row-elm14 {
              flex-direction: column;
            }
            .home-thq-headers-elm3 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text60 {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm3 {
              width: 100%;
            }
            .home-thq-row-elm15 {
              padding-right: 0px;
            }
            .home-thq-row-elm16 {
              flex-direction: column;
            }
            .home-thq-headers-elm4 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text61 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm4 {
              width: 100%;
            }
            .home-thq-row-elm17 {
              padding-right: 0px;
            }
            .home-thq-row-elm18 {
              flex-direction: column;
            }
            .home-thq-headers-elm5 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text63 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm5 {
              width: 100%;
            }
            .home-thq-row-elm19 {
              padding-right: 0px;
            }
            .home-thq-row-elm20 {
              flex-direction: column;
            }
            .home-thq-headers-elm6 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text66 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm6 {
              width: 100%;
            }
            .home-thq-row-elm21 {
              padding-right: 0px;
            }
            .home-thq-row-elm22 {
              flex-direction: column;
            }
            .home-thq-headers-elm7 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text68 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm7 {
              width: 100%;
            }
            .home-thq-row-elm23 {
              padding-right: 0px;
            }
            .home-thq-row-elm24 {
              flex-direction: column;
            }
            .home-thq-headers-elm8 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text69 {
              padding-top: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-unit);
              border-bottom-width: 0px;
            }
            .home-thq-plans-elm8 {
              width: 100%;
            }
            .home-thq-row-elm25 {
              padding-right: 0px;
            }
            .home-thq-heading-elm21 {
              color: rgb(255, 255, 255);
            }
            .home-text72 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-thq-content-elm21 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-thq-header-elm28 {
              font-size: 24px;
            }
            .home-thq-header-elm29 {
              font-size: 24px;
            }
            .home-thq-header-elm30 {
              font-size: 24px;
            }
            .home-thq-header-elm31 {
              font-size: 24px;
            }
            .home-thq-customer-elm {
              max-width: 1400px;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-thq-header-elm32 {
              max-width: 100%;
            }
            .home-thq-heading-elm22 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-thq-quotes-elm {
              padding-top: 0px;
              flex-direction: column;
              border-bottom-width: 0px;
            }
            .home-thq-quote-elm1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm2 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-thq-quote-elm3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm4 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-thq-quote-elm5 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm6 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-thq-quote-elm7 {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm8 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-thq-controls-elm2 {
              max-width: 100%Width;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-thq-previous-elm2 {
              display: none;
            }
            .home-thq-next-elm2 {
              display: none;
            }
            .home-thq-faq-elm {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-thq-content-elm30 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-thq-column-elm1 {
              max-width: 100%;
            }
            .home-thq-header-elm34 {
              font-size: 24px;
            }
            .home-thq-content-elm31 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-header-elm35 {
              font-size: 24px;
            }
            .home-thq-content-elm32 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-header-elm36 {
              font-size: 24px;
            }
            .home-thq-content-elm33 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-column-elm2 {
              max-width: 100%;
            }
            .home-thq-header-elm37 {
              font-size: 24px;
            }
            .home-thq-content-elm34 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-header-elm38 {
              font-size: 24px;
            }
            .home-thq-content-elm35 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-header-elm39 {
              font-size: 24px;
            }
            .home-thq-content-elm36 {
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 767px) {
            .home-thq-heading-elm10 {
              font-size: 60px;
            }
            .home-thq-note-elm {
              align-items: flex-start;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-thq-caption-elm11 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-thq-statistics-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-stat-elm1 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-header-elm11 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-thq-caption-elm12 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-stat-elm2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-header-elm12 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-thq-caption-elm13 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-stat-elm3 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-header-elm13 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-thq-caption-elm14 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-stat-elm4 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-header-elm14 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-thq-caption-elm15 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-slider-elm1 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-heading-elm11 {
              font-size: 40px;
            }
            .home-thq-caption-elm16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-thq-get-started-elm {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-heading-elm12 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-thq-caption-elm17 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image1 {
              width: 300px;
            }
            .home-thq-slides-elm {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-slider-elm2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-slider-track-elm {
              align-items: stretch;
            }
            .home-thq-heading-elm13 {
              font-size: 18px;
            }
            .home-thq-caption-elm18 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-caption-elm19 {
              font-size: 14px;
            }
            .home-icon10 {
              width: 11px;
              height: 11px;
            }
            .home-thq-heading-elm14 {
              font-size: 18px;
            }
            .home-thq-caption-elm20 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-caption-elm21 {
              font-size: 14px;
            }
            .home-icon12 {
              width: 11px;
              height: 11px;
            }
            .home-thq-heading-elm15 {
              font-size: 18px;
            }
            .home-thq-caption-elm22 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-caption-elm23 {
              font-size: 14px;
            }
            .home-icon14 {
              width: 11px;
              height: 11px;
            }
            .home-thq-heading-elm16 {
              font-size: 18px;
            }
            .home-thq-caption-elm24 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-caption-elm25 {
              font-size: 14px;
            }
            .home-icon16 {
              width: 11px;
              height: 11px;
            }
            .home-thq-previous-elm1 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-icon18 {
              width: 14px;
              height: 14px;
            }
            .home-thq-next-elm1 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-icon20 {
              width: 14px;
              height: 14px;
            }
            .home-thq-objectives-elm {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-content-elm15 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-objectives-list-elm {
              width: 100%;
              flex-direction: column;
            }
            .home-thq-growth-elm {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-content-elm16 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-header-elm21 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-heading-elm17 {
              font-size: 40px;
            }
            .home-thq-caption-elm26 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-thq-caption-elm27 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-text37 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-icon-elm1 {
              width: 40px;
              height: 40px;
            }
            .home-thq-name-elm1 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-from-elm1 {
              width: auto;
              height: 100%;
            }
            .home-image6 {
              width: 100%;
            }
            .home-thq-experience-elm {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-square-elm2 {
              left: -20px;
              width: 20%;
              bottom: -20px;
            }
            .home-image7 {
              width: 100%;
            }
            .home-thq-content-elm18 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-header-elm23 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-header-container-elm3 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-heading-elm18 {
              font-size: 40px;
            }
            .home-thq-caption-elm28 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text45 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-icon-elm2 {
              width: 40px;
              height: 40px;
            }
            .home-thq-name-elm2 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-thq-from-elm2 {
              width: auto;
              height: 100%;
            }
            .home-thq-create-elm {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-content-elm20 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-heading-elm19 {
              font-size: 36px;
            }
            .home-thq-comparision-elm {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-header-container-elm4 {
              gap: var(--dl-layout-space-unit);
            }
            .home-thq-header-elm26 {
              gap: var(--dl-layout-space-unit);
              align-items: center;
            }
            .home-thq-heading-elm20 {
              font-size: 40px;
            }
            .home-thq-caption-elm29 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text56 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text57 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text58 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text59 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text60 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text61 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text62 {
              line-height: 21px;
            }
            .home-text63 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text64 {
              line-height: 21px;
            }
            .home-text65 {
              line-height: 21px;
            }
            .home-text66 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text67 {
              line-height: 21px;
            }
            .home-text68 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text69 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text70 {
              line-height: 21px;
            }
            .home-thq-data-elm {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-heading-elm21 {
              font-size: 36px;
            }
            .home-thq-caption-elm30 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-thq-image-elm {
              width: 100%;
            }
            .home-image8 {
              width: 100%;
            }
            .home-thq-customer-elm {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-quote-elm1 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-author-elm3 {
              width: 100%;
            }
            .home-thq-name-elm3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-location-elm1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-quote-elm3 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-author-elm4 {
              width: 100%;
            }
            .home-thq-name-elm4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-location-elm2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-quote-elm5 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm6 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-author-elm5 {
              width: 100%;
            }
            .home-thq-name-elm5 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-location-elm3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-quote-elm7 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-layout-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-thq-quote-elm8 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-author-elm6 {
              width: 100%;
            }
            .home-thq-name-elm6 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-thq-location-elm4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon30 {
              width: 14px;
              height: 14px;
            }
            .home-icon32 {
              width: 14px;
              height: 14px;
            }
            .home-thq-faq-elm {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-header-elm33 {
              gap: var(--dl-layout-space-unit);
              align-items: center;
            }
            .home-thq-heading-elm23 {
              font-size: 36px;
            }
            .home-thq-column-elm1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-element-elm14 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-thq-header-elm34 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-thq-element-elm15 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-thq-header-elm35 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-thq-element-elm16 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-thq-header-elm36 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-thq-column-elm2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-thq-element-elm17 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-thq-header-elm37 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-thq-element-elm18 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-thq-header-elm38 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-thq-element-elm19 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-thq-header-elm39 {
              font-size: 16px;
              line-height: 20px;
            }
          }
          @media (max-width: 479px) {
            .home-thq-hero-content-elm {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-thq-heading-elm10 {
              font-size: 36px;
            }
            .home-thq-caption-elm10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-link1 {
              text-align: center;
            }
            .home-thq-heading-elm11 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-image1 {
              height: 400px;
              position: static;
            }
            .home-text27 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text28 {
              font-size: 18px;
            }
            .home-text30 {
              font-size: 18px;
            }
            .home-text32 {
              font-size: 18px;
            }
            .home-thq-heading-elm17 {
              font-size: 36px;
            }
            .home-thq-heading-elm18 {
              color: rgb(255, 255, 255);
            }
            .home-text40 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-thq-heading-elm19 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home-button1 {
              text-align: center;
            }
            .home-thq-header-elm26 {
              gap: 0px;
              flex-direction: column;
            }
            .home-thq-heading-elm20 {
              color: rgb(255, 255, 255);
              text-align: center;
            }
            .home-text53 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-button2 {
              text-align: center;
            }
            .home-thq-header-elm33 {
              gap: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
