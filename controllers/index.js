const express = require('express')
const router = express.Router()

const { Cheep } = require('../models')

router.get('/', async function (req, res) {
  const cheeps = await Cheep.findAll()
  res.render("index", { cheeps: cheeps })
})

module.exports = router;
