import * as Yup from 'yup'
import Reminder from '../models/Reminder'

class ReminderController {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        name_reminder: Yup.string().required(),
        date_reminder: Yup.date().required(),
        message: Yup.string().required(),
        user_id: Yup.string().uuid().required(),
      })

      try {
        await schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
        return response.status(400).json({ error: err.errors })
      }

      const { name_reminder, date_reminder, message, user_id } = request.body

      const reminder = await Reminder.create({
        name_reminder,
        date_reminder,
        message,
        user_id,
      })
      return response.json(reminder)
    } catch (err) {
      console.log(err)
    }
  }

  async index(request, response) {
    const reminder = await Reminder.findAll()

    return response.json(reminder)
  }
}

export default new ReminderController()
