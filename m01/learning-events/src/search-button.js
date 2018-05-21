'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => alert('buscar')}>
    Buscar
  </Button>
)

export default SearchButton
