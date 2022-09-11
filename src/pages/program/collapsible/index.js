import React from 'react'
import Collapsible from 'react-collapsible'

export default function CollapsibleMenu({ title, children }) {
  return (
    <React.Fragment>
      <Collapsible trigger={title}>{children}</Collapsible>
      <style>
        {`
          .Collapsible {
            margin-bottom: 10px;
          }
          .Collapsible__trigger {
            display: block;
            background: #56CCF2;
            width: 100%;
            padding: 5px 10px;
            color: #fff;
            border-radius: 5px 5px 0 0;
          }
          .Collapsible__trigger.is-open {
            background: #2D9CDB;
            font-weight: 500;
          }
          .Collapsible__contentInner {
            background: #f2f2f2;
            border-radius: 0 0 5px 5px;
          }
          .Collapsible__contentInner p {
            margin: 0;
            color: #000;
            padding: 10px;
          }
        `}
      </style>
    </React.Fragment>
  )
}
