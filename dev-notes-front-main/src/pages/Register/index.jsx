import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'

import { Button} from '../../Components/Button'
import { ErrorMessage} from '../../Components/ErrorMessage'
import Art from '../../assets/Art.png'
import Logo from '../../assets/logo-devclub.png'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  LastDiv
} from './styles'

export function Register() {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required('O seu nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(8, 'A senha deve ter pelo menos 8 digitos'),
    confirmPassword: yup
      .string()
      .required('A senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })


  //depois deletar esta parte
  
  const onSubmit = async clientData => {
    try {
      const { status, data } = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        localStorage.setItem('devnotes:userData', JSON.stringify(data));
        toast.success('Cadastro criado com sucesso')
        navigate(`/main`)
      } else if (status === 409) {
        toast.success('E-mail já cadastrado! Faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente!')
    }
  }

  return (
    <Container>
      <ContainerItens>
        
        <h1>Cadastre-se</h1>
        <h2>Preencha os campos para concluir seu cadastro </h2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
            placeholder='Informe seu nome...'
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder='seuemail@email.com'
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
            placeholder='Digite sua senha...'
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            placeholder='Confirme a senha...'
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          
          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Cadastrar
          </Button>
        </form>

        <LastDiv>
          <SignInLink>
            Já possui conta?{' '}
            <Link style={{ color: 'black' }} to="/main">
              Log In
            </Link>
          </SignInLink>
          <img src={Logo} alt="logo" />
        </LastDiv>

      </ContainerItens>
      <RegisterImage src={Art} alt="login-image" />

    </Container>
  )
}