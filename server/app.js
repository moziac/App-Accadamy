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

app.get('/artists/:id/albums', (req, res) => {
  const data = getArtistByArtistId(req.params.id)
  console.log(data)
  res.status(200).send(data)
})

app.get('/artists/:id/songs', (req, res) => {
  const data = getSongsByArtistId(req.params.id)
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

app.get('/albums', (req, res) => {
  const data = getFilteredAlbums(req.query.startsWith)
  res.status(200).send(data)
})

app.get('/albums/:albumId', (req, res) => {
  const data = getAlbumByAlbumId(req.params.albumId)
  res.status(200).send(data)
})

app.get('/albums/:id/songs', (req, res) => {
  const data = getSongsByAlbumId(req.params.id)
  res.status(200).send(data)
})

app.get('/songs/:songId', (req, res) => {
  const data = getSongBySongId(req.params.songId)
  res.status(200).send(data)
})

app.post('/artists', (req, res) => {
  const data = req.body
  addArtist(data)
  res.status(201).send({
    ...data,
    albums: []
  })
})

app.post('/artists/:artistId/albums', (req, res) => {
  const data = addAlbumByArtistId(req.params.artistId, req.body)
  res.status(201).send(data)
})

app.post('/albums/:albumId/songs', (req, res) => {
  const data = addSongByAlbumId(req.params.albumId, req.body)
  // console.log(data)
  res.status(201).send(data)
})

app.patch('/artists/:id', (req, res) => {
  const data = editArtistByArtistId(req.params.id, req.body)
  res.status(200).send(data)
})

app.patch('/albums/:albumId', (req, res) => {
  const data = editAlbumByAlbumId(req.params.albumId, req.body)
  res.status(200).send(data)
})

app.patch('/songs/:id', (req, res) => {
  const data = editSongBySongId(req.params.id, req.body)
  res.status(200).send(data)
})

app.delete('/artists/:id', (req, res) => {
  deleteArtistByArtistId(req.params.id)
  res.status(200).send({
    message: "Successfully deleted"
  })
})

app.delete('/albums/:albumId', (req, res) => {
  deleteAlbumByAlbumId(req.params.albumId)
  res.status(200).send({
    message: "Successfully deleted"
  })
})

app.delete('/songs/:id', (req, res) => {
  deleteSongBySongId(req.params.id)
  res.status(200).send({
    message: "Successfully deleted"
  })
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8080;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
