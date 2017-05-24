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
