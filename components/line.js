import React from 'react'

import { useTranslations } from 'next-intl'

const Line = (props) => {
  return (
    <>
      <div className="line-thq-line-elm"></div>
      <style jsx>
        {`
          .line-thq-line-elm {
            width: 32px;
            height: 1px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  )
}

export default Line
