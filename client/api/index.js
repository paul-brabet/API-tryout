import request from 'superagent'

export function getBowie (cb) {
  request.get('https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy')
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const bowie = res.body
      cb(null, bowie)
    })
}

export function runSearch (search, cb) {
  request.get('https://api.spotify.com/v1/search')
    .query({ q: search })
    .query({ type: 'artist' })
    .query({ limit: '1' })
    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const searchResult = res.body
      cb(null, searchResult)
    })
}
