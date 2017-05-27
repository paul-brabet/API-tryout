import React from 'react'
import { runSearch } from '../api/index.js'

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

  render () {
    console.log(this.state.search)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='entry'
          onChange={this.handleChange}
        />
        <input type='Submit' value='Go' />
      </form>
    )
  }
}

export default Search

// function Search () {
//   return (
//     <div className='search'>
//       <input type='search' value='' />
//       <input type='submit' value='Search!' />
//     </div>
//   )
// }
