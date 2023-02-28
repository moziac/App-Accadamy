// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json())

app.get('/artists', (req, res) => {
  const data = getAllArtists()
  res.status(200).send(data)
})

app.get('/artists/:id', (req, res) => {
  const data = getArtistByArtistId(req.params.id)
  res.status(200).send(data)
})

app.patch('/artists/:id', (req, res) => {
  const data = editArtistByArtistId(req.params.id, req.body)
  res.status(200).send(data)
})

app.get('/artists/latest', (req, res) => {
  const data = getLatestArtist()
  res.status(200).send(data)
})

app.get('/artists/latest/albums', (req, res) => {
  const data = getAlbumsForLatestArtist()
  res.status(200).send(data)
})

app.post('/artists', (req, res) => {
  const data = req.body
  addArtist(data)
  res.status(201).send(data)
})


// DO NOT MODIFY
if (require.main === module) {
  const port = 8080;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
