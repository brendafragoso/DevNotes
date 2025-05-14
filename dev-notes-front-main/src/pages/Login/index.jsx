import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import api from '../../services/api'

import { Button} from '../../Components/Button'
import { ErrorMessage} from '../../Components/ErrorMessage'

import { useUser } from '../../hooks/UserContext'
import LoginImg from '../../assets/Art.png'
import Logo from '../../assets/logo-devclub.png'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  SignDiv
} from './styles'

export function Login() {
  const history = useNavigate()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(8, 'A senha deve ter pelo menos 8 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('/sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history('/admin')
      } else {
        history('/main')
      }
    }, 2000)
  }

  return (
    <Container>
      <ContainerItens>
        
        <h1>Olá! 👋</h1>
        <h2>Faça login para começar a gerenciar sua rotina.</h2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>
        <SignDiv>
          <img src={Logo} alt="logo-dev"/>
          <SignInLink>
            Não possui conta?{' '}
            <Link style={{ color: 'black' }} to="/register">
              Cadastre-se!
            </Link>
          </SignInLink>
        </SignDiv>
      </ContainerItens>
      <LoginImage src={LoginImg} alt="login-image" />
    </Container>
  )
}
