import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default (request, response, next) => {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({ error: 'Token not provided' })
  }

  const token = authToken.split(' ')[1]

  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new Error()
      }
      console.log('Decoded user id:', decoded.id) // Adicionar este log para verificar o id do usuário decodificado
      request.userId = decoded.id
      return next()
    })
  } catch (err) {
    console.error('Error verifying JWT:', err) // Adicionar este log para verificar erros de verificação do JWT
    return response.status(401).json({ error: 'Token is invalid' })
  }
}
