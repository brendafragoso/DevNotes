import { Button } from './styles'

function AdminButton({ color, children, width, activeButton, setActiveButton}) {

    console.log('color: ' + color)

    const handleData = (event)=>{
      event.preventDefault();
      console.log('okok')
      if(activeButton){
        setActiveButton(false)
      }else{
        setActiveButton(true)
      }
    }

  return (
    <>
        <Button color={color} width={width} onClick={handleData}>
            {children}
        </Button >
    </>
  )
}

export default AdminButton
