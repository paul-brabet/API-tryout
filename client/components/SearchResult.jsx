import React from 'react'

function SearchResult (props) {
  console.log(props.data)
  if (!props.data) {
    return (<p>Waiting</p>)
  }
  else {
    let result = props.data.artists.items[0]
    return (
      <div>
        <p> {result.name} </p>
        <img src={result.images[1].url} />
        <p>Genres: </p>
        <ul>
        {result.genres.map(function(genre) {
          return (
            <div>
              <li>{genre}</li>
            </div>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default SearchResult

// The following was an attempt to fix my property not found problem

// class SearchResult extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       searchResults: {}
//     }
//     this.renderSearchResults = this.renderSearchResults.bind(this)
//   }
//
//   componentDidMount () {
//     runSearch(this.renderSearchResults, (err, res) => {
//       if (err) {
//         this.setState({ errMessage: err })
//         return
//       }
//       this.setState({ search: res })
//     })
//   }
//
//   renderSearchResults (searchResults) {
//     this.setState({
//       searchResults: searchResults
//     })
//   }
//
//   render () {
//     // if (!this.state.items[0]) return <p>Loading</p>
//     return (
//       <div>
//         {console.log(this.state.items)}
//         <h1>{this.state.items}</h1>
//       </div>
// )
// }
// }
