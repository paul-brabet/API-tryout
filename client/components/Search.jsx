import React from 'react'
import { runSearch } from '../api/index.js'
import SearchResult from './SearchResult.jsx'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errMessage: null,
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    runSearch(this.state.search, (err, res) => {
      if (err) {
        this.setState({ errMessage: err })
        return
      }
      this.setState({ search: res })
    })
  }

  handleChange (e) {
    const fields = e.target.value
    this.setState({ search: fields })
  }


  render (props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='entry'
          onChange={this.handleChange}
        />
        <input type='Submit' value='Search' />
        <SearchResult data={this.state.search} />
      </form>
    )
  }
}

export default Search

// componentDidMount () {
//   runSearch(this.renderSearchResults, (err, res) => {
//     if (err) {
//       this.setState({ errMessage: err })
//       return
//     }
//     this.setState({ search: res })
//   })
// }
