const express = require('express')
const SpotLightPlayer = require('../models/spotlight.js')
const router = express.Router()


router.get('/', (req, res) => {
  SpotLightPlayer.find({}, (error, players) => {


  res.render('index.ejs',
  {
    spotLight: players
  }
)
})
})

router.get('/new', (req, res) => {
  res.render('new.ejs')
})

router.get('/seed', (req, res) => {
  SpotLightPlayer.create(
    [
      {
        tag: 'JoelPoker',
        trophies: 20500,
        squad: 'purple turtle'
      },
      {
        tag: 'natedawg',
        trophies: 18470,
        squad: 'bumper circuit'
      },
      {
        tag: 'perry',
        trophies: 20580,
        squad: 'none'
      }
    ],
    (error, players) => {
      res.redirect('/')
    }
  )
})

router.get('/:id', (req, res) => {
  SpotLightPlayer.findById(req.params.id, (error, clickedPlayer) => {
    res.render('show.ejs',
    {player: clickedPlayer}
  )
  })
})

router.get('/:id/edit', (req, res) => {
  SpotLightPlayer.findById(req.params.id, (error, selectedPlayer) => {
    res.render('edit.ejs',
    {player: selectedPlayer}
  )
  })

})

router.delete('/:id', (req, res) => {
  SpotLightPlayer.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/')
  })
})

router.put('/:id', (req, res) => {
  SpotLightPlayer.findByIdAndUpdate(req.params.id, req.body, (error, updatedplayer) => {
    res.redirect('/')
  })
})

router.post('/', (req, res) => {
  SpotLightPlayer.create(req.body, (error, createdPlayer) => {
    res.redirect('/')
  })
})







module.exports = router
