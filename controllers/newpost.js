const express = require('express')
const router = express.Router()

const { Cheep, User } = require('../models')

router.get('/', async function (req, res) {
  res.render("post/newpost")
})

router.post('/', async function (req, res) {
  let cheepuser = await User.findOne({ where: { id: req.session.userId } })
  console.log(cheepuser.username)
  await Cheep.create({text: req.body.cheeptext, username: cheepuser.username})
  res.redirect("/homepage")
})

module.exports = router
