'use strict'

import { expect } from 'chai'
import sum from './sum'

it('sum should be a function', () => {
  expect(sum).to.be.a('function')
})

it('sum(1,2) should return 3', () =>{
  expect(sum(1,2)).to.be.equal(3)
})

// import { expect } from 'chai'
// import sum from './sum'

// it('sum should be a function', () =>{
//   expect(sum).to.be.a('function')
// })

// old test - dumb test
// it('Um é igual a 1', () => {
//   // console.assert(1 === 2, '1 não é igual a 2')
//   expect(1).toBe(2)
// })