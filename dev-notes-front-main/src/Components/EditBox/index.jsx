import { Form, Label, Input } from './styles'

function EditBox({name, email, setName, setEmail}) {



  return (
    <Form>
      <div>
        <Label>
          Nome Completo:
          <Input 
            type="text"
            value={name}
            onChange={(event)=>setName(event.target.value)}
            >          
          </Input>
        </Label>
      </div>
      <div>
        <Label>
          e-mail:
          <Input
            type="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          >
          </Input>
        </Label>
      </div>
    </Form>
  )
}

export default EditBox
