import './database'

import cors from 'cors'
import express from 'express'
import routes from './routes'

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
}

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors(corsOptions))
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
