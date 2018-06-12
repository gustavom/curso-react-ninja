'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/910377?v=4' />
    <h1 className='username'>
      <a href='http://github.com/gustavom'>Gustavo Martusewicz</a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositórios: 10</li>
      <li>- Seguidores: 10</li>
      <li>- Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
