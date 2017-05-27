import React from 'react'
import { getBowie } from '../api'

class ShowBowie extends React.Component {
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
        <h1>This is where we show Bowie</h1>
        <h1>{this.state.bowie.name}</h1>
        <h2>Spotify id: {this.state.bowie.id}</h2>
        {this.state.errMessage &&
          this.state.errMessage}
      </div>
    )
  }
}

export default ShowBowie
