'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário no Github' />
    </div>
    <div className='user-info'>
      <img src='https://avatars3.githubusercontent.com/u/910377?v=4' />
      <h1>
        <a href='http://github.com/gustavom'>Gustavo Martusewicz</a>
      </h1>

      <ul className='repos-info'>
        <li>- Repositórios: 10</li>
        <li>- Seguidores: 10</li>
        <li>- Seguindo: 10</li>
      </ul>

      <div className='acitons'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div>
        <h2>Repositórios</h2>
        <ul className='repos'>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div>
        <h2>Favoritos</h2>
        <ul className='starred'>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

    </div>
  </div>
)

export default App
