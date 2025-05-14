import Sequelize from 'sequelize'

import User from '../app/models/User'

// import configDataBase from '../config/database'
import Task from '../app/models/Task'
import Reminder from '../app/models/Reminder'

const models = [User, Task, Reminder]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:wVtWnkGeIkNjHEvXILlfZuOiIYmkmxxH@monorail.proxy.rlwy.net:16469/railway',
    )
    models.map((model) => model.init(this.connection))
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    )
  }
}

export default new Database()

/*
// PARTE ANTIGA


import Sequelize from 'sequelize'

import User from '../app/models/User'

import configDataBase from '../config/database'
import Task from '../app/models/Task'
import Reminder from '../app/models/Reminder'

const models = [User, Task, Reminder]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDataBase)
    models.map((model) => model.init(this.connection))
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    )
  }
}

export default new Database()

*/
