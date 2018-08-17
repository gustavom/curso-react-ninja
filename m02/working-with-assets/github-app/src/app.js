'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    // const target = e.target
    // e.persist() // persiste o objeto

    if (keyCode === ENTER) {
      // target.disabled = true

      // ajax().get(`https://api.github.com/users/${value}`)

      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
        console.log(result)
      })
      // .always(() => {
      //   target.disabled = false
      // })
      .always(() => this.setState({ isFetching: false }))
    }
    console.log(keyCode)
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      // ajax().get(`https://api.github.com/users/${username}/${type}`)
      ajax().get(this.getGitHubApiUrl(username, type))
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render () {
    return <AppContent
      // userinfo={this.state.userinfo}
      // repos={this.state.repos}
      // starred={this.state.starred}
      // isFetching={this.state.isFetching}
      {...this.state}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
