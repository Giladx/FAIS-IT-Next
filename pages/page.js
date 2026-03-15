import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>Page - FAIS IT</title>
          <meta
            name="description"
            content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
          />
          <meta property="og:title" content="Page - FAIS IT" />
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
            href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/page"
          />
        </Head>
        <section className="page-thq-faq-elm faq">
          <div className="faq-container page-thq-faq-container-elm">
            <header className="faq-header">
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">Quick answers to common questions.</p>
            </header>
            <div className="faq-grid page-thq-faq-grid-elm">
              <details open="true" className="faq-item">
                <summary className="faq-question">
                  <span>What is TeleportHQ?</span>
                  <span aria-hidden="true" className="faq-icon"></span>
                </summary>
                <div className="faq-answer">
                  <span>
                    {' '}
                    TeleportHQ is a front-end design and development platform
                    that helps you build and export responsive websites.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>Do I need to know how to code?</span>
                  <span aria-hidden="true" className="faq-icon"></span>
                </summary>
                <div className="faq-answer">
                  <span>
                    {' '}
                    Not necessarily. You can build visually, but adding custom
                    HTML/CSS gives you more control and flexibility.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>Can I customize these questions and answers?</span>
                  <span aria-hidden="true" className="faq-icon"></span>
                </summary>
                <div className="faq-answer">
                  <span>
                    {' '}
                    Yes—just edit the text inside each
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <code>&lt;summary&gt;</code>
                  <span>
                    {' '}
                    and the answer
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <code>&lt;div&gt;</code>
                  <span>
                    .
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>Will this work on mobile?</span>
                  <span aria-hidden="true" className="faq-icon"></span>
                </summary>
                <div className="faq-answer">
                  <span>
                    {' '}
                    Yep. The layout is responsive and switches to a single
                    column on smaller screens automatically.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>Can I add more FAQ items?</span>
                  <span aria-hidden="true" className="faq-icon"></span>
                </summary>
                <div className="faq-answer">
                  <span>
                    {' '}
                    Copy one
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <code>&lt;details class=&quot;faq-item&quot;&gt;</code>
                  <span>
                    {' '}
                    block and paste it below to add more.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>How do I change the colors?</span>
                  <span aria-hidden="true" className="faq-icon"></span>
                </summary>
                <div className="faq-answer">
                  <span>
                    {' '}
                    Update the CSS variables at the top (like
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <code>--accent</code>
                  <span>
                    {' '}
                    and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <code>--card</code>
                  <span>
                    ) to match your brand.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </details>
            </div>
          </div>
        </section>
        <div className="page-container2">
          <div className="page-container3">
            <Script
              html={`<style>
details[open] .faq-icon::after {
  transform: translate(-50%, -50%) rotate(0deg);
}
details[open] {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-thq-faq-elm {
            width: 100%;
          }
          .page-container2 {
            display: none;
          }
          .page-container3 {
            display: contents;
          }
          @media (max-width: 767px) {
            .page-thq-faq-container-elm {
              display: flex;
              flex-direction: column;
            }
            .page-thq-faq-grid-elm {
              display: flex;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
