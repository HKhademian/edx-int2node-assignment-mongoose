const express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser')

async function main() {
  require('./models')
  
  const app = express()
  app.use(logger('dev'))
  app.use(bodyParser.json())

  app.use(require('./routes'))
  
  app.use((req, res) => res.sendStatus(404))
  app.use((err, req, res, next) => res.status(err.code || 500).send(err))

  await app.listen(3000)
  console.log('Server is running at http://localhost:3000/')
}

main()/*.then(process.exit)*/.catch(process.error)/*.then(process.exit)*/
