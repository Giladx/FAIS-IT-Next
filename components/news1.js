import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const News1 = (props) => {
  return (
    <>
      <section className={`news1-thq-news-elm ${props.rootClassName} `}>
        <div className="news1-thq-previous-elm banner-smaller banner"></div>
        <div className="banner news1-thq-current-elm">
          <div className="news1-thq-controls-elm swiper-pagination">
            <span
              role="button"
              tabindex="0"
              aria-label="Go to slide 1"
              className="swiper-pagination-bullet"
            ></span>
            <span
              role="button"
              tabindex="0"
              aria-label="Go to slide 2"
              className="swiper-pagination-bullet-active swiper-pagination-bullet"
            ></span>
            <span
              role="button"
              tabindex="0"
              aria-label="Go to slide 3"
              className="swiper-pagination-bullet"
            ></span>
            <span
              role="button"
              tabindex="0"
              aria-label="Go to slide 4"
              className="swiper-pagination-bullet"
            ></span>
            <span
              role="button"
              tabindex="0"
              aria-label="Go to slide 5"
              className="swiper-pagination-bullet"
            ></span>
          </div>
        </div>
        <div className="news1-thq-next-elm banner-smaller banner"></div>
      </section>
      <style jsx>
        {`
          .news1-thq-news-elm {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            background-color: #f4f6f9;
          }
          .news1-thq-previous-elm {
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .news1-thq-controls-elm {
            display: none;
          }
          .news1-thq-next-elm {
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          @media (max-width: 991px) {
            .news1-thq-previous-elm {
              display: none;
            }
            .news1-thq-current-elm {
              height: 350px;
              align-items: center;
              justify-content: flex-end;
            }
            .news1-thq-controls-elm {
              gap: var(--dl-layout-space-halfunit);
              display: flex;
              padding-bottom: var(--dl-layout-space-unit);
            }
            .news1-thq-next-elm {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

News1.defaultProps = {
  rootClassName: '',
}

News1.propTypes = {
  rootClassName: PropTypes.string,
}

export default News1
