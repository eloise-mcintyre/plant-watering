// const request = require('superagent')
const express = require('express')
const router = require('express').Router()
router.use(express.json())

const db = require('./db/db')

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.getUser(id)
    .then(user => res.json(user))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/getUser', (req, res) => {
  const { name } = Number(req.body)
  return db.postUser(name)
    .then(user => res.json(user))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
