const express = require('express')
const router = express.Router()

const { Cheep, User } = require('../models')

router.get('/', async function (req, res) {
  const cheeps = await Cheep.findAll()
  // { include: { all: true }}
  res.render("chitter/homepage", { cheeps: cheeps })
})
//

router.post('/', async function (req, res) {
  const cheeps = await Cheep.findAll()
  // { include: { all: true }}
  res.render("chitter/homepage", { cheeps: cheeps })
})
// router.get('/:bookmarkId/edit', async function (req, res) {
//   const bookmark = await Bookmark.findOne({ where: { id: req.params.bookmarkId } })
//   res.render("bookmarks/edit", { bookmark: bookmark })
// })
//
// router.post('/', async function (req, res) {
//   const tagNames = req.body.tags.split(" ")
//
//   const tags = await Promise.all(tagNames.map(tagName => Tag.findOrCreate({where: { name: tagName }})))
//   const bookmark = await Bookmark.create({ url: req.body.url })
//   tags.forEach(tag => tag[0].addBookmark(bookmark))
//
//   res.redirect('/bookmarks')
// })
//
// router.delete('/:bookmarkId', async function (req, res) {
//   await Bookmark.destroy({where: { id: req.params.bookmarkId } })
//
//   res.redirect('/bookmarks')
// })
//
// router.put('/:bookmarkId', async function (req, res) {
//   await Bookmark.update({url: req.body.url}, { where: { id: req.params.bookmarkId } })
//
//   res.redirect('/bookmarks')
// })

module.exports = router
