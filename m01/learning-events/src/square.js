'use stritc'

import React from 'react'

const Square = ({color, text}) => (
  <div style={{
    float: 'left',
    margin: '0 15px',
    width: '100px',
    height: '100px',
    backgroundColor: color
  }}>{`${color} ${text}`}
  </div>
)

Square.defaultProps = {
  color: 'red',
  text: 'index'
}

export default Square
