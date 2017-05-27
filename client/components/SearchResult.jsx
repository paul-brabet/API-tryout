import React from 'react'
import { runSearch } from '../api/index.js'

class SearchResult extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: {}
    }
    this.renderSearchResults = this.renderSearchResults.bind(this)
  }

  componentDidMount () {
    runSearch(this.renderSearchResults, (err, res) => {
      if (err) {
        this.setState({ errMessage: err })
        return
      }
      this.setState({ search: res })
    })
  }

  renderSearchResults (searchResults) {
    this.setState({
      searchResults: searchResults
    })
  }

  render () {
    return (
      <div>
        {console.log(this.state.items)}
        <h1>{this.state.items}</h1>
      </div>
    )
  }
}

export default SearchResult
