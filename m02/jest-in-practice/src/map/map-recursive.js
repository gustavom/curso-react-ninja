'use strict'


// const map = (arr = [], func = (item) => item) => {
//   let counter = 0
//   const mapInternal = (arrayInternal) => {
//     if (arrayInternal.length === 0) 
//       return []
  
//     const [head, ...tail] = arrayInternal
//     return [func(head, counter++, arr)].concat(mapInternal(tail, func))
//   }
//   return mapInternal(arr)
// }

// refactor

const map = (arr = [], func = (item) => item) => {
  return (function mapInternal (arrayInternal, counter) {
      if (arrayInternal.length === 0) 
      return []
      
      const [head, ...tail] = arrayInternal
      return [
        func(head, counter, arr),
        ...mapInternal(tail, counter + 1)
      ]
    })(arr, 0)
}

export default map