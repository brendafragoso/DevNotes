import Sequelize, { Model } from 'sequelize'

class Reminder extends Model {
  static init(sequelize) {
    super.init(
      {
        name_reminder: Sequelize.STRING,
        date_reminder: Sequelize.DATE,
        message: Sequelize.STRING,
      },
      {
        sequelize,
      },
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
  }
}

export default Reminder
