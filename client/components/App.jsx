import React from 'react'
import { getBowie } from '../api'
import Search from './Search.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      bowie: {
        name: '',
        id: ''
      }
    }
  }

  componentDidMount () {
    this.setState({ errMessage: null })
    getBowie((err, res) => {
      if (err) {
        this.setState({ errMessage: err })
        return
      }
      this.setState({
        bowie: res
      })
    })
  }

  render () {
    return (
      <div>
        <Search />

        <h1>{this.state.bowie.name}</h1>
        <h2>Spotify id: {this.state.bowie.id}</h2>
        {this.state.errMessage &&
          this.state.errMessage}
      </div>
    )
  }
}

export default App
