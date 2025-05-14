import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User'

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
      admin: Yup.boolean(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, email, password, admin } = request.body

    const userExists = await User.findOne({
      where: { email },
    })
    if (userExists) {
      return response.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    })
    return response.status(201).json({ id: user.id, name, email, admin })
  }

  async update(request, response) {
    // Verifica se o usuário é administrador
    const adminUser = await User.findByPk(request.userId)

    console.log('mostra abaixo')
    console.log(request.userId)

    if (!adminUser) {
      console.log('No user found with ID:', request.userId)
      return response.status(404).json({ error: 'User not found' })
    }

    /* if (!adminUser.admin) {
      console.log('User is not an admin:', adminUser)
      return response.status(403).json({ error: 'Access denied' })
    } */

    if (!adminUser || !adminUser.admin) {
      return response.status(403).json({ error: 'Access denied' })
    }

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    })

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, email } = request.body
    const { id } = request.params // Supondo que o ID do usuário a ser atualizado vem na URL

    try {
      const user = await User.findByPk(id)
      if (!user) {
        return response.status(404).json({ error: 'User not found' })
      }

      if (name) {
        user.name = name
      }
      if (email && email !== user.email) {
        const emailExists = await User.findOne({ where: { email } })
        if (emailExists) {
          return response.status(400).json({ error: 'Email already in use' })
        }
        user.email = email
      }

      await user.save()
      return response.status(200).json({ message: 'User updated successfully' })
    } catch (err) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default new UserController()
