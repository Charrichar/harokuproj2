const express = require('express')
const SpotLightPlayer = require('../models/spotlight.js')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('index.ejs')
})

router.get('/:id', (req, res) => {
  res.render('show.ejs')
})

router.get('/:id/edit', (req, res) => {
  res.render('edit.ejs')
})




module
